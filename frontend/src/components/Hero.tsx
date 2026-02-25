import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'

export default function Hero() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          Olá, sou{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            John Lennon Moreira
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
          variants={itemVariants}
        >
          Full Stack Developer | Transformando ideias em experiências digitais incríveis
          <br />
          React • TypeScript • Node.js • Next.js
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="#projetos"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Meus Trabalhos
            <FiArrowRight />
          </motion.a>

          <motion.a
            href="/JohnMoreira_CV.pdf"
            download="JohnMoreira_CV.pdf"
            className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-cyan-500/10"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Baixar CV
            <FiDownload />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
          variants={itemVariants}
        >
          {[
            { number: '11+', label: 'Repositórios' },
            { number: '4+', label: 'Tecnologias' },
            { number: '3+', label: 'Projetos' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50"
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ opacity: [1, 0], y: [0, 8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
