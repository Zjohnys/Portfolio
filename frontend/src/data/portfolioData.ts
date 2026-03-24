export type PortfolioProject = {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  github: string
  live: string
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    title: 'Login React - Sistema de Autenticacao',
    description: 'Um aplicativo de autenticacao completo com frontend em React e backend em Node.js com TypeScript.',
    tags: ['React', 'Node.js', 'TypeScript', 'Authentication'],
    image: '🔐',
    github: 'https://github.com/Zjohnys/Login-React',
    live: '#',
  },
  {
    id: 2,
    title: 'Nature Atypical Page',
    description: 'Site criado para um projeto de inclusao na escola, promovendo acessibilidade e conscientizacao.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Accessibility'],
    image: '🌿',
    github: 'https://github.com/Zjohnys/Nature_Atypical_Page',
    live: '#',
  },
  {
    id: 3,
    title: 'NovaStore - E-Commerce Full-Stack',
    description: 'Projeto completo de e-commerce com autenticacao, catalogo, carrinho, checkout e painel de pedidos.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Auth.js'],
    image: '🛒',
    github: 'https://github.com/Zjohnys/e-commerce-nextjs',
    live: '#',
  },
  {
    id: 4,
    title: 'Factory Optimizer',
    description: 'Aplicacao para gerenciamento de insumos e otimizacao de producao industrial com sugestao de producao otima.',
    tags: ['Java', 'Spring Boot', 'Vue 3', 'H2'],
    image: '🏭',
    github: 'https://github.com/Zjohnys/factory-optimizer',
    live: '#',
  },
  {
    id: 5,
    title: 'Portfolio Pessoal',
    description: 'Site portfolio responsivo desenvolvido com HTML, CSS e JavaScript para apresentacao profissional.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    image: '💼',
    github: 'https://github.com/Zjohnys/Portfolio',
    live: 'https://zjohnys.github.io/Portfolio/',
  },
  {
    id: 6,
    title: 'NexaStock Landing Page',
    description: 'Landing page moderna com React e TypeScript, navegacao por rotas e tema claro/escuro com persistencia.',
    tags: ['React', 'TypeScript', 'Vite', 'React Router', 'Framer Motion'],
    image: '📈',
    github: 'https://github.com/Zjohnys/Landing-page-main',
    live: '#',
  },
]

export function getPortfolioStats() {
  const projectCount = PORTFOLIO_PROJECTS.length
  const repositoryCount = new Set(PORTFOLIO_PROJECTS.map((project) => project.github)).size
  const technologyCount = new Set(
    PORTFOLIO_PROJECTS.flatMap((project) => project.tags.map((tag) => tag.trim().toLowerCase())),
  ).size

  return {
    projectCount,
    repositoryCount,
    technologyCount,
  }
}
