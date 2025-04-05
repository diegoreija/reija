document.addEventListener("DOMContentLoaded", function () {
    const h3Elements = document.querySelectorAll("#about-content h3");
    const menu = document.getElementById("slide-menu");
    const menuContent = document.getElementById("menu-content");
    const closeBtn = document.getElementById("close-menu");

    h3Elements.forEach(h3 => {
        h3.addEventListener("click", function () {
            const contentId = this.getAttribute("data-content");
            const contentDiv = document.getElementById(contentId);
            const isMobile = window.innerWidth <= 768;

            if (isMobile) {
                // En móvil, mostramos el contenido en el menú deslizante
                menuContent.innerHTML = contentDiv.innerHTML;
                menu.classList.add("active");
            } else {
                // En PC, ocultamos/mostramos el contenido debajo del h3
                contentDiv.style.display = contentDiv.style.display === "block" ? "none" : "block";
            }
        });
    });

    closeBtn.addEventListener("click", function () {
        menu.classList.remove("active"); // Cierra el menú en móvil
    });
});
