// 1. Creamos el arreglo con los nombres iniciales
const nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"];

// 2. Pedimos un nombre y lo insertamos al final del arreglo
const nombreNuevoFinal = prompt("Ingresa un nombre");
nombres.push(nombreNuevoFinal); // Agrega al final

// 3. Pedimos otro nombre para reemplazar la tercera posición (índice 2)
const nombreReemplazo = prompt("Ingresa otro nombre");
nombres[2] = nombreReemplazo; // Cambia el valor en posición 2

// 4. Recorremos el arreglo e imprimimos cada nombre
for (const nombre of nombres) {
    console.log(nombre);
}
