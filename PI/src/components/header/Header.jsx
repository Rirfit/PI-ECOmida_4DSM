import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoBranca from '../../assets/Logo-branca.png';
import logoPreta from '../../assets/Logo-preta.png';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const nomeUsuario = localStorage.getItem('nome');

  const navigate = useNavigate();

  const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('nome');
      navigate('/');
  };

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
            <Link
              to="/Usuario"
              style={{
                marginLeft: '10px',
                marginRight: '10px',
                color: '#4F6B46',
                fontWeight: 'bold',
                textDecoration: 'underline',
                background: 'none',
                border: 'none',
                boxShadow: 'none',
                padding: 0
              }}
            >
              Olá, <strong>{nomeUsuario}</strong>
            </Link>
            <button onClick={handleLogout} style={{marginLeft: '20px', background:'#4F6B46', color:'#fff', border:'none', borderRadius:'20px', padding:'10px 10px', fontWeight:'bold'}}>Sair</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
