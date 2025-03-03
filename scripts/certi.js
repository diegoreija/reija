document.addEventListener("DOMContentLoaded", function () {
    const certs = document.querySelectorAll(".certificaciones");
    const menu = document.getElementById("slide-menu");
    const menuContent = document.getElementById("menu-content");
    const closeBtn = document.getElementById("close-menu");

    // Mapeo de contenido de cada certificación
    const certInfo = {
        "COMPTIA Pentest+": "Certificación de pruebas de penetración que valida habilidades en seguridad ofensiva.",
        "GCFA": "GIAC Certified Forensic Analyst: Especialización en análisis forense digital.",
        "Who am I?": "Ejemplo de certificación ficticia, cambia esto según lo que necesites."
    };

    // Evento para cada certificación
    certs.forEach(cert => {
        cert.addEventListener("click", function () {
            const text = this.innerText.trim(); // Obtiene el nombre de la certificación
            menuContent.innerText = certInfo[text] || "Información no disponible"; // Carga la info

            // Mostrar el menú con animación
            menu.classList.add("active");
        });
    });

    // Cerrar menú al hacer clic en el botón de cerrar
    closeBtn.addEventListener("click", function () {
        menu.classList.remove("active");
    });
});
