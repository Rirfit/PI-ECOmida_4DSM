import { useState } from 'react';
import './Bolo.css';
import { FaClock, FaUtensils, FaUserFriends } from 'react-icons/fa'; // Importando ícones (opcional)
import bolo from '../../assets/bolo.jpg'
function Bolo() {
  const [porcoes, setPorcoes] = useState(8); // Estado para porções (exemplo)

  return (
    <div className="pagina-receita">
{/* Cabeçalho com título e imagem */}
<header className="receita-header">
  <h1>Bolo de Chocolate Fofinho</h1>
  <img 
    src={bolo} 
    alt="Bolo de Chocolate Fofinho" 
    className="receita-imagem" 
  />
</header>
      {/* Informações rápidas (tempo, dificuldade, porções) */}
      <div className="receita-info">
        <div className="info-item">
          <span className="info-icone"><FaClock /></span>
          <p>40 min</p>
        </div>
        <div className="info-item">
          <span className="info-icone">⚙️</span>
          <p>Fácil</p>
        </div>
        <div className="info-item">
          <span className="info-icone"><FaUserFriends /></span>
          <p>{porcoes} porções</p>
        </div>
      </div>

      {/* Seção de ingredientes */}
      <section className="ingredientes">
        <h2>Ingredientes</h2>
        <ul>
          <li>3 ovos</li>
          <li>2 xícaras de farinha de trigo</li>
          <li>1 xícara de açúcar</li>
          <li>1/2 xícara de chocolate em pó</li>
        </ul>
      </section>

      {/* Modo de preparo */}
      <section className="preparo">
        <h2>Modo de Preparo</h2>
        <ol>
          <li>Pré-aqueça o forno a 180°C.</li>
          <li>Bata os ovos e o açúcar até ficar homogêneo.</li>
          <li>Adicione a farinha e o chocolate, misturando bem.</li>
          <li>Asse por 30 minutos.</li>
        </ol>
      </section>

      {/* Dicas extras (opcional) */}
      <section className="dicas">
        <h3>Dicas</h3>
        <p>
          Para um toque especial, adicione raspas de chocolate por cima antes de assar.
        </p>
      </section>
    </div>
  );
}

export default Bolo;