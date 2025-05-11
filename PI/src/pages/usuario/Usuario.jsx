import React, { useState } from 'react';
import './Usuario.css';

function Usuario() {
  const [nome, setNome] = useState('João da Silva');
  const [email, setEmail] = useState('joao@email.com');
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novaSenha !== confirmarSenha) {
      alert('As novas senhas não coincidem!');
      return;
    }

    alert('Senha alterada com sucesso!');
  };

  return (
    <div className="user-container">
      <h2>Minha Conta</h2>
      <div className="user-info">
        <p><strong>Nome:</strong> {nome}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>

      <form className="form-senha" onSubmit={handleSubmit}>
        <h3>Alterar Senha</h3>
        <input
          type="password"
          placeholder="Senha atual"
          value={senhaAtual}
          onChange={(e) => setSenhaAtual(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Nova senha"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmar nova senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Usuario;
