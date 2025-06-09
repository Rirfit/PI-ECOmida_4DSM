import { useState } from "react";
import "../sobremesas/Bolo.css";
import saladaBeterrabaNozes from '../../assets/saladaBeterraba.jpg'; // ajuste o caminho da imagem
import Header from "../../components/header/Header";

function SaladaBeterraba() {
  const [porcoes, setPorcoes] = useState(4);

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>Salada de folhas com beterraba e nozes</h1>
        </header>

        <div className="imagem-e-info-container">
          <img src={saladaBeterrabaNozes} alt="Salada de folhas com beterraba e nozes" className="receita-imagem" />
          <div className="receita-info">
            <div className="info-item"><p>20min</p></div>
            <div className="info-item"><p>Fácil</p></div>
            <div className="info-item"><p>{porcoes} porções</p></div>
          </div>
        </div>

        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            <li>2 xícaras de folhas variadas</li>
            <li>1 beterraba média cozida e cortada em cubos</li>
            <li>1/2 xícara de nozes picadas</li>
            <li>1 colher (sopa) de azeite</li>
            <li>1 colher (sopa) de vinagre de maçã</li>
            <li>Sal e pimenta a gosto</li>
          </ul>
        </section>

        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>Misture as folhas com a beterraba e as nozes.</li>
            <li>Tempere com azeite, vinagre, sal e pimenta.</li>
            <li>Misture delicadamente e sirva em seguida.</li>
          </ol>
        </section>
      </div>
    </>
  );
}

export default SaladaBeterraba;
