import { About } from '../About/About';
import { Projects } from '../Projects/Projects';
import { FiLinkedin, FiGithub, FiArrowUpCircle, FiMail } from "react-icons/fi";

import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";import './App.css';
import { NavHashLink, HashLink } from 'react-router-hash-link';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h1>Jackson McGuire</h1>
        <NavHashLink smooth to="#about">About</NavHashLink>
        <NavHashLink smooth to="#projects">Projects</NavHashLink>
        <NavHashLink smooth to="#resume">Resume</NavHashLink>
      </header>
      <main>
      <aside>
        <a href="https://www.linkedin.com/in/jackson-mcguire/">
          <FiLinkedin></FiLinkedin>
        </a>
        <a href="https://github.com/Jacksonmcguire">
          <FiGithub></FiGithub>
        </a>
        <div className="email">
        <a href="https://www.jaxmcguire@gmail.com">
          <FiMail></FiMail>
        </a>
        </div>
      </aside>
      <section className="main-content">
      <HashLink smooth to="#top"><FiArrowUpCircle className="top-arrow"></FiArrowUpCircle></HashLink>
        <section className="top" id="top">
          <h3>
            Hello, I'm Jackson McGuire.
          </h3>
          <p>
            I'm a front-end engineer focused on creating accessible and secure user experiences.
          </p>
        </section>
        <About></About>
        <Projects></Projects>
        <section id="resume">
        <iframe frameBorder="0" scrolling="no"
          width="750" height="1000"
          src="https://drive.google.com/file/d/1O4wca-p_tfOHN1usiTrEEn0oHFGdtjyh/preview">
        </iframe>
        </section>
       </section> 
      </main>
    </div>
    </Router>
  );
}

export default App;
