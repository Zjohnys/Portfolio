'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" className="py-24 bg-[#0f0f17] relative z-[1]" ref={ref}>
      <div className="max-width">
        <motion.h2
          className="relative text-center text-[40px] font-medium mb-16 pb-5 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] bg-clip-text text-transparent tracking-wide after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[120px] after:h-0.5 after:bg-gradient-to-r after:from-[#00d4ff] after:to-[#0099cc] after:rounded-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Sobre Mim
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div
            className="w-full lg:w-[45%] flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] rounded-2xl blur-xl opacity-30 -z-10" />
              <Image
                src="/Images/Profile.jpg"
                alt="John Lennon Moreira"
                width={400}
                height={400}
                className="h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] object-cover object-[center_top] rounded-2xl border-[3px] border-[rgba(139,92,246,0.5)] shadow-[0_20px_60px_rgba(139,92,246,0.3)] transition-all duration-300"
                loading="lazy"
                priority={false}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[55%]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-xl md:text-2xl font-semibold mb-2.5">
              Sou John e sou Desenvolvedor <span className="text-[#a78bfa] font-semibold">Full-Stack</span>
            </div>
            <p className="text-justify leading-relaxed mb-5 text-[#b3b3b3]">
              Sou John Lennon Moreira, <strong>Tecnólogo em Análise e Desenvolvimento de Sistemas</strong>, com experiência em <strong>suporte técnico</strong> e <strong>monitoria em informática</strong>. Minha formação inclui <strong>Desenvolvimento Web</strong>, adquirido no <strong>Centro Universitário Paraíso - UniFAP</strong>. Possuo domínio pleno em <strong>português</strong> e nível intermediário em <strong>inglês</strong> e <strong>espanhol</strong>.
            </p>
            <p className="text-justify leading-relaxed mb-5 text-[#b3b3b3]">
              Tenho experiência prática em desenvolvimento full-stack, utilizando tecnologias como <strong>HTML5, CSS3, JavaScript, React, Node.js, TypeScript, PHP e MongoDB</strong>. Recentemente, desenvolvi aplicações como um sistema de autenticação completo com login social (Google, Facebook, Apple) e projetos educacionais focados em acessibilidade. Sou apaixonado por criar soluções inovadoras e estou sempre aprendendo novas tecnologias para entregar produtos de alta qualidade.
            </p>
            <div className="flex gap-4 mt-8 flex-wrap justify-center">
              <a
                href="/Curriculo/John_Moreira_Currículo.pdf"
                className="inline-block px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium text-sm md:text-base text-center transition-all duration-300 cursor-pointer border-2 border-[#8b5cf6] text-[#a78bfa] bg-transparent no-underline hover:bg-[rgba(139,92,246,0.1)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)]"
                download
              >
                Baixar CV
              </a>
              <Link
                href="#skills"
                className="inline-block px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium text-sm md:text-base text-center transition-all duration-300 cursor-pointer border-none no-underline bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(139,92,246,0.4)]"
              >
                Ver Skills
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
