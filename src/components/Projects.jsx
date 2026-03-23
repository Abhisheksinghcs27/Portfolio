import React from 'react';
import './Projects.css';
import cv from '../assets/cv.png';
import acadify from '../assets/acadify.png';
import ecolux from '../assets/ecolux.png';

const Projects = () => {
  return (
    <section className="project" id="project">
      <p>PROJECTS</p>
      <h1>Featured Work</h1>
      <hr />
      <div className="info-pro">
        <p>Selected projects built to deliver secure workflows, education management,</p>
        <p>and full-stack booking experiences.</p>
      </div>
      <div className="projects-container">
        <div className="project-card">
          <img src={cv} alt="SAMARTH – Govt Scheme & DBT Management Platform" />
          <h3>SAMARTH – Govt Scheme & DBT Management Platform</h3>
          <p>Secure backend for beneficiary verification and scheme eligibility mapping, including RBAC, audit logging,
and DBT payment workflows. API-ready integrations for PFMS, DigiLocker, and Aadhaar.</p>
          <div className="skills">
            <a href="#">MongoDB</a>
            <a href="#">TypeScript</a>
            <a href="#">Node.js</a>
            <a href="#">Express.js</a>
          </div>
          <div className="btns">
            <a href="https://github.com/Abhisheksinghcs27/SAMARTH-DBT" className="btn"><i className="fab fa-github"></i> GitHub</a>
            <a href="https://samarth-dbt-brown.vercel.app/" className="btn"><i className="fas fa-external-link-alt"></i> Live Demo</a>
          </div>
        </div>
        <div className="project-card">
          <img src={acadify} alt="Acadify – Smart Educational Management Platform" />
          <h3>Acadify – Smart Educational Management Platform</h3>
          <p>QR-based attendance expanded to prevent proxy attendance. AI-powered suggestions for productive use of free
periods. Real-time dashboards for teachers and administrators.</p>
          <div className="skills">
            <a href="#">React.js</a>
            <a href="#">Tailwind CSS</a>
            <a href="#">Express.js</a>
            <a href="#">MongoDB</a>

          </div>
          <div className="btns">
            <a href="https://github.com/Abhisheksinghcs27/Acadify" className="btn"><i className="fab fa-github"></i> GitHub</a>
            <a href="https://acadify-frontend.vercel.app//" className="btn"><i className="fas fa-external-link-alt"></i> Live Demo</a>
          </div>
        </div>
        <div className="project-card">
          <img src={ecolux} alt="Ecoluxe – Salon Booking Web Application" />
          <h3>Ecoluxe – Salon Booking Web Application</h3>
          <p>EcoLux is a full-stack web application designed to modernize salon operations by enabling users to browse services, book appointments, and manage grooming schedules online.
          <br></br>The platform focuses on eco-friendly beauty services, promoting sustainable and chemical-free products..</p>
          <div className="skills">
            <a href="#">React.js</a>
            <a href="#">Tailwind CSS</a>
            <a href="#">Node.js</a>
            <a href="#">Express.js</a>
            <a href="#">MongoDB</a>
          </div>
          <div className="btns">
            <a href="https://github.com/abhisheksinghcs27/ecolux" className="btn"><i className="fab fa-github"></i> GitHub</a>
            <a href="https://ecolux-three.vercel.app/" className="btn"><i className="fas fa-external-link-alt"></i> Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
