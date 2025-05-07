import React from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import logoBranca from '../../assets/Logo-Branca.png';

const Cadastro = () => {
  return (
    <>
      <div className="PagCadastro">
        <div className="cadastro-imagem-lateral">
          {/* O camminho da imagem esta no css*/}

        </div>

        <div className="Cadastro-direito">
          <div className="Cadastro-formulario">
          <Link to="/">
  <img src={logoBranca} alt="logoBranca" className="logoC" />
</Link>

            <h1 className="cadastro-titulo">Cadastre-se</h1>

            <div className="cadastro-texto"><h3>Nome</h3></div>
            <div className="casdastro-input-container"><input type="text" placeholder="Digite seu nome" /></div>

            <div className="cadastro-texto"><h3>Email</h3></div>
            <div className="casdastro-input-container"><input type="email" placeholder="Digite seu email" /></div>

            <div className="cadastro-texto"><h3>Senha</h3></div>
            <div className="casdastro-input-container"><input type="password" placeholder="Digite sua senha" /></div>

            <div className="cadastro-texto"><h3>Confirme sua senha</h3></div>
            <div className="casdastro-input-container"><input type="password" placeholder="Repita sua senha" /></div>

            <div className="cadastro-button-container"><button className="cadastro-btn-cadastrar">Cadastrar</button></div>

            <Link to="/Login" className="Login"><h4>Já possui conta?</h4> </Link>
            
          </div>

        </div>


      </div>

    </>
  );
};

export default Cadastro;
