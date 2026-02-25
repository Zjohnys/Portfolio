import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

interface NavigationProps {
  scrollY: number
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const links = ['Sobre', 'Projetos', 'Experiencia', 'Habilidades', 'Contato']

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? 'bg-slate-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#"
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              JohnDev
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center gap-1"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {links.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-cyan-400 transition-colors"
                variants={linkVariants}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-slate-800 rounded-lg mt-2 p-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {links.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block px-4 py-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5 }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
