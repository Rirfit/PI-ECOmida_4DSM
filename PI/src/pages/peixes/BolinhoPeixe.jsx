import { useState } from 'react';
import "../sobremesas/Bolo.css";
import bolinhoPeixe from '../../assets/bolinhoPeixe.jpg';
import Header from '../../components/header/Header';

function BolinhoPeixe() {
  const [porcoes, setPorcoes] = useState(5);

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>Bolinho de Peixe com Batata</h1>
        </header>

        <div className="imagem-e-info-container">
          <img src={bolinhoPeixe} alt="Bolinho de peixe com batata" className="receita-imagem" />
          <div className="receita-info">
            <div className="info-item"><p>1h</p></div>
            <div className="info-item"><p>Fácil</p></div>
            <div className="info-item"><p>{porcoes} porções</p></div>
          </div>
        </div>

        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            <li>4 colheres (sopa) de azeite</li>
            <li>1 cebola picada</li>
            <li>2 dentes de alho picados</li>
            <li>1/2 pimentão vermelho picado</li>
            <li>500g de sobras de peixe em cubos</li>
            <li>Sal, páprica picante e salsa picada a gosto</li>
            <li>2 e 1/2 xícaras (chá) de batata asterix cozida e amassada</li>
            <li>2 gemas</li>
            <li>2 colheres (sopa) de maisena</li>
            <li>1 e 1/2 xícara (chá) de farinha de trigo</li>
            <li>3 ovos batidos</li>
            <li>1 e 1/2 xícara (chá) de farinha Panko</li>
            <li>Óleo para fritar</li>
          </ul>
        </section>

        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>Aqueça uma panela com o azeite em fogo médio e frite a cebola, o alho e o pimentão por 3 minutos.</li>
            <li>Adicione o peixe, o sal, a páprica e a salsa e refogue até o peixe amaciar e começar a desmanchar.</li>
            <li>Deixe amornar e transfira para uma tigela.</li>
            <li>Junte a batata amassada, as gemas, a maisena e misture até formar uma massa firme.</li>
            <li>Modele os bolinhos com duas colheres de sopa.</li>
            <li>Passe os bolinhos na farinha de trigo, depois nos ovos batidos e por fim na farinha Panko.</li>
            <li>Frite, aos poucos, em óleo quente até dourar. Escorra sobre papel-toalha.</li>
          </ol>
        </section>

        <section className="dicas">
          <h3>Molho para acompanhar</h3>
          <p>Misture os seguintes ingredientes para um molho rápido:</p>
          <ul>
            <li>1/2 xícara (chá) de ketchup</li>
            <li>1/2 xícara (chá) de mostarda</li>
            <li>1/2 xícara (chá) de maionese</li>
          </ul>
          <p>Sirva o molho à parte com os bolinhos.</p>
        </section>
      </div>
    </>
  );
}

export default BolinhoPeixe;
