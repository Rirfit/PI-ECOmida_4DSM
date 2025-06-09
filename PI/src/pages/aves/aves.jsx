import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "../receitas/Receitas.css"
import { Link } from 'react-router-dom';
import mazu from '../../assets/frangoMazu.jpg'
import gratinado from '../../assets/gratinadoFrango.jpg'
import macarronese from '../../assets/macarronese.jpg'
import tortaDeFrango from '../../assets/tortaDeFrango.jpg'

function Aves() {
    return (
        <>
            <Header />
            <div className="pagina">

                <div className="receitas-container">

                    <Link to="/FrangoMazu" className="categoria">
                        <img src={mazu} alt="Frango mazu" />
                        <h4>Frango Mazu</h4>
                    </Link>

                    <Link to="/GratinadoFrango" className="categoria">
                        <img src={gratinado} alt="Gratinado de frango" />
                        <h4>Gratinadode frango</h4>
                    </Link>

                    <Link to="/Macarronese" className="categoria">
                        <img src={macarronese} alt="Macarronese" />
                        <h4>Macarronese</h4>
                    </Link>

                    <Link to="/TortaDeFrango" className="categoria">
                        <img src={tortaDeFrango} alt="Torta de frango" />
                        <h4>Torta de frango</h4>
                    </Link>
                </div>
            </div>
            <Footer />
        </>



    )
};

export default Aves;
