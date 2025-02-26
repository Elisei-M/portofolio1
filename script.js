document.addEventListener("DOMContentLoaded", function() {
  // Toggle dark/light mode
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', function() {
    if (document.body.classList.contains('light-mode')) {
      document.body.classList.remove('light-mode');
      themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
    } else {
      document.body.classList.add('light-mode');
      themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
  });

  // Placeholder pentru schimbarea limbii
  const langToggle = document.getElementById('lang-toggle');
  langToggle.addEventListener('click', function() {
    alert("Language toggle clicked!");
  });

  // Toggle pentru meniul mobil
  window.toggleMobileMenu = function() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu.style.display === "flex") {
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "flex";
      navMenu.style.flexDirection = "column";
    }
  };

  // Efectul de scroll pentru navbar
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
