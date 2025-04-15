import React from 'react';
import "./Cadastro.css"
import logo from "../assets/laranja.svg";

const Cadastro = () => {
  return (
    <>
      <h1 className="titulo">Cadastre-se</h1>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="form-text">
        <p>Preencha seus dados abaixo:</p>
      </div>
      <div className="input-label">
        <h3>Nome</h3>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Nome" className="input-field" />
      </div>
      <div className="input-label">
        <h3>Email</h3>
      </div>
      <div className="input-container">
        <input type="email" placeholder="Email" className="input-field" />
      </div>
      <div className="input-label">
        <h3>Senha</h3>
      </div>
      <div className="input-container">
        <input type="password" placeholder="Senha" className="input-field" />
      </div>
      <div className="input-label">
        <h3>Confirme a sua senha</h3>
      </div>
      <div className="input-container">
        <input type="password" placeholder="Confirmar senha" className="input-field" />
      </div>
      <div className="button-container">
        <button className="btn-enviar">Enviar</button>
      </div>
    </>
  );
}

export default Cadastro;
