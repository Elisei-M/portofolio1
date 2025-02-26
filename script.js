document.addEventListener('DOMContentLoaded', () => {
  // Dark/Light mode toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });

  // Placeholder pentru schimbarea limbii
  const langToggle = document.getElementById('lang-toggle');
  langToggle.addEventListener('click', () => {
    alert("Butonul de schimbare a limbii a fost apăsat!");
  });

  // Funcție pentru meniul mobil
  window.toggleMobileMenu = function() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu.style.display === 'flex') {
      navMenu.style.display = 'none';
    } else {
      navMenu.style.display = 'flex';
    }
  };

  // Schimbarea stilului navbar-ului la scroll
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
