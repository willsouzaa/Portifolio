import React from 'react';
import './Habilidades.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Skills() {
  const boxVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [refHtml, inViewHtml] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refCss, inViewCss] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refJs, inViewJs] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refReact, inViewReact] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refGit, inViewGit] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refSql, inViewSql] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refMongo, inViewMongo] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refJava, inViewJava] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="skills-section" id="habilidades">
      <h2 className="heading">
        Minhas <strong>Habilidades</strong>
      </h2>

      <div className="skills-container">
        {/* HTML */}
        <motion.div
          ref={refHtml}
          className="skills-box html"
          variants={boxVariant}
          initial="hidden"
          animate={inViewHtml ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <i className="bx bxl-html5"></i>
          <h3>HTML</h3>
        </motion.div>

        {/* CSS */}
        <motion.div
          ref={refCss}
          className="skills-box css"
          variants={boxVariant}
          initial="hidden"
          animate={inViewCss ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <i className="bx bxl-css3"></i>
          <h3>CSS</h3>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          ref={refJs}
          className="skills-box javascript"
          variants={boxVariant}
          initial="hidden"
          animate={inViewJs ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <i className="bx bxl-javascript"></i>
          <h3>JavaScript</h3>
        </motion.div>

        {/* React */}
        <motion.div
          ref={refReact}
          className="skills-box react"
          variants={boxVariant}
          initial="hidden"
          animate={inViewReact ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <i className="bx bxl-react"></i>
          <h3>React</h3>
        </motion.div>

        {/* GitHub */}
        <motion.div
          ref={refGit}
          className="skills-box git"
          variants={boxVariant}
          initial="hidden"
          animate={inViewGit ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <i className="bx bxl-git"></i>
          <h3>GitHub</h3>
        </motion.div>

        {/* SQL */}
        <motion.div
          ref={refSql}
          className="skills-box sql"
          variants={boxVariant}
          initial="hidden"
          animate={inViewSql ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <i className="bx bxl-sql"></i>
          <h3>SQL</h3>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          ref={refMongo}
          className="skills-box mongo"
          variants={boxVariant}
          initial="hidden"
          animate={inViewMongo ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <i className="bx bxl-mongodb"></i>
          <h3>MongoDB</h3>
        </motion.div>

        {/* Java */}
        <motion.div
          ref={refJava}
          className="skills-box java"
          variants={boxVariant}
          initial="hidden"
          animate={inViewJava ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <i className="bx bxl-java"></i>
          <h3>Java</h3>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
