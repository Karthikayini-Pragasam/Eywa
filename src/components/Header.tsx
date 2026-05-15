import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Eywa</Link>
      </div>
      <nav>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="login-container">
        <Link to="/login" className="login-btn">Login</Link>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </header>
  );
};

export default Header;
