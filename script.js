// Toggle dark/light mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Actualizează iconița în funcție de temă
  const icon = themeToggle.querySelector('i');
  if(document.body.classList.contains('dark-mode')){
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
  // Aici se poate adăuga logica pentru comutarea limbii
  alert("Butonul de schimbare a limbii a fost apăsat!");
});

// Funcție pentru meniul mobil
function toggleMobileMenu(){
  const navMenu = document.querySelector('.nav-menu');
  if (navMenu.style.display === 'flex') {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'flex';
  }
}
