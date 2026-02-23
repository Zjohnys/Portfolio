'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="home"
      className="flex bg-[#0f0f17] text-white min-h-screen min-h-[500px] relative overflow-hidden pt-32"
    >
      <div className="max-width w-full my-auto relative z-[2] flex flex-col items-start justify-center h-full px-4 sm:pl-6 md:pl-12 lg:pl-16 xl:pl-24">
        {/* Texto de boas-vindas */}
        <motion.div
          className="text-left max-w-2xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="text-base md:text-lg text-[#a78bfa] mb-3 md:mb-4 flex items-center gap-2"
            variants={itemVariants}
          >
            <span>Olá! Eu sou</span>
            <span className="bg-[#a78bfa]"></span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight"
            variants={itemVariants}
          >
            John Lennon Moreira
          </motion.h1>

          <motion.div
            className="text-3xl md:text-4xl mb-4 text-white font-light"
            variants={itemVariants}
          >
            Um Desenvolvedor que
          </motion.div>

          <motion.div
            className="text-3xl md:text-4xl mb-8 text-white font-light"
            variants={itemVariants}
          >
            Transforma <span className="relative inline-block px-3 py-1 bg-[rgba(139,92,246,0.2)] rounded-lg border border-[rgba(139,92,246,0.3)]">ideias</span> em código
          </motion.div>

          <motion.div
            className="text-xl md:text-2xl mb-6 text-white font-semibold"
            variants={itemVariants}
          >
            Sou Desenvolvedor Full-Stack.
          </motion.div>

          <motion.p
            className="text-base md:text-lg text-[#a78bfa] mb-8 leading-relaxed max-w-xl"
            variants={itemVariants}
          >
            Desenvolvedor com experiência em desenvolvimento full-stack. 
            Crio soluções digitais significativas que equilibram as necessidades do usuário 
            e os objetivos de negócio através de código limpo e design inovador.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-8 flex-wrap"
            variants={itemVariants}
          >
            <Link
              href="#contato"
              className="px-6 py-3 rounded-lg font-medium text-base bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white hover:shadow-[0_10px_30px_rgba(139,92,246,0.4)] transition-all duration-300 hover:-translate-y-1"
            >
              Vamos conversar
            </Link>
            <Link
              href="#projetos"
              className="px-6 py-3 rounded-lg font-medium text-base border-2 border-[#8b5cf6] text-[#a78bfa] hover:bg-[rgba(139,92,246,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              Ver Projetos
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
