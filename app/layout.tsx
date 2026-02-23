import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import BackToTop from '@/components/BackToTop'
import SmoothScroll from './smooth-scroll'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'John Lennon Moreira - Desenvolvedor Full-Stack',
  description: 'Portfólio de John Lennon Moreira - Desenvolvedor Full-Stack especializado em HTML, CSS, JavaScript, React, Node.js, TypeScript e PHP',
  keywords: 'Desenvolvedor Full-Stack, Full-Stack Developer, HTML, CSS, JavaScript, React, Node.js, TypeScript, PHP, MongoDB, portfolio, full-stack',
  authors: [{ name: 'John Lennon Moreira' }],
  openGraph: {
    type: 'website',
    title: 'John Lennon Moreira - Desenvolvedor Full-Stack',
    description: 'Portfólio de projetos, skills e contato. Desenvolvedor Full-Stack.',
    url: 'https://zjohnys.github.io/Portfolio/',
    images: ['/Images/Profile.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Lennon Moreira - Desenvolvedor Full-Stack',
    description: 'Portfólio de projetos, skills e contato.',
    images: ['/Images/Profile.jpg'],
  },
  themeColor: '#00d4ff',
  icons: {
    icon: '/Images/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={poppins.className}>
        <Loader />
        <SmoothScroll />
        <Navbar />
        <main id="main" role="main">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
