import { useState } from 'react';
import './Bolo.css';
import torta from '../../assets/torta-de-limao.jpg'; // Substitua com imagem da torta
import Header from '../../components/header/Header';

function TortaLimao() {
  const [porcoes, setPorcoes] = useState(8); // Porções estimadas

  return (
    <>
      <Header />
      <div className="pagina-receita">

        {/* Cabeçalho com título */}
        <header className="receita-header">
          <h1>Torta de Limão com Creme de Baunilha Gratinado</h1>
        </header>

        {/* Container com imagem e infos */}
        <div className="imagem-e-info-container">
          <img 
            src={torta} 
            alt="Torta de Limão com Creme de Baunilha Gratinado" 
            className="receita-imagem" 
          />
          <div className="receita-info">
            <div className="info-item">
              <p>50 min</p>
            </div>
            <div className="info-item">
              <p>Médio</p>
            </div>
            <div className="info-item">
              <p>{porcoes} porções</p>
            </div>
          </div>
        </div>

        {/* Ingredientes */}
        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <h3>Massa</h3>
          <ul>
            <li>1 pacote de bolacha maizena (ou sobra de biscoito triturado)</li>
            <li>3 colheres de sopa de manteiga derretida</li>
          </ul>

          <h3>Recheio de Limão</h3>
          <ul>
            <li>1 lata de leite condensado</li>
            <li>1/2 xícara de suco de limão (use os mais maduros!)</li>
            <li>Raspas de limão</li>
          </ul>

          <h3>Creme de Baunilha (para gratinar)</h3>
          <ul>
            <li>2 gemas</li>
            <li>2 colheres de sopa de açúcar</li>
            <li>1 colher de sopa de amido de milho</li>
            <li>1 xícara de leite</li>
            <li>1 colher de chá de essência de baunilha</li>
            <li>Açúcar para polvilhar (para caramelizar)</li>
          </ul>
        </section>

        {/* Modo de preparo */}
        <section className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            <li>Triture as bolachas e misture com a manteiga. Forre uma forma de fundo removível e leve ao forno por 10 minutos a 180°C.</li>
            <li>Misture o leite condensado com o suco e raspas de limão. Coloque sobre a massa assada.</li>
            <li>Para o creme: leve ao fogo baixo as gemas, açúcar, amido, leite e baunilha, mexendo até engrossar. Deixe amornar.</li>
            <li>Espalhe o creme sobre a camada de limão e alise com uma espátula.</li>
            <li>Polvilhe açúcar sobre o creme e queime com maçarico culinário (ou leve ao forno em temperatura alta com grill por alguns minutos até dourar).</li>
            <li>Leve à geladeira por pelo menos 2 horas antes de servir.</li>
          </ol>
        </section>

        {/* Dicas */}
        <section className="dicas">
          <h3>Dicas</h3>
          <p>
            Use restos de biscoito de outros doces para a base. Se não tiver maçarico, coloque o açúcar por cima do creme e leve ao forno bem quente até caramelizar levemente.
          </p>
        </section>
      </div>
    </>
  );
}

export default TortaLimao;
