/* 
    Haz un programa que haga lo mismo que el anterior, pero además nos dé la suma de todos los números introducidos, exceptuando el 9999
*/
var cuantos = 1;
var numeros = new Array();
let total = 0;
const numerosAContar=()=>{
    let insertarNumero = parseInt(prompt('Escribe un número'));
    numeros[numeros.length] = insertarNumero;

    while(insertarNumero != 9999){
        insertarNumero =  parseInt(prompt('Escribe un número'));
        cuantos++;
        numeros[numeros.length] = insertarNumero;
        total=numeros.reduce((a,b)=>a+b, 0)
    }
    
    alert('Números introducidos: ' + numeros.join(', ').slice(0,-4) + '\nCantidad: ' + (cuantos - 1) + '\nTotal suma: ' + (total - 9999));
}
numerosAContar();

