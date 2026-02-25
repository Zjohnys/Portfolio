// Seleção de elementos
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".navbar .menu");
const menuActive = document.querySelectorAll(".navbar .menu li a");

// Menu mobile
if (menuBtn && menu) {
  const toggleMenu = () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !expanded);
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  };

  menuBtn.addEventListener("click", toggleMenu);
  menuBtn.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMenu();
    }
  });
} else {
  console.warn('Menu button or menu element not found.');
}

// Fechar menu ao clicar em um link
if (menuActive && menuBtn && menu) {
  menuActive.forEach((item) => {
    item.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      menuBtn.setAttribute('aria-expanded','false');
      menu.classList.remove("active");
    });
  });

  // fechar com escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      menuBtn.classList.remove('active');
      menuBtn.setAttribute('aria-expanded','false');
      menu.classList.remove('active');
    }
  });
}

// Navbar sticky no scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animação de digitação
const typingText = document.querySelector(".typing");
const typingText2 = document.querySelector(".typing-2");

function autoTyping(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function typeWriter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  
  typeWriter();
}

// Iniciar animação de digitação quando a seção estiver visível
const typingObserverOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px'
};

const typingObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('typing')) {
        autoTyping(entry.target, 'Full-Stack', 150);
      } else if (entry.target.classList.contains('typing-2')) {
        autoTyping(entry.target, 'Desenvolvedor Full-Stack', 100);
      }
      typingObserver.unobserve(entry.target);
    }
  });
}, typingObserverOptions);

if (typingText) typingObserver.observe(typingText);
if (typingText2) typingObserver.observe(typingText2);

// Animação das barras de skills
const skillBars = document.querySelectorAll('.skills .skills-content .right .line');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.style.width || '0%';
      const targetWidth = entry.target.style.width;
      entry.target.style.width = '0%';
      
      setTimeout(() => {
        entry.target.style.width = targetWidth;
      }, 500);
      
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

// Animação de entrada dos cards de projetos
const projectCards = document.querySelectorAll('.projetos .projetos-content .card');

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

projectCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(50px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  cardObserver.observe(card);
});

// Efeito parallax suave no background (removido para evitar conflitos)
// window.addEventListener('scroll', () => {
//   const scrolled = window.pageYOffset;
//   const parallax = document.querySelector('.home');
//   if (parallax) {
//     const speed = scrolled * 0.5;
//     parallax.style.transform = `translateY(${speed}px)`;
//   }
// });

// Animação de contador para as skills
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start) + '%';
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + '%';
    }
  }
  
  updateCounter();
}

// Observador para animar contadores quando visíveis
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.textContent);
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Aplicar observador aos contadores de skills
document.querySelectorAll('.skills .skills-content .right .info span:last-child').forEach(counter => {
  counterObserver.observe(counter);
});

// Efeito de hover nos cards de projetos
projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05) translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) translateY(0)';
  });
});

// Efeito de loading da página
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
        // Iniciar animações após o loader
        document.body.classList.add('loaded');
      }, 500);
    }, 1000);
  }
});

// Função para copiar email para clipboard
function copyEmail() {
  const email = 'johnmoreira42@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    // Mostrar notificação de sucesso
    showNotification('Email copiado para a área de transferência!', 'success');
  }).catch(() => {
    showNotification('Erro ao copiar email', 'error');
  });
}

// Função para mostrar notificações
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  // Estilos da notificação
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    ${type === 'success' ? 'background: #4CAF50;' : 'background: #f44336;'}
  `;
  
  document.body.appendChild(notification);
  
  // Animar entrada
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remover após 3 segundos
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Adicionar evento de clique para copiar email
document.addEventListener('DOMContentLoaded', () => {
  const emailElement = document.querySelector('.contato .contato-content .row:nth-child(2) .sub-title');
  if (emailElement) {
    emailElement.style.cursor = 'pointer';
    emailElement.title = 'Clique para copiar';
    emailElement.addEventListener('click', copyEmail);
  }
});

// Efeito de partículas no background (opcional)
function createParticle() {
  const particle = document.createElement('div');
  particle.style.cssText = `
    position: fixed;
    width: 2px;
    height: 2px;
    background: var(--primary-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.6;
  `;
  
  particle.style.left = Math.random() * window.innerWidth + 'px';
  particle.style.top = window.innerHeight + 'px';
  
  document.body.appendChild(particle);
  
  const animation = particle.animate([
    { transform: 'translateY(0px)', opacity: 0.6 },
    { transform: `translateY(-${window.innerHeight}px)`, opacity: 0 }
  ], {
    duration: Math.random() * 3000 + 2000,
    easing: 'linear'
  });
  
  animation.onfinish = () => {
    document.body.removeChild(particle);
  };
}

// Criar partículas periodicamente
let particleInterval;
function startParticles() {
  if (particleInterval) return;
  particleInterval = setInterval(createParticle, 2000);
}
function stopParticles() {
  if (particleInterval) {
    clearInterval(particleInterval);
    particleInterval = null;
  }
}

// liga/desliga partículas dependendo da largura da janela
function checkParticleSupport() {
  if (window.innerWidth > 768) {
    startParticles();
  } else {
    stopParticles();
  }
}

window.addEventListener('resize', checkParticleSupport);
window.addEventListener('load', checkParticleSupport);


// Animações de entrada para elementos
const fadeInObserverOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeInObserver.unobserve(entry.target);
    }
  });
}, fadeInObserverOptions);

// Aplicar animações de entrada
document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.sobre, .skills, .projetos, .contato');
  elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    fadeInObserver.observe(element);
  });
});

// Smooth scroll para todas as seções
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector('.navbar .menu a[href*="' + sectionId + '"]');
    if (!link) return;
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Adicionar classe active ao link do menu atual
menuActive.forEach(link => {
  link.addEventListener('click', function() {
    menuActive.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Efeito de scroll suave para o topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Botão de voltar ao topo
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
`;

document.body.appendChild(scrollTopBtn);

// Mostrar/ocultar botão de voltar ao topo
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.opacity = '1';
    scrollTopBtn.style.visibility = 'visible';
  } else {
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.visibility = 'hidden';
  }
});

scrollTopBtn.addEventListener('click', scrollToTop);

// Efeito hover no botão
scrollTopBtn.addEventListener('mouseenter', () => {
  scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
  scrollTopBtn.style.transform = 'scale(1)';
});

// Animação das barras de progresso
const skillsSection = document.querySelector('.skills');
let skillsAnimated = false;

function animateSkills() {
  if (skillsAnimated) return;
  
  const skillLines = document.querySelectorAll('.skills .line');
  skillLines.forEach((line, index) => {
    setTimeout(() => {
      line.style.opacity = '1';
    }, index * 200);
  });
  
  skillsAnimated = true;
}

function checkSkillsVisibility() {
  if (!skillsSection) return;
  
  const rect = skillsSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
    animateSkills();
  }
}

// Verificar visibilidade das skills no scroll e load
window.addEventListener('scroll', checkSkillsVisibility);
window.addEventListener('load', checkSkillsVisibility);

// Adicionar variáveis CSS ao JavaScript
document.documentElement.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)');

console.log('Portfólio carregado com sucesso! 🚀');
