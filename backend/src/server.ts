import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 3001

// Middlewares
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`)
  next()
})


// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Portfólio API running' })
})

// Contact form endpoint
const handleContact = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' })
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return res.status(400).json({ error: 'Email inválido' })
    }

    console.log('Nova mensagem de contato recebida:')
    console.log({ name, email, subject, message })
    res.status(202).json({ message: 'Mensagem recebida com sucesso!' })
  } catch (error) {
    console.error('Erro ao processar contato:', error)
    res.status(500).json({ error: 'Erro ao processar mensagem' })
  }
}

app.post('/contact', handleContact)
app.post('/api/contact', handleContact)

// Projects endpoint
app.get('/projects', (req: Request, res: Response) => {
  const projects = [
    {
      id: 1,
      title: 'Plataforma de E-commerce',
      description: 'Plataforma completa de e-commerce com autenticação, carrinho de compras e sistema de pagamento integrado.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      id: 2,
      title: 'App de Gerenciamento de Tarefas',
      description: 'Aplicação responsiva para gerenciar tarefas diárias com sincronização em tempo real.',
      tags: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
    },
  ]
  res.json(projects)
})

// Skills endpoint
app.get('/skills', (req: Request, res: Response) => {
  const skills = {
    frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Next.js'],
    backend: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'AWS', 'Firebase', 'Figma'],
  }
  res.json(skills)
})

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err)
  res.status(500).json({ error: 'Erro interno do servidor' })
})

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Rota não encontrada' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
})
