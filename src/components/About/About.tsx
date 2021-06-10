import './About.css'
import logo from './github.jpg';
import { FaReact, FaVuejs } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

export const About = () => {
  return (
    <section className="about-section" id="about">
      <h3>About Me</h3>
      <article className="about-content">
      <div>
        <p>
        While backpacking through Australia in 2019, I met an array of "nomad" software 
        <div className="jackson">
          <img src={logo} alt="Jackson" />
        </div>
        engineers and became immediately enamored with the work and the opportunities it provided. Like trekking through rugged trails, the Turing School
        of Software and Design has challenged me to push boundaries as a “not your 
        average” developer.  For me, software development is a way to exercise strong 
        collaboration, creativity, and resourcefulness.
        </p>
        <p>
        My expertise is in building Javascript applications with the help of frameworks
        such as React and Vue. I have found that a sense of discovery and curiosity is 
        paramount as a developer, I am always looking to add to my tech stack and to
        grow as an engineer through my peers and teammates.

        </p>
        <ul>
        <label>Current technologies:</label> 
        <p>React</p>
        <p>Vue</p>
        <p>Typescript</p>
        <p>Cypress</p>
        <p>NodeJS</p>
        <p>CSS/SASS</p>
        </ul>
      </div>
      </article>
    </section>
  )
}