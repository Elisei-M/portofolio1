document.addEventListener("DOMContentLoaded", function() {
  // Elementele Navbar
  const modeToggle = document.getElementById("mode-toggle");
  const modeIcon = document.getElementById("mode-icon");
  const langToggle = document.getElementById("lang-toggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Elementele Secțiunii de Introducere
  const introDesc = document.querySelector(".intro-desc");
  const dynamicTextEl = document.querySelector(".dynamic-text");

  // Variabila pentru limba curentă: 'EN' sau 'RO'
  let currentLanguage = "EN";

  // Funcție pentru schimbarea iconiței dark/light cu tranziție lină
  function updateModeIcon(isDark) {
    modeIcon.style.opacity = 0;
    setTimeout(() => {
      if (isDark) {
        // Icon lună pentru modul dark
        modeIcon.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"></path>
          </svg>
        `;
      } else {
        // Icon soare pentru modul light
        modeIcon.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        `;
      }
      modeIcon.style.opacity = 1;
    }, 200);
  }

  // Comutare Dark/Light Mode
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    updateModeIcon(isDark);
  });

  // Funcție pentru actualizarea limbii în Navbar și secțiunea de introducere
  function updateLanguage() {
    // Actualizează textul linkurilor din Navbar
    navLinks.forEach(link => {
      switch(link.getAttribute("href")) {
        case "#home":
          link.textContent = currentLanguage === "EN" ? "Home" : "Acasă";
          break;
        case "#about":
          link.textContent = currentLanguage === "EN" ? "About Me" : "Despre mine";
          break;
        case "#skills":
          link.textContent = currentLanguage === "EN" ? "Skills" : "Abilități";
          break;
        case "#projects":
          link.textContent = currentLanguage === "EN" ? "Projects" : "Proiecte";
          break;
        case "#contact":
          link.textContent = currentLanguage === "EN" ? "Contact" : "Contact";
          break;
      }
    });
    // Actualizează textul secțiunii de introducere
    if (introDesc) {
      introDesc.textContent = introDesc.getAttribute(currentLanguage === "EN" ? "data-en" : "data-ro");
    }
  }

  // Comutare limbă la clic
  langToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "EN" ? "RO" : "EN";
    langToggle.textContent = currentLanguage;
    updateLanguage();
  });

  // Efectul de text dinamic în Introducere
  const dynamicWords = ["Bob", "Users", "Coders"]; // Poți modifica aceste cuvinte
  let dynamicIndex = 0;
  function cycleDynamicText() {
    dynamicTextEl.textContent = dynamicWords[dynamicIndex];
    dynamicIndex = (dynamicIndex + 1) % dynamicWords.length;
  }
  cycleDynamicText();
  setInterval(cycleDynamicText, 2000); // schimbă cuvântul la fiecare 2 secunde

  // Toggle pentru hamburger menu pe dispozitive mobile
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Inițializare limbă (la pornirea paginii)
  updateLanguage();
});
