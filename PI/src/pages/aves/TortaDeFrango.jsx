import { useState } from 'react';
import "../sobremesas/Bolo.css";
import tortaFrango from '../../assets/tortaDeFrango.jpg'; 
import Header from '../../components/header/Header';

function TortaDeFrango() {
  const [porcoes, setPorcoes] = useState(6);

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>Torta de Frango com Massa Caseira</h1>
        </header>

        <div className="imagem-e-info-container">
          <img src={tortaFrango} alt="Torta de Frango com massa fofinha e queijo gratinado" className="receita-imagem" />
          <div className="receita-info">
            <div className="info-item"><p>1h</p></div>
            <div className="info-item"><p>Fácil</p></div>
            <div className="info-item"><p>{porcoes} porções</p></div>
          </div>
        </div>

        <section className="ingredientes">
          <h2>Ingredientes</h2>

          <h3>Massa</h3>
          <ul>
            <li>100g de manteiga derretida</li>
            <li>1 colher (sopa) de açúcar</li>
            <li>2 ovos</li>
            <li>1 xícara de leite</li>
            <li>2 xícaras de farinha de trigo</li>
            <li>2 colheres (sopa) de queijo parmesão ralado</li>
            <li>1 colher (sopa) de fermento em pó</li>
          </ul>

          <h3>Recheio</h3>
          <ul>
            <li>300 a 400g de frango desfiado</li>
            <li>1 cebola picada</li>
            <li>1 tomate picado</li>
            <li>5 colheres (sopa) de salsinha picada</li>
            <li>Sal e pimenta-do-reino a gosto</li>
            <li>1 colher (chá) de alho e cebola em pó</li>
            <li>1 colher (chá) de alho, cebola, salsa e tomate desidratados</li>
            <li>2 colheres (sopa) de parmesão ralado</li>
            <li>2 colheres (sopa) de creme de leite</li>
            <li>1 pote de requeijão</li>
          </ul>
        </section>

        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>Em uma tigela, misture todos os ingredientes da massa até obter uma massa mole e homogênea.</li>
            <li>Em outra tigela, misture o frango desfiado com todos os ingredientes do recheio até formar um creme.</li>
            <li>Unte uma assadeira média e despeje metade da massa.</li>
            <li>Distribua o recheio por cima da massa de forma uniforme.</li>
            <li>Cubra com o restante da massa e finalize com um pouco de parmesão ralado por cima, se desejar.</li>
            <li>Leve ao forno preaquecido a 180 °C por cerca de 35–40 minutos ou até dourar.</li>
            <li>Sirva quente ou em temperatura ambiente.</li>
          </ol>
        </section>
      </div>
    </>
  );
}

export default TortaDeFrango;
