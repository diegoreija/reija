

//MOSTRAR CONTAINER 3 Y OCULTAR CONTAINER 2
document.addEventListener('DOMContentLoaded', function() {
    // Inicialmente, muestra el contenido de container-1 y container2-part2
    document.querySelector('.container-1').style.display = 'block';
    document.querySelector('.container-2-part-2').style.display = 'block';


    // Oculta container3-part3
    document.querySelector('.container-3-part-3').style.display = 'none';
    document.querySelector('.container-5-part-5').style.display = 'none';

    // Agrega un evento de clic al ícono bx-code
    document.getElementById('icon-code').addEventListener('click', function() {
        // Oculta container2-part2
        document.querySelector('.container-2-part-2').style.display = 'none';

        // Muestra container3-part3
        document.querySelector('.container-3-part-3').style.display = 'block';
    });

    document.getElementById('icon-user').addEventListener('click', function() {
         // Oculta container3-part3
        document.querySelector('.container-3-part-3').style.display = 'none';
        
        
        // Muestra container2-part2
        document.querySelector('.container-2-part-2').style.display = 'block';
    });

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

    const container1Content = document.querySelector('.container-1 .subcontainer-1-2');
    container1Content.style.position = 'absolute';
    container1Content.style.left = '50%';
    container1Content.style.transform = 'translateX(-50%)';
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 // MOSTRAR CONTAINER 5 Y OCULTAR CONTAINER 2
document.addEventListener('DOMContentLoaded', function() {
    // Inicialmente, muestra el contenido de container-1 y container2-part2
    document.querySelector('.container-1').style.display = 'block';
    document.querySelector('.container-2-part-2').style.display = 'block';
    

    // Oculta container3-part3
    document.querySelector('.container-3-part-3').style.display = 'none';
    document.querySelector('.container-5-part-5').style.display = 'none';

    // Agrega un evento de clic al ícono bx-mail
    document.getElementById('icon-gmail').addEventListener('click', function() {
        // Oculta container2-part2
        document.querySelector('.container-2-part-2').style.display = 'none';

        // Muestra container3-part3
        document.querySelector('.container-5-part-5').style.display = 'block';
    });

    document.getElementById('icon-user').addEventListener('click', function() {
         // Oculta container5-part5
        document.querySelector('.container-5-part-5').style.display = 'none';
        
        
        // Muestra container2-part2
        document.querySelector('.container-2-part-2').style.display = 'block';
    });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const container1Content = document.querySelector('.container-1 .subcontainer-1-2');
    container1Content.style.position = 'absolute';
    container1Content.style.left = '50%';
    container1Content.style.transform = 'translateX(-50%)';
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 // MOSTRAR CONTAINER 6 Y OCULTAR CONTAINER 3
 document.addEventListener('DOMContentLoaded', function() {
    // Inicialmente, muestra el contenido de container-1 y container2-part2
    document.querySelector('.container-1').style.display = 'block';
    document.querySelector('.container-2-part-2').style.display = 'block';
    

    // Oculta container3-part3
    document.querySelector('.container-6-part-6').style.display = 'none';

    // Agrega un evento de clic al ícono bx-mail
    document.getElementById('icon-certification').addEventListener('click', function() {
        // Oculta container2-part2
        document.querySelector('.container-2-part-2').style.display = 'none';

        // Muestra container3-part3
        document.querySelector('.container-6-part-6').style.display = 'block';
    });

    document.getElementById('icon-user').addEventListener('click', function() {
         // Oculta container5-part5
        document.querySelector('.container-6-part-6').style.display = 'none';
        
        
        // Muestra container2-part2
        document.querySelector('.container-2-part-2').style.display = 'block';
    });

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

    const container1Content = document.querySelector('.container-1 .subcontainer-1-2');
    container1Content.style.position = 'absolute';
    container1Content.style.left = '50%';
    container1Content.style.transform = 'translateX(-50%)';
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", function() {
    const container1 = document.querySelector('.subcontainer-1-1', '.container-1');
    
    // Agregar una clase para bloquear los estilos al cargar la página
    container1.classList.add('blocked');

    // Función para desbloquear los estilos cuando sea necesario
    function unblockContainer1() {
        container1.classList.remove('blocked');
    }
    function unblockContainer1() {
        container1.classList.remove('blocked');
    }

    // Evento de clic en el icono de usuario para desbloquear container-1
    const iconUser = document.getElementById('icon-user');
    iconUser.addEventListener('click', unblockContainer1);
});


 // MOSTRAR CONTAINER 6 Y OCULTAR CONTAINER 3
 document.addEventListener('DOMContentLoaded', function() {
    // Inicialmente, muestra el contenido de container-1 y container2-part2
    document.querySelector('.container-1').style.display = 'block';
    document.querySelector('.container-2-part-2').style.display = 'block';
    

    // Oculta container3-part3
    document.querySelector('.container-3-part-3').style.display = 'none';

    // Agrega un evento de clic al ícono bx-mail
    document.getElementById('icon-code').addEventListener('click', function() {
        // Oculta container2-part2
        document.querySelector('.container-6-part-6').style.display = 'none';

        // Muestra container3-part3
        document.querySelector('.container3-part-3').style.display = 'block';
    });

    document.getElementById('icon-certification').addEventListener('click', function() {
         // Oculta container5-part5
        document.querySelector('.container-3-part-3').style.display = 'none';
        
        
        // Muestra container2-part2
        document.querySelector('.container-6-part-6').style.display = 'block';
    });

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

    const container1Content = document.querySelector('.container-1 .subcontainer-1-2');
    container1Content.style.position = 'absolute';
    container1Content.style.left = '50%';
    container1Content.style.transform = 'translateX(-50%)';
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



 // MOSTRAR CONTAINER 6 Y OCULTAR CONTAINER 3
 document.addEventListener('DOMContentLoaded', function() {
    // Inicialmente, muestra el contenido de container-1 y container2-part2
    document.querySelector('.container-1').style.display = 'block';
    document.querySelector('.container-2-part-2').style.display = 'block';
    

    // Oculta container3-part3
    document.querySelector('.container--part-3').style.display = 'none';

    // Agrega un evento de clic al ícono bx-mail
    document.getElementById('icon-code').addEventListener('click', function() {
        // Oculta container2-part2
        document.querySelector('.container-5-part-5').style.display = 'none';

        // Muestra container3-part3
        document.querySelector('.container-3-part-3').style.display = 'block';
    });

    document.getElementById('icon-gmail').addEventListener('click', function() {
         // Oculta container5-part5
        document.querySelector('.container-3-part-3').style.display = 'none';
        
        
        // Muestra container2-part2
        document.querySelector('.container-5-part-5').style.display = 'block';
    });

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

    const container1Content = document.querySelector('.container-1 .subcontainer-1-2');
    container1Content.style.position = 'absolute';
    container1Content.style.left = '50%';
    container1Content.style.transform = 'translateX(-50%)';
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////












//MOSTRAR CONTAINER 3 Y OCULTAR CONTAINER 2
document.addEventListener('DOMContentLoaded', function() {
    // Inicialmente, muestra el contenido de container-1 y container2-part2
    document.querySelector('.container-1').style.display = 'block';
    document.querySelector('.container-2-part-2').style.display = 'block';


    // Oculta container3-part3
    document.querySelector('.container-3-part-3').style.display = 'none';
    document.querySelector('.container-5-part-5').style.display = 'none';

///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//     MONSTART CONTAINER-6 Y  OCULTAR EL CONTAINER-2
    // Agrega un evento de clic al ícono bx-code
    document.getElementById('icon-gmail').addEventListener('click', function() {
        // Oculta container2-part2
        document.querySelector('.container-6-part-6').style.display = 'none';

        // Muestra container3-part3
        document.querySelector('.container-5-part-5').style.display = 'block';
    });

    document.getElementById('icon-certification').addEventListener('click', function() {
         // Oculta container3-part3
        document.querySelector('.container-5-part-5').style.display = 'none';
        
        
        // Muestra container2-part2
        document.querySelector('.container-6-part-6').style.display = 'block';
    });


///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//     MONSTART CONTAINER-3 Y  OCULTAR EL CONTAINER-2
    // Agrega un evento de clic al ícono bx-code
    document.getElementById('icon-gmail').addEventListener('click', function() {
        // Oculta container2-part2
        document.querySelector('.container-3-part-3').style.display = 'none';

        // Muestra container3-part3
        document.querySelector('.container-5-part-5').style.display = 'block';
    });

    document.getElementById('icon-code').addEventListener('click', function() {
         // Oculta container3-part3
        document.querySelector('.container-5-part-5').style.display = 'none';
        
        
        // Muestra container2-part2
        document.querySelector('.container-3-part-3').style.display = 'block';
    });

///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//     MONSTART CONTAINER-5 Y  OCULTAR EL CONTAINER-2
    // Agrega un evento de clic al ícono bx-code
    document.getElementById('icon-gmail').addEventListener('click', function() {
        // Oculta container2-part2
        document.querySelector('.container-2-part-2').style.display = 'none';

        // Muestra container3-part3
        document.querySelector('.container-5-part-5').style.display = 'block';
    });

    document.getElementById('icon-user').addEventListener('click', function() {
         // Oculta container3-part3
        document.querySelector('.container-5-part-5').style.display = 'none';
        
        
        // Muestra container2-part2
        document.querySelector('.container-2-part-2').style.display = 'block';
    });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









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
