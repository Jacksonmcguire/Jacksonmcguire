import './NavLinkBox.css'
import React, { MouseEventHandler, useState } from 'react'
export const NavLinkBox = ({desc, name}: any) => {
  const [currentContent, setCurrentContent] = useState('')

  const changeContent = (e: any): any => {
    setCurrentContent(desc[e.target.dataset['id']])
    resetLinks(e.target.dataset['id'])
  }

  const resetLinks = (id: string) => {
    const links = document.querySelector('#' + name.replaceAll(' ', ''))?.querySelectorAll('p')
    links?.forEach(link => {
      console.log(link.dataset['id'], id)
      if (link.dataset['id'] === id) link.classList.add('active-content') 
      else link.classList.remove('active-content')})
  }

  return (
    <section className="navLinkBox" id={name.replaceAll(' ', '')}>
      <header>
        <p onClick={changeContent} className="active-content" data-id="problem" data-val>Problem Solved</p>
        <p onClick={changeContent} data-id="audience">Audience</p>
        <p onClick={changeContent} data-id="challenges">Challenges</p>
      </header>
      <article>
        <p>{currentContent || desc.problem}</p>
      </article>
    </section>
  )
}