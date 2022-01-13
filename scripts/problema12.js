/* 
    Haz un programa que escriba la tabla de valores de la función y = ax2 + bx + c, el programa nos pide
    los valores de a, b, c y el número natural “v”. 
    El programa construye la tabla de valores entre los valores de “-v” y “v” con un incremento de una unidad.
    La “salida” para el caso a = 1, b = -2, c=3, v=5 ha de ser de la siguiente forma:
*/

const tablaValores = ()=>{
    let a = parseInt(prompt('Ingrese el valor de a: '));
    let b = parseInt(prompt('Ingrese el valor de b: '));
    let c = parseInt(prompt('Ingrese el valor de c: '));
    let v = parseInt(prompt('Ingrese el valor de v: '));
    let menor = -v;
    let mayor = v+1;
    let array = {a, b, c}
    let y = new Array();
    let numerosArray = Array.from({length:mayor - menor}, (a, b)=>b + menor)
    for(let i = -v; i <= v; i++){
        y[y.length]=array.a*([i] * [i]) + array.b * [i] + array.c;
    }
    
    alert(`\nX = ${numerosArray}     \nY = ${y}`)
    console.log(y.length);
}
tablaValores();

