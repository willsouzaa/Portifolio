import React from "react";
import "./Projetos.css";
import Cinetag from './cinetag.JPG';

function Projetos () {
    return(
        <section id="projetos">
            <h2>Meus Projetos</h2>
            <div className="projetos-container">
            
                <div className="projeto">
                <img src={Cinetag} alt="cinetag" />
                <div className="projeto-info">
                    <h3>Cinetag</h3>
                    <p>Cinetag é um aplicativo web construído com React, utilizando o Create React App para configuração inicial.</p>
                    <a href="https://cinetag-five-sigma.vercel.app/" class="btn-deploy" target="_blank">Deploy</a>
                    <a href="https://github.com/willsouzaa/Cinetag-Router.git" class="btn-github" target="_blank">GitHub</a>
                </div>
                </div>
                <div className="projeto">
                <img src={Cinetag} alt="cinetag" />
                <div className="projeto-info">
                    <h3>Projeto 1 </h3>
                    <p>Descriçao</p>
                    <a href="https://cinetag-five-sigma.vercel.app/" class="btn-deploy" target="_blank">Deploy</a>
                    <a href="https://github.com/willsouzaa/Cinetag-Router.git" class="btn-github" target="_blank">GitHub</a>
                </div>
                </div>
                <div className="projeto">
                <img src={Cinetag} alt="cinetag" />
                <div className="projeto-info">
                    <h3>Projeto 1 </h3>
                    <p>Descriçao</p>
                    <a href="https://cinetag-five-sigma.vercel.app/" class="btn-deploy" target="_blank">Deploy</a>
                    <a href="https://github.com/willsouzaa/Cinetag-Router.git" class="btn-github" target="_blank">GitHub</a>
                </div>
                </div>

            </div>
        </section>
    )
}

export default Projetos;