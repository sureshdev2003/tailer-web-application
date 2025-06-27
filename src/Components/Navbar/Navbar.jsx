import { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "Services", "Gallery", "About", "Contact"];
  return (
    <div>
      <header className="navbar">
        <motion.div
          className="logo"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          TailorCraft
        </motion.div>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          {links.map((link, index) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
            >
              {link}
            </motion.a>
          ))}
        </nav>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "rotate1" : ""}`}></div>
          <div className={`bar ${isOpen ? "fade" : ""}`}></div>
          <div className={`bar ${isOpen ? "rotate2" : ""}`}></div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
