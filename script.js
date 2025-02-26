document.addEventListener("DOMContentLoaded", function() {
  // Variabilă globală pentru limbă
  let currentLanguage = "EN";

  // Selectăm butonul de comutare a limbii
  const langToggle = document.getElementById("lang-toggle");

  // Funcție pentru actualizarea textelor din navbar
  function updateNavbarText(lang) {
    document.getElementById("nav-home").textContent = lang === "RO" ? "Acasă" : "Home";
    document.getElementById("nav-about").textContent = lang === "RO" ? "Despre mine" : "About Me";
    document.getElementById("nav-skills").textContent = lang === "RO" ? "Abilități" : "Skills";
    document.getElementById("nav-projects").textContent = lang === "RO" ? "Proiecte" : "Projects";
    if (document.getElementById("nav-contact")) {
      document.getElementById("nav-contact").textContent = "Contact"; // rămâne la fel
    }
  }

  // Funcție pentru actualizarea textelor din secțiunea de introducere
  function updateIntroText(lang) {
    const introStatic = document.getElementById("intro-static-text");
    const introDynamic1 = document.getElementById("intro-dynamic-1");
    const introDynamic2 = document.getElementById("intro-dynamic-2");
    const introDynamic3 = document.getElementById("intro-dynamic-3");
    const introDynamic4 = document.getElementById("intro-dynamic-4");
    const introImText = document.getElementById("intro-im-text");
    const introAboutText = document.getElementById("intro-about-text");
    const introTalkBtn = document.getElementById("intro-talk-btn");

    if (lang === "RO") {
      introStatic.textContent = "Salut";
      introDynamic1.textContent = "lume !";
      introDynamic2.textContent = "bob !";
      introDynamic3.textContent = "utilizatori !";
      introDynamic4.textContent = "toți !";
      introImText.textContent = "Sunt";
      introAboutText.textContent = "Sunt un full stack developer pasionat de tehnologie, cu expertiză în front-end și back-end. Hai să inovăm împreună!";
      introTalkBtn.textContent = "Hai să discutăm";
    } else {
      introStatic.textContent = "Hello";
      introDynamic1.textContent = "world !";
      introDynamic2.textContent = "bob !";
      introDynamic3.textContent = "users !";
      introDynamic4.textContent = "everybody !";
      introImText.textContent = "I'm";
      introAboutText.textContent = "I am a full stack developer passionate about technology, with expertise in both front-end and back-end. Let's innovate together!";
      introTalkBtn.textContent = "Let's Talk";
    }

    // (Opțional) Repornirea animației pentru lista dinamică
    const dynamicList = document.querySelector(".dynamic-list");
    dynamicList.style.animation = "none";
    void dynamicList.offsetWidth;
    dynamicList.style.animation = "";
  }

  // Funcție combinată pentru actualizarea întregului conținut al site-ului
  function updateSiteLanguage(lang) {
    updateNavbarText(lang);
    updateIntroText(lang);
  }

  // Setare inițială (limba EN)
  updateSiteLanguage("EN");
  // Butonul de limbă afișează opțiunea de a comuta la RO
  langToggle.textContent = "RO";

  // Eveniment de click pentru comutarea limbii
  langToggle.addEventListener("click", function() {
    if (currentLanguage === "EN") {
      currentLanguage = "RO";
      langToggle.textContent = "EN";
    } else {
      currentLanguage = "EN";
      langToggle.textContent = "RO";
    }
    updateSiteLanguage(currentLanguage);
  });

  // ... (restul codului existent pentru dark/light mode, meniul mobil etc.)
});


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
