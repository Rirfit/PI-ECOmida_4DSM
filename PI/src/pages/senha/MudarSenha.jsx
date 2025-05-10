import './MudarSenha.css';
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import logoPreta from '../../assets/Logo-Preta.png';

function MudarSenha() {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (novaSenha !== confirmarSenha) {
      setMensagem("As senhas não coincidem.");
      return;
    }

    setMensagem("Senha alterada com sucesso!");
  };

  return (
    <>
<Link to="/">
  <img src={logoPreta} alt="logoPreta" className="logoS" />
</Link>
    <div className="mudar-senha-container">
      <h2>Alterar Senha</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Senha Atual:
          <input
            type="password"
            value={senhaAtual}
            onChange={(e) => setSenhaAtual(e.target.value)}
            required
          />
        </label>

        <label>
          Nova Senha:
          <input
            type="password"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            required
          />
        </label>

        <label>
          Confirmar Nova Senha:
          <input
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
        </label>

        <button type="submit">Alterar Senha</button>
        {mensagem && <p className="mensagem">{mensagem}</p>}
      </form>
    </div>

    </>
  );
  
}


export default MudarSenha;
