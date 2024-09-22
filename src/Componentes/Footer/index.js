import React from 'react';
import './Footer.css'; // Importando o CSS para o Footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Paulo amancio. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://github.com/willsouzaa" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/paulo-amancio/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
