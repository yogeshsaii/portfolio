import React from 'react';
import instagram from '../assets/instagram.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import './header.css'; 

const Header = () => {
  return (
    <header>
      <h2>Hello!! This is - </h2>
      <h1>
        Yogesh sai . Dondapati
      </h1>
      <h3>- Dive into my professional profile for a comprehensive overview -</h3>
      <nav>
        <ul>
          <li><a href="#about" class="special-link">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact" >Contact</a></li>
        </ul>
      </nav>  
      <div className="social-media">
      <a href="https://github.com/yogeshsaii" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="social-logo" />
        </a>
        <a href="https://instagram.com/yogeshsai__"   target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="social-logo" />
        </a>
        <a href="https://linkedin.com/in/yogesh-sai-d-a33045bc7809/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="social-logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
