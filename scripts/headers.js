// Obtener los elementos
const homeLink = document.getElementById('home-link');
const homeContent = document.getElementById('home-content');

const aboutLink = document.getElementById('about-link'); // Enlace de About Me
const aboutContent = document.getElementById('about-content'); // Contenido de About Me

const certificatesLink = document.getElementById('certificates-link');
const certificatesContent = document.getElementById('certificates-content');

const contactLink = document.getElementById('contact-link');
const contactContent = document.getElementById('contact-content');

// Evento para mostrar el Home
homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    homeContent.style.display = 'block';
    aboutContent.style.display = 'none';
    certificatesContent.style.display = 'none';
    contactContent.style.display = 'none';
    homeLink.classList.add('active');
    aboutLink.classList.remove('active');
    certificatesLink.classList.remove('active');
    contactLink.classList.remove('active');
});

// Evento para mostrar About Me
aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    homeContent.style.display = 'none';
    aboutContent.style.display = 'block';
    certificatesContent.style.display = 'none';
    contactContent.style.display = 'none';
    aboutLink.classList.add('active');
    homeLink.classList.remove('active');
    certificatesLink.classList.remove('active');
    contactLink.classList.remove('active');
});

// Evento para mostrar Certificates
certificatesLink.addEventListener('click', (e) => {
    e.preventDefault();
    homeContent.style.display = 'none';
    aboutContent.style.display = 'none';
    certificatesContent.style.display = 'block';
    contactContent.style.display = 'none';
    certificatesLink.classList.add('active');
    homeLink.classList.remove('active');
    aboutLink.classList.remove('active');
    contactLink.classList.remove('active');
});

// Evento para mostrar Contact Me
contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    homeContent.style.display = 'none';
    aboutContent.style.display = 'none';
    certificatesContent.style.display = 'none';
    contactContent.style.display = 'block';
    contactLink.classList.add('active');
    homeLink.classList.remove('active');
    aboutLink.classList.remove('active');
    certificatesLink.classList.remove('active');
});
