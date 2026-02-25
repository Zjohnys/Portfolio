# 🚀 Começando com o Portfólio

## Passos Rápidos para Iniciar

### 1. Configurar Variáveis de Ambiente

#### Backend
```bash
cd backend
cp .env.example .env
```

Edite `backend/.env` com suas informações:
```
PORT=3001
CORS_ORIGIN=http://localhost:5173
EMAIL_SERVICE=gmail
EMAIL_USER=seu_email@gmail.com
EMAIL_PASSWORD=sua_senha_de_app
```

**Como obter a senha de app do Gmail:**
1. Vá para https://myaccount.google.com/
2. Clique em "Segurança" no menu esquerdo
3. Ative "Verificação em duas etapas" se ainda não estiver
4. Procure por "Senhas de app"
5. Selecione "Mail" e "Windows Computer"
6. Copie a senha gerada

#### Frontend
```bash
cd frontend
cp .env.example .env
```

### 2. Instalar Dependências

Se ainda não instalou:
```bash
npm run install:all
```

Ou instale separadamente:
```bash
# Frontend
cd frontend && npm install

# Backend
cd backend && npm install
```

### 3. Executar em Desenvolvimento

**Opção 1: Ambos os servidores juntos**
```bash
npm run dev
```

**Opção 2: Separadamente**

Terminal 1 (Frontend):
```bash
npm run frontend
```

Terminal 2 (Backend):
```bash
npm run backend
```

### 4. Acessar a Aplicação

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:3001

## 🎨 Customização

### Adicione Sua Informação

1. **Nome e Email**
   - Edite [components/Hero.tsx](frontend/src/components/Hero.tsx)
   - Edite [components/Contact.tsx](frontend/src/components/Contact.tsx)

2. **Projetos**
   - Edite o array em [components/Projects.tsx](frontend/src/components/Projects.tsx)

3. **Habilidades**
   - Edite [components/Skills.tsx](frontend/src/components/Skills.tsx)

4. **Cores**
   - Edite [tailwind.config.js](frontend/tailwind.config.js)

5. **Informações Sobre**
   - Edite [components/About.tsx](frontend/src/components/About.tsx)

## 📦 Build para Produção

```bash
npm run build
```

Isso vai gerar:
- `frontend/dist/` - Arquivo estático do React
- `backend/dist/` - Código compilado do Node.js

## 🌐 Deploy

### Frontend (Vercel)
1. Push para GitHub
2. Conecte ao Vercel
3. Escolha a pasta `frontend`
4. Variáveis de ambiente: `VITE_API_URL` = sua URL do backend

### Backend (Heroku / Railway / Render)
1. Push para GitHub
2. Conecte ao serviço de deploy
3. Escolha a pasta `backend`
4. Defina as variáveis de ambiente

## ✅ Checklist de Configuração

- [ ] Configurei `.env` no backend
- [ ] Testei o envio de email
- [ ] Customizei as informações pessoais
- [ ] Adicionei meus projetos
- [ ] Adicionei minhas habilidades
- [ ] Links sociais configurados
- [ ] Testei em mobile/responsivo

## 🐛 Troubleshooting

### Email não está sendo enviado
- Verifique as credenciais de email
- Para Gmail, use "Senha de app" não a senha regular
- Verifique nas configurações de segurança do Google

### Frontend não conecta ao backend
- Certifique-se de que o backend está rodando
- Verifique se porta 3001 não está em uso
- Valide `CORS_ORIGIN` no backend .env

### Porta já em uso
- frontend: `npm run dev -- --port 5174`
- backend: mude PORT em .env para 3002

## 📚 Recursos Úteis

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Express.js Guide](https://expressjs.com/)

## 💡 Next Steps

1. Faça deploy do seu portfólio
2. Compartilhe com você mesmo e recrutadores
3. Mantenha atualizado com seus projetos
4. Monitore os contatos recebidos

---

Boa sorte! 🎉
