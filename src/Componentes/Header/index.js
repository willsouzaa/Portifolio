import React from 'react';
import './Header.css'; // Importando o CSS para o Header
import logo from "./logo.png";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo do Portfólio" />
      </div>
      <nav className="nav">
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
