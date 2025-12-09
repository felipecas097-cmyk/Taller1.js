let numero1 = Number(prompt("Digite el número donde va a iniciar el rango"));
let numero2 = Number(prompt("Digite el número donde va a finalizar el rango"));

// Si el primer número es menor que el segundo → imprimir hacia arriba
if (numero1 < numero2) {
    for (let i = numero1; i <= numero2; i++) {
        console.log(i);
    }
}

// Si el primer número es mayor que el segundo → imprimir hacia abajo
else if (numero1 > numero2) {
    for (let i = numero1; i >= numero2; i--) {
        console.log(i);
    }
}

// Si son iguales → solo imprime una vez
else {
    console.log(numero1);
}
