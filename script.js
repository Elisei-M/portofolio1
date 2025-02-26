// Comutator Dark/Light Mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Placeholder pentru schimbarea limbii (EN/RO)
const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
  // Logica pentru schimbarea limbii poate fi adăugată aici.
  // De exemplu, poți încărca conținut din două fișiere JSON sau poți modifica textul elementelor din DOM.
  alert("Butonul de schimbare a limbii a fost apăsat!");
});
