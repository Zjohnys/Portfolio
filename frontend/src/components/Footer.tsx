import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/Zjohnys' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/john-lmoreira/' },
    { icon: FiInstagram, label: 'Instagram', href: 'https://www.instagram.com/john_lmoreira/' },
  ]

  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-slate-800 py-12 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Divider Animation */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              John Moreira
            </h3>
            <p className="text-gray-400 text-sm">
              Desenvolvedor Full Stack criando soluções digitais incríveis
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
            <div className="space-y-2 text-sm">
              {['Sobre', 'Projetos', 'Experiencia', 'Habilidades', 'Contato'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors block"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="pt-8 border-t border-slate-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gaps-4 text-sm text-gray-400">
            <p>© {currentYear} John Moreira. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <motion.a href="#" className="hover:text-cyan-400 transition-colors" whileHover={{ scale: 1.05 }}>
                Privacidade
              </motion.a>
              <motion.a href="#" className="hover:text-cyan-400 transition-colors" whileHover={{ scale: 1.05 }}>
                Termos
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
