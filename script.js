/* Variabile CSS și Background Gradients */
:root {
  --bg-gradient-dark: linear-gradient(135deg, #2C3E50, #000);
  --bg-gradient-light: linear-gradient(135deg, #dcdcdc, #f4f4f4);
  --text-light: #ecf0f1;
  --text-dark: #333;
  --accent: #1E90FF;
  --transition-speed: 0.3s;
  --section-padding: 60px 40px;
}

/* Setările de bază */
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background: var(--bg-gradient-dark);
  color: var(--text-light);
  transition: background var(--transition-speed), color var(--transition-speed);
}

body.dark-mode {
  background: var(--bg-gradient-dark);
  color: var(--text-light);
}

body.light-mode {
  background: var(--bg-gradient-light);
  color: var(--text-dark);
}

/* Custom Cursor */
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border: 2px solid var(--accent);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: transform 0.1s ease-out;
}

/* Navbar cu fundal blurat */
.navbar {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  transition: background var(--transition-speed);
}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo cu iepuraș */
.logo {
  position: relative;
  width: 80px;
  height: 80px;
  cursor: pointer;
}
#bunny-svg {
  width: 100%;
  height: 100%;
}
#eye-left, #eye-right {
  transition: transform 0.2s ease-out;
  stroke: #333;
  stroke-width: 1;
}

/* Restul Navbar-ului */
.nav-menu {
  list-style: none;
  display: flex;
  margin: 0;
}
.nav-item {
  margin: 0 15px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  transition: color var(--transition-speed);
}
.nav-link:hover {
  color: var(--accent);
}
.nav-buttons {
  display: flex;
  align-items: center;
}
/* Butoane uniforme */
.toggle-btn {
  background: linear-gradient(45deg, #1E90FF, #FF4500);
  border: none;
  color: #fff;
  padding: 8px 16px;
  margin-left: 10px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: transform var(--transition-speed), box-shadow var(--transition-speed);
}
.toggle-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(30,144,255,0.7);
}
.light-mode .toggle-btn {
  background: linear-gradient(45deg, #87CEFA, #FFA07A);
}
.mode-btn {
  padding: 8px;
  border-radius: 50%;
  font-size: 0.9rem;
}
.mode-icon {
  display: inline-block;
  transition: opacity 0.4s ease;
}
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}
.bar {
  height: 3px;
  width: 25px;
  background-color: currentColor;
  margin: 4px 0;
  transition: 0.4s;
}

/* Secțiunile (Introducere, About, Skills, Projects, Footer) */
section {
  background: none; /* Eliminăm background-urile locale */
  position: relative;
  padding-bottom: 60px;
}

/* Secțiunea de Introducere */
#introduction {
  padding: 120px 20px 80px;
  text-align: left;
}
.intro-container {
  max-width: 800px;
  margin: 0 auto;
}
#introduction h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}
.greeting {
  font-weight: bold;
  margin-right: 10px;
}
.dynamic-text {
  font-weight: bold;
  color: var(--accent);
  animation: blink 1s infinite;
}
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
.name {
  font-weight: normal;
}
.intro-desc {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;
}
.cta-btn {
  background: linear-gradient(45deg, #FF4500, #1E90FF);
  border: none;
  color: #fff;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform var(--transition-speed), box-shadow var(--transition-speed);
  text-decoration: none;
  display: inline-block;
}
.cta-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(30,144,255,0.7);
}

/* Secțiunea About Me */
#about {
  padding: 80px 20px;
}
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.about-text {
  flex: 1;
  text-align: left;
}
.about-text h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}
.about-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;
}
.resume-btn {
  margin-top: 20px;
}
.about-image {
  flex: 1;
  text-align: right;
}
.about-image img {
  max-width: 350px;
  width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform var(--transition-speed), box-shadow var(--transition-speed);
}
.about-image img:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

/* Secțiunea Skills (Tech Stack) */
.tech-stack-section {
  padding: var(--section-padding);
  /* Folosim background-ul global din body; nu definim unul specific aici */
  color: #ecf0f1;
  text-align: center;
  transition: background var(--transition-speed);
}
.tech-stack-title {
  font-family: 'Lato', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--accent);
  text-shadow: 0 2px 5px rgba(0,0,0,0.3);
}
.tech-stack-subtitle {
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 30px;
  color: #fff;
}
.tech-stack-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 1fr;
  gap: 20px;
  justify-items: center;
  align-items: center;
}
.tech-item {
  background-color: #1c1c1c;
  border-radius: 12px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform var(--transition-speed), box-shadow var(--transition-speed);
  position: relative;
}
.tech-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.4);
}
.tech-item i {
  font-size: 2rem;
}
.pluriva-text {
  font-size: 2rem;
  color: #fff;
  font-weight: bold;
}
@media (max-width: 992px) {
  .tech-stack-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 576px) {
  .tech-stack-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Secțiunea Projects (Carusel) */
.projects-section {
  padding: 80px 20px;
  text-align: center;
  transition: background var(--transition-speed);
}
.projects-section .section-title {
  font-size: 2rem;
  margin-bottom: 20px;
}
.carousel-container {
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
}
.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
  padding: 20px;
}
.carousel-item img {
  max-width: 100%;
  border-radius: 10px;
}
.carousel-item h3 {
  margin-top: 10px;
  font-size: 1.5rem;
}
/* Butoane pentru carusel */
.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  border: none;
  color: #fff;
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
}
.carousel-button.prev {
  left: 10px;
}
.carousel-button.next {
  right: 10px;
}

/* Secțiunea Footer */
footer {
  background: #0f0f0f;
  padding: 40px 20px;
  text-align: center;
  transition: background var(--transition-speed);
  color: #ecf0f1;
  margin-top: 40px;
}
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}
.footer-message {
  font-family: 'Lato', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--accent);
  text-shadow: 0 2px 5px rgba(0,0,0,0.3);
}
.footer-getintouch {
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: inherit;
}
.footer-icons a {
  text-decoration: none;
  border: none;
  color: inherit;
  margin: 0 10px;
  font-size: 2rem;
  transition: transform var(--transition-speed), color var(--transition-speed);
}
.footer-icons a:hover {
  transform: translateY(-5px);
  color: var(--accent);
}
.footer-created {
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
}
.footer-created a {
  color: var(--accent);
  text-decoration: none;
  transition: color var(--transition-speed);
}
.footer-created a:hover {
  color: #fff;
}

/* Tranziții subtile între secțiuni */
section::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: rgba(0,0,0,0.1);
  pointer-events: none;
}

/* Responsivitate */
@media screen and (max-width: 768px) {
  .nav-menu {
    display: none;
    flex-direction: column;
    width: 100%;
  }
  .nav-menu.active {
    display: flex;
    background-color: var(--primary-bg);
    position: absolute;
    top: 60px;
    left: 0;
    padding: 10px 0;
  }
  .nav-item {
    text-align: center;
    margin: 10px 0;
  }
  .hamburger {
    display: flex;
  }
  .about-container {
    flex-direction: column;
    text-align: center;
  }
  .about-image {
    text-align: center;
    margin-top: 20px;
  }
  .tech-stack-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .projects-section .section-title {
    text-align: center;
  }
}
