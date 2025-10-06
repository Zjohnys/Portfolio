// Configurações do Portfólio
const PORTFOLIO_CONFIG = {
  // Informações pessoais
  personal: {
    name: "John Lennon Moreira",
    title: "Desenvolvedor Front-end",
    email: "johnmoreira42@gmail.com",
    location: "Brasil",
    age: 20,
    course: "Análise e Desenvolvimento de Sistemas"
  },
  
  // Redes sociais
  social: {
    instagram: "https://www.instagram.com/john_lmoreira/",
    github: "https://github.com/Zjohnys",
    linkedin: "", // Adicionar quando tiver
    twitter: "" // Adicionar quando tiver
  },
  
  // Skills e porcentagens
  skills: [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 70 }
  ],
  
  // Projetos
  projects: [
    {
      title: "Portfólio Pessoal",
      description: "Portfólio responsivo desenvolvido com HTML, CSS e JavaScript puro. Design moderno com animações suaves e total responsividade.",
      icon: "🚀",
      tech: ["HTML5", "CSS3", "JavaScript"],
      demo: "#",
      code: "#",
      status: "completed"
    },
    {
      title: "Em Desenvolvimento",
      description: "Novos projetos incríveis estão sendo criados. Aplicações web modernas com React, Node.js e MongoDB.",
      icon: "⚡",
      tech: ["React", "Node.js", "MongoDB"],
      demo: "#",
      code: "#",
      status: "in-progress"
    },
    {
      title: "Próximos Projetos",
      description: "Planejando aplicações web modernas e inovadoras para expandir meu portfólio com Vue.js, TypeScript e Firebase.",
      icon: "🎯",
      tech: ["Vue.js", "TypeScript", "Firebase"],
      demo: "#",
      code: "#",
      status: "planned"
    }
  ],
  
  // Configurações visuais
  theme: {
    primaryColor: "#00d4ff",
    secondaryColor: "#0099cc",
    accentColor: "#ff6b35",
    textColor: "#ffffff",
    textSecondary: "#b3b3b3",
    bgDark: "#0a0a0a",
    bgCard: "#1a1a1a",
    borderColor: "#333333"
  },
  
  // Animações
  animations: {
    typingSpeed: 150,
    fadeInDelay: 800,
    particleInterval: 2000
  }
};

// Exportar configuração
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_CONFIG;
} 