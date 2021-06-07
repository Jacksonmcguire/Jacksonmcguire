import './Project.css';
import { NavLinkBox } from '../NavLinkBox/NavLinkBox'
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from 'react-icons/bi'
type project = {
  deploy?: string, 
  desc?: object, 
  github: string, 
  name?: string, 
  tech?: string[],
  gif?: string, 
}

export const Project = ({deploy, desc, github, name, tech, gif}: project) => {
  console.log(gif)

  const clickImage = () => {
    window.location.replace(github)
  }
  return (
    <section className="project-container">
      <h4>{name}</h4>
      <div className="project-card">
        <img src={gif} alt="project gif" onClick={clickImage}/>
        <article className="project-info">
          <NavLinkBox desc={desc} name={name}>
            
          </NavLinkBox>
          <ul>
            {tech?.map(name => <p>{name}</p>)}
          <a href={github}><FiGithub className="github"></FiGithub></a>
          <a href={deploy}><BiLinkExternal className="github"></BiLinkExternal></a>
          </ul>
        </article>
      </div>
    </section>
  )
}