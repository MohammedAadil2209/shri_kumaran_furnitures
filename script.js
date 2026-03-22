// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;
hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  document.getElementById('h3').style.width = menuOpen ? '24px' : '16px';
  document.getElementById('h1').style.transform = menuOpen ? 'rotate(45deg) translate(5px,5px)' : '';
  document.getElementById('h2').style.opacity  = menuOpen ? '0' : '1';
  document.getElementById('h3').style.transform = menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : '';
});
function closeMenu() {
  menuOpen = false;
  mobileMenu.classList.remove('open');
  document.getElementById('h1').style.transform = '';
  document.getElementById('h2').style.opacity = '1';
  document.getElementById('h3').style.transform = '';
  document.getElementById('h3').style.width = '16px';
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
