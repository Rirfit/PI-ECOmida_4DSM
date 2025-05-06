import React from 'react';
import Header from '../../components/header/Header';
import './Home.css';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      {/* Cabeçalho da página */}
      <Header />
      
      {/* Seção principal da home */}
      <div className="home-page">
        
        {/* Imagem de fundo */}
        <div className="home-imagem">
          {/* O caminho da imagem é gerenciado no CSS */}
        </div>

        {/* Conteúdo principal da home */}
        <div className="home-conteudo">
          <h1 className="home-titulo">Bem-vindo</h1>

          <div className="Home-descrição">
            <p>
              Chega de desperdiçar,<br />
              aqui você encontrará uma <br />
              variedade de receitas<br />
              deliciosas, e o melhor,<br />
              através das sobras<br />
              das que você já utilizou.
            </p>
          </div>

        </div>

        {/* Botão para acessar as receitas */}
        <div className="home-botao-container">
          <Link to="/Receitas" className="home-botao">
            <h4>Veja nossas receitas</h4>
          </Link>
        </div>

      </div>

      {/* Seção de filtro com imagem lateral */}
      <div className="home-filtro-container">
        <div className="home-filtro-wrapper">
          
          {/* Seção de conteúdo à direita */}
          <div className="home-conteudo-filtro">
            <h1 className='htitulo2'>Transforme o mundo com cada garfada!</h1>
            <h4 className='htexto2'>
              Descubra o poder da comida sustentável <br />
              e divirta-se aprendendo a reaproveitar<br />
              alimentos de forma criativa e saborosa!<br />
              Aqui, você encontra receitas incríveis,<br />
              desafios interativos e dicas para <br />
              reduzir o desperdício.
            </h4>

            {/* Botão de cadastro */}
            <div className="home-botao2-container">
              <Link to="/Cadastro" className="home-botao2"><h4>Cadastre-se</h4></Link>
            </div>
          </div>

          {/* Imagem lateral */}
          <div className="home-imagem-lateral"></div>
        </div>
      </div>

      {/* Rodapé da página */}
      <Footer />
    </>
  );
}

export default Home;

