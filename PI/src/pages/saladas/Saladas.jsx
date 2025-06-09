import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "../receitas/Receitas.css"
import { Link } from 'react-router-dom';
import saladaManga from '../../assets/saladaManga.jpg'
import abacate from '../../assets/saladaAbacate.jpg'
import grao from '../../assets/saladaGrao.webp'
import beterraba from '../../assets/saladaBeterraba.jpg'


function Saladas() {
    return (
        <>
            <Header />
            <div className="pagina">

                <div className="receitas-container">

                    <Link to="/SaladaManga" className="categoria">
                        <img src={saladaManga} alt="Salada de manga com nozes" />
                        <h4>Salada de manga com nozes</h4>
                    </Link>

                    <Link to="/SaladaAbacate" className="categoria">
                        <img src={abacate} alt="Salada de abacate" />
                        <h4>Salada de abacate</h4>
                    </Link>

                    <Link to="/SaladaBeterraba" className="categoria">
                        <img src={beterraba} alt="Salada de beterraba" />
                        <h4>Salada de beterraba</h4>
                    </Link>

                    <Link to="/SaladaGrao" className="categoria">
                        <img src={grao} alt="Salada gâo de bico" />
                        <h4>Salada de gão de bico</h4>
                    </Link>
                </div>
            </div>
            <Footer />
        </>



    )
};

export default Saladas;
