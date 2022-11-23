import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { SiUpwork } from 'react-icons/Si'
import {  SiFiverr } from 'react-icons/Si'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ytz8nag', 'template_5wdtntq', form.current, '_gZ1UxbjXNqbVYD_-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>What's on your mind?</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>codingbites9+99@gmail.com</h5>
          <a href='mailto:xyz@gmail.com' target="_blank" rel='noreferrer'>Send a message</a>
        </article>

        <article className="contact__option">
          <SiUpwork className='contact__option-icon'/>
          <h4>Upwork</h4>
          <h5>Harshit B</h5>
          <a href='https://www.upwork.com/freelancers/~014427104132aae9a4' target="_blank" rel='noreferrer'>Message me</a>
        </article>

        <article className="contact__option">
          <SiFiverr className='contact__option-icon'/>
          <h4>Fiverr</h4>
          <h5>blunderbomb09</h5>
          <a href=' https://www.fiverr.com/blunderbomb09' target="_blank" rel='noreferrer'>Let's talk</a>
        </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Fullname' required/>
          <input type='email' name='email' placeholder='Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact