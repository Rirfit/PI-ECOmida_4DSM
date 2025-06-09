import { useState } from "react";
import "../sobremesas/Bolo.css";
import saladaVerdeAbacate from '../../assets/saladaAbacate.jpg';
import Header from "../../components/header/Header";

function SaladaAbacate() {
  const [porcoes, setPorcoes] = useState(3);

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>Salada verde com abacate e tomate cereja</h1>
        </header>

        <div className="imagem-e-info-container">
          <img src={saladaVerdeAbacate} alt="Salada verde com abacate e tomate cereja" className="receita-imagem" />
          <div className="receita-info">
            <div className="info-item"><p>10min</p></div>
            <div className="info-item"><p>Fácil</p></div>
            <div className="info-item"><p>{porcoes} porções</p></div>
          </div>
        </div>

        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            <li>2 xícaras de mix de folhas verdes</li>
            <li>1 abacate maduro cortado em cubos</li>
            <li>10 tomates cereja cortados ao meio</li>
            <li>1 colher (sopa) de suco de limão</li>
            <li>2 colheres (sopa) de azeite de oliva</li>
            <li>Sal e pimenta-do-reino a gosto</li>
          </ul>
        </section>

        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>Misture as folhas com o abacate e os tomates.</li>
            <li>Regue com suco de limão e azeite.</li>
            <li>Tempere com sal e pimenta e sirva na hora.</li>
          </ol>
        </section>
      </div>
    </>
  );
}

export default SaladaAbacate;
