import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h2>Healthy Donation</h2>
                </div>
                <div className="footer-links">
                    <a href="/">Início</a>
                    <a href="/Receitas">Receitas</a>
                    <a href="/Sobre">Sobre</a>
                </div>
                <div className="footer-copy">
                    <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
