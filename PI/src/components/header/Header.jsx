import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoBranca from '../../assets/Logo-branca.png';
import logoPreta from '../../assets/Logo-preta.png';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

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
        <Link to="/cadastro">Cadastrar</Link>
        <Link to="/login">Entrar</Link>
        
      </nav>
    </header>
  );
};

export default Header;
