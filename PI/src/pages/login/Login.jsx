import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logoBranca from '../../assets/Logo-Branca.png';


const Login = () => {
  return (
    <>
      <div className="PagLogin">
        <div className="login-imagem-lateral">
          {/* A imagem esta no css */}
        </div>

        <div className="Login-direito">
          
          <div className="login-formulario">
          <Link to="/">
  <img src={logoBranca} alt="logoBranca" className="logoC" />
</Link>
            <h1 className="login-titulo">Login</h1>

            <div className="login-texto"><h3>Email</h3></div>
            <div className="login-input-container"><input type="email" placeholder="Digite seu email" /></div>

            <div className="login-texto"><h3>Senha</h3></div>
            <div className="login-input-container"><input type="password" placeholder="Digite sua senha" /></div>

            <Link to="/MudarSenha" className='Esqueci'><h4>Esqueceu a senha?</h4></Link>

            <Link to="/Cadastro" className="Cadastro"><h4>Cadastre-se</h4> </Link>
            <Link to="/" >
            <div className="login-button-container"><button className="btn-login">Login</button></div>
            </Link>

          </div>
        </div>
      </div>

    </>
  );
};

export default Login;