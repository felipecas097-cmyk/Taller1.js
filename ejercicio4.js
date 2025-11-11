let Numero1 = parseInt ( prompt('ingresa el numero '));
let mensaje = '';

if( Numero1 % 3 == 0 ) {
    mensaje += 'bing';    //mensaje = mensaje + 'bing'
}
if( Numero1 % 5 == 0) {
    mensaje += 'bong';
}

if( ! mensaje )
    console.log( Numero1);