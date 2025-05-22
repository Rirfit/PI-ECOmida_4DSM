import React from 'react';
import './Usuario.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

function Usuario() {
  const navigate = useNavigate();
  const nome = 'João da Silva';
  const email = 'joao@email.com';

  return (
    <>
      <Header />
      <div className="user-container">
        <h2>Minha Conta</h2>
        <div className="user-info">
          <p><strong>Nome:</strong> {nome}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>

        <div className="alterar-senha-container">
          <button
            className="alterar-senha-botao"
            onClick={() => navigate('/alterar-senha')}
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
