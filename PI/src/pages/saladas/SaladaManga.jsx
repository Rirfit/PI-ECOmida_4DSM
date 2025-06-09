import { useState } from "react";
import "../sobremesas/Bolo.css";
import saladaMangaNozes from '../../assets/saladaManga.jpg';
import Header from "../../components/header/Header";

function SaladaManga() {
  const [porcoes, setPorcoes] = useState(4);

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>Salada de folhas com manga e nozes</h1>
        </header>

        <div className="imagem-e-info-container">
          <img src={saladaMangaNozes} alt="Salada de folhas com manga e nozes" className="receita-imagem" />
          <div className="receita-info">
            <div className="info-item"><p>15min</p></div>
            <div className="info-item"><p>Fácil</p></div>
            <div className="info-item"><p>{porcoes} porções</p></div>
          </div>
        </div>

        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            <li>2 xícaras de alface americana rasgada</li>
            <li>1 xícara de rúcula</li>
            <li>1 manga cortada em cubos</li>
            <li>1/2 xícara de nozes picadas</li>
            <li>1 colher (sopa) de azeite</li>
            <li>1 colher (sopa) de vinagre balsâmico</li>
            <li>Sal e pimenta-do-reino a gosto</li>
          </ul>
        </section>

        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>Em uma tigela grande, misture as folhas, a manga e as nozes.</li>
            <li>Tempere com azeite, vinagre, sal e pimenta.</li>
            <li>Misture delicadamente e sirva imediatamente.</li>
          </ol>
        </section>
      </div>
    </>
  );
}

export default SaladaManga;
