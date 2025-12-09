// Creamos un arreglo con varios números
let nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39];

// 1. Filtramos los números que sean mayores a 10
//    filter() crea un nuevo arreglo con los valores que cumplen la condición
let newNums = nums.filter(function(value) {
    return value > 10; // Solo pasa valores mayores a 10
});

// 2. Recorremos el arreglo filtrado con forEach()
//    forEach ejecuta una acción con cada elemento del arreglo
newNums.forEach(function(value) {
    console.log(value); // Imprime cada número mayor a 10
});
