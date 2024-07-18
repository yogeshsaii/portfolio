import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <ReactFullpage
      scrollingSpeed={700}
      navigation
      navigationPosition="right"
      navigationTooltips={['Intro', 'About', 'Experience', 'Projects', 'Skills', 'Contact']}
      showActiveTooltip
      easingcss3="cubic-bezier(0.86, 0, 0.07, 1)"
      sectionsColor={['#282c34', '#282c34', '#282c34', '#282c34', '#282c34']}
      afterLoad={(origin, destination, direction) => {
        const destinationElement = destination.item;
        if (direction === 'down') {
          destinationElement.classList.add('fp-down');
          setTimeout(() => {
            destinationElement.classList.remove('fp-down');
          }, 700);
        } else if (direction === 'up') {
          destinationElement.classList.add('fp-up');
          setTimeout(() => {
            destinationElement.classList.remove('fp-up');
          }, 700);
        }
      }}
      render={({ state, fullpageApi }) => (
        <div id="fullpage">
          <div className="section">
            <Header />
          </div>
          <div className="section">
            <About />
          </div>
          <div className="section">
            <Experience />
          </div>
          <div className="section">
            <Projects />
          </div>
          <div className="section">
            <Skills />
          </div>
          <div className="section">
            <Contact />
          </div>
        </div>
      )}
    />
  );
}

export default App;
