import React from "react";
import "./Projetos.css";
import Cinetag from './cinetag.JPG';
import Organo from './Organo.JPG'

function Projetos() {
  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="container">
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
        
      <div className="projeto">
          <div className="wrapper">
            <div className="banner-image" style={{ backgroundImage: `url(${Cinetag})` }}></div>
            <h3>Cinetag</h3>
            <p>Um aplicativo web construído com React que permite aos usuários gerenciar listas personalizadas de filmes favoritos. Utilizando o Create React App e React Router, o projeto proporciona uma navegação fluida entre páginas de listagem, detalhes e criação de listas. Com hooks como useState e useEffect, a aplicação gerencia estados e interações com a API, enquanto a interface responsiva é composta por componentes reutilizáveis, oferecendo uma experiência agradável ao usuário.</p>
          </div>
          <div className="button-wrapper">
            <a href="" className="btn outline" target="_blank" rel="noreferrer">Visitar</a>
            <a href="https://github.com/willsouzaa/Cinetag-Router.git" className="btn fill" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
