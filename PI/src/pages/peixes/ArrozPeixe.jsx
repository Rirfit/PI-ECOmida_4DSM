import { useState } from 'react';
import "../sobremesas/Bolo.css";
import arrozPeixe from '../../assets/arrozPeixe.jpg'; 
import Header from '../../components/header/Header';

function ArrozPeixe() {
  const [porcoes, setPorcoes] = useState(4);

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>Arroz Cremoso de Peixe com Sobras</h1>
        </header>

        <div className="imagem-e-info-container">
          <img src={arrozPeixe} alt="Arroz cremoso de peixe" className="receita-imagem" />
          <div className="receita-info">
            <div className="info-item"><p>30 min</p></div>
            <div className="info-item"><p>Fácil</p></div>
            <div className="info-item"><p>{porcoes} porções</p></div>
          </div>
        </div>

        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            <li>2 colheres (sopa) de manteiga</li>
            <li>2 colheres (sopa) de azeite</li>
            <li>1 cebola pequena ralada</li>
            <li>500g de sobras de peixe cozido ou assado</li>
            <li>4 tomates sem pele e sem sementes, em cubos</li>
            <li>1/3 de xícara (chá) de azeitona verde fatiada</li>
            <li>Sal e pimenta-do-reino a gosto</li>
            <li>1 lata de creme de leite</li>
            <li>2 xícaras (chá) de arroz branco cozido</li>
            <li>1/2 xícara (chá) de queijo mussarela ralado</li>
          </ul>
        </section>

        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>Aqueça uma frigideira com a manteiga e o azeite em fogo médio e refogue a cebola por 2 minutos.</li>
            <li>Adicione o peixe desfiado ou em pedaços e refogue por 3 minutos.</li>
            <li>Despeje os tomates, azeitonas, sal e pimenta e cozinhe por 5 minutos.</li>
            <li>Adicione o creme de leite, espere levantar fervura e desligue o fogo.</li>
            <li>Misture o arroz cozido ao creme e transfira para um refratário médio.</li>
            <li>Cubra com a mussarela ralada e leve ao forno preaquecido a 200 °C por 10 minutos.</li>
            <li>Sirva em seguida.</li>
          </ol>
        </section>

        <section className="dicas">
          <h3>Dicas</h3>
          <p>Você pode usar qualquer peixe branco cozido ou assado, como tilápia ou merluza. Para um toque especial, adicione cheiro-verde ou coentro picado antes de levar ao forno.</p>
        </section>
      </div>
    </>
  );
}

export default ArrozPeixe;
