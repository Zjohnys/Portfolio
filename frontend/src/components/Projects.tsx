import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useState } from 'react'

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const projects = [
    {
      id: 1,
      title: 'Login React - Sistema de Autenticação',
      description: 'Um aplicativo de autenticação completo com frontend em React e backend em Node.js com TypeScript.',
      tags: ['React', 'Node.js', 'TypeScript', 'Authentication'],
      image: '🔐',
      github: 'https://github.com/Zjohnys/Login-React',
      live: '#',
    },
    {
      id: 2,
      title: 'Nature Atypical Page',
      description: 'Site criado para um projeto de inclusão na escola, promovendo acessibilidade e conscientização.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Accessibility'],
      image: '🌿',
      github: 'https://github.com/Zjohnys/Nature_Atypical_Page',
      live: '#',
    },
    {
      id: 4,
      title: 'Portfólio Pessoal',
      description: 'Site portfólio responsivo desenvolvido com HTML, CSS e JavaScript para apresentação profissional.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      image: '💼',
      github: 'https://github.com/Zjohnys/Portfolio',
      live: 'https://zjohnys.github.io/Portfolio/',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const projectsPerView = 3
  const canGoNext = currentIndex + projectsPerView < projects.length
  const canGoPrev = currentIndex > 0

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerView)

  return (
    <section id="projetos" className="py-20 px-4 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meus <span className="text-cyan-400">Projetos</span>
        </motion.h2>

        <div className="relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-slate-700">
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <FiGithub size={18} />
                      <span className="text-sm">Código</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <FiExternalLink size={18} />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Arrows */}
          {(canGoPrev || canGoNext) && (
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={handlePrev}
                disabled={!canGoPrev}
                className={`p-2 rounded-full border transition-all ${
                  canGoPrev
                    ? 'border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400'
                    : 'border-gray-600 text-gray-600 cursor-not-allowed'
                }`}
                whileHover={canGoPrev ? { scale: 1.1 } : {}}
                whileTap={canGoPrev ? { scale: 0.95 } : {}}
              >
                <FiChevronLeft size={20} />
              </motion.button>

              <motion.button
                onClick={handleNext}
                disabled={!canGoNext}
                className={`p-2 rounded-full border transition-all ${
                  canGoNext
                    ? 'border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400'
                    : 'border-gray-600 text-gray-600 cursor-not-allowed'
                }`}
                whileHover={canGoNext ? { scale: 1.1 } : {}}
                whileTap={canGoNext ? { scale: 0.95 } : {}}
              >
                <FiChevronRight size={20} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
