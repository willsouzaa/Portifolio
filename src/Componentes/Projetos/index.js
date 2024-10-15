import React from "react";
import "./Projetos.css";
import Cinetag from './Barbeariamedeiros.png';
import Organo from './Organo.JPG'

function Projetos() {
  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="container">

      <div className="projeto">
          <div className="wrapper">
            <div className="banner-image" style={{ backgroundImage: `url(${Cinetag})` }}></div>
            <h3>Barbearia Medeiros</h3>
            <p>O site da Barbearia Medeiros oferece uma experiência digital completa para quem busca serviços de qualidade em cortes de cabelo e cuidados com a barba. Com um design responsivo e moderno, os usuários podem facilmente navegar entre os diferentes serviços disponíveis, incluindo cortes personalizados, cuidados com a barba, cortes infantis e luzes. O site também apresenta a equipe da barbearia, permitindo que os clientes conheçam os profissionais que estarão à disposição. Com um link direto para agendamentos via WhatsApp, a interação é facilitada, proporcionando uma experiência conveniente e acessível.

Tecnologias Utilizadas:
React, CSS, HTML</p>
          </div>
          <div className="button-wrapper">
            <a href="https://barbeariamedeiros.com.br/" className="btn outline" target="_blank" rel="noreferrer">Visitar</a>
            <a href="https://github.com/willsouzaa/Medeiros-Barbearia.git" className="btn fill" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div className="projeto">
          <div className="wrapper">
            <div className="banner-image" style={{ backgroundImage: `url(${Organo})` }}></div>
            <h3>Organo</h3>
            <p>Este projeto é uma aplicação web construída com React para gerenciar colaboradores de uma empresa, categorizando-os em diferentes times. A aplicação oferece um formulário dinâmico para adicionar novos colaboradores e organiza visualmente as equipes com cores personalizadas.</p>
          </div>
          <div className="button-wrapper">
            <a href="https://organo-cadastro-de-funcionarios-react-e-javascript.vercel.app/" className="btn outline" target="_blank" rel="noreferrer">Visitar</a>
            <a href="https://github.com/willsouzaa/Organo-cadastro-de-funcionarios-react-e-javascript" className="btn fill" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        
      
    </section>
  );
}

export default Projetos;
