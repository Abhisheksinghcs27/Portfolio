import React from 'react';
import './About.css';
import img from '../assets/images/img.png';

const About = () => {
  return (
    <section className="about" id="about">
      <p id="about">ABOUT ME</p>
      <div className="title">
        <h1>Building Meaningful</h1>
        <h1>Technical Experiences</h1>
      </div>
    
      <div className="about-container">
        <div className="info-about">
          <div className="about-info">
            <p>
              Computer Science Engineering student with experience in Full Stack Development using MongoDB, Express.js, React.js, and Node.js.
              <br />
              Proficient in developing secure backend systems, REST APIs, and responsive web applications.
              <br />
              Built projects including DBT management platforms, smart education systems, and business web applications.
            </p>
            <p>
              Seeking opportunities to apply software engineering, system design, and problem-solving skills in real-world development environments.
              <br />
              I focus on continuous learning, clean code, and meaningful UI/UX to deliver high-quality solutions.
            </p>
          </div>
            <div className="hrrr">
        <hr />
      </div>
          <h2>What Drives Me</h2>
          <div className="card">
            <div className="c1">
              <h3><i className="fa-solid fa-code"></i> Languages</h3>
              <p>Python, JavaScript, TypeScript, HTML5, CSS3</p>
            </div>
            <div className="c1">
              <h3><i className="fa-solid fa-graduation-cap"></i> Education</h3>
              <p>B.Tech (2023–2027) - Sagar Institute of Research and Technology, Bhopal (CGPA: 7.0/10)</p>
            </div>
            <div className="c1">
              <h3><i className="fa-solid fa-folder-open"></i> Projects</h3>
              <p>SAMARTH (DBT), Acadify (Education), Ecoluxe (Salon Booking)</p>
            </div>
          </div>
        </div>
        <img src={img} alt="" />
      </div>
      
    </section>
  );
};

export default About;
