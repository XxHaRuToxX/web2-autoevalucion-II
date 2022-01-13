/* 
    Haz un programa que haga lo mismo que el anterior, pero además nos dé el producto de los números introducidos, exceptuando el 9999.
*/

var cuantos = 0;
var numeros = new Array();
let total = 1;
let numerosMenosUno;
const numerosAContar=()=>{
    let insertarNumero = parseInt(prompt('Escribe un número'));
    numeros[numeros.length] = insertarNumero;

    while(insertarNumero != 9999){
        insertarNumero =  parseInt(prompt('Escribe un número'));
        cuantos++;
        numeros[numeros.length] = insertarNumero;
        numerosMenosUno = numeros.slice(0, -1);
        console.log(numerosMenosUno);
        total = numerosMenosUno.reduce((a, b)=>a*b, 1)
    }
    
    alert('Números introducidos: ' + numerosMenosUno.join(', ') + '\nCantidad: ' + (cuantos) + '\nTotal producto: ' + (total ));
}
numerosAContar();

