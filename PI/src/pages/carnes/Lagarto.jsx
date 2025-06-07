// src/pages/receitas/Lagarto.jsx
import { useState } from 'react';
import "../sobremesas/Bolo.css";
import lagarto from '../../assets/lagarto-molho-madeira.jpg';
import Header from '../../components/header/Header';

function Lagarto() {
  const [porcoes, setPorcoes] = useState(6);

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>Lagarto ao Molho Madeira com Sobras</h1>
        </header>

        <div className="imagem-e-info-container">
          <img src={lagarto} alt="Lagarto ao molho madeira" className="receita-imagem" />
          <div className="receita-info">
            <div className="info-item"><p>50 min</p></div>
            <div className="info-item"><p>Média</p></div>
            <div className="info-item"><p>{porcoes} porções</p></div>
          </div>
        </div>

        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            <li>2 xícaras de sobras de carne assada (fatiada)</li>
            <li>1 cebola em rodelas</li>
            <li>2 dentes de alho picados</li>
            <li>1 xícara de champignon fatiado (opcional)</li>
            <li>1 colher (sopa) de manteiga</li>
            <li>1 colher (sopa) de farinha de trigo</li>
            <li>1 xícara de caldo de carne</li>
            <li>1/2 xícara de vinho tinto seco</li>
            <li>Sal e pimenta a gosto</li>
          </ul>
        </section>

        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>Refogue a cebola e o alho na manteiga até dourarem.</li>
            <li>Adicione a farinha e mexa bem por 1 minuto.</li>
            <li>Acrescente o caldo de carne e o vinho, mexendo até engrossar.</li>
            <li>Adicione as fatias de carne e o champignon ao molho e cozinhe por 15 minutos.</li>
            <li>Tempere com sal e pimenta e sirva com arroz ou purê.</li>
          </ol>
        </section>

        <section className="dicas">
          <h3>Dicas</h3>
          <p>Você pode substituir o lagarto por outras carnes como alcatra ou fraldinha. Se quiser uma versão sem álcool, substitua o vinho por mais caldo de carne.</p>
        </section>
      </div>
    </>
  );
}

export default Lagarto;
