import React from 'react';
import './Habilidades.css'; // Importando o CSS para Habilidades

function Skills() {
  return (
    <section class="services" id="habilidades">
        <h2 class="heading"> Minhas <strong>Habilidades</strong></h2>

        <div className="services-container">
    <div className="html"><h3>HTML</h3></div>
    <div className="css"><h3>CSS</h3></div>
    <div className="javascript"><h3>JavaScript</h3></div>
    <div className="react"><h3>React</h3></div>
    <div className="git"><h3>Git</h3></div>
  </div>
    </section>
  );
}

export default Skills;
