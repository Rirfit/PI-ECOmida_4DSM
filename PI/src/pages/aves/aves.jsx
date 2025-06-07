import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "../receitas/Receitas.css"
import { Link } from 'react-router-dom';
import legumes from '../../assets/legumes-carne.jpg'
import lagarto from '../../assets/lagarto-molho-madeira.jpg'
import panqueca from '../../assets/panqueca-de-carne.jpg'
import picanha from '../../assets/picanha-na-manteiga.jpeg'

function Aves() {
    return (
        <>
            <Header />
            <div className="pagina">

                <div className="receitas-container">

                    <Link to="/Panqueca" className="categoria">
                        <img src={panqueca} alt="panqueca" />
                        <h4>Panqueca de carne</h4>
                    </Link>

                    <Link to="/Carnes" className="categoria">
                        <img src={lagarto} alt="lagarto" />
                        <h4>Lagarto ao molho madeira</h4>
                    </Link>

                    <Link to="/Peixes" className="categoria">
                        <img src={legumes} alt="legumes" />
                        <h4>Legumes com carne</h4>
                    </Link>

                    <Link to="/Aves" className="categoria">
                        <img src={picanha} alt="picanha" />
                        <h4>Picanha na manteiga</h4>
                    </Link>
                </div>
            </div>
            <Footer />
        </>



    )
};

export default Aves;
