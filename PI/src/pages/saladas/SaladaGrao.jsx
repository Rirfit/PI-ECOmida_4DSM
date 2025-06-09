import { useState } from "react";
import "../sobremesas/Bolo.css";
import saladaGraoBico from '../../assets/saladaGrao.webp'; // ajuste o caminho da imagem
import Header from "../../components/header/Header";

function SaladaGrao() {
  const [porcoes, setPorcoes] = useState(4);

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>Salada de folhas com grão-de-bico</h1>
        </header>

        <div className="imagem-e-info-container">
          <img src={saladaGraoBico} alt="Salada de folhas com grão-de-bico" className="receita-imagem" />
          <div className="receita-info">
            <div className="info-item"><p>20min</p></div>
            <div className="info-item"><p>Fácil</p></div>
            <div className="info-item"><p>{porcoes} porções</p></div>
          </div>
        </div>

        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            <li>3 xícaras de folhas variadas (alface, rúcula, agrião)</li>
            <li>1 xícara de grão-de-bico cozido</li>
            <li>1 tomate picado</li>
            <li>1 cebola roxa pequena fatiada</li>
            <li>Suco de 1 limão</li>
            <li>2 colheres (sopa) de azeite</li>
            <li>Sal e pimenta a gosto</li>
          </ul>
        </section>

        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>Em uma tigela, misture as folhas, o grão-de-bico, o tomate e a cebola.</li>
            <li>Regue com o suco de limão e azeite.</li>
            <li>Tempere com sal e pimenta e misture delicadamente.</li>
            <li>Sirva fresca.</li>
          </ol>
        </section>
      </div>
    </>
  );
}

export default SaladaGrao;
