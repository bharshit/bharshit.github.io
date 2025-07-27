import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './about.css'
import ME from '../../assests/jeme.jpeg'    
import { FaAward, FaCode, FaLightbulb } from 'react-icons/fa'
import { FiUsers, FiTrendingUp } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const statsData = [
    {
      icon: FaAward,
      title: "Experience",
      value: "2+",
      subtitle: "Years",
      color: "#3b82f6"
    },
    {
      icon: FiUsers,
      title: "Clients",
      value: "25+",
      subtitle: "Worldwide",
      color: "#06b6d4"
    },
    {
      icon: VscFolderLibrary,
      title: "Projects",
      value: "30+",
      subtitle: "Completed",
      color: "#10b981"
    }
  ]

  return (
    <section id='about' ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h5 variants={itemVariants}>Get To Know</motion.h5>
        <motion.h2 variants={itemVariants} className="gradient-text">About Me</motion.h2>

        <div className='container about__container'>
          <motion.div className='about__me' variants={itemVariants}>
            <div className='about__me-image'>
              <motion.img 
                src={ME} 
                alt='About me'
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
              />
              <div className="image-border"></div>
              <div className="floating-icons">
                <motion.div 
                  className="floating-icon icon-1"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaCode />
                </motion.div>
                <motion.div 
                  className="floating-icon icon-2"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <FaLightbulb />
                </motion.div>
                <motion.div 
                  className="floating-icon icon-3"
                  animate={{ 
                    y: [0, -8, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <FiTrendingUp />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div className='about__content' variants={itemVariants}>
            <div className='about__cards'>
              {statsData.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.article 
                    key={index}
                    className='about__card glass'
                    variants={cardVariants}
                    whileHover="hover"
                    style={{
                      '--accent-color': stat.color
                    }}
                  >
                    <div className="card-background"></div>
                    <Icon className='about__icon' style={{ color: stat.color }} />
                    <h5>{stat.title}</h5>
                    <div className="stat-number">
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.5 + index * 0.1,
                          type: "spring"
                        }}
                        className="number"
                      >
                        {stat.value}
                      </motion.span>
                      <small>{stat.subtitle}</small>
                    </div>
                  </motion.article>
                )
              })}
            </div>

            <motion.div className="about__text" variants={itemVariants}>
              <p>
                I am a passionate <span className="highlight">Full-Stack Developer</span> with expertise in modern web technologies. 
                My journey in software development spans over <span className="highlight">2+ years</span>, during which I've mastered 
                <span className="highlight"> React, Node.js, Python, and various databases</span>.
              </p>
              <p>
                I specialize in creating <span className="highlight">responsive, user-centric applications</span> that not only 
                look great but also provide exceptional user experiences. My approach combines creative problem-solving with 
                <span className="highlight"> clean, maintainable code</span>.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </motion.div>

            <motion.a 
              href='#contact' 
              className='btn btn-primary'
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Collaborate
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About