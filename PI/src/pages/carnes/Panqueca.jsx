import { useState } from 'react';
import "../sobremesas/Bolo.css";  // pode copiar o CSS do Bolo.css ou adaptar
import panqueca from '../../assets/panqueca-de-carne.jpg'
import Header from '../../components/header/Header';

function Panqueca() {
  const [porcoes, setPorcoes] = useState(6);

  return (
    <>
      <Header />
      <div className="pagina-receita">
        {/* Cabeçalho com título */}
        <header className="receita-header">
          <h1>Panqueca de Carne com Sobras</h1>
        </header>

        {/* Container imagem + informações rápidas */}
        <div className="imagem-e-info-container">
          <img
            src={panqueca}
            alt="Panqueca de Carne com Sobras"
            className="receita-imagem"
          />
          <div className="receita-info">
            <div className="info-item">
              <p>45 min</p>
            </div>
            <div className="info-item">
              <p>Média</p>
            </div>
            <div className="info-item">
              <p>{porcoes} porções</p>
            </div>
          </div>
        </div>

        {/* Ingredientes */}
        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            <li>1 xícara de sobras de carne cozida ou moída</li>
            <li>1 xícara de farinha de trigo</li>
            <li>1 xícara de leite</li>
            <li>2 ovos</li>
            <li>1 cebola pequena picada</li>
            <li>Sal e pimenta a gosto</li>
            <li>Óleo para untar a frigideira</li>
          </ul>
        </section>

        {/* Modo de preparo */}
        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>Em uma tigela, misture a farinha, o leite e os ovos até formar uma massa lisa.</li>
            <li>Refogue a cebola em um pouco de óleo até ficar transparente.</li>
            <li>Acrescente a carne às cebolas, tempere com sal e pimenta, e cozinhe por 5 minutos.</li>
            <li>Aqueça uma frigideira untada e despeje uma concha da massa, formando uma panqueca fina.</li>
            <li>Cozinhe dos dois lados até dourar, recheie com a carne refogada e enrole.</li>
            <li>Repita até acabar a massa e o recheio.</li>
          </ol>
        </section>

        {/* Dicas */}
        <section className="dicas">
          <h3>Dicas</h3>
          <p>
            Aproveite sobras de outros tipos de carne, frango ou até legumes para variar o recheio. Use molho de tomate para acompanhar.
          </p>
        </section>
      </div>
    </>
  );
}

export default Panqueca;
