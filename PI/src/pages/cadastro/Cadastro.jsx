import React from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import logoBranca from '../../assets/Logo-Branca.png';

const Cadastro = () => {
  return (
    <div className="cadastro-page">
      {/* Imagem lateral */}
      <div className="cadastro-side-image"></div>

      {/* Área do formulário */}
      <div className="cadastro-content">
        <div className="cadastro-box">

          {/* Logo */}
          <div className="logo-link">
            <Link to="/">
              <img src={logoBranca} alt="Logo Branca" className="logo-img" />
            </Link>
          </div>

          {/* Título */}
          <h1 className="cadastro-title">Cadastre-se</h1>

          {/* Formulário */}
          <form className="cadastro-form">
            <label className="cadastro-label">
              <span>Nome</span>
              <input type="text" placeholder="Digite seu nome" />
            </label>

            <label className="cadastro-label">
              <span>Email</span>
              <input type="email" placeholder="Digite seu email" />
            </label>

            <label className="cadastro-label">
              <span>Senha</span>
              <input type="password" placeholder="Digite sua senha" />
            </label>

            <label className="cadastro-label">
              <span>Confirme sua senha</span>
              <input type="password" placeholder="Repita sua senha" />
            </label>

            <button type="submit" className="cadastro-btn">Cadastrar</button>
          </form>

          {/* Link para login */}
          <div className="cadastro-login-link">
            <Link to="/Login">Já possui conta?</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cadastro;
