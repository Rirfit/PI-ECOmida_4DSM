import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "../receitas/Receitas.css"
import { Link } from 'react-router-dom';
import bolinhoPeixe from '../../assets/bolinhoPeixe.jpg'
import bolinhoBacalhau from '../../assets/bolinhoBacalhau.jpg'
import arrozPeixe from '../../assets/arrozPeixe.jpg'
import gratinadoPeixe from '../../assets/gratinadoPeixe.jpg'

function Peixes() {
    return (
        <>
            <Header />
            <div className="pagina">

                <div className="receitas-container">

                    <Link to="/BolinhoPeixe" className="categoria">
                        <img src={bolinhoPeixe} alt="Bolinho de peixe com batata" />
                        <h4>Bolinho de peixe com batata</h4>
                    </Link>

                    <Link to="/BolinhoBacalhau" className="categoria">
                        <img src={bolinhoBacalhau} alt="Bolinho de Bacalhau" />
                        <h4>Bolinho de bacalhau</h4>
                    </Link>

                    <Link to="/ArrozPeixe" className="categoria">
                        <img src={arrozPeixe} alt="Arroz cremoso de peixe" />
                        <h4>Arroz cremoso de peixe</h4>
                    </Link>

                    <Link to="/GratinadoPeixe" className="categoria">
                        <img src={gratinadoPeixe} alt="gratinado de peixe" />
                        <h4>Gratinado de peixe</h4>
                    </Link>
                </div>
            </div>
            <Footer />
        </>



    )
};

export default Peixes;