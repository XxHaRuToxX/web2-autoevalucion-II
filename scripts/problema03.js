/* 
    Escribe un programa que nos vaya pidiendo números. 
    Si escribimos el número 9999 se acaba; por último 
    el programa nos da como resultado el número de números introducidos, exceptuando el 9999.
*/

// var cuantos = 1;
// var numeros = new Array();
// const numerosAContar=()=>{
//     let insertarNumero = prompt('Escribe un número', '');
//     numeros[numeros.length] = insertarNumero;

//     while(insertarNumero != '9999'){
//         insertarNumero = prompt('Escribe un número', '');
//         cuantos++;
//         numeros[numeros.length] = insertarNumero;
//     }
    
//     alert('Números introducidos: ' + numeros.join(', ') + '\nCantidad: ' + cuantos);
// }
// numerosAContar();
var cuantos = 1;
var numeros = new Array();
const numerosAContar=()=>{
    let insertarNumero = parseInt(prompt('Escribe un número'));
    numeros[numeros.length] = insertarNumero;

    while(insertarNumero != 9999){
        insertarNumero =  parseInt(prompt('Escribe un número'));
        cuantos++;
        numeros[numeros.length] = insertarNumero;
    }
    
    alert('Números introducidos: ' + numeros.join(', ').slice(0,-4) + '\nCantidad: ' + (cuantos - 1));
}
numerosAContar();

