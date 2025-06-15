import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "../receitas/Receitas.css"
import { Link } from 'react-router-dom';
import legumes from '../../assets/legumes-carne.jpg';
import lagarto from '../../assets/lagarto-molho-madeira.jpg';
import panqueca from '../../assets/panqueca-de-carne.jpg';
import picanha from '../../assets/picanha-na-manteiga.jpeg';

function Carnes() {
  const [receitasDinamicas, setReceitasDinamicas] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/receitas?categoria=carnes')
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

  const baseUrlImagem = 'http://localhost:5000/static/';

  return (
    <>
      <Header />
      <div className="pagina">
        <h2>Nossas receitas</h2>
        <div className="receitas-container">
          <Link to="/Panqueca" className="categoria">
            <img src={panqueca} alt="panqueca" />
            <h4>Panqueca de carne</h4>
          </Link>

          <Link to="/Lagarto" className="categoria">
            <img src={lagarto} alt="lagarto" />
            <h4>Lagarto ao molho madeira</h4>
          </Link>

          <Link to="/LegumesCarne" className="categoria">
            <img src={legumes} alt="legumes" />
            <h4>Legumes com carne</h4>
          </Link>

          <Link to="/PicanhaManteiga" className="categoria">
            <img src={picanha} alt="picanha" />
            <h4>Picanha na manteiga</h4>
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

export default Carnes;
