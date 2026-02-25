# Portfólio Moderno com React, TypeScript e Node.js

Um portfólio impressionante e responsivo construído com as tecnologias mais modernas, apresentando animações fluidas e design minimalista.

## 🚀 Características

- **React 18** com TypeScript para type safety
- **Vite** para compilação e desenvolvimento rápido
- **Framer Motion** para animações fluidas e elegantes
- **Tailwind CSS** para styling responsivo
- **Node.js + Express** para o backend
- **Design Responsivo** com mobile-first approach
- **Otimizado para Performance**

## 📁 Estrutura do Projeto

```
Projeto Portfolio/
├── frontend/              # React + TypeScript
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── pages/         # Páginas
│   │   ├── styles/        # Estilos
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── index.html
│   └── package.json
├── backend/               # Node.js + Express
│   ├── src/
│   │   └── server.ts
│   └── package.json
└── README.md
```

## 🛠️ Instalação

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

O frontend estará disponível em `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install

# Configure o arquivo .env
cp .env.example .env
# Edite .env com suas credenciais

npm run dev
```

O backend estará disponível em `http://localhost:3001`

## 📦 Dependências

### Frontend
- `react` - Biblioteca UI
- `react-dom` - Renderização DOM
- `framer-motion` - Animações
- `tailwindcss` - Styling
- `react-icons` - Ícones
- `axios` - HTTP Client
- `vite` - Build tool
- `typescript` - Type safety

### Backend
- `express` - Framework web
- `cors` - CORS middleware
- `nodemailer` - Email service
- `dotenv` - Environment variables
- `typescript` - Type safety

## 🎨 Componentes

### Frontend Components
- **Navigation** - Menu de navegação responsivo com suporte mobile
- **Hero** - Seção de apresentação com animações
- **About** - Informações sobre você
- **Projects** - Galeria de projetos
- **Skills** - Habilidades e competências
- **Contact** - Formulário de contato
- **Footer** - Rodapé com links sociais

## 🔧 Configuração

### Variáveis de Ambiente

**Backend (.env)**
```
PORT=3001
CORS_ORIGIN=http://localhost:5173
EMAIL_SERVICE=gmail
EMAIL_USER=seu_email@gmail.com
EMAIL_PASSWORD=sua_senha_de_app
```

**Frontend (.env)**
```
VITE_API_URL=http://localhost:3001/api
```

## 📧 Configurando Email

1. Para Gmail:
   - Acesse sua conta Google
   - Ative "Senhas de app" nas configurações de segurança
   - Use a senha de app no .env

2. Para outro provedor:
   - Atualize as variáveis de email em .env
   - Configure o transporter em `backend/src/server.ts`

## 🚀 Build para Produção

### Frontend
```bash
cd frontend
npm run build
```

### Backend
```bash
cd backend
npm run build
npm start
```

## 🎯 API Endpoints

- `GET /` - Status do servidor
- `GET /projects` - Lista de projetos
- `GET /skills` - Habilidades
- `POST /contact` - Enviar mensagem de contato

## 🎨 Customização

### Cores
Edit `frontend/tailwind.config.js` para customizar as cores

### Conteúdo
- Edite os componentes em `frontend/src/components/`
- Atualize as informações pessoais (nome, email, etc)

### Animações
Personalize as animações em cada componente usando Framer Motion

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌟 Recursos Especiais

- ✨ Animações suaves com Framer Motion
- 🎯 Scroll smoothness
- 📊 Performance otimizada
- ♿ Acessibilidade
- 🌙 Design moderno e elegante
- 📦 PWA ready

## 🤝 Contribuindo

Sinta-se livre para fazer fork deste projeto e melhorá-lo!

## 📄 Licença

Este projeto está disponível sob a licença MIT.

## 💡 Dicas

1. Customize os dados pessoais em cada componente
2. Adicione suas redes sociais nos links
3. Configure o email para receber contatos
4. Faça deploy no Vercel (frontend) e Heroku (backend)
5. Adicione seus projetos e habilidades

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

---

Desenvolvido com ❤️ usando React, TypeScript e Node.js
