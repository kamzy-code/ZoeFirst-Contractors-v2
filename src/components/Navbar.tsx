import { Link } from "react-router-dom";
import { useState } from "react";

interface NavBarProps {
  isNavOpen?: boolean;
  toggleNavMenu?: () => void;
  containerClasssName?: string;
  navItemsClassName?: string;
  hamburgerClassName?: string;
  logoSrc: string
}

function NavBar({isNavOpen, toggleNavMenu, containerClasssName, navItemsClassName, hamburgerClassName, logoSrc}: NavBarProps) {

  const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  toggleNavMenu && toggleNavMenu();
};

  return (
    <nav className={containerClasssName}>
      <img className="navLogo" src={logoSrc} alt=""/>

      <div className={hamburgerClassName ? hamburgerClassName : ""} onClick={toggleNavMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`${navItemsClassName} ${isNavOpen ? 'open' : ''}`}>
        <Link to="/" className="navItem"  onClick={() => scrollToSection("home")}>
          Home
        </Link>
        <Link to="/" className="navItem" onClick={() => scrollToSection("about")}>
          About
        </Link>
        <Link to="/" className="navItem" onClick={() => scrollToSection("services")}>
          Services
        </Link>
        <Link to="/" className="navItem" onClick={() => scrollToSection("contact")}>
          Contact
        </Link>
        <Link to="/" className="navItem" onClick={() => scrollToSection("gallery")}>
          Gallery
        </Link>
      </div>
    </nav>
    
  );
}

export default NavBar;
