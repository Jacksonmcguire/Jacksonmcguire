import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { Projects } from '../Projects/Projects';
import { FiLinkedin, FiGithub } from "react-icons/fi";

import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h1>Jackson McGuire</h1>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button>Resume</button>
      </header>
      <main>
      <aside>
        <FiLinkedin></FiLinkedin>
        <FiGithub></FiGithub>
        <div className="email">
        <p>jaxmcguire@gmail.com</p>
        </div>
      </aside>
      <section className="main-content">
        Hi, my name is Jackson McGuire
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
