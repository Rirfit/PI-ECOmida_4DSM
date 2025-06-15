import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "../receitas/Receitas.css";
import { Link } from 'react-router-dom';
import mazu from '../../assets/frangoMazu.jpg';
import gratinado from '../../assets/gratinadoFrango.jpg';
import macarronese from '../../assets/macarronese.jpg';
import tortaDeFrango from '../../assets/tortaDeFrango.jpg';

function Aves() {
  const [receitasDinamicas, setReceitasDinamicas] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/receitas?categoria=aves')
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

          <Link to="/FrangoMazu" className="categoria">
            <img src={mazu} alt="Frango mazu" />
            <h4>Frango Mazu</h4>
          </Link>

          <Link to="/GratinadoFrango" className="categoria">
            <img src={gratinado} alt="Gratinado de frango" />
            <h4>Gratinado de frango</h4>
          </Link>

          <Link to="/Macarronese" className="categoria">
            <img src={macarronese} alt="Macarronese" />
            <h4>Macarronese</h4>
          </Link>

          <Link to="/TortaDeFrango" className="categoria">
            <img src={tortaDeFrango} alt="Torta de frango" />
            <h4>Torta de frango</h4>
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

export default Aves;
