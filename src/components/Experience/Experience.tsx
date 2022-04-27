import { ExperienceContainer } from '../ExperienceContainer/ExperienceContainer'
import { experienceData } from '../../experience-data'
import './Experience.css'
export const Experience = () => {
  const jobs = experienceData.work.map(job => {
    return <li>
      <ExperienceContainer 
      desc={job.desc}
      date={job.date}
      title={job.title}
      company={job.company}
      tech={job.tech}/>
    </li>
  })
  const schools = experienceData.edu.map(school => {
    return <li>
      <ExperienceContainer 
      desc={school.desc}
      date={school.date}
      title={school.title}
      company={school.company}
      tech={school.tech}/>
    </li>
  })
  return (
    <section className="exp">
      <ul className="edu">
        <h3>Education</h3>
        {schools}
      </ul>
      <ul className='jobs'>
        <h3>Work</h3>
        {jobs}
      </ul>
    </section>
  )

}