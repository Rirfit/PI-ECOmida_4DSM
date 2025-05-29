import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';

import sorvete from '../../assets/sorvete de morango.jpg'
import torta from '../../assets/torta-de-limao.jpg'
import bolo from '../../assets/bolo.jpg'
import pave from '../../assets/pave.jpeg'

function Sobremesas() {
    return (
        <>
            <Header />
            <div className="pagina">
                
                <div className="receitas-container">

                    <Link to="/Bolo" className="categoria">
                        <img src={bolo} alt="Bolo" />
                        <h4>Bolo de chocolate</h4>
                    </Link>

                    <Link to="/" className="categoria">
                        <img src={torta} alt="torta de limão" />
                        <h4>Torta de limão</h4>
                    </Link>

                    <Link to="/" className="categoria">
                        <img src={sorvete} alt="sorvete de moramgo" />
                        <h4>Sorvete de morango</h4>
                    </Link>

                    <Link to="/Aves" className="categoria">
                        <img src={pave} alt="pave" />
                        <h4>Pave</h4>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Sobremesas