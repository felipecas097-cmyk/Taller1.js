// Pedir al usuario ingresar un número
let numero = prompt("Ingresa un número:");

// Convertir el valor a número
numero = Number(numero);

// Verificar las condiciones en orden
if (numero % 3 === 0 && numero % 5 === 0) {
    // Múltiplo de ambos: imprimir bingbong
    console.log("bingbong");
} else if (numero % 3 === 0) {
    // Múltiplo solo de 3: imprimir bing
    console.log("bing");
} else if (numero % 5 === 0) {
    // Múltiplo solo de 5: imprimir bong
    console.log("bong");
} else {
    // No es múltiplo de ninguno: imprimir el número
    console.log(numero);
}
