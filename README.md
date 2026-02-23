# 🚀 Portfólio Next.js - John Lennon Moreira

Um portfólio moderno e fluido desenvolvido com **React**, **Next.js 14** e **TypeScript**, apresentando minhas habilidades como desenvolvedor Full-Stack.

## ✨ Características

- **Framework Moderno**: Construído com Next.js 14 e React 18
- **TypeScript**: Tipagem estática para maior segurança e produtividade
- **Animações Fluidas**: Framer Motion para transições suaves e modernas
- **Design Responsivo**: Totalmente adaptável a todos os dispositivos
- **Performance Otimizada**: SSR/SSG do Next.js para carregamento rápido
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Acessibilidade**: Navegação por teclado e ARIA labels
- **Efeitos Modernos**: Partículas animadas, glassmorphism e gradientes

## 🛠️ Tecnologias Utilizadas

### Core
- **Next.js 14**: Framework React com App Router
- **React 18**: Biblioteca JavaScript para interfaces
- **TypeScript**: Superset JavaScript com tipagem estática

### Estilização
- **Tailwind CSS**: Framework CSS utility-first
- **CSS Modules**: Estilos modulares e escopados
- **Framer Motion**: Biblioteca de animações

### Ferramentas
- **Font Awesome**: Ícones
- **Google Fonts (Poppins)**: Tipografia moderna

## 📁 Estrutura do Projeto

```
Portfolio/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   ├── globals.css         # Estilos globais
│   └── smooth-scroll.tsx   # Componente de scroll suave
├── components/
│   ├── Navbar.tsx          # Barra de navegação
│   ├── Home.tsx            # Seção inicial
│   ├── About.tsx            # Seção sobre
│   ├── Skills.tsx           # Seção de habilidades
│   ├── Projects.tsx         # Seção de projetos
│   ├── Contact.tsx          # Seção de contato
│   ├── Footer.tsx            # Rodapé
│   ├── Loader.tsx            # Loader de carregamento
│   ├── BackToTop.tsx        # Botão voltar ao topo
│   └── Particles.tsx        # Efeito de partículas
├── data/
│   └── projects.ts          # Dados dos projetos (fácil de adicionar novos)
├── public/
│   ├── Images/              # Imagens e assets
│   └── Curriculo/           # Arquivos de currículo
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Zjohnys/Portfolio.git
   cd Portfolio
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o servidor de desenvolvimento**:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Abra no navegador**:
   Acesse [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
npm run build
npm start
```

## 📱 Seções do Portfólio

### 🏠 **Home**
- Apresentação pessoal com animações suaves
- Efeitos de partículas no background
- Call-to-action para contato e projetos
- Background com gradientes animados

### 👨‍💻 **Sobre**
- Informações pessoais e profissionais
- Foto de perfil com efeitos hover e glow
- Descrição das habilidades e objetivos
- Link para download do CV

### ⚡ **Skills**
- Barras de progresso animadas com Framer Motion
- Efeito de brilho nas barras
- Porcentagens de conhecimento em cada tecnologia
- Categorização Frontend/Backend
- Animações ao entrar na viewport

### 🚀 **Projetos**
- Cards interativos com glassmorphism
- Sistema de filtros por categoria
- Hover effects elaborados
- Stack de tecnologias para cada projeto
- Links para demo e código
- Layout em grid responsivo
- **Fácil adicionar novos projetos** - edite `data/projects.ts`

### 📞 **Contato**
- Informações de contato organizadas
- Links para redes sociais com animações
- Funcionalidade de copiar email
- Notificações de feedback

## 🎨 Paleta de Cores

```css
--primary-color: #00d4ff (Azul ciano)
--secondary-color: #0099cc (Azul escuro)
--accent-color: #ff6b35 (Laranja)
--text-color: #ffffff (Branco)
--text-secondary: #b3b3b3 (Cinza claro)
--bg-dark: #0a0a0a (Preto)
--bg-card: #1a1a1a (Cinza escuro)
```

## ➕ Adicionar Novos Projetos

Para adicionar novos projetos, edite o arquivo `data/projects.ts`:

```typescript
{
  id: 'novo-projeto',
  icon: '🎨',
  title: 'Novo Projeto',
  description: 'Descrição do projeto...',
  techStack: ['React', 'TypeScript', 'Next.js'],
  links: {
    demo: 'https://...',
    code: 'https://...',
  },
  featured: true,  // Aparece por padrão
  category: 'web', // 'web' | 'mobile' | 'fullstack' | 'other'
},
```

## ✨ Funcionalidades Interativas

- **Menu Mobile**: Hamburger menu animado para dispositivos móveis
- **Scroll Suave**: Navegação suave entre seções
- **Animações de Scroll**: Elementos aparecem conforme o scroll (Intersection Observer)
- **Efeitos Hover**: Interações visuais nos elementos
- **Partículas Animadas**: Background interativo com partículas conectadas
- **Loader**: Animação de carregamento inicial
- **Copiar Email**: Clique para copiar email automaticamente
- **Botão Voltar ao Topo**: Aparece ao fazer scroll
- **Filtros de Projetos**: Filtre projetos por categoria

## 🎯 Melhorias em Relação à Versão HTML

### Performance
- ✅ SSR/SSG do Next.js para melhor SEO
- ✅ Code splitting automático
- ✅ Otimização de imagens com Next/Image
- ✅ Lazy loading de componentes

### Desenvolvimento
- ✅ TypeScript para type safety
- ✅ Componentes modulares e reutilizáveis
- ✅ Hot reload durante desenvolvimento
- ✅ Melhor organização de código
- ✅ Dados separados em arquivos (fácil manutenção)

### UX/UI
- ✅ Animações mais fluidas com Framer Motion
- ✅ Transições suaves entre páginas
- ✅ Melhor feedback visual nas interações
- ✅ Performance otimizada
- ✅ Glassmorphism e efeitos modernos
- ✅ Sistema de filtros para projetos

## 📱 Responsividade

O portfólio é totalmente responsivo e se adapta aos seguintes breakpoints:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔧 Personalização

Para personalizar o portfólio:

1. **Cores**: Edite `tailwind.config.js` ou `app/globals.css`
2. **Conteúdo**: Modifique os componentes em `components/`
3. **Projetos**: Edite `data/projects.ts`
4. **Animações**: Ajuste as configurações do Framer Motion
5. **Imagens**: Substitua as imagens em `public/Images/`

## 📞 Contato

- **Email**: johnmoreira42@gmail.com
- **Instagram**: [@john_lmoreira](https://www.instagram.com/john_lmoreira/)
- **GitHub**: [@Zjohnys](https://github.com/Zjohnys)
- **LinkedIn**: [John Lennon Moreira](https://www.linkedin.com/in/john-lennon-moreira-964389227/)

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar conforme necessário.

---

**Desenvolvido com ❤️ por John Lennon Moreira usando Next.js e React**
