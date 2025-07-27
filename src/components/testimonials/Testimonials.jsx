import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './testimonials.css'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import AVR1 from './../../assests/av5.jpeg'
import AVR2 from './../../assests/av2.jpg'
import AVR3 from './../../assests/av4.jpg'
import AVR4 from './../../assests/avx.jpg'

// Import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialData = [
  {
    avatar: AVR1,
    name: "Sharat Bhardwaj",
    role: "Business Owner",
    review: "I've known him for years, he is providing the best services at a reasonable amount for website development to me and my clients. I am satisfied by his dedication & agility towards his work.",
    rating: 5,
    project: "E-commerce Website"
  },
  {
    avatar: AVR2,
    name: "Mike Harrington",
    role: "Trading Company CEO",
    review: "The kind of work Harshit provided to me for my trading app, I've to say the results were outstanding. The UI was eye-catching and the data was placed accordingly, like I wanted.",
    rating: 5,
    project: "Trading Dashboard App"
  },
  {
    avatar: AVR3,
    name: "Alexandra Brennan",
    role: "Startup Founder",
    review: "Harshit has a fair grip upon his skills. He is also good in managing the website. After completing my web project he also assisted and helped me to learn how to manage my website.",
    rating: 5,
    project: "Corporate Website"
  },
  {
    avatar: AVR4,
    name: "Shreya Motwani",
    role: "Digital Marketing Agency",
    review: "I first contacted Harshit in Dec 2020, at a freelance website and since then he has been delivering me the best quality of work. I am impressed by his dedication and consistency.",
    rating: 5,
    project: "Multiple Web Projects"
  }
]

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const StarRating = ({ rating }) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, index) => (
          <FaStar 
            key={index} 
            className={index < rating ? 'star filled' : 'star'} 
          />
        ))}
      </div>
    )
  }

  return (
    <section id='testimonials' ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h5 variants={itemVariants}>What Clients Say</motion.h5>
        <motion.h2 variants={itemVariants} className="gradient-text">Client Reviews</motion.h2>

        <motion.div className="testimonials__stats" variants={itemVariants}>
          <div className="stat-item glass">
            <h3>25+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item glass">
            <h3>4.9/5</h3>
            <p>Average Rating</p>
          </div>
          <div className="stat-item glass">
            <h3>100%</h3>
            <p>Project Success</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Swiper 
            className="container testimonials__container"
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              }
            }}
          >
            {testimonialData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.article 
                  className='testimonial glass'
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="testimonial__header">
                    <div className="quote-icon">
                      <FaQuoteLeft />
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </div>

                  <div className="testimonial__content">
                    <p className='client__review'>{testimonial.review}</p>
                  </div>

                  <div className="testimonial__footer">
                    <div className="client__info">
                      <div className="client__avatar">
                        <img src={testimonial.avatar} alt={testimonial.name} />
                        <div className="avatar-ring"></div>
                      </div>
                      <div className="client__details">
                        <h5 className='client__name'>{testimonial.name}</h5>
                        <small className='client__role'>{testimonial.role}</small>
                        <small className='client__project'>{testimonial.project}</small>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="testimonials__cta" variants={itemVariants}>
          <div className="cta-content glass">
            <h3>Ready to join these satisfied clients?</h3>
            <p>Let's discuss your project and create something amazing together.</p>
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Testimonials