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

          <p className="stringDescricao">
  Olá! Meu nome é <strong>Paulo</strong>, estou no quarto período da graduação em Desenvolvimento Full Stack e atualmente trabalho como freelancer, desenvolvendo sites e aplicações web para ganhar experiência prática. Tenho habilidades em React, Node.js, JavaScript, SQL e MySQL, e utilizo esses conhecimentos para criar soluções eficientes e funcionais. Neste portfólio, apresento uma seleção dos meus principais projetos, que refletem minha evolução como desenvolvedor. Estou em busca de uma oportunidade de estágio para iniciar minha carreira no mercado de tecnologia. Sinta-se à vontade para explorar meus trabalhos e entrar em contato. Será um prazer colaborar com você!
</p>

        </div>
        <img src={Perfil} alt="Foto do Usuário" className="profile-image" />
      </div>
    </section>
  );
}

export default AboutMe;
