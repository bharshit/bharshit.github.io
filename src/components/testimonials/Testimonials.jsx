import React from 'react'
import './testimonials.css'
import AVR1 from './../../assests/av5.jpeg'
import AVR2 from './../../assests/av2.jpg'
import AVR3 from './../../assests/av4.jpg'
import AVR4 from './../../assests/avx.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar:AVR1,
    name:"Sharat Bhardwaj",
    review:"I've known him from years, he is providing the best services at a reasonable amount for website development to me and my clients. I am satisfied by his dedication & agility towards his work."
  },
  {
    avatar:AVR2,
    name:"Mike Harrington",
    review:"The kind of work harshit provided to me for my trading app, i've to say the results were outstanding. The UI was eye-catching and the data was placed accordingly, like i wanted."
  },
  {
    avatar:AVR3,
    name:"Alexandra Brennan",
    review:'Harshit has a fair grip upon his skills. He is also good in managing the website. After completing my web project he also assisted and helped me to learn how to manage my website'
  },
  {
    avatar:AVR4,
    name:"Shreya Motwani",
    review:'I first contacted harshit on Dec 2020, at a freelance website and since then he is been delivering me the best quality of work. I am impressed by his dedication and consistency.'
  }
]

function Testimonials() {
  return (
    <section id='testimonial'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     >
       {
        data.map(({avatar, name, review}, index)  =>  {
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt=''/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
          )
        })
       }
        
      </Swiper>
    </section>
  )
}

export default Testimonials