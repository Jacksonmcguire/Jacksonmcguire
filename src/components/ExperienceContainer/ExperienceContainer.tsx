import './ExperienceContainer.css'
type experience = {
  company?: string,
  title?: string, 
  desc?: string[], 
  tech?: string[],
  date?: string, 
}

export const ExperienceContainer = ({title, company, desc, tech, date}:experience) => {
  const descriptions = desc?.length && <div className='descriptions'>
  {desc?.map(bullet => <p>{"-> " + bullet}</p>)}
  </div>
  const technologies = tech?.length && <ul className='techs'>Tech Used:{tech?.map(t => <li key={t}>{t}</li>)}</ul>
  return (
    <article className='exp-container'>
      <div className="headline">
        <h4>{company}</h4>
        <h5>{title}</h5>
      </div>
      <p>{date}</p>
      {descriptions}
      {technologies}
    </article>
  )
}