import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';

function Receita() {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);
  const [erro, setErro] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/receitas/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.receita) {
          setReceita(data.receita);
        } else {
          setErro(data.erro || 'Receita não encontrada');
        }
      })
      .catch(() => setErro('Erro ao buscar receita'));
  }, [id]);

  if (erro) return <div style={{ color: 'red', textAlign: 'center', marginTop: 40 }}>{erro}</div>;
  if (!receita) return <div style={{ textAlign: 'center', marginTop: 40 }}>Carregando...</div>;

  // Monta a URL da imagem se existir
  const imagemUrl = receita.imagem
    ? `http://localhost:5000/static/${receita.imagem}`
    : null;

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>{receita.titulo}</h1>
        </header>

        <div className="imagem-e-info-container">
          {imagemUrl && (
            <img
              src={imagemUrl}
              alt={receita.titulo}
              className="receita-imagem"
              style={{ maxHeight: 400, objectFit: 'cover', borderRadius: 8 }}
            />
          )}
          <div className="receita-info">
            <div className="info-item"><p>{receita.tempo_preparo || '-'} min</p></div>
            <div className="info-item"><p>{receita.dificuldade || '-'}</p></div>
            <div className="info-item"><p>{receita.porcoes || '-'} porções</p></div>
          </div>
        </div>

        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            {(receita.ingredientes || []).map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </section>

        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            {(receita.modo_preparo || []).map((passo, i) => (
              <li key={i}>{passo}</li>
            ))}
          </ol>
        </section>

        {receita.descricao && (
          <section className="dicas">
            <h3>Descrição</h3>
            <p>{receita.descricao}</p>
          </section>
        )}
      </div>
    </>
  );
}
