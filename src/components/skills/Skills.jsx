import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './skills.css'
import { 
  FaReact, FaNodeJs, FaJava, FaPython, FaDatabase,
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiMongodb, SiMysql, SiPhp, SiTypescript,
  SiNextdotjs, SiExpress, SiPostgresql, SiRedis, SiDocker
} from 'react-icons/si'

const Skills = () => {
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  const frontendSkills = [
    { name: 'HTML5', level: 'Expert', icon: FaHtml5, color: '#E34F26', progress: 95 },
    { name: 'CSS3', level: 'Expert', icon: FaCss3Alt, color: '#1572B6', progress: 90 },
    { name: 'JavaScript', level: 'Advanced', icon: FaJs, color: '#F7DF1E', progress: 85 },
    { name: 'TypeScript', level: 'Intermediate', icon: SiTypescript, color: '#3178C6', progress: 75 },
    { name: 'React', level: 'Advanced', icon: FaReact, color: '#61DAFB', progress: 88 },
    { name: 'Next.js', level: 'Intermediate', icon: SiNextdotjs, color: '#000000', progress: 70 },
    { name: 'Tailwind CSS', level: 'Advanced', icon: SiTailwindcss, color: '#06B6D4', progress: 85 },
    { name: 'Bootstrap', level: 'Expert', icon: FaBootstrap, color: '#7952B3', progress: 90 }
  ]

  const backendSkills = [
    { name: 'Java', level: 'Expert', icon: FaJava, color: '#ED8B00', progress: 90 },
    { name: 'Python', level: 'Advanced', icon: FaPython, color: '#3776AB', progress: 82 },
    { name: 'Node.js', level: 'Advanced', icon: FaNodeJs, color: '#339933', progress: 80 },
    { name: 'Express.js', level: 'Advanced', icon: SiExpress, color: '#000000', progress: 78 },
    { name: 'MongoDB', level: 'Advanced', icon: SiMongodb, color: '#47A248', progress: 85 },
    { name: 'MySQL', level: 'Expert', icon: SiMysql, color: '#4479A1', progress: 88 },
    { name: 'PostgreSQL', level: 'Intermediate', icon: SiPostgresql, color: '#336791', progress: 70 },
    { name: 'Docker', level: 'Intermediate', icon: SiDocker, color: '#2496ED', progress: 65 }
  ]

  const SkillCard = ({ skill, index, category }) => {
    const Icon = skill.icon
    
    return (
      <motion.article 
        className='skill-card glass'
        variants={skillVariants}
        custom={index}
        whileHover="hover"
        style={{ '--skill-color': skill.color }}
      >
        <div className="skill-icon">
          <Icon style={{ color: skill.color }} />
        </div>
        <div className="skill-info">
          <h4>{skill.name}</h4>
          <span className="skill-level">{skill.level}</span>
        </div>
        <div className="skill-progress">
          <div className="progress-bar">
            <motion.div 
              className="progress-fill"
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.progress}%` } : { width: 0 }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.1 + 0.5,
                ease: "easeOut"
              }}
              style={{ backgroundColor: skill.color }}
            />
          </div>
          <span className="progress-text">{skill.progress}%</span>
        </div>
      </motion.article>
    )
  }

  return (
    <section id='skills' ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h5 variants={itemVariants}>What Skills I Have</motion.h5>
        <motion.h2 variants={itemVariants} className="gradient-text">Technical Expertise</motion.h2>

        <div className='container skills__container'>
          <motion.div className='skills__category' variants={itemVariants}>
            <div className="category-header">
              <FaReact className="category-icon" />
              <h3>Frontend Development</h3>
            </div>
            <div className='skills__grid'>
              {frontendSkills.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  index={index}
                  category="frontend"
                />
              ))}
            </div>
          </motion.div>

          <motion.div className='skills__category' variants={itemVariants}>
            <div className="category-header">
              <FaDatabase className="category-icon" />
              <h3>Backend Development</h3>
            </div>
            <div className='skills__grid'>
              {backendSkills.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  index={index}
                  category="backend"
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div className="skills__summary" variants={itemVariants}>
          <div className="summary-card glass">
            <h4>💡 Continuous Learning</h4>
            <p>Always exploring new technologies and best practices to deliver cutting-edge solutions.</p>
          </div>
          <div className="summary-card glass">
            <h4>🚀 Full-Stack Approach</h4>
            <p>Seamlessly integrating frontend and backend technologies for comprehensive web solutions.</p>
          </div>
          <div className="summary-card glass">
            <h4>⚡ Performance Focus</h4>
            <p>Optimizing applications for speed, scalability, and exceptional user experience.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills