import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BiDownload, BiChat } from 'react-icons/bi'
import CV from '../../assests/resume.pdf'

const CTA = () => {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    setTimeout(() => setIsDownloading(false), 2000)
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <div className="cta">
      <motion.a 
        href={CV} 
        download 
        className='btn btn-secondary'
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={handleDownload}
      >
        {isDownloading ? (
          <div className="loading"></div>
        ) : (
          <BiDownload className="btn-icon" />
        )}
        Download CV
      </motion.a>

      <motion.a 
        href='#contact' 
        className='btn btn-primary'
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <BiChat className="btn-icon" />
        Let's Talk
      </motion.a>
    </div>
  )
}

export default CTA