import React from "react";
import { motion } from "framer-motion"; // Importando animações do framer-motion
import "./Projetos.css"; // Importando estilos específicos do componente Projetos
import Cinetag from './Barbeariamedeiros.png'; // Imagem do projeto Barbearia Medeiros
import Organo from './Organo.JPG'; // Imagem do projeto Organo

function Projetos() {
  return (
    <section id="projetos"> {/* Seção principal para os projetos */}
      <h2>Meus Projetos</h2> {/* Título da seção */}
      <div className="container"> {/* Container para os projetos */}
        {[ // Array de objetos contendo os dados dos projetos
          {
            title: "Barbearia Medeiros", // Título do projeto
            image: Cinetag, // Imagem do projeto
            description: "O site da Barbearia Medeiros oferece uma experiência digital completa para quem busca serviços de qualidade em cortes de cabelo e cuidados com a barba. Com um design responsivo e moderno, os usuários podem facilmente navegar entre os diferentes serviços disponíveis, incluindo cortes personalizados, cuidados com a barba, cortes infantis e luzes. O site também apresenta a equipe da barbearia, permitindo que os clientes conheçam os profissionais que estarão à disposição. Com um link direto para agendamentos via WhatsApp, a interação é facilitada, proporcionando uma experiência conveniente e acessível.\n\nTecnologias Utilizadas: React, CSS, HTML", // Descrição do projeto
            visitLink: "https://barbeariamedeiros.com.br/", // Link para o site do projeto
            githubLink: "https://github.com/willsouzaa/Medeiros-Barbearia.git", // Link para o repositório do GitHub
          },
          {
            title: "Organo", // Título do projeto
            image: Organo, // Imagem do projeto
            description: "Este projeto é uma aplicação web construída com React para gerenciar colaboradores de uma empresa, categorizando-os em diferentes times. A aplicação oferece um formulário dinâmico para adicionar novos colaboradores e organiza visualmente as equipes com cores personalizadas.", // Descrição do projeto
            visitLink: "https://organo-cadastro-de-funcionarios-react-e-javascript.vercel.app/", // Link para o site do projeto
            githubLink: "https://github.com/willsouzaa/Organo-cadastro-de-funcionarios-react-e-javascript", // Link para o repositório do GitHub
          },
        ].map((projeto, index) => ( // Mapeando os projetos para renderizar os cartões
          <motion.div
            className="projeto" // Classe CSS para o projeto
            key={index} // Chave única para cada projeto
            initial={{ opacity: 0, scale: 0.8 }} // Estado inicial da animação
            animate={{ opacity: 1, scale: 1 }} // Animação para mostrar o cartão
            transition={{ duration: 0.5 }} // Duração da animação
            whileHover={{ scale: 1.05 }} // Efeito ao passar o mouse
          >
            <div className="wrapper"> {/* Wrapper para o conteúdo do projeto */}
              <div className="banner-image" style={{ backgroundImage: `url(${projeto.image})` }}></div> {/* Imagem de fundo do projeto */}
              <h3>{projeto.title}</h3> {/* Título do projeto */}
              <p>{projeto.description}</p> {/* Descrição do projeto */}
            </div>
            <div className="button-wrapper"> {/* Wrapper para os botões */}
              <a href={projeto.visitLink} className="btn outline" target="_blank" rel="noreferrer">Visitar</a> {/* Botão para visitar o projeto */}
              <a href={projeto.githubLink} className="btn fill" target="_blank" rel="noreferrer">GitHub</a> {/* Botão para o GitHub do projeto */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projetos; // Exportando o componente Projetos
