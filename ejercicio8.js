const nombres = [ "Pedro", "Pablo", "Maria", "Juan", "Diana" ];
const nombre = prompt( 'Digita tu nombre');
const nombreNuevo = prompt ('Digita nombre nuevo');

nombres.push( nombre );
nombres[ 2 ] = nombreNuevo
 
for(const nombre of nombres ) {
    console.log('>',nombre );
}