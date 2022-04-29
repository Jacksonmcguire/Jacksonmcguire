import { About } from '../About/About';
import { Projects } from '../Projects/Projects';
import { Experience } from '../Experience/Experience';
import { FiLinkedin, FiGithub, FiArrowDownCircle, FiMail } from "react-icons/fi";

import {
  BrowserRouter as Router
} from "react-router-dom";import './App.css';
import { NavHashLink } from 'react-router-hash-link';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h1>Jackson McGuire</h1>
        <NavHashLink smooth to="#about">About</NavHashLink>
        <NavHashLink smooth to="#projects">Projects</NavHashLink>
        <NavHashLink smooth to="#experience" className="resume-link">Experience</NavHashLink>
      </header>
      <main>
      <aside>
        <FiLinkedin aria-label="linked in" onClick={() => window.open("https://www.linkedin.com/in/jackson-mcguire/", '_blank')}></FiLinkedin>
        <FiGithub aria-label="Github" onClick={() => window.open("https://github.com/Jacksonmcguire", '_blank')}></FiGithub>
        <FiMail aria-label="Gmail" onClick={() => window.open("mailto:jaxmcguire@gmail.com", '_blank')}></FiMail>
      </aside>
      <section className="main-content">
        <section className="top" id="top">
          <h2>
            Hello, I'm Jackson McGuire.
          </h2>
          <p>
            I'm a front-end engineer focused on creating accessible and secure user experiences.
          </p>
          <NavHashLink smooth to="#about" aria-label="down"><FiArrowDownCircle className="down"></FiArrowDownCircle></NavHashLink>
        </section>
        <About></About>
        <Projects></Projects>
        <section id="experience">
        <Experience></Experience>
        </section>
       </section> 
      </main>
    </div>
    </Router>
  );
}

export default App;
