/* 
    Haz un programa que sirva para hacer una tabla de valores de la función y=sen(7x-5)
    - El programa nos pide los dos valores de “x” (valores máximo y mínimo).
    - El programa nos pide el incremento (variación) de la “x”.
*/


const calcularTabla = ()=>{
    let valorMinimo = parseInt(prompt('Ingrese el valor minimo de "X": '));
    let valorMaximo = parseInt(prompt('Ingrese el valor maximo de "X": '));
    let valorAIncrementar = parseInt(prompt('Ingrese el valor a incrementar de "X": '));
    let numerosArray = Array.from({length:valorMaximo - valorMinimo}, (a, b)=>b + valorMinimo)
    let y = new Array();
    for(let i = valorAIncrementar; i < numerosArray.length; i++){
        y[y.length]=Math.sin(7*numerosArray[i] - 5)
    }
    alert(`X = ${numerosArray}     Y = ${y}`)
    console.log(y.length);
}
calcularTabla();

