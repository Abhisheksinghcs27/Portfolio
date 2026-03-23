
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 80,
      behavior: 'smooth'
    });

    setActiveLink(targetId);
  };

  return (
    <header className="header-list">
      <div className="div-list ">
        <ul className="ul-list">
          <li className={activeLink === 'home' ? 'active' : ''}>
            <i className="fa-regular fa-house"></i>
            <a href="#home" onClick={e => handleLinkClick(e, 'home')}>Home</a>
          </li>
          <li className={activeLink === 'about' ? 'active' : ''}>
            <i className="fa-regular fa-address-card"></i>
            <a href="#about" onClick={e => handleLinkClick(e, 'about')}>About</a>
          </li>
          <li className={activeLink === 'project' ? 'active' : ''}>
            <i className="fa-regular fa-folder-open"></i>
            <a href="#project" onClick={e => handleLinkClick(e, 'project')}>Projects</a>
          </li>
          <li className={activeLink === 'services' ? 'active' : ''}>
            <i className="fa-solid fa-code"></i>
            <a href="#services" onClick={e => handleLinkClick(e, 'services')}>Services</a>
          </li>
          <li className={activeLink === 'contact' ? 'active' : ''}>
            <i className="fa-regular fa-envelope"></i>
            <a href="#contact" onClick={e => handleLinkClick(e, 'contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
