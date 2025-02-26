document.addEventListener("DOMContentLoaded", function() {
  // Dark/Light mode toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if(document.body.classList.contains('dark-mode')){
      icon.classList.replace('fa-moon', 'fa-sun');
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
    }
  });

  // Language toggle placeholder
  const langToggle = document.getElementById('lang-toggle');
  langToggle.addEventListener('click', function() {
    alert("Language toggle clicked!");
  });

  // Mobile menu toggle
  window.toggleMobileMenu = function() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu.style.display === "flex") {
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "flex";
      navMenu.style.flexDirection = "column";
    }
  };

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
