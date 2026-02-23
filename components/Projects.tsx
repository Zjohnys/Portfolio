'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects, type Project } from '../data/projects'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Mostrar todos os projetos (sem filtros)
  const displayedProjects = projects.filter(p => p.featured !== false)

  return (
    <section id="projetos" className="py-24 bg-[#0f0f17] relative z-[1]" ref={ref}>
      <div className="max-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Meus Projetos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  return (
    <motion.div
      className="group bg-[rgba(139,92,246,0.08)] backdrop-blur-[10px] rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-500 border border-[rgba(139,92,246,0.2)] shadow-[0_10px_40px_rgba(139,92,246,0.1)] relative overflow-hidden hover:bg-[rgba(139,92,246,0.15)] hover:border-[rgba(139,92,246,0.4)] hover:shadow-[0_20px_60px_rgba(139,92,246,0.3)]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(139,92,246,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <motion.div
          className="mb-4 md:mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="text-5xl md:text-6xl">{project.icon}</div>
        </motion.div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-[#a78bfa] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#b3b3b3] text-sm md:text-base leading-relaxed mb-4 md:mb-6 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
          {project.techStack.slice(0, 4).map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="bg-[rgba(139,92,246,0.15)] backdrop-blur-[5px] text-[#a78bfa] px-3 py-1 rounded-lg text-xs font-medium border border-[rgba(139,92,246,0.3)] transition-all duration-300 hover:bg-[rgba(139,92,246,0.25)] hover:scale-105"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 + techIndex * 0.05, duration: 0.3 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs text-[#b3b3b3] px-3 py-1 flex items-center">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          {project.links.demo && (
            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link relative px-4 md:px-6 py-2.5 rounded-lg bg-[rgba(139,92,246,0.2)] border border-[rgba(139,92,246,0.3)] text-white font-medium text-xs md:text-sm hover:bg-[rgba(139,92,246,0.3)] transition-all duration-300 text-center overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                🌐 Demo
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left rounded-lg" />
            </motion.a>
          )}
          {project.links.code && (
            <motion.a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link relative px-4 md:px-6 py-2.5 rounded-lg bg-[rgba(139,92,246,0.2)] border border-[rgba(139,92,246,0.3)] text-white font-medium text-xs md:text-sm hover:bg-[rgba(139,92,246,0.3)] transition-all duration-300 text-center overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                💻 Código
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left rounded-lg" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
