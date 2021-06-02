import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { Projects } from '../Projects/Projects';
import { FiLinkedin, FiGithub, FiArrowUpCircle } from "react-icons/fi";

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
        <NavHashLink smooth to="#contact">Contact</NavHashLink>
        <button>Resume</button>
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
        <p>jaxmcguire@gmail.com</p>
        </div>
      </aside>
      <section className="main-content">
      {/* <HashLink smooth to="#top"><FiArrowUpCircle className="top-arrow"></FiArrowUpCircle></HashLink> */}
        <p id="top">
          Hi, my name is Jackson McGuire
        </p>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </section>
      </main>
    </div>
    </Router>
  );
}

export default App;
