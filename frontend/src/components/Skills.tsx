import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Vite', 'Vue 3', 'React Router'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'API REST', 'Authentication', 'Java', 'Spring Boot', 'Prisma', 'Auth.js', 'H2'],
    },
    {
      category: 'Ferramentas e Boas Práticas',
      skills: ['Git & GitHub', 'Responsive Design', 'Acessibilidade', 'Framer Motion', 'Integração Frontend/Backend', 'Arquitetura Full-Stack'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="habilidades" className="py-20 px-4 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Minhas <span className="text-cyan-400">Habilidades</span>
        </motion.h2>

        <div className="flex justify-center">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">{category.category}</h3>
              <div className="space-y-2 text-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 0 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
          </motion.div>
        </div>

        {/* Proficiency Bars */}
        <motion.div
          className="mt-20 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Proficiência</h3>
          {[
            { lang: 'JavaScript/HTML/CSS', level: 88 },
            { lang: 'React/TypeScript', level: 74 },
            { lang: 'Node.js e APIs', level: 65 },
            { lang: 'Java/Spring Boot', level: 57 },
          ].map((item, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-300">{item.lang}</span>
                <span className="text-cyan-400 font-bold">{item.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
