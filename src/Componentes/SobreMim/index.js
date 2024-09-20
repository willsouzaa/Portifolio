import React from 'react';
import './SobreMim.css'; // Importando o CSS para o Sobre Mim
import Perfil from "./îmagem-perfil.png"
function AboutMe() {
  return (
    <section id="sobre-mim" className="about-me">
      <h2>Sobre Mim</h2>
      <div className="about-content">
        <div className="description">
          <p>Olá! Sou um desenvolvedor apaixonado por criar soluções inovadoras. Tenho experiência em tecnologias como React, Node.js, e Java. Estou sempre buscando aprender e melhorar minhas habilidades.</p>
        </div>
        <img src={Perfil} alt="Foto do Usuário" className="profile-image" />
      </div>
    </section>
  );
}

export default AboutMe;
