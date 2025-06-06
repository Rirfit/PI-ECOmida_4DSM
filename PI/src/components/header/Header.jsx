import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoBranca from '../../assets/Logo-branca.png';
import logoPreta from '../../assets/Logo-preta.png';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const nomeUsuario = localStorage.getItem('nome');

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    window.location.href = '/login';
  }

  return (
    <header className={`header ${isHome ? 'dark' : 'light'}`}>
      <div className="logo">
        <Link to="/">
          <img src={isHome ? logoBranca : logoPreta} alt="Logo" />
        </Link>
      </div>

      <nav className="nav">
        <Link to="/sobre">Sobre Nós</Link>
        <Link to="/receitas">Receitas</Link>
        <Link to="/Doacao">Doe</Link>
        {!localStorage.getItem('token') && (
          <>
            <Link to="/cadastro">Cadastrar</Link>
            <Link to="/login">Entrar</Link>
          </>
        )}
        {localStorage.getItem('token') && (
          <>
            <span style={{marginLeft: '10px', marginRight: '10px'}}>
              Olá, <strong>{nomeUsuario}</strong>
            </span>
            <button onClick={handleLogout} style={{marginLeft: '10px'}}>Sair</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
