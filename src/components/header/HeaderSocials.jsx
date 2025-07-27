import React from 'react'
import { motion } from 'framer-motion'
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs'

const HeaderSocials = () => {
  const socialVariants = {
    hover: {
      scale: 1.1,
      y: -3,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <motion.div 
      className="header__socials"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a 
        href="https://www.linkedin.com/in/harshit-bhatt-b7975a130" 
        target="_blank" 
        rel='noreferrer'
        variants={itemVariants}
        whileHover="hover"
        custom={socialVariants}
        title="LinkedIn"
      >
        <BsLinkedin />
      </motion.a>

      <motion.a 
        href="https://github.com/bharshit" 
        target="_blank" 
        rel='noreferrer'
        variants={itemVariants}
        whileHover="hover"
        custom={socialVariants}
        title="GitHub"
      >
        <BsGithub />
      </motion.a>

      <motion.a 
        href="https://dribbble.com" 
        target="_blank" 
        rel='noreferrer'
        variants={itemVariants}
        whileHover="hover"
        custom={socialVariants}
        title="Dribbble"
      >
        <BsDribbble />
      </motion.a>
    </motion.div>
  )
}

export default HeaderSocials