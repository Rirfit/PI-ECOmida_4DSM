from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
import jwt
import datetime
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuração
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'secreta')
MONGO_URI = os.getenv('MONGO_URI')

# Conexão com o MongoDB
client = MongoClient(MONGO_URI)
db = client[os.getenv("DB_NAME")]
usuarios_collection = db['usuarios']

# Rota de cadastro
@app.route('/cadastro', methods=['POST'])
def cadastrar():
    dados = request.get_json()
    nome = dados.get('nome')
    email = dados.get('email')
    senha = dados.get('senha')
    confirmar = dados.get('confirmar')

    if not all([nome, email, senha, confirmar]):
        return jsonify({'erro': 'Preencha todos os campos'}), 400

    if senha != confirmar:
        return jsonify({'erro': 'As senhas não coincidem'}), 400

    if usuarios_collection.find_one({'email': email}):
        return jsonify({'erro': 'Email já cadastrado'}), 409

    hash_senha = generate_password_hash(senha)
    usuario = {'nome': nome, 'email': email, 'senha': hash_senha}
    usuarios_collection.insert_one(usuario)

    return jsonify({'mensagem': 'Usuário cadastrado com sucesso!'}), 201

# Rota de login
@app.route('/login', methods=['POST'])
def login():
    dados = request.get_json()
    email = dados.get('email')
    senha = dados.get('senha')

    if not all([email, senha]):
        return jsonify({'erro': 'Email e senha são obrigatórios'}), 400

    usuario = usuarios_collection.find_one({'email': email})
    if not usuario or not check_password_hash(usuario['senha'], senha):
        return jsonify({'erro': 'Credenciais inválidas'}), 401

    token = jwt.encode({
        'id': str(usuario['_id']),
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=2)
    }, app.config['SECRET_KEY'], algorithm='HS256')

    return jsonify({'token': token})

if __name__ == '__main__':
    print("✅ Servidor rodando em http://localhost:5000")
    app.run(debug=True)
