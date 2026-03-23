import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    const backToTop = document.createElement('div');
    backToTop.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    backToTop.id = "back-to-top";
    document.body.appendChild(backToTop);

    backToTop.style.cssText = `
      position: fixed;
      bottom: 40px;
      right: 40px;
      background: #474af0;
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 1000;
      transition: transform 0.3s ease;
    `;

    const handleScroll = () => {
      if (window.scrollY > 500) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }

      const revealElements = document.querySelectorAll('.home-container, .about-container, .projects-container, .services-container, .contact-content');
      revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active-reveal');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // ensure initial reveal without waiting for a scroll event

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    backToTop.addEventListener('mouseover', () => backToTop.style.transform = 'scale(1.2)');
    backToTop.addEventListener('mouseout', () => backToTop.style.transform = 'scale(1)');

    const cards = document.querySelectorAll('.project-card, .c1, .service-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-8px) scale(1.05)');
      card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
    });

    const typingElement = document.querySelector('.info-home h3');
    if (typingElement) {
      const words = ["Full Stack Developer", "UI/UX Designer", "React Developer"];
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;

      function type() {
        const currentWord = words[wordIndex];
        let displayedText = currentWord.substring(0, charIndex);

        typingElement.innerHTML = displayedText + '<span class="cursor">|</span>';

        if (!isDeleting && charIndex < currentWord.length) {
          charIndex++;
          setTimeout(type, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
          charIndex--;
          setTimeout(type, typingSpeed / 2);
        } else {
          isDeleting = !isDeleting;
          if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
          }
          setTimeout(type, 1000);
        }
      }
      type();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeChild(backToTop);
    };
  }, [loading]);

  return (
    <>
      {loading ? (
        <div id="loading-screen">
          <div className="loading-content">
            <i className="fa-solid fa-laptop-code fa-5x main-icon hidden"></i>
            <h1 id="loading-text" className="hidden">MY PROFILE</h1>
            <div className="sub-icons">
              <i className="fa-brands fa-github fa-2x hidden"></i>
              <i className="fa-solid fa-code fa-2x hidden"></i>
              <i className="fa-solid fa-user fa-2x hidden"></i>
            </div>
            <h2 id="designer-text" className="hidden">Designed by Abhishek</h2>
          </div>
        </div>
      ) : (
        <div id="main-page">
          <Header />
          <Home />
          <About />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;