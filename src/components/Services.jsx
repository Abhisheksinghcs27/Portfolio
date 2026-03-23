import React from 'react';
import './Services.css';
import web from '../assets/images/web.svg';
import app from '../assets/images/app.svg';
import dm from '../assets/images/dm.svg'; 
import seo from '../assets/images/seo.svg';

const Services = () => {
  return (
    <section className="services" id="services">
      <span>SERVICES</span>
      <h2>Features & Services</h2>
      <hr />
      <div className="services-container">
        <div className="service-card">
          <div className="loader"></div>
          <img src={web} alt="Web Development" />
          <h3 >Full Stack Development</h3>
          <p>Full Stack Development using MongoDB, Express.js, React.js, and Node.js.</p>
        </div>
        <div className="service-card">
          <div className="loader"></div>
          <img src={app} alt="Graphics Design" />
          <h3>Backend & REST APIs</h3>
          <p>Secure backend systems, REST API design, and API integrations for real-world workflows.</p>
        </div>
        <div className="service-card">
          <div className="loader"></div>
          <img src={dm} alt="Software Development" />
          <h3>React Developer</h3>
          <p>React Developer using React.js, Tailwind CSS, and Node.js.</p>
        </div>
        <div className="service-card">
          <div className="loader"></div>
          <img src={seo} alt="UI/UX" />
          <h3>UI/UX</h3>
          <p>Responsive UI with clean, meaningful design using Tailwind CSS and design tools.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;