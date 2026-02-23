'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const menuItems = [
  { href: '#home', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-6 z-[999] transition-all duration-300 border-b ${
        isSticky
          ? 'bg-[rgba(15,15,23,0.98)] py-4 border-[rgba(139,92,246,0.2)] backdrop-blur-[20px]'
          : 'bg-transparent backdrop-blur-[10px] border-[rgba(139,92,246,0.1)]'
      }`}
      aria-label="Barra de navegação principal"
    >
      <div className="max-width flex items-center justify-between">
        <Link
          href="#home"
          className="text-white text-xl md:text-2xl font-bold transition-all duration-300 hover:scale-105"
        >
          John<span className="text-[#a78bfa]">.Dev</span>
        </Link>

        <ul
          className={`hidden md:flex items-center list-none gap-6 lg:gap-8 ${
            isMenuOpen ? 'left-0' : ''
          }`}
          role="menubar"
        >
          {menuItems.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                className="text-white text-sm lg:text-base font-medium transition-all duration-300 hover:text-[#a78bfa] relative group"
                role="menuitem"
                onClick={handleLinkClick}
              >
                {item.label}
                {item.href === '#projetos' && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a78bfa] transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col justify-center w-6 h-6 cursor-pointer z-[1000]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
          aria-controls="primary-menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-full h-0.5 bg-white mb-1.5 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-white mb-1.5 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-[rgba(15,15,23,0.98)] backdrop-blur-[10px] pt-20 z-[1000] md:hidden"
            id="primary-menu"
          >
            <ul className="flex flex-col items-center justify-center h-full gap-8">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white text-2xl font-medium transition-all duration-300 hover:text-[#a78bfa]"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
