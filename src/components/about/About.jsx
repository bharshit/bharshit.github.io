import React from 'react'
import './about.css'
import ME from '../../assests/jeme.jpeg'    
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Aboutimage'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>12+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>
          I am a Java & Javascript Developer, with in-depth knowledge of HTML, CSS, Javascript & its libraries like React. I am a quick learner of latest web and android technologies, have successfully delivered smart cutting-edge user interfaces and production-ready web development codes.<br></br>

With precision, skill, and craftsmanship, I have used my unique knowledge in designing the frontend and backend technologies to create cross-browser experiences. My primary focus has been the long-term user retention and engagement. 
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Chat</a>

        </div>
      </div>
    </section>
  )
}

export default About