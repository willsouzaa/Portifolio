import React from "react";
import "./Projetos.css";
import Cinetag from './cinetag.JPG';

function Projetos() {
  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="container">
        <div className="projeto">
          <div className="wrapper">
            <div className="banner-image" style={{ backgroundImage: `url(${Cinetag})` }}></div>
            <h3>Cinetag</h3>
            <p>Cinetag é um aplicativo web construído com React, utilizando o Create React App para configuração inicial.</p>
          </div>
          <div className="button-wrapper">
            <a href="https://cinetag-five-sigma.vercel.app/" className="btn outline" target="_blank" rel="noreferrer">Deploy</a>
            <a href="https://github.com/willsouzaa/Cinetag-Router.git" className="btn fill" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        
        <div className="projeto">
          <div className="wrapper">
            <div className="banner-image" style={{ backgroundImage: `url(${Cinetag})` }}></div>
            <h3>Projeto 1</h3>
            <p>Descrição do projeto 1.</p>
          </div>
          <div className="button-wrapper">
            <a href="https://cinetag-five-sigma.vercel.app/" className="btn outline" target="_blank" rel="noreferrer">Deploy</a>
            <a href="https://github.com/willsouzaa/Cinetag-Router.git" className="btn fill" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="projeto">
          <div className="wrapper">
            <div className="banner-image" style={{ backgroundImage: `url(${Cinetag})` }}></div>
            <h3>Projeto 2</h3>
            <p>Descrição do projeto 2.</p>
          </div>
          <div className="button-wrapper">
            <a href="https://cinetag-five-sigma.vercel.app/" className="btn outline" target="_blank" rel="noreferrer">Deploy</a>
            <a href="https://github.com/willsouzaa/Cinetag-Router.git" className="btn fill" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
