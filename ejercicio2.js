// pedir el nombre  
let nombre = prompt('¿cual es tu nombre?');

// pedir el año de nacimiento 
let anioNacimiento = Number(prompt (nombre + '¿en que año naciste?'));

// guardo el año actual
let anioActual = 2025;

// calculo de la edad
let edad = anioActual - anioNacimiento;

console.log ("hola " + nombre + ', grandioso! Tienes ' + edad);

//solucion del profe
//const nombre = prompt('Digita tu nombre:');
//const anioNacimiento = prompt( nombre + '¿cual es tu año de nacimiento?');
//const anioActual = 2020;
// const anioActual = new Date ().getFullYear(); //Anio "actual real"
