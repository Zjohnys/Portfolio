import { motion } from 'framer-motion'

export default function About() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="sobre" className="py-20 px-4 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side - Profile Image */}
          <motion.div
            className="relative flex justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.div
              className="w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500/20"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src="https://avatars.githubusercontent.com/u/90204879?v=4"
                alt="John Moreira - Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -inset-8 border-2 border-cyan-500/30 rounded-2xl pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={containerVariants} className="text-center md:text-left">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Sobre <span className="text-cyan-400">Mim</span>
            </motion.h2>

            <motion.div className="space-y-4 text-gray-300" variants={itemVariants}>
              <p className="text-base md:text-lg leading-relaxed">
              Sou um Desenvolvedor de Software Full-Stack com 2 anos de experiência prática no desenvolvimento de sistemas escaláveis
              e interfaces de alta performance. Minha atuação é focada no ecossistema JavaScript (React, Next.js e Node.js), 
              com sólida base em TypeScript e PHP.

              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Meu diferencial reside na convergência entre o desenvolvimento web tradicional e a Inteligência Artificial, 
                aplicando princípios de Clean Code e POO para entregar soluções que conectam performance e inteligência.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                 Busco oportunidades para evoluir tecnicamente e colaborar em projetos de desenvolvimento web 
                 que gerem impacto real e soluções inovadoras.
              </p>
            </motion.div>

            {/* Achievements */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-8"
              variants={itemVariants}
            >
              {[
                { icon: '🚀', text: 'Rápido & Eficiente' },
                { icon: '🎨', text: 'Design Moderno' },
                { icon: '📱', text: 'Responsivo' },
                { icon: '⚡', text: 'Alto Desempenho' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-cyan-500/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm">{item.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
