import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me3.png'
import HeaderSocials from './HeaderSocials'


function Header() {

  return (
    <section id='header'>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Harshit Bhatt</h1>
          <h5 className="text-light">Software Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className='me'>
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </section>
  )

}

export default Header