'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white border-none cursor-pointer text-xl font-bold z-[1000] shadow-[0_8px_25px_rgba(139,92,246,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_35px_rgba(139,92,246,0.6)] backdrop-blur-[10px] border border-[rgba(139,92,246,0.3)]"
          aria-label="Voltar ao topo"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}
