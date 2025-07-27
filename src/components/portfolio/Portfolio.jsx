import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './portfolio.css'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa'
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si'
import IMG1 from './../../assests/j1.png'
import IMG2 from './../../assests/j2.png'
import IMG3 from './../../assests/j3.png'
import IMG4 from './../../assests/j4.jpg'
import IMG5 from './../../assests/j5.jpeg'
import IMG6 from './../../assests/j6.png'

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'E-commerce Dashboard',
    description: 'Modern e-commerce dashboard with real-time analytics and inventory management.',
    technologies: [FaReact, SiNextdotjs, SiMongodb, SiTailwindcss],
    category: 'fullstack',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/',
    featured: true
  },
  {
    id: 2,
    image: IMG2,
    title: 'Mapping Software Dashboard',
    description: 'Interactive mapping dashboard with data visualization and geospatial analytics.',
    technologies: [FaReact, FaNodeJs, SiMongodb, SiTypescript],
    category: 'frontend',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/',
    featured: true
  },
  {
    id: 3,
    image: IMG3,
    title: 'Social Media Application',
    description: 'Full-featured social media platform with real-time messaging and content sharing.',
    technologies: [FaReact, FaNodeJs, SiMongodb, SiTailwindcss],
    category: 'fullstack',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/',
    featured: false
  },
  {
    id: 4,
    image: IMG4,
    title: 'Admin Dashboard',
    description: 'Comprehensive admin dashboard with user management and analytics.',
    technologies: [FaReact, FaPython, SiMongodb, SiTailwindcss],
    category: 'frontend',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/',
    featured: false
  },
  {
    id: 5,
    image: IMG5,
    title: 'Mobile Chat Application',
    description: 'Real-time chat application with modern UI/UX and push notifications.',
    technologies: [FaReact, FaNodeJs, SiMongodb, SiTailwindcss],
    category: 'mobile',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/',
    featured: true
  },
  {
    id: 6,
    image: IMG6,
    title: 'Analytics Platform',
    description: 'Data analytics platform with interactive charts and reporting features.',
    technologies: [FaReact, FaJava, SiMongodb, SiTailwindcss],
    category: 'fullstack',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/',
    featured: false
  }
]

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [filter, setFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(portfolioData)

  const filterCategories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'mobile', label: 'Mobile' }
  ]

  const handleFilter = (category) => {
    setFilter(category)
    if (category === 'all') {
      setFilteredProjects(portfolioData)
    } else {
      setFilteredProjects(portfolioData.filter(project => project.category === category))
    }
  }

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

  const projectVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id='portfolio' ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h5 variants={itemVariants}>My Recent Work</motion.h5>
        <motion.h2 variants={itemVariants} className="gradient-text">Featured Projects</motion.h2>

        {/* Filter Buttons */}
        <motion.div className="portfolio__filters" variants={itemVariants}>
          {filterCategories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${filter === category.key ? 'active' : ''}`}
              onClick={() => handleFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className='container portfolio__container'>
          <AnimatePresence mode="wait">
            <motion.div 
              className="portfolio__grid"
              key={filter}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
            >
              {filteredProjects.map((project, index) => (
                <motion.article 
                  key={project.id} 
                  className={`portfolio__item ${project.featured ? 'featured' : ''}`}
                  variants={projectVariants}
                  custom={index}
                  layout
                >
                  <div className='portfolio__item-image'>
                    <img src={project.image} alt={project.title} />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="portfolio__item-content">
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="tech-stack">
                      {project.technologies.map((Tech, techIndex) => (
                        <div key={techIndex} className="tech-icon">
                          <Tech />
                        </div>
                      ))}
                    </div>
                    
                    <div className='portfolio__item-cta'>
                      <motion.a 
                        href={project.github} 
                        className='btn btn-secondary' 
                        target='_blank' 
                        rel='noreferrer'
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub /> GitHub
                      </motion.a>
                      <motion.a 
                        href={project.demo} 
                        className='btn btn-primary' 
                        target='_blank' 
                        rel='noreferrer'
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    </div>
                  </div>
                  
                  {project.featured && (
                    <div className="featured-badge">
                      <span>Featured</span>
                    </div>
                  )}
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div className="portfolio__cta" variants={itemVariants}>
          <div className="cta-content glass">
            <h3>Interested in working together?</h3>
            <p>I'm always open to discussing new opportunities and exciting projects.</p>
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Collaborate
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Portfolio