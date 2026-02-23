export interface Project {
  id: string
  icon: string
  title: string
  description: string
  techStack: string[]
  links: {
    demo?: string
    code?: string
  }
  featured?: boolean
  category?: 'web' | 'mobile' | 'fullstack' | 'other'
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    icon: '🚀',
    title: 'Portfólio Pessoal',
    description:
      'Portfólio responsivo desenvolvido com Next.js, React e TypeScript. Design moderno com animações suaves, glassmorphism e efeitos de partículas. Totalmente otimizado para performance e SEO.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: {
      demo: 'https://zjohnys.github.io/Portfolio/',
      code: 'https://github.com/Zjohnys/Portfolio',
    },
    featured: true,
    category: 'web',
  },
  {
    id: 'nature-atypical',
    icon: '🌿',
    title: 'Nature Atypical',
    description:
      'Plataforma web de educação ambiental inclusiva desenvolvida para a EMEFTI 18 de Dezembro (Altaneira-CE), promovendo conscientização ambiental adaptada para todos os alunos, com foco em acessibilidade e inclusão.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Acessibilidade', 'Educação'],
    links: {
      demo: 'https://zjohnys.github.io/Nature_Atypical_Page/',
      code: 'https://github.com/Zjohnys/Nature_Atypical_Page',
    },
    featured: true,
    category: 'web',
  },
  {
    id: 'login-react',
    icon: '🔐',
    title: 'Login React App',
    description:
      'Aplicativo de autenticação full-stack desenvolvido com React, Node.js e MongoDB. Inclui registro, login, recuperação de senha e autenticação social via Google, Facebook e Apple.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    links: {
      code: 'https://github.com/Zjohnys/Login-React',
    },
    featured: true,
    category: 'fullstack',
  },
  // Adicione mais projetos aqui facilmente:
  // {
  //   id: 'novo-projeto',
  //   icon: '🎨',
  //   title: 'Novo Projeto',
  //   description: 'Descrição do projeto...',
  //   techStack: ['React', 'TypeScript'],
  //   links: {
  //     demo: 'https://...',
  //     code: 'https://...',
  //   },
  //   featured: true,
  //   category: 'web',
  // },
]
