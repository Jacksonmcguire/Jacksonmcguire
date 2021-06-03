import './Project.css';
import { NavLinkBox } from '../NavLinkBox/NavLinkBox'
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from 'react-icons/bi'
type project = {
  deploy?: string, 
  desc?: object, 
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
        <NavLinkBox desc={desc} name={name}>
          
        </NavLinkBox>
        <a href={github}><FiGithub className="github"></FiGithub></a>
        <a href={deploy}><BiLinkExternal className="github"></BiLinkExternal></a>
        <ul>
          {tech?.map(name => <p>{name}</p>)}
        </ul>
      </article>
    </div>
  )
}