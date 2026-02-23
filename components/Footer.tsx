'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0f0f17] py-12 md:py-16 px-6 relative z-[1] border-t border-[rgba(139,92,246,0.1)]">
      <div className="max-width">
        <div className="text-center mb-8">
          <p className="text-white text-base md:text-lg mb-2">
            Estou sempre aberto a novas oportunidades e{' '}
            <span className="text-[#a78bfa] underline">colaborações</span>
          </p>
          <p className="text-[#a78bfa] text-sm md:text-base">
            que valorizam melhorar a vida das pessoas através de código e design acessível
          </p>
        </div>

        <div className="text-center text-[#a78bfa] text-sm md:text-base">
          <span>
            Criado por <Link href="#home" className="text-white hover:text-[#a78bfa] transition-colors">John Lennon Moreira</Link> |{' '}
            <span className="far fa-copyright" /> 2026
          </span>
        </div>
      </div>
    </footer>
  )
}
