import React from 'react';
import './SobreMim.css';
import Perfil from './îmagem-perfil.png';
import { ReactTyped } from 'react-typed';

function AboutMe() {
  return (
    <section id="sobre-mim" className="about-me">
      <div className="about-content">
        <div className="description">
          {/* Adicionando a animação de digitação no título */}
          <h1 className='stringName'>
            <ReactTyped
              strings={[
                'Olá! Bem-vindo(a) ao meu portfólio!'
              ]}
              typeSpeed={100} // Velocidade de digitação
              backSpeed={30} // Velocidade para apagar
            />
          </h1>

          <p className='stringDescriçao'>
            Meu nome é <strong>Paulo</strong>, sou desenvolvedor full stack com experiência em React, Node.js, JavaScript, SQL e MySQL. Aqui, você encontrará uma seleção dos meus principais projetos, desde soluções web até sistemas mais complexos, desenvolvidos ao longo da minha jornada acadêmica e como freelancer. Sinta-se à vontade para explorar meus trabalhos e entrar em contato. Será um prazer compartilhar mais sobre minhas habilidades e discutir futuras colaborações!
          </p>
        </div>
        <img src={Perfil} alt="Foto do Usuário" className="profile-image" />
      </div>
    </section>
  );
}

export default AboutMe;
