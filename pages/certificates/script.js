/*
// Selecciona todos los elementos con la clase "dropdown"
var dropdowns = document.querySelectorAll('.dropdown');
                
// Itera sobre cada elemento dropdown
dropdowns.forEach(function(dropdown) {
// Añade un event listener al encabezado para mostrar u ocultar el contenido
  dropdown.addEventListener('click', function(event) {
    var dropdownContent = dropdown.nextElementSibling; // Selecciona el siguiente elemento hermano
    // Cambia la visibilidad del contenido al hacer clic en el encabezado
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    // Evita que el evento se propague más allá del encabezado
    event.stopPropagation();
  });
                        
 // Añade un event listener al documento para cerrar el contenido si se hace clic fuera de él
 document.addEventListener('click', function(event) {
    var dropdownContent = dropdown.nextElementSibling; // Selecciona el siguiente elemento hermano
    // Oculta el contenido si el clic no está dentro del dropdown
    if (!dropdown.contains(event.target)) {
      dropdownContent.style.display = 'none';
    }
  });
});

    var dropdownOptions = document.querySelectorAll('.input-1 .value');
    var selectedOption = null;

    // Función para manejar el clic en las opciones del dropdown
    function handleOptionClick(event) {
        // Obtener la ruta de la imagen correspondiente al atributo data-image
        var imagePath = event.target.getAttribute('data-image');

        // Verificar si se ha hecho clic en la misma opción nuevamente
        if (selectedOption === event.target) {
            // Si es así, establecer la ruta de la imagen como vacía para ocultarla
            document.getElementById('selectedImage').src = '';
            selectedOption = null;
        } else {
            // Si no, cambiar la imagen mostrada
            document.getElementById('selectedImage').src = imagePath;
            selectedOption = event.target;
        }
    }

    // Agregar un event listener a cada opción del dropdown
    dropdownOptions.forEach(function(option) {
        option.addEventListener('click', handleOptionClick);
    });

    */


    let listElements = document.querySelectorAll('.list_button_click');

    listElements.forEach(listElement => {
      listElement.addEventListener('click',()=>{

        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
          height = menu.scrollHeight;
        }

        menu.style.height = height + "px";

      })
    });