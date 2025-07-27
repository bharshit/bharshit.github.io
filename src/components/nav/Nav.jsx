import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './nav.css'
import { 
  AiOutlineHome, 
  AiOutlineUser,
  AiOutlineFundProjectionScreen 
} from 'react-icons/ai'
import { 
  BiBook, 
  BiMessageSquareDetail,
  BiCodeAlt 
} from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Auto-hide navigation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Update active nav based on scroll position
  useEffect(() => {
    const sections = ['header', 'about', 'skills', 'services', 'portfolio', 'contact']
    const observers = []

    sections.forEach(section => {
      const element = document.getElementById(section)
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                setActiveNav(`#${section}`)
              }
            })
          },
          { threshold: 0.5 }
        )
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  const navItems = [
    { href: '#header', icon: AiOutlineHome, label: 'Home' },
    { href: '#about', icon: AiOutlineUser, label: 'About' },
    { href: '#skills', icon: BiCodeAlt, label: 'Skills' },
    { href: '#services', icon: RiServiceLine, label: 'Services' },
    { href: '#portfolio', icon: AiOutlineFundProjectionScreen, label: 'Portfolio' },
    { href: '#contact', icon: BiMessageSquareDetail, label: 'Contact' },
  ]

  const navVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const itemVariants = {
    hover: {
      scale: 1.1,
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
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className="nav-container"
          variants={navVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="nav-background"></div>
          <div className="nav-content">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeNav === item.href
              
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveNav(item.href)}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.3
                    }
                  }}
                  title={item.label}
                >
                  <Icon className="nav-icon" />
                  {isActive && (
                    <motion.div
                      className="active-indicator"
                      layoutId="activeIndicator"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                  <span className="nav-tooltip">{item.label}</span>
                </motion.a>
              )
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default Nav