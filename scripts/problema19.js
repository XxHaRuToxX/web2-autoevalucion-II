/* 
    Haz un programa que nos pida un número y dé como resultado la tabla de multiplicar del número
    introducido.
*/

const tablaDeMultiplicar = ()=>{
    let multiplicar = [];
    let numero = parseInt(prompt('Inserte un numero para ver su tabla de multiplicar: '));
    for(let i = 0; i <= 12; i++){
        multiplicar.push(`\n${i} * ${numero} = ${i * numero}`);
    }
    alert(multiplicar)
}
tablaDeMultiplicar();

