import React from 'react'
import Header from '../../components/header/Header'
import './Home.css'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Header />
      <div className="home-page">

        <div className="home-imagem">
          {/* O camminho da imagem esta no css*/}
        </div>
        <div className="home-conteudo">
          <h1 className="home-titulo">Bem vindo</h1>

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
        <div className="home-botao-container">
          <button className='home-botao'>Veja nossas receitas</button>
        </div>


      </div>

      <div className="home-filtro-container">
        <div className="home-filtro">

          <h1 className='htitulo2'>Transforme o mundo com cada garfada!</h1>
          <h4 className='htexto2'>
            Descubra o poder da comida sustentável <br />
            e divirta-se aprendendo a reaproveitar<br />
            alimentos de forma criativa e saborosa!<br />
            Aqui, você encontra receitas incríveis,<br />
            desafios interativos e dicas para <br />
            reduzir o desperdício.
          </h4>

          <div className="home-botao2-container">
            <Link to="/Cadastro" className="home-botao2"><h4>Cadastre-se</h4> </Link>
          </div>
        </div>


      </div>
      <Footer />

    </>

  )

}

export default Home
