import React from 'react';
import Header from '../../components/header/Header';
import './Sobre.css';
import Footer from '../../components/footer/Footer';

export const Sobre = () => {
  return (
    <>
      <Header />
      <h4 className="texto">
        Somos um projeto comprometida em conscientizar a sociedade sobre o desperdício de alimentos e promover práticas mais sustentáveis no nosso dia a dia. Acreditamos que pequenas mudanças podem fazer uma grande diferença no nosso impacto no meio ambiente e na vida das pessoas. Nosso objetivo é criar uma rede de apoio e educação, fornecendo informações valiosas sobre como reduzir o desperdício, reaproveitar alimentos e ajudar aqueles que mais precisam.
      </h4>
      <div className="imagemS"></div>
      <Footer/>
    </>
  );
};

export default Sobre;

