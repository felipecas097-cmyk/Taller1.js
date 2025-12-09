//  Pedimos un número al usuario
let numero = Number(prompt("Ingresa un número"));

//  Creamos un arreglo del 1 al número ingresado
let arreglo = [];
for (let i = 0; i < numero; i++) {
    arreglo[i] = i + 1; // Llenamos cada posición con su número correspondiente
}

//  Creamos un nuevo arreglo que no incluya el segundo elemento (índice 1)
let arregloFinal = [];
for (let i = 0, j = 0; i < arreglo.length; i++) {
    if (i !== 1) {         // Si no es el segundo elemento, lo guardamos
        arregloFinal[j] = arreglo[i];
        j++;               // j avanza solo si agregamos ese número
    }
}

//  Imprimimos el arreglo sin el segundo valor
for (let i = 0; i < arregloFinal.length; i++) {
    console.log(arregloFinal[i]);
}
