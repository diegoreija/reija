import java.util.Scanner

fun main() {
    val scanner = Scanner(System.`in`)
    println("Ingrese 'FizzBuzz': ")

    val input = scanner.nextLine()

    val console = document.getElementById("console") // Obtenemos la referencia al elemento "console"

    if (input == "FizzBuzz") {
        for (index in 1..100) {
            val divisibleByThree = index % 3 == 0
            val divisibleByFive = index % 5 == 0

            if (divisibleByThree && divisibleByFive) {
                console?.innerHTML += "fizzbuzz\n" // Escribimos la salida en el elemento "console"
            } else if (divisibleByThree) {
                console?.innerHTML += "fizz\n"
            } else if (divisibleByFive) {
                console?.innerHTML += "buzz\n"
            } else {
                console?.innerHTML += "$index\n"
            }
        }
    } else {
        console?.innerHTML += "Entrada incorrecta. Debe escribir 'FizzBuzz'.\n"
    }
}
