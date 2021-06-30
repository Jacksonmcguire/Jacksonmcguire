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

  const clickImage = () => {
    window.open(github, '_blank');
  }
  return (
    <section className="project-container">
      <h4>{name}</h4>
      <div className="project-card">
        <img src={gif} alt={name + 'gif'} onClick={clickImage}/>
        <article className="project-info">
          <NavLinkBox desc={desc} name={name}>
            
          </NavLinkBox>
          <ul>
            {tech?.map(name => <li key={name}><p>{name}</p></li>)}
            <li><a href={github} aria-label="repo link"><FiGithub className="github"></FiGithub></a></li>
            <li><a href={deploy} aria-label="deploy link"><BiLinkExternal className="github"></BiLinkExternal></a></li>
          </ul>
        </article>
      </div>
    </section>
  )
}