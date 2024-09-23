import React from 'react';
import './SobreMim.css';
import Perfil from "./îmagem-perfil.png"
function AboutMe() {
  return (
    <section id="sobre-mim" className="about-me">
      
      <div className="about-content">
        <div className="description">
          <h1>Olá! Bem-vindo(a) ao meu portfólio!</h1>
          <p>Meu nome é Paulo, sou desenvolvedor full stack com experiência em React, Node.js, JavaScript, SQL e MySQL. Aqui, você encontrará uma seleção dos meus principais projetos, desde soluções web até sistemas mais complexos, desenvolvidos ao longo da minha jornada acadêmica e como freelancer.
          Sinta-se à vontade para explorar meus trabalhos e entrar em contato. Será um prazer compartilhar mais sobre minhas habilidades e discutir futuras colaborações!</p>
        </div>
        <img src={Perfil} alt="Foto do Usuário" className="profile-image" />
      </div>
    </section>
  );
}

export default AboutMe;
