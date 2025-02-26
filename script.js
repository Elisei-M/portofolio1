document.addEventListener("DOMContentLoaded", function() {
  // Toggle pentru dark/light mode (toggle switch)
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', function() {
    if(document.body.classList.contains('light-mode')){
      document.body.classList.remove('light-mode');
      // Animă toggle-ball să se întoarcă la stânga
      document.querySelector('.toggle-ball').style.transform = 'translateX(0)';
    } else {
      document.body.classList.add('light-mode');
      // Animă toggle-ball să se deplaseze la dreapta
      document.querySelector('.toggle-ball').style.transform = 'translateX(25px)';
    }
  });

  // Toggle pentru limbă (comutare între engleză și română)
  const langToggle = document.getElementById('lang-toggle');
  let currentLanguage = 'en'; // engleză implicit
  langToggle.addEventListener('click', function() {
    if (currentLanguage === 'en') {
      currentLanguage = 'ro';
      // Butonul va afișa opțiunea de a reveni la engleză
      langToggle.textContent = 'EN';
      // Actualizează textul din navbar în română
      document.getElementById('nav-home').textContent = 'Acasă';
      document.getElementById('nav-about').textContent = 'Despre mine';
      document.getElementById('nav-skills').textContent = 'Abilități';
      document.getElementById('nav-projects').textContent = 'Proiecte';
    } else {
      currentLanguage = 'en';
      // Butonul va afișa opțiunea de a comuta la română
      langToggle.textContent = 'RO';
      // Actualizează textul din navbar în engleză
      document.getElementById('nav-home').textContent = 'Home';
      document.getElementById('nav-about').textContent = 'About Me';
      document.getElementById('nav-skills').textContent = 'Skills';
      document.getElementById('nav-projects').textContent = 'Projects';
    }
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

  // Efectul de schimbare a navbar-ului la scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
