import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from "./logo.png";
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // Importar o ícone do WhatsApp

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
          <FaWhatsapp color="#6ec0d4" size={24} /> {/* Ícone do WhatsApp */}
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
          <li><a href="#home">Home</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><a href="#Ferramentas">Ferramentas</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
