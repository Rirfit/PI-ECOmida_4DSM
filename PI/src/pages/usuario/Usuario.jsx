import React, { useState } from 'react';
import './Usuario.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';  // Para ícones de senha

function Usuario() {
  const [nome, setNome] = useState('João da Silva');
  const [email, setEmail] = useState('joao@email.com');
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const [showSenhaAtual, setShowSenhaAtual] = useState(false);
  const [showNovaSenha, setShowNovaSenha] = useState(false);
  const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (novaSenha !== confirmarSenha) {
      setErro('As novas senhas não coincidem!');
      return;
    }

    if (novaSenha.length < 6) {
      setErro('A nova senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setErro('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert('Senha alterada com sucesso!');
      setSenhaAtual('');
      setNovaSenha('');
      setConfirmarSenha('');
    }, 2000);
  };

  return (
    <>
      <Header />
      <div className="user-container">
        <h2>Minha Conta</h2>
        <div className="user-info">
          <p><strong>Nome:</strong> {nome}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>

        <form className="form-senha" onSubmit={handleSubmit}>
          <h3>Alterar Senha</h3>

          {erro && <p className="error">{erro}</p>}

          <div className="input-container">
            <input
              type={showSenhaAtual ? "text" : "password"}
              placeholder="Senha atual"
              value={senhaAtual}
              onChange={(e) => setSenhaAtual(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowSenhaAtual(!showSenhaAtual)}
            >
              {showSenhaAtual ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="input-container">
            <input
              type={showNovaSenha ? "text" : "password"}
              placeholder="Nova senha"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowNovaSenha(!showNovaSenha)}
            >
              {showNovaSenha ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="input-container">
            <input
              type={showConfirmarSenha ? "text" : "password"}
              placeholder="Confirmar nova senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmarSenha(!showConfirmarSenha)}
            >
              {showConfirmarSenha ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Carregando...' : 'Salvar'}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Usuario;
