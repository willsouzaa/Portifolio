import React from "react";
import { motion } from "framer-motion";
import "./Projetos.css";
import BarbeariaMedeirosImg from './Barbeariamedeiros.png';
import AtClinicImg from './AtClinic.JPG';
import AgropecuariaImg from './AgropecuariaPaulinha.JPG';

function Projetos() {
  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="container">
        {[{
          title: "AtClinic - Clínica de Estética",
          image: AtClinicImg,
          description: "Site desenvolvido para uma clínica de estética, oferecendo informações sobre serviços, galeria de fotos e um design moderno, utilizando HTML, CSS, JavaScript, Bootstrap e Google Fonts.",
          visitLink: "https://AMANDATELLESCLINIC.com.br/",
          githubLink: "https://github.com/usuario/AtClinic",
        }, 
        {
          title: "Barbearia Medeiros",
          image: BarbeariaMedeirosImg,
          description: "Site para a Barbearia Medeiros com design responsivo, apresentação da equipe e agendamentos via WhatsApp, desenvolvido com React.",
          visitLink: "https://barbeariamedeiros.com.br/",
          githubLink: "https://github.com/willsouzaa/Medeiros-Barbearia.git",
        },
        {
          title: "Agropecuária Paulinha",
          image: AgropecuariaImg,
          description: "Site voltado ao setor agrícola, com informações sobre produtos e serviços para lavoura e pecuária, desenvolvido com HTML, CSS, JavaScript e Bootstrap.",
          visitLink: "https://agropecuariapaulinha.com/",
          githubLink: "https://github.com/usuario/AgropecuariaPaulinha",
        }].map((projeto, index) => (
          <motion.div
            className="projeto flip-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front" style={{ backgroundImage: `url(${projeto.image})` }}>
                <h3>{projeto.title}</h3>
              </div>
              <div className="flip-card-back">
                <p>{projeto.description}</p>
                <div className="button-wrapper">
                  <a href={projeto.visitLink} className="btn outline" target="_blank" rel="noreferrer">
                    Visitar
                  </a>
                  <a href={projeto.githubLink} className="btn fill" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
