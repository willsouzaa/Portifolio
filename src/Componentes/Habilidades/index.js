import React from 'react';
import './Habilidades.css';

function Skills() {
  return (
    <section class="services" id="habilidades">
        <h2 class="heading"> Minhas <strong>Habilidades</strong></h2>

        <div className="services-container">
        <div class="services-box">
                <i class='bx bxl-html5' ></i>
                <h3>HTML</h3>
            </div>

            <div class="services-box">
                <i class='bx bxl-css3' ></i>
                <h3>CSS</h3>
            </div>

            <div class="services-box">
                <i class='bx bxl-javascript' ></i>
                <h3>Javascript</h3>
            </div>

            <div class="services-box">
                <i class='bx bxl-react'></i>
                <h3>React</h3>
            </div>

            <div class="services-box">
                 <i class='bx bxl-git'></i>
                <h3>GitHub</h3>
            </div>
            <div class="services-box">
                <i class='bx bxl-sql' ></i>
                <h3>SQL</h3>
            </div>
    
  </div>
    </section>
  );
}

export default Skills;
