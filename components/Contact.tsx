'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/john_lmoreira/',
    icon: 'fab fa-instagram',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Zjohnys',
    icon: 'fab fa-github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/john-lennon-moreira-964389227/',
    icon: 'fab fa-linkedin-in',
  },
  {
    name: 'Email',
    url: 'mailto:johnmoreira42@gmail.com',
    icon: 'fas fa-envelope',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [notification, setNotification] = useState<string | null>(null)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('johnmoreira42@gmail.com')
      setNotification('Email copiado para a área de transferência!')
      setTimeout(() => setNotification(null), 3000)
    } catch (err) {
      setNotification('Erro ao copiar email')
      setTimeout(() => setNotification(null), 3000)
    }
  }

  return (
    <section id="contato" className="py-24 bg-[#0f0f17] relative z-[1]" ref={ref}>
      <div className="max-width">
        <motion.h2
          className="relative text-left text-5xl md:text-6xl font-bold mb-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Entre em Contato
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          <motion.div
            className="w-full lg:w-[calc(50%-30px)]"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-xl font-semibold mb-2.5">Vamos conversar?</div>
            <p className="text-justify leading-relaxed text-[#b3b3b3] mb-8">
              Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou gostaria de trabalhar juntos, não hesite em entrar em contato!
            </p>

            <div className="my-2.5" aria-label="Informações de contato">
              <ContactInfo label="Nome" value="John Lennon Moreira" />
              <ContactInfo
                label="Email"
                value="johnmoreira42@gmail.com"
                onClick={copyEmail}
                clickable
              />
              <ContactInfo label="Localização" value="Brasil" />
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[calc(50%-30px)]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col gap-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="group flex items-center p-5 bg-[rgba(139,92,246,0.1)] backdrop-blur-[10px] rounded-xl border border-[rgba(139,92,246,0.2)] transition-all duration-300 no-underline text-white hover:-translate-y-2 hover:border-[rgba(139,92,246,0.4)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.3)] hover:bg-[rgba(139,92,246,0.15)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.i
                    className={`${social.icon} text-[30px] mr-4 text-[#a78bfa]`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="text-lg font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {notification && (
        <motion.div
          className="fixed top-5 right-5 px-5 py-4 rounded-md text-white font-medium z-[10000]"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          style={{
            background: notification.includes('Erro') ? '#f44336' : '#4CAF50',
          }}
        >
          {notification}
        </motion.div>
      )}
    </section>
  )
}

function ContactInfo({
  label,
  value,
  onClick,
  clickable,
}: {
  label: string
  value: string
  onClick?: () => void
  clickable?: boolean
}) {
  return (
    <div className="flex h-16 items-center mb-5">
      <div className="ml-2.5">
        <div className="font-medium text-white">{label}</div>
        <div
          className={`text-[#b3b3b3] ${clickable ? 'cursor-pointer hover:text-[#00d4ff] transition-colors' : ''}`}
          onClick={onClick}
          title={clickable ? 'Clique para copiar' : undefined}
        >
          {value}
        </div>
      </div>
    </div>
  )
}
