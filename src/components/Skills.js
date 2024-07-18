import React from 'react';
import './skills.css'; 
import rover from '../assets/rover2.png';
import cIcon from '../assets/c.png';
import cppIcon from '../assets/cpp.png';
import pythonIcon from '../assets/python.png';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import reactIcon from '../assets/react.png';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className='hologram'>
        <img src={rover} alt="Rover" className='rover' />
        <img src={rover} alt="Rover" className='rover2'/>
        <div className='tech'>
          <div className='skills-card'>
            <h3>Comprehensive knowledge in -</h3>
            <ul>
              <li>Data Structures and Algorithms</li>
              <li>OOPS Concept</li>
              <li>Operating System</li>
              <li>DBMS (with MySQL)</li>
            </ul>
            <h3>Programming languages -</h3>
            <div className='icons'>
              <img src={cIcon} alt="C" />
              <img src={cppIcon} alt="C++" />
              <img src={pythonIcon} alt="Python" />
            </div>
            <h3>Technologies -</h3>
            <div className='icons'>
              <img src={htmlIcon} alt="HTML" />
              <img src={cssIcon} alt="CSS" />
              <img src={reactIcon} alt="React" />
            </div>
          </div>
        </div>
        <div className='non-tech'>
          <div className='skills-card'>
            <ul>
              <li>Creative thinker</li>
              <li>Fast learner</li>
              <li>Strong leadership qualities</li>
              <li>Skilled in strategic analysis and planning</li>
              <li>Proficient in creating compelling and visually engaging PowerPoint presentations</li>
              <li>Strong communication skills - [Telugu, English, Hindi]</li>
              <li>Good experience in graphic design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
