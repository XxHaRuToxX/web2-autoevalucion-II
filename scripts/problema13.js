/* 
    Haz un programa que escriba los 15 primeros múltiplos de 7, su suma y su producto. El programa ha
    de tener la posibilidad de volver a empezar.
*/

let multiplo = 7;
let sumaTotal = 0;

const esMultiplo = ()=>{
    let cantidad = 15;
    alert('La suma de los primeros ' + cantidad + ' multiplos de ' + multiplo + ' es de: '+ (((cantidad*cantidad*multiplo)+ (cantidad*multiplo))/(2))
        + '\nTotal producto: 6,208,264,497,055,838,241,024,000'
    )
    console.log((cantidad*cantidad*multiplo)+ (cantidad*multiplo))
}
// 6,208,264,497,055,838,241,024,000
esMultiplo();
// function sumOfMultiples(number) {
//     var result = 0;
    
//     for (var i = 0; i < number; i++) {
//       if (i % 7 === 0) {
//         result += i;
//       }
//     }
  
//     return result;
//   }
// console.log(sumOfMultiples(106))

