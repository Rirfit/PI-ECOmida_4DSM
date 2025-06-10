import React, { useState } from 'react';
import Header from '../../components/header/Header';
import './criar-receita.css'; // Reaproveita o estilo do Bolo

function CriarReceita() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [ingredientes, setIngredientes] = useState(['']);
  const [modoPreparo, setModoPreparo] = useState(['']);
  const [categoria, setCategoria] = useState('');
  const [tempoPreparo, setTempoPreparo] = useState('');
  const [porcoes, setPorcoes] = useState('');
  const [dificuldade, setDificuldade] = useState('média');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');
  const [imagem, setImagem] = useState(null);

  const handleIngredienteChange = (i, value) => {
    const novos = [...ingredientes];
    novos[i] = value;
    setIngredientes(novos);
  };

  const handleModoPreparoChange = (i, value) => {
    const novos = [...modoPreparo];
    novos[i] = value;
    setModoPreparo(novos);
  };

  const adicionarIngrediente = () => setIngredientes([...ingredientes, '']);
  const adicionarPasso = () => setModoPreparo([...modoPreparo, '']);

  const removerIngrediente = (i) => setIngredientes(ingredientes.filter((_, idx) => idx !== i));
  const removerPasso = (i) => setModoPreparo(modoPreparo.filter((_, idx) => idx !== i));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');
    setErro('');
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('titulo', titulo);
      formData.append('descricao', descricao);
      ingredientes.filter(i => i.trim() !== '').forEach(i => formData.append('ingredientes', i));
      modoPreparo.filter(p => p.trim() !== '').forEach(p => formData.append('modo_preparo', p));
      formData.append('categoria', categoria);
      formData.append('tempo_preparo', tempoPreparo);
      formData.append('porcoes', porcoes);
      formData.append('dificuldade', dificuldade);
      if (imagem) formData.append('imagem', imagem);

      const resposta = await fetch('http://localhost:5000/receitas', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
          // NÃO coloque 'Content-Type', o browser define automaticamente para FormData!
        },
        body: formData
      });
      const dados = await resposta.json();
      if (resposta.ok) {
        setMensagem('Receita enviada com sucesso!');
        // Limpa o formulário
        setTitulo('');
        setDescricao('');
        setIngredientes(['']);
        setModoPreparo(['']);
        setCategoria('');
        setTempoPreparo('');
        setPorcoes('');
        setDificuldade('média');
        setImagem(null);
      } else {
        setErro(dados.erro || 'Erro ao enviar receita');
      }
    } catch (err) {
      setErro('Erro ao conectar com o servidor');
    }
  };

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>Enviar Receita</h1>
        </header>
        <form onSubmit={handleSubmit} className="form-receita" style={{background:'#fff', borderRadius:8, padding:24, maxWidth:600, margin:'0 auto', boxShadow:'0 2px 6px rgba(0,0,0,0.08)'}}>
          <div style={{marginBottom:16}}>
            <label><strong>Título:</strong></label>
            <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} required style={{width:'100%'}} />
          </div>
          <div style={{marginBottom:16}}>
            <label><strong>Descrição:</strong></label>
            <textarea value={descricao} onChange={e => setDescricao(e.target.value)} rows={2} style={{width:'100%'}} />
          </div>
          <div style={{marginBottom:16}}>
            <label><strong>Ingredientes:</strong></label>
            {ingredientes.map((ing, i) => (
              <div key={i} style={{display:'flex', gap:8, marginBottom:4}}>
                <input type="text" value={ing} onChange={e => handleIngredienteChange(i, e.target.value)} required />
                {ingredientes.length > 1 && (
                  <button type="button" onClick={() => removerIngrediente(i)} style={{background:'#e53935', color:'#fff', border:'none', borderRadius:4, padding:'0 8px'}}>X</button>
                )}
              </div>
            ))}
            <button type="button" onClick={adicionarIngrediente} style={{marginTop:4}}>Adicionar ingrediente</button>
          </div>
          <div style={{marginBottom:16}}>
            <label><strong>Modo de Preparo:</strong></label>
            {modoPreparo.map((passo, i) => (
              <div key={i} style={{display:'flex', gap:8, marginBottom:4}}>
                <input type="text" value={passo} onChange={e => handleModoPreparoChange(i, e.target.value)} required />
                {modoPreparo.length > 1 && (
                  <button type="button" onClick={() => removerPasso(i)} style={{background:'#e53935', color:'#fff', border:'none', borderRadius:4, padding:'0 8px'}}>X</button>
                )}
              </div>
            ))}
            <button type="button" onClick={adicionarPasso} style={{marginTop:4}}>Adicionar passo</button>
          </div>
          <div style={{marginBottom:16}}>
            <label><strong>Categoria:</strong></label>
            <select
              value={categoria}
              onChange={e => setCategoria(e.target.value)}
              required
              style={{width:'100%', padding:'8px'}}
            >
              <option value="" disabled>Selecione uma categoria</option>
              <option value="sobremesas">Sobremesas</option>
              <option value="carnes">Carnes</option>
              <option value="peixes">Peixes</option>
              <option value="aves">Aves</option>
              <option value="saladas">Saladas</option>
            </select>
          </div>
          <div style={{marginBottom:16, display:'flex', gap:16}}>
            <div style={{flex:1}}>
              <label><strong>Tempo de preparo:</strong></label>
              <input type="text" value={tempoPreparo} onChange={e => setTempoPreparo(e.target.value)} style={{width:'100%'}} />
            </div>
            <div style={{flex:1}}>
              <label><strong>Porções:</strong></label>
              <input type="number" value={porcoes} onChange={e => setPorcoes(e.target.value)} style={{width:'100%'}} />
            </div>
            <div style={{flex:1}}>
              <label><strong>Dificuldade:</strong></label>
              <select value={dificuldade} onChange={e => setDificuldade(e.target.value)} style={{width:'100%'}}>
                <option value="fácil">Fácil</option>
                <option value="média">Média</option>
                <option value="difícil">Difícil</option>
              </select>
            </div>
          </div>
          {mensagem && <div style={{color:'green', marginBottom:8}}>{mensagem}</div>}
          {erro && <div style={{color:'red', marginBottom:8}}>{erro}</div>}
          <div style={{marginBottom:16}}>
            <label><strong>Imagem da receita (opcional):</strong></label>
            <input
                type="file"
                accept="image/*"
                onChange={e => setImagem(e.target.files[0])}
            />
          </div>
          <button type="submit" style={{background:'#1976d2', color:'#fff', border:'none', borderRadius:6, padding:'10px 24px', fontWeight:'bold', fontSize:16, cursor:'pointer'}}>Enviar Receita</button>
        </form>
      </div>
    </>
  );
}

export default CriarReceita;
