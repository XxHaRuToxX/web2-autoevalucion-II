/* 
    Haz un programa que sirva para resolver ecuaciones de 2º grado del tipo ax2 + bx = 0.
*/

const calcularEcuacion = ()=>{
    let a = parseInt(prompt('Ingrese el valor de "a": '));
    let b = parseInt(prompt('Ingrese el valor de "b": '));
    let c = parseInt(prompt('Ingrese el valor de "c": '));
    let x1;
    x1 = (-b + Math.sqrt((b*b)-4+a*c))/(2*a);
    x2 = (-b - Math.sqrt((b*b)-4+a*c))/(2*a);
    alert('El valor de x de la ecuacion de segundo grado es: ' + x1 + ' y ' + x2);
}
calcularEcuacion();