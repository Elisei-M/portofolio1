/* script.js */
document.addEventListener("DOMContentLoaded", function() {
  const modeToggle = document.getElementById("mode-toggle");
  const langToggle = document.getElementById("lang-toggle");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Toggle dark/light mode
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Toggle limbă (exemplu simplificat; se poate extinde cu un sistem i18n mai robust)
  langToggle.addEventListener("click", () => {
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
      // Exemplu simplificat pentru schimbarea textului
      switch(link.getAttribute("href")) {
        case "#home":
          link.textContent = link.textContent === "Home" ? "Acasă" : "Home";
          break;
        case "#about":
          link.textContent = link.textContent === "About Me" ? "Despre mine" : "About Me";
          break;
        case "#skills":
          link.textContent = link.textContent === "Skills" ? "Abilități" : "Skills";
          break;
        case "#projects":
          link.textContent = link.textContent === "Projects" ? "Proiecte" : "Projects";
          break;
        case "#contact":
          link.textContent = link.textContent === "Contact" ? "Contact" : "Contact";
          break;
      }
    });
  });

  // Toggle pentru hamburger menu (pentru mobil)
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
