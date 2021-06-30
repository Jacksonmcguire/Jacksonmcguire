import './NavLinkBox.css'
export const NavLinkBox = ({desc, name}: any) => {

  return (
    <section className="navLinkBox" id={name.replaceAll(' ', '')}>
      <article >
        <h5 className="goal">Goal</h5>
        <p className="description">{desc.goal}</p>
      </article>
      <article >
        <h5 className="challenges">Challenges</h5>
        <p className="description">{desc.challenges}</p>
      </article>
    </section>
  )
}