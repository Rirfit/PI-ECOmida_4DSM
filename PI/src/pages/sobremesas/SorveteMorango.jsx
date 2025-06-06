import { useState } from 'react';
import './Bolo.css';
import sorvete from '../../assets/sorvete de morango.jpg'; // Adicione a imagem correta do sorvete
import Header from '../../components/header/Header';

function SorveteMorango() {
  const [porcoes, setPorcoes] = useState(4); // Porções estimadas

  return (
    <>
      <Header />
      <div className="pagina-receita">

        {/* Cabeçalho com título */}
        <header className="receita-header">
          <h1>Sorvete Sustentável de Morango</h1>
        </header>

        {/* Container englobando imagem + informações */}
        <div className="imagem-e-info-container">
          <img 
            src={sorvete} 
            alt="Sorvete Sustentável de Morango" 
            className="receita-imagem" 
          />
          <div className="receita-info">
            <div className="info-item">
              <p>10 min (preparo)</p>
            </div>
            <div className="info-item">
              <p>Muito fácil</p>
            </div>
            <div className="info-item">
              <p>{porcoes} porções</p>
            </div>
          </div>
        </div>

        {/* Seção de ingredientes */}
        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            <li>2 xícaras de morangos maduros (lavados e congelados)</li>
            <li>1 banana madura congelada (opcional, para dar cremosidade)</li>
            <li>1/2 xícara de iogurte natural ou leite (pode usar vegetal)</li>
            <li>1 a 2 colheres de sopa de mel ou açúcar (ajuste conforme o gosto)</li>
            <li>Suco de 1/2 limão (opcional, realça o sabor)</li>
          </ul>
        </section>

        {/* Modo de preparo */}
        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>No liquidificador ou processador, adicione os morangos congelados, a banana, o iogurte e o mel.</li>
            <li>Bata até obter um creme liso e consistente.</li>
            <li>Se quiser mais firme, leve ao congelador por 1 hora antes de servir.</li>
            <li>Sirva com folhas de hortelã, raspas de chocolate ou granola.</li>
          </ol>
        </section>

        {/* Dicas extras */}
        <section className="dicas">
          <h3>Dicas</h3>
          <p>
            Morangos muito maduros que seriam descartados são ideais para essa receita. Você também pode congelar frutas que estão começando a amolecer e usar depois.
          </p>
        </section>
      </div>
    </>
  );
}

export default SorveteMorango;
