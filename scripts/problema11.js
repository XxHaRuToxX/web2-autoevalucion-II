/* 
    Haz un programa con la posibilidad de hacer el Eval2I.htm o el Eval2J.htm (debes utilizar la estructura “switch”)
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
const calcularSistema =()=>{
    let a = parseInt(prompt('Ingrese el valor de "a": '));
    let b = parseInt(prompt('Ingrese el valor de "b": '));
    let c = parseInt(prompt('Ingrese el valor de "c": '));
    let d = parseInt(prompt('Ingrese el valor de "d": '));
    let e = parseInt(prompt('Ingrese el valor de "e": '));
    let f = parseInt(prompt('Ingrese el valor de "f": '));
    let x = ((c*e)-(b*f))/((a*e)-(b*d));
    let y = ((a*f)-(d*c))/((a*e)-(b*d));
    alert(`ax + by = c \ndx + ey = f \n x=${x} y=${y}`)
}

const escogiendoProblema = ()=>{
    
    let opciones = parseInt(prompt('Menu ejecucion: \n1.- Calcular ecuacion de segundo grado \n2.- Calcular matriz de 2x2. \n3.- Salir del programa.')); ;
    switch(opciones){
        case 1:
            calcularEcuacion();
            break;
        case 2:
            calcularSistema();
            break;
        case 3:
            break;
    }
}
escogiendoProblema();
