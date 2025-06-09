import { useState } from 'react';
import "../sobremesas/Bolo.css";
import frangoMazu from '../../assets/frangoMazu.jpg';
import Header from '../../components/header/Header';


function FrangoMazu() {
  const [porcoes, setPorcoes] = useState(5);

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>Frango Mazu com Requeijão e Batata Palha</h1>
        </header>

        <div className="imagem-e-info-container">
          <img src={frangoMazu} alt="Frango Mazu com queijo e batata palha" className="receita-imagem" />
          <div className="receita-info">
            <div className="info-item"><p>45min</p></div>
            <div className="info-item"><p>Fácil</p></div>
            <div className="info-item"><p>{porcoes} porções</p></div>
          </div>
        </div>

        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            <li>300g de frango assado sem pele e desfiado</li>
            <li>100g de bacon picadinho e previamente frito</li>
            <li>200g de queijo tipo mussarela ou prato picado grosseiramente</li>
            <li>100g de batata palha</li>
            <li>1 xícara de requeijão tipo Catupiry (sem amido)</li>
          </ul>
        </section>

        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>Em uma vasilha, misture o frango, o bacon, o queijo e a batata palha.</li>
            <li>Em um refratário, alterne camadas da mistura e do requeijão, finalizando com uma camada de requeijão.</li>
            <li>Leve ao forno preaquecido até gratinar o requeijão da camada final.</li>
            <li>Sirva bem quente, acompanhado de arroz branco.</li>
          </ol>
        </section>
      </div>
    </>
  );
}

export default FrangoMazu;
