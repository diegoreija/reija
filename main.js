document.addEventListener('DOMContentLoaded', function() {
    // Inicialización: mostrar solo el primer container (container-2-part-2)
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
        hideAllContainers();  // Ocultar todos los containers
        document.querySelector('.container-2-part-2').style.display = 'block';  // Mostrar el container-2-part-2
    });

    // Mostrar container-3-part-3 cuando se hace clic en icon-code
    document.getElementById('icon-code').addEventListener('click', function() {
        hideAllContainers();  // Ocultar todos los containers
        document.querySelector('.container-3-part-3').style.display = 'block';  // Mostrar el container-3-part-3
    });

    // Mostrar container-6-part-6 cuando se hace clic en icon-certification
    document.getElementById('icon-certification').addEventListener('click', function() {
        hideAllContainers();  // Ocultar todos los containers
        document.querySelector('.container-6-part-6').style.display = 'block';  // Mostrar el container-6-part-6
    });

    // Centrar el contenido de container-1
    const container1Content = document.querySelector('.container-1 .subcontainer-1-2');
    container1Content.style.position = 'absolute';
    container1Content.style.left = '50%';
    container1Content.style.transform = 'translateX(-50%)';
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

document.addEventListener("DOMContentLoaded", function() {
    // Selección de elementos
    const imgCert = document.querySelector(".img_cert");
    const submenu1 = document.getElementById("submenu1");
    const ejptImg = document.getElementById("ejpt");
    const ecptImg = document.getElementById("ecppt");
    const submenu2 = document.getElementById("submenu2");
    const submenu3 = document.getElementById("submenu3");

    // Estado inicial
    let submenu1Visible = false;
    let submenu2Visible = false;
    let submenu3Visible = false;

    // Función para alternar visibilidad del submenu
    function toggleSubmenu(submenu, stateVar) {
        if (stateVar) {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
        return !stateVar;
    }

    // Evento click para img_cert
    imgCert.addEventListener("click", function() {
        submenu1Visible = toggleSubmenu(submenu1, submenu1Visible);
        if (!submenu1Visible) {
            submenu2.style.display = "none";
            submenu3.style.display = "none";
            submenu2Visible = false;
            submenu3Visible = false;
        }
    });

    // Evento click para ejptImg
    ejptImg.addEventListener("click", function() {
        submenu2Visible = toggleSubmenu(submenu2, submenu2Visible);
        if (submenu2Visible) {
            submenu3.style.display = "none";
            submenu3Visible = false;
        }
    });

    // Evento click para ecptImg
    ecptImg.addEventListener("click", function() {
        submenu3Visible = toggleSubmenu(submenu3, submenu3Visible);
        if (submenu3Visible) {
            submenu2.style.display = "none";
            submenu2Visible = false;
        }
    });
});
