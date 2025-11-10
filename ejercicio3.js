// pedir un numero
let numero = prompt ("ingresa un numero")

//convertir el valor a numero
numero = Number(numero);

// verificar si es múltiplo de 5 
if (numero % 5 === 0) {

// si el residuo es 0, es múltiplo
  console.log("Si, el número " + numero + " es múltiplo de 5");
} else {
// si no, no es múltiplo

  console.log("No, el número " + numero + " no es múltiplo de 5");
}
