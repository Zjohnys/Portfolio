import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        setSubmitMessage(data.message || 'Mensagem enviada com sucesso!')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitMessage(''), 5000)
      } else {
        const data = await response.json().catch(() => null)
        setSubmitMessage(data?.error || 'Erro ao enviar mensagem. Tente novamente.')
      }
    } catch (error) {
      setSubmitMessage('Erro de conexão. Por favor, tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

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

  return (
    <section id="contato" className="py-20 px-4 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Entre em <span className="text-cyan-400">Contato</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Informações de Contato</h3>
              <p className="text-gray-300 mb-8">
                Sinta-se à vontade para entrar em contato comigo. Responderei assim que possível.
              </p>
            </div>

            {[
              {
                icon: FiMail,
                label: 'Email',
                value: 'johnmoreira42@gmail.com',
                href: 'mailto:johnmoreira42@gmail.com',
              },
              {
                icon: FiPhone,
                label: 'Telefone',
                value: '+55 (88) 99204-3883',
                href: 'tel:+5588992043883',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-lg font-semibold text-white">{item.value}</p>
                  </div>
                </motion.a>
              )
            })}

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Redes Sociais</h4>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', icon: FiGithub, href: 'https://github.com/Zjohnys' },
                  { name: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/john-lmoreira/' },
                  { name: 'Instagram', icon: FiInstagram, href: 'https://www.instagram.com/john_lmoreira/' },
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="space-y-4"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Nome</label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-500"
                placeholder="Seu nome"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-500"
                placeholder="seu@email.com"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Assunto</label>
              <motion.input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-500"
                placeholder="Assunto da mensagem"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Mensagem</label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-500 resize-none"
                placeholder="Sua mensagem..."
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            {submitMessage && (
              <motion.div
                className={`p-4 rounded-lg text-center ${
                  submitMessage.includes('sucesso')
                    ? 'bg-green-500/10 text-green-400'
                    : 'bg-red-500/10 text-red-400'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitMessage}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
