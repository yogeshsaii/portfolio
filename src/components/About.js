import React from 'react';
import profile from '../assets/profile.jpg';
import './about.css';

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <div className="intro">
        <div className="info">
          <p>  
            I'm a Software Engineer with strong programming skills & web developer
            with a passion for creating beautiful and functional websites.</p><p> Computer
            science and engineering student at NIT Durgapur (batch 2021-2025).
          </p>  
          <p></p>
        </div>
        <img src={profile} alt="Profile" className="profile-img" />
      </div>
    </div>
  );
};

export default About;
  