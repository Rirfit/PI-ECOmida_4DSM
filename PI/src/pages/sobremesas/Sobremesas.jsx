import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';

import sorvete from '../../assets/sorvete de morango.jpg';
import torta from '../../assets/torta-de-limao.jpg';
import bolo from '../../assets/bolo.jpg';
import pave from '../../assets/pave.jpeg';

function Sobremesas() {
  const [receitasDinamicas, setReceitasDinamicas] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/receitas?categoria=sobremesas')
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar receitas');
        return res.json();
      })
      .then((data) => {
        setReceitasDinamicas(data.receitas);
      })
      .catch((err) => {
        setErro(err.message);
      });
  }, []);

  // URL base para imagens armazenadas no backend (ajuste conforme seu backend)
  const baseUrlImagem = 'http://localhost:5000/static/';

  return (
    <>
      <Header />
      <div className="pagina">
        <h2>Nossas receitas</h2>
        <div className="receitas-container">
          <Link to="/Bolo" className="categoria">
            <img src={bolo} alt="Bolo" />
            <h4>Bolo de chocolate</h4>
          </Link>

          <Link to="/TortaLimao" className="categoria">
            <img src={torta} alt="torta de limão" />
            <h4>Torta de limão</h4>
          </Link>

          <Link to="/SorveteMorango" className="categoria">
            <img src={sorvete} alt="sorvete de morango" />
            <h4>Sorvete de morango</h4>
          </Link>

          <Link to="/Pave" className="categoria">
            <img src={pave} alt="pave" />
            <h4>Pave</h4>
          </Link>
        </div>

        <h2>Receitas de vocês</h2>
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        <div className="receitas-container">
          {receitasDinamicas.length === 0 && !erro && <p>Carregando receitas...</p>}

          {receitasDinamicas.map((receita) => (
            <Link key={receita._id} to={`/receita/${receita._id}`} className="categoria">
              <img
                src={
                  receita.imagem
                    ? (receita.imagem.startsWith('http')
                        ? receita.imagem
                        : baseUrlImagem + receita.imagem)
                    : 'https://via.placeholder.com/150'
                }
                alt={receita.titulo}
              />
              <h4>{receita.titulo}</h4>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sobremesas;
