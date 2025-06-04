# ECOmida - Sistema de Doações e reaproveitamento de Alimentos

Este é um projeto desenvolvido com **React** no frontend e **Flask + MongoDB** no backend. Ele permite apoiar e aprimorar o trabalho de combate à fome com doações e reaproveitamento de alimentos.

## 🔧 Pré-requisitos

Antes de rodar o projeto, é necessário ter instalado:

- Node.js
- Python 3.10+
- Git

## 📁 Estrutura do Projeto

```
├── PI/           # Projeto React
├── backend/            # Backend Flask
│   ├── app.py
│   ├── requirements.txt
│   ├── start.bat       # Script para rodar o backend
│   └── venv/           # Ambiente virtual (criado automaticamente)
├── package.json        # Scripts para iniciar projeto completo
└── README.md
```

## 🚀 Como Rodar o Projeto

### 🔹 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 🔹 2. Rodar o Backend

Entre na pasta `backend` e execute o script `start.bat`:

```bash
cd backend
start.bat
```

Este script irá:
- Criar o ambiente virtual (se ainda não existir)
- Ativar o ambiente virtual
- Instalar todas as dependências do `requirements.txt`
- Iniciar o servidor Flask

### 🔹 3. Rodar o Frontend

Abra um novo terminal, vá para a pasta `frontend` e execute:

```bash
cd PI
npm install
npm run dev
```

O frontend estará disponível em: http://localhost:5173

## ✅ Testando o Projeto

- Certifique-se de que o backend está rodando corretamente (mensagem no terminal: `Servidor rodando em http://localhost:5000`)
- Acesse o frontend e teste o cadastro e login
- Você também pode testar a API usando o Postman (ex: `POST http://localhost:5000/cadastro`)

## 📌 Observações

- O projeto inclui um arquivo `.env` com variáveis de ambiente (como a string de conexão com o MongoDB)


## 👥 Colaboradores

- Gabriel de Oliveira
- Gustavo Morais de Arruda
- José Claudiley da Silva
- Kauan Pires Correa Martins da Silva

---

*Projeto desenvolvido pelo 4° DSM - 2025*