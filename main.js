
document.addEventListener('DOMContentLoaded', function() {
    // Inicialización: mostrar solo el primer container
    document.querySelector('.container-1').style.display = 'block';
    document.querySelector('.container-2-part-2').style.display = 'block';
    document.querySelector('.container-3-part-3').style.display = 'none';
    document.querySelector('.container-6-part-6').style.display = 'none';

    // Función para ocultar todos los containers
    function hideAllContainers() {
        document.querySelector('.container-2-part-2').style.display = 'none';
        document.querySelector('.container-3-part-3').style.display = 'none';
        document.querySelector('.container-6-part-6').style.display = 'none';
    }

    // Mostrar container-2-part-2 cuando se hace clic en icon-user
    document.getElementById('icon-user').addEventListener('click', function() {
        hideAllContainers();
        document.querySelector('.container-2-part-2').style.display = 'block';
    });

    // Mostrar container-3-part-3 cuando se hace clic en icon-code
    document.getElementById('icon-code').addEventListener('click', function() {
        hideAllContainers();
        document.querySelector('.container-3-part-3').style.display = 'block';
    });

    // Mostrar container-6-part-6 cuando se hace clic en icon-certification
    document.getElementById('icon-certification').addEventListener('click', function() {
        hideAllContainers();
        document.querySelector('.container-6-part-6').style.display = 'block';
    });

    // Centrar el contenido de container-1
    const container1Content = document.querySelector('.container-1 .subcontainer-1-2');
    container1Content.style.position = 'absolute';
    container1Content.style.left = '50%';
    container1Content.style.transform = 'translateX(-50%)';
});


document.addEventListener('DOMContentLoaded', () => {
    const inputDiv = document.querySelector('.fullstack .input');
    const radioButtons = document.querySelectorAll('input[name="option"]');

    // Inicialmente ocultar el div con clase 'input'
    inputDiv.style.display = 'none';

    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.id === 'option-1') {
                inputDiv.style.display = 'block';
            } else {
                inputDiv.style.display = 'none';
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const imgCert = document.querySelector('.img_cert');
    const imgEjpt = document.getElementById('ejpt');
    const container = document.querySelector('.container-6-part-6');

    imgCert.addEventListener('click', function() {
        if (container.classList.contains('show-submenu1')) {
            container.classList.remove('show-submenu1');
            container.classList.remove('show-submenu2'); // Cierra también submenu2
        } else {
            container.classList.add('show-submenu1');
        }
    });

    imgEjpt.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que se dispare el evento click de imgCert
        container.classList.toggle('show-submenu2');
    });

    // Opcional: para que los submenús se oculten al hacer clic fuera de ellos
    document.addEventListener('click', function(event) {
        if (!container.contains(event.target)) {
            container.classList.remove('show-submenu1');
            container.classList.remove('show-submenu2');
        }
    });
});

