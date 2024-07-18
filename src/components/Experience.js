import React from 'react';
import './experience.css'; // Ensure this path is correct
import logo1 from '../assets/jpmc.png';
import logo2 from '../assets/Bharat.png';
import logo3 from '../assets/Oasis.png';
import logo4 from '../assets/walmart.png';
const Experience = () => {
  const experiences = [
    {
      date: "June ' 2023",
      logo: logo1, 
      description: "Virtual Experience (Forage) at J.P. Morgan - During my software engineering virtual experience with J.P. Morgan, I set up a local development environment and fixed broken files in the repository to ensure proper web application output. I utilized J.P. Morgan Chase's Perspective library to create a visually clear live graph for real-time data monitoring by traders. These experiences sharpened my skills in software development and utilizing advanced tools in a professional setting."
    },
    {
      date: "June ' 2024",
      logo: logo2,
      description: "Bharat Intern - During my internship with Bharat in June 2024, I focused on front-end development projects. I developed a weather report website using HTML, CSS, JavaScript and integrating an API for real-time weather data. Additionally, I created a Netflix clone homepage, demonstrating proficiency in modern front-end technologies and user interface design. These projects enhanced my skills in web development and UI/UX design, preparing me for future challenges in the field."
    },
    {
      date: "Jun-July ' 24",
      logo: logo3,
      description: "Oasis Infobyte - During my internship at Oasis Infobyte in June 2024, I focused on developing responsive web applications and enhancing user experiences. I led the creation of a responsive calculator using HTML, CSS, and JavaScript, and designed a visually appealing tribute webpage for M.S. Dhoni. I also developed a feature-rich to-do application with CRUD functionalities using React.js. Additionally, I implemented a secure login system with JavaScript and Node.js, ensuring robust user authentication and session management. These experiences enhanced my skills in front-end development, UI/UX design, and backend integration."
    },
    {
      date: "June ' 2024",
      logo: logo4,
      description: " Virtual Experience (Forage) at Walmart USA - During my software engineering virtual experience with Walmart USA, I completed the Advanced Software Engineering Job Simulation, solving complex technical projects across teams. I developed a novel Java-based heap data structure for Walmart’s shipping department, showcasing strong algorithmic skills. Additionally, I designed UML class and entity relationship diagrams for optimizing system functionalities and database design, respectively. These experiences enhanced my software engineering capabilities in a corporate setting.."
    },
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="timeline-date">{exp.date}</div>
            <div className="timeline-logo">
              <img src={exp.logo} alt="Company Logo" />
            </div>
            <div className="timeline-content">
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
