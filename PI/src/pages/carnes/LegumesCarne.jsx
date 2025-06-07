// src/pages/receitas/LegumesCarne.jsx
import { useState } from 'react';
import "../sobremesas/Bolo.css";
import legumes from '../../assets/legumes-carne.jpg';
import Header from '../../components/header/Header';

function LegumesCarne() {
  const [porcoes, setPorcoes] = useState(4);

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>Refogado de Legumes com Carne Reaproveitada</h1>
        </header>

        <div className="imagem-e-info-container">
          <img src={legumes} alt="Legumes com carne" className="receita-imagem" />
          <div className="receita-info">
            <div className="info-item"><p>30 min</p></div>
            <div className="info-item"><p>Fácil</p></div>
            <div className="info-item"><p>{porcoes} porções</p></div>
          </div>
        </div>

        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            <li>2 xícaras de sobras de carne (picada ou desfiada)</li>
            <li>1 cenoura em rodelas</li>
            <li>1 abobrinha picada</li>
            <li>1 batata em cubos</li>
            <li>1 tomate picado</li>
            <li>1 cebola picada</li>
            <li>2 colheres (sopa) de óleo</li>
            <li>Sal, pimenta e cheiro-verde a gosto</li>
          </ul>
        </section>

        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>Aqueça o óleo e refogue a cebola até dourar.</li>
            <li>Adicione os legumes e refogue por alguns minutos.</li>
            <li>Adicione um pouco de água, tampe e cozinhe até os legumes ficarem macios.</li>
            <li>Acrescente a carne picada e o tomate e deixe cozinhar por mais 5 minutos.</li>
            <li>Acerte o sal, pimenta e finalize com cheiro-verde.</li>
          </ol>
        </section>

        <section className="dicas">
          <h3>Dicas</h3>
          <p>Use os legumes que tiver na geladeira: chuchu, vagem, couve-flor, etc. Esta receita é ótima para marmitas!</p>
        </section>
      </div>
    </>
  );
}

export default LegumesCarne;
