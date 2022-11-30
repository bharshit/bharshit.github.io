import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What Do I Offer?</h5>
      <h2>My Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Demonstrable UI & UX</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Integration</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Restful and 3rd party APIs Integrated</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Google analytics and SEO</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Admin panel </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full Source code </p>
            </li>

          </ul>
        </article>

        {/* End of ui/ux */}

        <article className='service'>
          <div className='service__head'>
            <h3>Android App Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Functional App with revisions</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>App Submission with source code</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>App Icon & Splash Screen</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ad network integration</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 operating system</p>
            </li>

          </ul>
        </article>

        {/* End of web dev */}

        <article className='service'>
          <div className='service__head'>
            <h3>Wordpress Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fully functional website.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design customization </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Color branding</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-commerce functionality</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Plugins/extensions installation</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>SEO & Google Analytics</p>
            </li>

          </ul>
        </article>


      </div>
    </section>
  )
}

export default Services