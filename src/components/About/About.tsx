import './About.css'
import logo from './IMG_2156.png';
import { FaReact, FaVuejs } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

export const About = () => {
  return (
    <section className="about-section">
      <h3>About Me</h3>
      <article className="about-content">
      <div>
        <p>
          Hello! My name is Brittany and I enjoy creating things that live on the internet. 
          My interest in web development started back in 2012 when 
          I decided to try editing custom Tumblr themes — turns out 
          hacking together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p>Fast-forward to today, and I've had the privilege of working at
          an advertising agency, a start-up, a huge corporation, and a student-led design studio. 
          My main focus these days is building accessible, 
          inclusive products and digital experiences at Upstatement for a variety of clients.
        </p>
        <ul>Favorite Technologies: 
        <FaReact></FaReact>
        <FaVuejs></FaVuejs>
        <SiTypescript></SiTypescript>
        </ul>
      </div>
      <img src={logo} alt="Jackson" />
      </article>
    </section>
  )
}