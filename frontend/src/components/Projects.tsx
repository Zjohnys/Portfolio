import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Projects() {
  const getProjectsPerViewport = () => {
    if (typeof window === 'undefined') {
      return 1
    }

    if (window.innerWidth >= 1024) {
      return 3
    }

    if (window.innerWidth >= 768) {
      return 2
    }

    return 1
  }

  const [currentPage, setCurrentPage] = useState(0)
  const [projectsPerView, setProjectsPerView] = useState(getProjectsPerViewport)

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
      id: 3,
      title: 'NovaStore - E-Commerce Full-Stack',
      description: 'Projeto completo de e-commerce com autenticação, catálogo, carrinho, checkout e painel de pedidos.',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'Auth.js'],
      image: '🛒',
      github: 'https://github.com/Zjohnys/e-commerce-nextjs',
      live: '#',
    },
    {
      id: 4,
      title: 'Factory Optimizer',
      description: 'Aplicação para gerenciamento de insumos e otimização de produção industrial com sugestão de produção ótima.',
      tags: ['Java', 'Spring Boot', 'Vue 3', 'H2'],
      image: '🏭',
      github: 'https://github.com/Zjohnys/factory-optimizer',
      live: '#',
    },
    {
      id: 5,
      title: 'Portfólio Pessoal',
      description: 'Site portfólio responsivo desenvolvido com HTML, CSS e JavaScript para apresentação profissional.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      image: '💼',
      github: 'https://github.com/Zjohnys/Portfolio',
      live: 'https://zjohnys.github.io/Portfolio/',
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      setProjectsPerView(getProjectsPerViewport())
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(projects.length / projectsPerView))
  }, [projects.length, projectsPerView])

  useEffect(() => {
    setCurrentPage((prevPage) => Math.min(prevPage, totalPages - 1))
  }, [totalPages])

  const startIndex = currentPage * projectsPerView
  const visibleProjects = projects.slice(startIndex, startIndex + projectsPerView)

  const canGoPrev = currentPage > 0
  const canGoNext = currentPage < totalPages - 1

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0))
  }

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1))
  }

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
            key={`${currentPage}-${projectsPerView}`}
            className="grid gap-6"
            style={{ gridTemplateColumns: `repeat(${projectsPerView}, minmax(0, 1fr))` }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
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

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                type="button"
                onClick={handlePrev}
                disabled={!canGoPrev}
                className={`p-2 rounded-full border transition-all ${
                  canGoPrev
                    ? 'border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400'
                    : 'border-gray-700 text-gray-600 cursor-not-allowed'
                }`}
                whileHover={canGoPrev ? { scale: 1.08 } : {}}
                whileTap={canGoPrev ? { scale: 0.95 } : {}}
                aria-label="Página anterior"
              >
                <FiChevronLeft size={18} />
              </motion.button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                  <button
                    key={pageIndex}
                    type="button"
                    onClick={() => setCurrentPage(pageIndex)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      pageIndex === currentPage ? 'bg-cyan-400 w-6' : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`Ir para página ${pageIndex + 1}`}
                  />
                ))}
              </div>

              <motion.button
                type="button"
                onClick={handleNext}
                disabled={!canGoNext}
                className={`p-2 rounded-full border transition-all ${
                  canGoNext
                    ? 'border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400'
                    : 'border-gray-700 text-gray-600 cursor-not-allowed'
                }`}
                whileHover={canGoNext ? { scale: 1.08 } : {}}
                whileTap={canGoNext ? { scale: 0.95 } : {}}
                aria-label="Próxima página"
              >
                <FiChevronRight size={18} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
