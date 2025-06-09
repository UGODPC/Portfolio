// Menu Toggle Functionality
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Close menu when clicking a menu item (for mobile)
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// Scroll Reveal Animation
function revealElements() {
  const elements = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

// Initialize reveal animations
window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// Skill Bars Animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
}

// Initialize skill bars animation
window.addEventListener('load', animateSkillBars);

// Form Submission (prevent default for now)
const form = document.querySelector('.contact-form form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
      // In a real application, you would send this data to a server
      alert('Merci pour votre message ! Je vous répondrai dès que possible.');
      form.reset();
    } else {
      alert('Veuillez remplir tous les champs du formulaire.');
    }
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    header.style.boxShadow = 'var(--shadow-md)';
    header.style.background = 'rgba(255, 255, 255, 0.95)';
  } else {
    header.style.boxShadow = 'var(--shadow-sm)';
    header.style.background = 'rgba(255, 255, 255, 0.95)';
  }
  
  lastScrollTop = scrollTop;
});
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Empêche le href="#" de recharger la page
    document.getElementById('side-menu').classList.add('active');
    document.getElementById('side-menu').classList.remove('hidden');
  });
});

document.getElementById('close-menu').addEventListener('click', function() {
  document.getElementById('side-menu').classList.remove('active');
});
function handleProjectClick(e) {
  e.preventDefault();
  console.log("Projet cliqué !");
  // Ici tu pourras ouvrir ton side menu
}
