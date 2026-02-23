'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Skill {
  name: string
  percentage: number
  icon: string
  category: 'frontend' | 'backend'
}

const skills: Skill[] = [
  { name: 'HTML', percentage: 90, icon: 'fab fa-html5', category: 'frontend' },
  { name: 'CSS', percentage: 85, icon: 'fab fa-css3-alt', category: 'frontend' },
  { name: 'JavaScript', percentage: 80, icon: 'fab fa-js-square', category: 'frontend' },
  { name: 'React', percentage: 70, icon: 'fab fa-react', category: 'frontend' },
  { name: 'Node.js', percentage: 65, icon: 'fab fa-node-js', category: 'backend' },
  { name: 'TypeScript', percentage: 60, icon: 'fas fa-code', category: 'backend' },
  { name: 'PHP', percentage: 55, icon: 'fab fa-php', category: 'backend' },
]

const frontendSkills = skills.filter((s) => s.category === 'frontend')
const backendSkills = skills.filter((s) => s.category === 'backend')

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 bg-[#0f0f17] relative z-[1]" ref={ref}>
      <div className="max-width">
        <motion.h2
          className="relative text-left text-5xl md:text-6xl font-bold mb-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Minhas Skills
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          <motion.div
            className="w-full lg:w-[calc(50%-30px)]"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-xl font-semibold mb-2.5">
              Minhas habilidades criativas & experiências
            </div>
            <p className="text-justify leading-relaxed text-[#b3b3b3]">
              Desenvolvo interfaces web modernas e responsivas utilizando as melhores práticas e tecnologias atuais. Foco em criar experiências únicas e funcionais para os usuários.
            </p>
          </motion.div>

          <motion.div
            className="w-full lg:w-[calc(50%-30px)] flex flex-col gap-8 md:gap-10"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SkillCategory title="Frontend" skills={frontendSkills} isInView={isInView} />
            <SkillCategory title="Backend" skills={backendSkills} isInView={isInView} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ title, skills, isInView }: { title: string; skills: Skill[]; isInView: boolean }) {
  return (
    <div className="flex-1">
      <h3 className="text-[22px] font-semibold text-[#a78bfa] mb-5">{title}</h3>
      {skills.map((skill, index) => (
        <SkillBar key={skill.name} skill={skill} index={index} isInView={isInView} />
      ))}
    </div>
  )
}

function SkillBar({ skill, index, isInView }: { skill: Skill; index: number; isInView: boolean }) {
  return (
    <motion.div
      className="mb-5"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
    >
      <div className="flex mb-2 items-center justify-between">
        <div className="flex items-center">
          <i className={`${skill.icon} text-2xl text-[#a78bfa] mr-2.5`} />
          <span className="font-medium text-base">{skill.name}</span>
        </div>
        <span className="font-medium text-base">{skill.percentage}%</span>
      </div>
      <div className="h-3 w-full bg-[rgba(51,51,51,0.5)] relative rounded-full overflow-hidden backdrop-blur-[5px]">
        <motion.div
          className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] rounded-full absolute left-0 top-0 shadow-[0_0_10px_rgba(139,92,246,0.5)]"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'linear',
          }}
        />
      </div>
    </motion.div>
  )
}
