import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logoBranca from '../../assets/Logo-Branca.png';

const Login = () => {
  return (
    <div className="login-page">
      <aside className="login-side-image" />
      
      <main className="login-content">
        <section className="login-box">
          <Link to="/" className="logo-link">
            <img src={logoBranca} alt="Logo Branca" className="logo-img" />
          </Link>

          <h1 className="login-title">Login</h1>

          <form className="login-form">
            <label className="login-label">
              <span>Email</span>
              <input type="email" placeholder="Digite seu email" required />
            </label>

            <label className="login-label">
              <span>Senha</span>
              <input type="password" placeholder="Digite sua senha" required />
            </label>

            <div className="login-links">
              <Link to="/EmailSenha" className="forgot-password">Esqueceu a senha?</Link>
              <Link to="/Cadastro" className="signup-link">Cadastre-se</Link>
            </div>

            <button type="submit" className="btn-login">Login</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
