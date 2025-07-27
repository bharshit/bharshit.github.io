import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me3.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id='header' className="header-section">
      {/* Animated Background Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Mouse Follower */}
      <motion.div 
        className="mouse-follower"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 0.5
        }}
      />

      <header>
        <motion.div 
          className="container header__container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h5 variants={itemVariants} className="intro-text">
            Hello, I'm
          </motion.h5>
          
          <motion.h1 variants={itemVariants} className="name-title gradient-text">
            Harshit Bhatt
          </motion.h1>
          
          <motion.div variants={itemVariants} className="role-container">
            <h5 className="text-light typing-text">
              <span className="role-text">Full Stack Developer</span>
              <span className="cursor">|</span>
            </h5>
          </motion.div>

          <motion.div variants={itemVariants}>
            <CTA />
          </motion.div>

          <motion.div variants={itemVariants}>
            <HeaderSocials />
          </motion.div>

          <motion.div 
            className='me'
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              transition: { duration: 0.3 }
            }}
          >
            <div className="image-glow"></div>
            <img src={ME} alt="me" />
            <div className="image-overlay"></div>
          </motion.div>

          <motion.a 
            href="#about" 
            className='scroll__down'
            variants={itemVariants}
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="scroll-text">Explore</span>
            <div className="scroll-indicator">
              <div className="scroll-wheel"></div>
            </div>
          </motion.a>
        </motion.div>
      </header>
    </section>
  )
}

export default Header