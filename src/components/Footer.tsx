import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Eywa. All rights reserved.</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer
          "><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
