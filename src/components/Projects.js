import React from 'react';
import './projects.css'

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>BUS RESERVATION SYSTEM </h3>
          <p>Led the given team in designing and developing a reservation system based on operating system.</p>
          <p>Successfully delivered a functional system with  user authentication, dynamic seat selection & dynamic pricing .</p>
          <p>
          Concepts used: OS, OOPS, SOCKET PROGRAMMING.

          </p>
          <a href="https://github.com/shelobel/Bus_Reservation_System" target="_blank" rel="noopener noreferrer">  Github/Bs</a>
        </div>
        <div className="project">
          <h3>UNIVERSITY DATA PROJECT</h3>
          <p>Developed a universities' database project.</p>
          <p>Implemented filters for users to access rankings of global universities in various categories.</p>
          <p>Concepts used: Database management, SQL, react.js, javascript.</p>
        </div>
        <div className="project">
          <h3>OASIS INFOBYTE INTERN PROJECTS</h3>
          <p> Developed a feature-rich to-do web application with CRUD    functionalities.</p>
          <p>Implemented a secure login authentication system using JavaScript and Node.js.</p>
          <p>Developed a Calculator web application and a tribute to M.S.Dhoni. </p>
          <a href="https://github.com/yogeshsaii/OIBSIP" target="_blank" rel="noopener noreferrer">  Github/OIBSIP</a>
          
        </div>
        <div className="project">
          <h3>BHARAT INTERN PROJECTS</h3>
          <p>Created a weather report website using HTML, CSS, JavaScript, integrating an API key to fetch & display
          weather data.</p><p>Developed a Netflix clone homepage using front-end technologies.</p>
          <a href="https://github.com/yogeshsaii/Bharat-intern" target="_blank" rel="noopener noreferrer">  Github/Bharat-intern-projects</a>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
