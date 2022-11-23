import React from 'react'
import './portfolio.css'
import IMG1 from './../../assests/j1.png'
import IMG2 from './../../assests/j2.png'
import IMG3 from './../../assests/j3.png'
import IMG4 from './../../assests/j4.jpg'
import IMG5 from './../../assests/j5.jpeg'
import IMG6 from './../../assests/j6.png'

const data = [
  {
    id:1,
    image:IMG1,
    title:'E-commerce Dashboard & visualisation',
    github:'https://github.com/',
    demo:'https://dribbble.com/'
  },
  {
    id:2,
    image:IMG2,
    title:'Mapping Software Dashboard UI/UX & visualisation',
    github:'https://github.com/',
    demo:'https://dribbble.com/'
  },
  {
    id:3,
    image:IMG3,
    title:'Social media Application visualisation',
    github:'https://github.com/',
    demo:'https://dribbble.com/'
  },
  {
    id:4,
    image:IMG4,
    title:'Admin Dashboard & visualisation',
    github:'https://github.com/',
    demo:'https://dribbble.com/'
  },
  {
    id:5,
    image:IMG5,
    title:'Mobile chat application UI/UX, Home Screen & navigation',
    github:'https://github.com/',
    demo:'https://dribbble.com/'
  },
  {
    id:6,
    image:IMG6,
    title:'Admin Dashboard & visualisation',
    github:'https://github.com/',
    demo:'https://dribbble.com/'
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       {
        data.map(({id, image, title, github, demo}) => {
          return(
            <article key ={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
          </article>
          )
        })
       }

        
      </div>
    </section>
  )
}

export default Portfolio