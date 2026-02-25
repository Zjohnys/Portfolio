## Portfólio Moderno - Instruções de Desenvolvimento

Este arquivo documenta as instruções específicas para desenvolvimento e manutenção deste projeto de portfólio.

### Estrutura do Projeto

- `/frontend` - Aplicação React com TypeScript e Vite
- `/backend` - API Node.js/Express para contatos e dados
- `/README.md` - Documentação completa
- `/QUICKSTART.md` - Guia rápido de início

### Padrões de Codificação

**Frontend:**
- Componentes funcionais com React Hooks
- TypeScript para type safety
- Framer Motion para animações
- Tailwind CSS para styling
- Organização por features em `/components`

**Backend:**
- TypeScript com Express
- Validação de dados request
- Tratamento de erros consistente
- CORS habilitado para uso local e produção

### Convenções Naming

- Componentes React: PascalCase (`Hero.tsx`, `Navigation.tsx`)
- Funções/variáveis: camelCase
- Constantes: UPPER_SNAKE_CASE
- Pastas: kebab-case

### Configuração de Desenvolvimento

**Setup inicial:**
1. Instale Node.js v16+
2. Clone/crie o projeto
3. Configure `.env` no backend
4. Execute `npm install:all` na raiz
5. Execute `npm run dev`

**Variáveis de Ambiente Necessárias:**
- Backend: `PORT`, `CORS_ORIGIN`, `EMAIL_*`
- Frontend: `VITE_API_URL`

### Fluxo de Desenvolvimento

1. **Adicionar nova feature:**
   - Crie componente em `/frontend/src/components`
   - Adicione animações com Framer Motion
   - Estile com Tailwind

2. **Adicionar novo endpoint:**
   - Implemente em `/backend/src/server.ts`
   - Valide inputs
   - Trate erros

3. **Teste local:**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3001

### Boas Práticas

- ✅ Use TypeScript em ambos frontend e backend
- ✅ Componentes menores e reutilizáveis
- ✅ Animações com `whileHover` e `whileInView`
- ✅ Responsivo com Tailwind breakpoints
- ✅ Validação de email e forms
- ✅ CORS configurado para produção

### Customização Comum

**Cores principais:**
- Edite `frontend/tailwind.config.js`
- Paleta: cores da Tailwind customizadas
- Gradientes: `from-cyan-400 to-blue-500`

**Conteúdo:**
- Informações pessoais: edite componentes individuais
- Projetos: array em `Projects.tsx`
- Habilidades: `Skills.tsx`

### Deploy

**Frontend (Vercel):**
- Conecte repositório GitHub
- Selecione pasta `frontend`
- Env: `VITE_API_URL`

**Backend (Heroku/Railway):**
- Conecte repositório GitHub
- Selecione pasta `backend`
- Env: `PORT`, `CORS_ORIGIN`, `EMAIL_*`

### Troubleshooting

- Porta em uso: mude em `.env` ou use `--port`
- CORS error: verifique `CORS_ORIGIN` no backend
- Email não funciona: valide credenciais do Gmail
- Build falha: delete `node_modules` e `dist`, reinstale

### Recursos do Projeto

- Animações fluidas com Framer Motion
- Design responsivo (mobile-first)
- Seções: Hero, About, Projects, Skills, Contact, Footer
- Dark mode por padrão
- Performance otimizada

### Próximos Passos

1. Customize com informações pessoais
2. Adicione seus projetos reais
3. Configure email de contato
4. Implemente deploy
5. Monitore e atualize constantemente

---

Developed with ❤️ by João
