const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const closeButton = document.getElementById("closeButton");

menuButton.addEventListener("click", () => {
    sidebar.classList.add("show-sidebar");
    menuButton.classList.add("hide-button");
});

closeButton.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
    menuButton.classList.remove("hide-button");
});


const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        if (button.classList.contains('active')) {
            // Si el botón ya está activo, lo colapsamos
            button.classList.remove('active');
            content.style.maxHeight = null;
        } else {
            // Si no, cerramos cualquier otro abierto
            document.querySelectorAll('.accordion-button.active').forEach(activeButton => {
                activeButton.classList.remove('active');
                activeButton.nextElementSibling.style.maxHeight = null;
            });

            // Luego expandimos la sección seleccionada
            button.classList.add('active');
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});


// Seleccionamos todos los enlaces del menú
const menuLinks = document.querySelectorAll('.sidebar a');

menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Evitamos el comportamiento por defecto de los enlaces
        
        const targetId = link.getAttribute('href').substring(1); // Obtenemos el id de la sección
        const targetSection = document.getElementById(targetId); // Seleccionamos la sección

        // Desplazamiento suave hacia la sección
        targetSection.scrollIntoView({
            behavior: 'smooth', // Movimiento suave
            block: 'start' // Inicia el desplazamiento desde el inicio de la sección
        });
    });
});

// Inicializamos EmailJS una vez que tengas el user ID
emailjs.init("your-user-ID-here"); // Este lo configurarás cuando lo obtengas

// Escuchamos el evento de envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitamos recargar la página

    // Recogemos los datos del formulario
    const templateParams = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        companyName: document.getElementById('companyName').value || "No Company", // Por si está vacío
        message: document.getElementById('message').value
    };

    // Enviamos los datos con EmailJS
    emailjs.send('DiegoReija', 'template_pmae8lr', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text); // Solo para debug
            alert('Message sent successfully!');
        }, function(error) {
            console.log('FAILED...', error); // Solo para debug
            alert('Failed to send message. Please try again later.');
        });
});

