// Obtener referencia al elemento de entrada
var inputElement = document.getElementById("input");

// Función para manejar la entrada del usuario
function handleUserInput(event) {
    // Verificar si la tecla presionada es Enter (código 13)
    if (event.keyCode === 13) {
        runFizzBuzz();
    }
}

// Agregar el listener de evento al inputElement
inputElement.addEventListener('keydown', handleUserInput);

// Función para ejecutar FizzBuzz
function runFizzBuzz() {
    var consoleElement = document.getElementById("console");
    var input = inputElement.value;

    if (input === "FizzBuzz") {
        var output = "";

        for (var index = 1; index <= 100; index++) {
            var divisibleByThree = index % 3 === 0;
            var divisibleByFive = index % 5 === 0;

            if (divisibleByThree && divisibleByFive) {
                output += "fizzbuzz\n";
            } else if (divisibleByThree) {
                output += "fizz\n";
            } else if (divisibleByFive) {
                output += "buzz\n";
            } else {
                output += index + "\n";
            }
        }

        consoleElement.innerHTML = output; // Mostrar la salida en el div
    } else {
        consoleElement.innerHTML = "Entrada incorrecta. Debe escribir 'FizzBuzz'.\n";
    }
}

