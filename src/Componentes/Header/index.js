import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from "./logo.png";
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll'; // Importando Link do react-scroll
import { Link } from 'react-router-dom'; // Usando react-router-dom para rotas

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="contact">
        <a href="https://api.whatsapp.com/send?phone=48988405365" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp color="#6ec0d4" size={24} />
        </a>
        <a href="https://www.linkedin.com/in/paulo-amancio/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin color="#6ec0d4" size={24} />
        </a>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo do Portfólio" />
      </div>
      <span className="menu-anchor" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </span>
      <nav ref={menuRef} className={`nav ${menuOpen ? 'menu-active' : ''}`}>
        <ul>
          <li><ScrollLink to="header" smooth={true} duration={500}>Home</ScrollLink></li> {/* Usando react-scroll para scroll suave */}
          <li><ScrollLink to="projetos" smooth={true} duration={500}>Projetos</ScrollLink></li>
          <li><ScrollLink to="habilidades" smooth={true} duration={500}>Habilidades</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} duration={500}>Contato</ScrollLink></li>
          <li><Link to="/favoritos">Ferramentas</Link></li> {/* Usando react-router-dom para navegação entre páginas */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
