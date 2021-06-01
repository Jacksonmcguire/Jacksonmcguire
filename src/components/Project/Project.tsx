import './Project.css';
import owen from './owen-wilson.png';
import { FaReact, FaVuejs } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { FiGithub } from "react-icons/fi";

export const Project = () => {
  return (
    <div className="project-card">
      <img src={owen} alt="owen wilson" />
      <h4>Owen Wilson</h4>
      <article>
        <p>
          Hello, this is my owen wilson bottle rocket project.
          Here are some links and info about my tech stack.
        </p>
        <ul>
          <br />
        <FaReact></FaReact>
        <br />
        <FaVuejs></FaVuejs>
        <br />
        <SiTypescript></SiTypescript>
        </ul>
        <FiGithub className="github"></FiGithub>
        <a href="google.com">Deploy Link</a>
      </article>
    </div>
  )
}