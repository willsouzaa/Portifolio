import React from 'react'; // Importa a biblioteca React
import './Footer.css'; // Importa o arquivo de estilos CSS para o rodapé

// Componente funcional Footer
function Footer() {
  return (
    <footer className="footer"> {/* Elemento de rodapé com classe footer */}
      <div className="footer-content"> {/* Div para o conteúdo do rodapé */}
        <p>&copy; {new Date().getFullYear()} Paulo Amancio. Todos os direitos reservados.</p> {/* Exibe o ano atual e a mensagem de direitos autorais */}
        <div className="social-links"> {/* Div para os links sociais */}
          <a href="https://github.com/willsouzaa" target="_blank" rel="noopener noreferrer">GitHub</a> {/* Link para o GitHub */}
          <a href="https://www.linkedin.com/in/paulo-amancio/" target="_blank" rel="noopener noreferrer">LinkedIn</a> {/* Link para o LinkedIn */}
        </div>
      </div>
    </footer>
  );
}

export default Footer; // Exporta o componente Footer para ser utilizado em outros locais
