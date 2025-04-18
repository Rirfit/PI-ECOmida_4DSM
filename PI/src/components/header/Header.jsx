import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MeuLogo</div>

      <nav className="nav">
        <Link to="/sobre">Sobre Nós</Link>
        <Link to="/receitas">Receitas</Link>
        <Link to="/cadastro">Cadastrar</Link>
        <Link to="/login">Entrar</Link>
      </nav>
    </header>
  );
};

export default Header;
