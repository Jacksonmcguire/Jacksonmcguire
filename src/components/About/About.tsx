import './About.css'
import logo from './IMG_2156.png';
import { FaReact, FaVuejs } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

export const About = () => {
  return (
    <section className="about-section" id="about">
      <h3>About Me</h3>
      <article className="about-content">
      <div>
        <p>
          Back In 2019 while backpacking through Australia, I met an array of "nomad" software engineers and became 
        immediately enamored with the work, and the opportunities it provided. Software development for me is a way to 
        exercise my strong collaboration, creativity, and resourcefulness. 
        </p>
        <p>
          Like trekking through rugged trails, the Turing school of Software and design is challenging and pushing me 
        outside of my boundaries to become not just your average developer. My expertise is in building Javascript 
        applications with the help of frameworks such as React and Vue. I have found that a sense of discovery and 
        curiosity is paramount as a developer, I am always looking to add to my tech stack and to grow as an engineer 
        through my peers and teammates. 
        </p>
        <ul>
        <label>Some of the technologies I have been working with lately:</label> 
        <p>React</p>
        <p>Vue</p>
        <p>Typescript</p>
        </ul>
      </div>
      <img src={logo} alt="Jackson" />
      </article>
    </section>
  )
}