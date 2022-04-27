import './About.css'
import logo from './github.jpg';

export const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <article className="about-content">
      <div>
        <p>
        While backpacking through Australia in 2019, I met an array of "nomad" software 
        engineers and became immediately enamored with the work and the opportunities it provided. Like trekking through rugged trails, the Turing School
        of Software and Design has challenged me to push boundaries as a “not your 
        average” developer.  For me, software development is a way to exercise strong 
        collaboration, creativity, and resourcefulness.
        </p>
        <div className="jackson">
          <img src={logo} alt="Jackson" />
        </div>
        <p>
        My expertise is in building Javascript applications with the help of frameworks
        such as React and Vue. I have found that a sense of discovery and curiosity is 
        paramount as a developer, I am always looking to add to my tech stack and to
        grow as an engineer through my peers and teammates.

        </p>
        <ul>
        <li>Current technologies:</li> 
        <li>React</li>
        <li>Vue</li>
        <li>Typescript</li>
        <li>Golang</li>
        <li>SocketIO</li>
        <li>AWS</li>
        <li>Cypress</li>
        <li>NodeJS</li>
        <li>CSS/SASS</li>
        </ul>
      </div>
      </article>
    </section>
  )
}