import React, { useEffect, useState } from 'react';
import './Usuario.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

function Usuario() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Buscar dados do usuário ao carregar a página
  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:5000/usuario', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setNome(data.nome);
        setEmail(data.email);
      });
  }, []);

  // Função para atualizar dados
  const handleSalvar = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:5000/usuario', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ nome, email })
    });
    const data = await response.json();
    if (response.ok) {
      setMensagem('Dados atualizados com sucesso!');
      localStorage.setItem('nome', nome); // Atualiza nome no header
    } else {
      setMensagem(data.erro || 'Erro ao atualizar dados');
    }
  };

  return (
    <>
      <Header />
      <div className="user-container">
        <h2>Minha Conta</h2>
        <form onSubmit={handleSalvar} className="user-info">
          <label>
            <strong>Nome:</strong>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
          </label>
          <label>
            <strong>Email:</strong>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <button type="submit">Salvar Alterações</button>
        </form>
        {mensagem && <p style={{color: 'green'}}>{mensagem}</p>}

        <div className="alterar-senha-container">
          <button
            className="alterar-senha-botao"
            onClick={() => navigate('/MudarSenha')}
          >
            Alterar Senha
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Usuario;