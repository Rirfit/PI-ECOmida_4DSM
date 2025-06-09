import { useState } from 'react';
import "../sobremesas/Bolo.css";
import bolinhoBacalhau from '../../assets/bolinhoBacalhau.jpg'; 
import Header from '../../components/header/Header';

function BolinhoBacalhau() {
  const [rendimento, setRendimento] = useState(35);

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>Bolinho de Bacalhau Crocante com Alho e Brócolis</h1>
        </header>

        <div className="imagem-e-info-container">
          <img src={bolinhoBacalhau} alt="Bolinho de bacalhau crocante" className="receita-imagem" />
          <div className="receita-info">
            <div className="info-item"><p>1h (+12h de molho)</p></div>
            <div className="info-item"><p>Fácil</p></div>
            <div className="info-item"><p>{rendimento} unidades</p></div>
          </div>
        </div>

        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            <li>500g de sobras de peixe (bacalhau em lascas)</li>
            <li>600g de batata descascada em cubos</li>
            <li>6 dentes de alho picados</li>
            <li>1/2 xícara (chá) de óleo</li>
            <li>1 e 1/2 xícara (chá) de brócolis cozido e picado</li>
            <li>Sal e pimenta-do-reino a gosto</li>
            <li>4 ovos</li>
            <li>Óleo para fritar</li>
            <li>Molho de pimenta para acompanhar</li>
          </ul>
        </section>

        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>Deixe o bacalhau de molho na geladeira por 12 horas, trocando a água 3 vezes.</li>
            <li>Escorra, coloque em uma panela, cubra com água e cozinhe por 15 minutos. Retire com escumadeira e reserve.</li>
            <li>Cozinhe a batata na água do bacalhau por 15 minutos ou até amaciar. Amasse ainda quente e reserve.</li>
            <li>Frite o alho no óleo até dourar e escorra sobre papel absorvente.</li>
            <li>Desfie o bacalhau grosseiramente e coloque em uma vasilha.</li>
            <li>Adicione a batata, o alho frito, o brócolis, sal e pimenta. Misture bem.</li>
            <li>Adicione os ovos, um a um, mexendo bem a cada adição até formar uma massa firme.</li>
            <li>Modele os bolinhos com duas colheres e frite em óleo quente até dourar.</li>
            <li>Escorra sobre papel absorvente e sirva com molho de pimenta.</li>
          </ol>
        </section>
      </div>
    </>
  );
}

export default BolinhoBacalhau;
