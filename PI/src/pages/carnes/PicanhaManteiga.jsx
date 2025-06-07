// src/pages/receitas/PicanhaManteiga.jsx
import { useState } from 'react';
import "../sobremesas/Bolo.css";
import picanha from '../../assets/picanha-na-manteiga.jpeg';
import Header from '../../components/header/Header';

function PicanhaManteiga() {
  const [porcoes, setPorcoes] = useState(3);

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>Picanha na Manteiga com Sobras</h1>
        </header>

        <div className="imagem-e-info-container">
          <img src={picanha} alt="Picanha na manteiga" className="receita-imagem" />
          <div className="receita-info">
            <div className="info-item"><p>20 min</p></div>
            <div className="info-item"><p>Fácil</p></div>
            <div className="info-item"><p>{porcoes} porções</p></div>
          </div>
        </div>

        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            <li>2 xícaras de sobras de picanha ou carne grelhada</li>
            <li>2 colheres (sopa) de manteiga</li>
            <li>2 dentes de alho picados</li>
            <li>1 colher (chá) de mostarda (opcional)</li>
            <li>Sal e pimenta a gosto</li>
            <li>Salsinha para finalizar</li>
          </ul>
        </section>

        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>Derreta a manteiga em uma frigideira e doure o alho.</li>
            <li>Acrescente a carne fatiada ou em tiras, refogue por 5 a 10 minutos.</li>
            <li>Adicione a mostarda, se quiser, e misture bem.</li>
            <li>Finalize com sal, pimenta e salsinha.</li>
            <li>Sirva com arroz ou farofa.</li>
          </ol>
        </section>

        <section className="dicas">
          <h3>Dicas</h3>
          <p>Ideal para aproveitar carne do churrasco. Você pode usar a mesma base com frango ou linguiça.</p>
        </section>
      </div>
    </>
  );
}

export default PicanhaManteiga;
