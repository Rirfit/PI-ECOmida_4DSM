import { useState } from 'react';
import "../sobremesas/Bolo.css";
import gratinadoPeixe from '../../assets/gratinadoPeixe.jpg';
import Header from '../../components/header/Header';

function GratinadoPeixe() {
  const [porcoes, setPorcoes] = useState(6);

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>Gratinado de Peixe com Brócolis</h1>
        </header>

        <div className="imagem-e-info-container">
          <img src={gratinadoPeixe} alt="Gratinado de peixe com brócolis" className="receita-imagem" />
          <div className="receita-info">
            <div className="info-item"><p>1h10</p></div>
            <div className="info-item"><p>Fácil</p></div>
            <div className="info-item"><p>{porcoes} porções</p></div>
          </div>
        </div>

        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <h3>Gratinado</h3>
          <ul>
            <li>1kg de sobras de peixe (como cação em postas)</li>
            <li>2 dentes de alho amassados</li>
            <li>Sal e pimenta-do-reino a gosto</li>
            <li>3 colheres (sopa) de azeite</li>
            <li>1 maço de brócolis cozido e picado</li>
            <li>100g de queijo parmesão ralado</li>
          </ul>

          <h3>Molho branco</h3>
          <ul>
            <li>2 colheres (sopa) de manteiga</li>
            <li>1 cebola picada</li>
            <li>1 colher (sopa) de farinha de trigo</li>
            <li>1 e 1/2 xícara (chá) de leite</li>
            <li>Sal e noz-moscada ralada a gosto</li>
            <li>1 caixa de creme de leite (200g)</li>
          </ul>

          <h3>Purê</h3>
          <ul>
            <li>800g de batata cozida e amassada</li>
            <li>2 colheres (sopa) de manteiga</li>
            <li>1 caixa de creme de leite (200g)</li>
            <li>Sal a gosto</li>
          </ul>
        </section>

        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li><strong>Molho branco:</strong> Aqueça a manteiga e frite a cebola até murchar. Junte a farinha e frite até dourar.</li>
            <li>Acrescente o leite aos poucos, mexendo até engrossar. Tempere com sal e noz-moscada, adicione o creme de leite, misture e reserve.</li>
            <li><strong>Purê:</strong> Em fogo médio, misture a batata, a manteiga, o creme de leite e o sal até ficar homogêneo. Reserve.</li>
            <li><strong>Peixe:</strong> Tempere com alho, sal e pimenta. Aqueça o azeite e doure as postas de peixe. Reserve.</li>
            <li>Em um refratário grande, faça as camadas: purê, peixe, brócolis picado.</li>
            <li>Cubra com o molho branco, polvilhe parmesão e leve ao forno médio preaquecido por 15 minutos ou até gratinar.</li>
            <li>Retire do forno e sirva quente.</li>
          </ol>
        </section>
      </div>
    </>
  );
}

export default GratinadoPeixe;
