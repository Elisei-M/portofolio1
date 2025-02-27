document.addEventListener("DOMContentLoaded", function() {
  // Elementele Navbar
  const modeToggle = document.getElementById("mode-toggle");
  const modeIcon = document.getElementById("mode-icon");
  const langToggle = document.getElementById("lang-toggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Elementele secțiunilor ce trebuie traduse
  const introDesc = document.querySelector(".intro-desc");
  const dynamicTextEl = document.querySelector(".dynamic-text");
  const langTextElements = document.querySelectorAll(".lang-text");

  // Elementele pentru caruselul proiectelor
  const carouselTrack = document.querySelector(".carousel-track");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  // Variabila pentru limba curentă: 'EN' sau 'RO'
  let currentLanguage = "EN";

  // Funcție pentru schimbarea iconiței dark/light
  function updateModeIcon(isDark) {
    modeIcon.style.opacity = 0;
    setTimeout(() => {
      if (isDark) {
        modeIcon.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"></path>
          </svg>
        `;
      } else {
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

  // Eveniment pentru schimbarea temei
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    updateModeIcon(isDark);
  });

  // Funcție pentru actualizarea limbii
  function updateLanguage() {
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
    if (introDesc) {
      introDesc.textContent = introDesc.getAttribute(currentLanguage === "EN" ? "data-en" : "data-ro");
    }
    langTextElements.forEach(elem => {
      elem.textContent = elem.getAttribute(currentLanguage === "EN" ? "data-en" : "data-ro");
    });
  }

  // Eveniment pentru schimbarea limbii
  langToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "EN" ? "RO" : "EN";
    langToggle.textContent = currentLanguage;
    updateLanguage();
  });

  // Efectul de text dinamic în Introducere
  const dynamicWords = ["Bob", "Users", "Coders"];
  let dynamicIndex = 0;
  function cycleDynamicText() {
    dynamicTextEl.textContent = dynamicWords[dynamicIndex];
    dynamicIndex = (dynamicIndex + 1) % dynamicWords.length;
  }
  cycleDynamicText();
  setInterval(cycleDynamicText, 2000);

  // Funcții pentru navigarea în caruselul proiectelor
  function updateCarousel() {
    const slideWidth = carouselItems[0].getBoundingClientRect().width;
    carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
  nextButton.addEventListener("click", () => {
    if (currentIndex < carouselItems.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = carouselItems.length - 1;
    }
    updateCarousel();
  });

  // Custom cursor
  const customCursor = document.querySelector('.custom-cursor');
  document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
  });

  // Hamburger menu pentru mobil
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Inițializare limbă la pornire
  updateLanguage();
});
