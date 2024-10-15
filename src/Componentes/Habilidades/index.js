import React from 'react'; // Importa a biblioteca React
import './Habilidades.css'; // Importa o arquivo de estilos CSS para a seção de habilidades
import { motion } from 'framer-motion'; // Importa o Framer Motion para animações
import { useInView } from 'react-intersection-observer'; // Importa o Intersection Observer para detectar visibilidade

function Skills() {
  // Variantes de animação para cada caixa de habilidade
  const boxVariant = {
    hidden: { opacity: 0, y: 50 }, // Estado inicial (invisível)
    visible: { opacity: 1, y: 0 }, // Estado final (visível)
  };

  // Hook para monitorar se cada caixa de habilidade está na área visível da página
  const [refHtml, inViewHtml] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refCss, inViewCss] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refJs, inViewJs] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refReact, inViewReact] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refGit, inViewGit] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refSql, inViewSql] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="services" id="habilidades"> {/* Seção de habilidades */}
      <h2 className="heading">
        Minhas <strong>Habilidades</strong> {/* Cabeçalho da seção */}
      </h2>

      <div className="services-container"> {/* Container para as caixas de habilidades */}
        {/* HTML */}
        <motion.div
          ref={refHtml} // Referência para a caixa de HTML
          className="services-box"
          variants={boxVariant} // Variantes de animação
          initial="hidden" // Estado inicial (invisível)
          animate={inViewHtml ? 'visible' : 'hidden'} // Muda para visível se estiver na vista
          transition={{ duration: 0.5, delay: 0.1 }} // Transição de animação
        >
          <i className="bx bxl-html5"></i> {/* Ícone do HTML */}
          <h3>HTML</h3> {/* Título da habilidade */}
        </motion.div>

        {/* CSS */}
        <motion.div
          ref={refCss} // Referência para a caixa de CSS
          className="services-box"
          variants={boxVariant}
          initial="hidden"
          animate={inViewCss ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.2 }} // Delay para a animação
        >
          <i className="bx bxl-css3"></i> {/* Ícone do CSS */}
          <h3>CSS</h3> {/* Título da habilidade */}
        </motion.div>

        {/* JavaScript */}
        <motion.div
          ref={refJs} // Referência para a caixa de JavaScript
          className="services-box"
          variants={boxVariant}
          initial="hidden"
          animate={inViewJs ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <i className="bx bxl-javascript"></i> {/* Ícone do JavaScript */}
          <h3>JavaScript</h3> {/* Título da habilidade */}
        </motion.div>

        {/* React */}
        <motion.div
          ref={refReact} // Referência para a caixa de React
          className="services-box"
          variants={boxVariant}
          initial="hidden"
          animate={inViewReact ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <i className="bx bxl-react"></i> {/* Ícone do React */}
          <h3>React</h3> {/* Título da habilidade */}
        </motion.div>

        {/* GitHub */}
        <motion.div
          ref={refGit} // Referência para a caixa de GitHub
          className="services-box"
          variants={boxVariant}
          initial="hidden"
          animate={inViewGit ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <i className="bx bxl-git"></i> {/* Ícone do GitHub */}
          <h3>GitHub</h3> {/* Título da habilidade */}
        </motion.div>

        {/* SQL */}
        <motion.div
          ref={refSql} // Referência para a caixa de SQL
          className="services-box"
          variants={boxVariant}
          initial="hidden"
          animate={inViewSql ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <i className="bx bxl-sql"></i> {/* Ícone do SQL */}
          <h3>SQL</h3> {/* Título da habilidade */}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills; // Exporta o componente Skills para uso em outros arquivos
