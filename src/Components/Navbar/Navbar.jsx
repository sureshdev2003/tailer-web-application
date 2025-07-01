import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">TailorCraft</div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>

      <div className="nav-actions">
        <i className="fas fa-shopping-cart cart-icon"></i>
        <button className="login-btn">Login</button>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
