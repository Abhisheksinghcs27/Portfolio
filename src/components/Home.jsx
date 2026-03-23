import React from 'react';
import './Home.css';
import img2 from '../assets/images/img2.png';
import resume from '../assets/resume.pdf';

const Home = () => {
  return (
    <section className="home" id="home">
      <p className="home-p">
        <span className="home-s">. </span>Available for work
      </p>
      <div className="home-container">
        <div className="home-section">
          <div className="info-home">
            <h1>Hi, I'm Abhishek Singh</h1>
            <h3>MERN Full Stack Developer</h3>
            <div className="info-p">
              <p>Experience in Full Stack Development using MongoDB, Express.js, React.js, and Node.js.</p>
              <p>Proficient in building secure backend systems, REST APIs, and responsive web applications.</p>
              <p>Projects include DBT management platforms, smart education systems, and business web apps.</p>
            </div>
            <div className="info-p2">
              <p><i className="fa-solid fa-location-dot"></i> Bhopal, Madhya Pradesh, India</p>
              <p><i className="fa-solid fa-briefcase"></i> Available Now</p>
            </div>
            <div className="btnn">
              <button className="btn-home1" onClick={() => window.open('https://wa.me/+917566902081', '_blank')}><i className="fa-solid fa-arrow-right"></i> Hire Me</button>
              <button className="btn-home2" onClick={() => window.open(resume, '_blank')}><i className="fa-solid fa-download"></i> Download CV</button>
            </div>
            <div className="hhr">
              <hr />
            </div>
            <div className="follow">
              <p className="followw">Follow me:</p>
              <ul>
                <li><a href="https://github.com/Abhisheksinghcs27"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/explore-abhishek-singh/"><i className="fa-brands fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <img src= {img2} width={450} height={650} alt="" />
      </div>
    </section>
  );
};

export default Home;
