import './Project.css';
import owen from './owen-wilson.png';
import { FaReact, FaVuejs } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { FiGithub } from "react-icons/fi";
import { GrHeroku } from 'react-icons/gr'
type project = {
  deploy?: string, 
  desc?: string, 
  github?: string, 
  name?: string, 
  tech?: string[],
  gif?: string, 
}

export const Project = ({deploy, desc, github, name, tech, gif}: project) => {
  console.log(gif)
  return (
    <div className="project-card">
      <img src={gif} alt="project gif" />
      <article className="project-info">
      <h4>{name}</h4>
        <p className="description">
          {desc}
        </p>
        <a href={deploy}><GrHeroku className="github"></GrHeroku></a>
        <a href={github}><FiGithub className="github"></FiGithub></a>
        <ul>
          {tech?.map(name => <p>{name}</p>)}
        </ul>
      </article>
    </div>
  )
}