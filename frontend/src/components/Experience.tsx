import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Desenvolvedor Fullstack',
      company: 'Secretaria Municipal de Educação de Altaneira',
      period: 'MAR 2025 - AGO 2025',
      description: 'Fui responsável por criar um site educacional para alunos atípicos.',
      location: 'Remoto - Altaneira, Ceará',
    },
    {
      id: 2,
      title: 'Suporte técnico em TI',
      company: 'EMEF Joaquim de Morais',
      period: 'JAN 2024 - DEZ 2024',
      description: 'Fui responsável por fornecer suporte técnico aos usuários e manter os sistemas em funcionamento adequado.',
      location: 'Presencial - Altaneira, Ceará',
    },
    {
      id: 3,
      title: 'Monitor de laboratório de informática',
      company: 'EMEF Joaquim Rufino de Oliveira',
      period: 'FEV 2023 - DEZ 2023',
      description: 'Monitorava o laboratório de informática, prestando suporte técnico aos usuários e mantendo os computadores em funcionamento adequado.',
      location: 'Presencial - Altaneira, Ceará',
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="experiencia" className="py-20 px-4 bg-slate-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Minha <span className="text-cyan-400">Experiência</span>
        </motion.h2>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 transform md:-translate-x-1/2" />

          {/* Experiences */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`mb-12 md:mb-16 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              variants={itemVariants}
            >
              {/* Left/Right Content */}
              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                <motion.div
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-sm text-gray-400">{exp.period}</p>
                    <p className="text-sm text-gray-500">{exp.location}</p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-slate-950 border-2 border-cyan-500 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center">
                <div className="w-3 h-3 bg-cyan-500 rounded-full" />
              </div>

              {/* Empty space for alternate layout */}
              <div className="hidden md:block md:w-1/2 md:pl-8" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
