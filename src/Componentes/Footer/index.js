import React from 'react';
import './Footer.css'; // Importando o CSS para o Footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/seu-usuario" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
