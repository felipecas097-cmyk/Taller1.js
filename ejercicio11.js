// Arreglo con una serie de números 1 y 0
const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];

// Variable acumuladora para contar la cantidad de '1'
let total = 0;

// Recorremos el arreglo con un ciclo for...of
for (let k of nums) {

    // Si el valor actual es 1, aumenta el contador
    if (k == 1) {
        total += k;   // Se suma 1 al total
                      // Funciona porque 1 suma y 0 no afecta
    }
}

// Imprimimos el total de unos encontrados
console.log(total);
