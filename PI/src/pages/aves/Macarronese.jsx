import { useState } from 'react';
import "../sobremesas/Bolo.css";
import macarronese from '../../assets/macarronese.jpg';
import Header from '../../components/header/Header';

function Macarronese() {
  const [porcoes, setPorcoes] = useState(6);

  return (
    <>
      <Header />
      <div className="pagina-receita">
        <header className="receita-header">
          <h1>Macarronese com Frango</h1>
        </header>

        <div className="imagem-e-info-container">
          <img src={macarronese} alt="Macarronese com frango, milho e maionese" className="receita-imagem" />
          <div className="receita-info">
            <div className="info-item"><p>30min</p></div>
            <div className="info-item"><p>Fácil</p></div>
            <div className="info-item"><p>{porcoes} porções</p></div>
          </div>
        </div>

        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            <li>2 xícaras (chá) de macarrão cozido (tipo parafuso, penne ou similar)</li>
            <li>1 xícara (chá) de frango assado desfiado</li>
            <li>1/2 xícara (chá) de milho verde</li>
            <li>1/2 xícara (chá) de presunto em cubinhos</li>
            <li>1/4 xícara (chá) de azeitonas picadas</li>
            <li>2 colheres (sopa) de cheiro-verde picado</li>
            <li>1/2 cebola pequena picada</li>
            <li>1/4 de pimentão picado (opcional)</li>
            <li>2 colheres (sopa) de azeite</li>
            <li>1/2 xícara (chá) de maionese (ou a gosto)</li>
          </ul>
        </section>

        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>Em uma tigela grande, misture o macarrão cozido e frio com o frango desfiado.</li>
            <li>Adicione o milho, presunto, azeitonas, cebola, pimentão e cheiro-verde.</li>
            <li>Tempere com o azeite e misture bem.</li>
            <li>Adicione a maionese aos poucos, mexendo até que a salada fique cremosa, mas não encharcada.</li>
            <li>Acerte o sal, leve à geladeira por 30 minutos e sirva gelada como acompanhamento.</li>
          </ol>
        </section>
      </div>
    </>
  );
}

export default Macarronese;
