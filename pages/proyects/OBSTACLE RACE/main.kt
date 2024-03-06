
import java.util.Scanner

fun main() {
    // Crear un objeto Scanner para leer la entrada del usuario
    val scanner = Scanner(System.`in`)

    // Solicitar al usuario que ingrese un dato
    println("Por favor ingresa un dato: ")

    // Leer la entrada del usuario
    val dato = scanner.nextLine()

    // Imprimir el dato ingresado por el usuario
    println("Has ingresado: $dato")
}