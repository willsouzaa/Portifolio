import React, { useState, useEffect, useRef } from 'react';
import './Header.css'; // Importa o arquivo de estilos CSS para o componente
import logo from "./logo.png"; // Importa a imagem do logo
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // Importa ícones do react-icons
import { Link as ScrollLink } from 'react-scroll'; // Importa Link do react-scroll para rolagem suave
import { Link } from 'react-router-dom'; // Importa Link do react-router-dom para navegação entre páginas

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar se o menu está aberto ou fechado
  const menuRef = useRef(null); // Ref para o menu, usado para detectar cliques fora do menu

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState); // Alterna o estado do menu entre aberto e fechado
  };

  const handleClickOutside = (event) => {
    // Função para fechar o menu se o usuário clicar fora dele
    if (menuRef.current && !menuRef.current.contains(event.target) && menuOpen) {
      setMenuOpen(false); // Fecha o menu
    }
  };

  useEffect(() => {
    // Adiciona um evento de clique para fechar o menu
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove o evento ao desmontar o componente
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]); // O efeito depende do estado menuOpen

  return (
    <header className="header">
      <div className="contact" aria-label="Contact Information">
        {/* Seção de contatos com ícones de redes sociais */}
        <a href="https://api.whatsapp.com/send?phone=48988405365" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp color="#6ec0d4" size={24} />
        </a>
        <a href="https://www.linkedin.com/in/paulo-amancio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin color="#6ec0d4" size={24} />
        </a>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo do Portfólio" />
      </div>
      <span className="menu-anchor" onClick={toggleMenu} aria-label="Menu Toggle">
        {/* Botão para abrir/fechar o menu */}
        <span></span>
        <span></span>
        <span></span>
      </span>
      <nav ref={menuRef} className={`nav ${menuOpen ? 'menu-active' : ''}`} aria-hidden={!menuOpen}>
        {/* Menu de navegação com links para as seções */}
        <ul>
          <li><ScrollLink to="header" smooth={true} duration={500}>Home</ScrollLink></li>
          <li><ScrollLink to="projetos" smooth={true} duration={500}>Projetos</ScrollLink></li>
          <li><ScrollLink to="habilidades" smooth={true} duration={500}>Habilidades</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} duration={500}>Contato</ScrollLink></li>
          <li><Link to="/favoritos">Ferramentas</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; // Exporta o componente para uso em outras partes do projeto
