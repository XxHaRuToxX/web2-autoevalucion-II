/* 
    Haz un programa que sirva para calcular el área de un triángulo o el área de un rectángulo o el área
    de un círculo. El programa ha de tener la posibilidad de volver a empezar.
*/

const areaTriangulo = ()=>{
    let base = parseInt(prompt('Ingrese la base del triangulo: '));
    let altura = parseInt(prompt('Ingrese la altura del triangulo: '));
    alert('El area del triangulo es: '+ (base*altura)/2);
}
const areaRectangulo = ()=>{
    let lado1 = parseInt(prompt('Ingrese el valor del lado 1 del rectangulo: '));
    let lado2 = parseInt(prompt('Ingrese el valor del lado 2 del rectangulo: '));
    alert('El area del rectangulo es: '+ (lado1*lado2));
}
const areaCirculo = ()=>{
    let radio = parseInt(prompt('Ingrese el valor del radio del circulo: '));
    alert('El area del circulo es: '+ (Math.PI * (radio*radio)))
}

const escogiendoArea = ()=>{
    
    let opciones = parseInt(
        prompt('Menu ejecucion: \n1.- Calcular area del triangulo.' + 
        '\n2.- Calcular area del rectangulo. \n3.- Calcular area del circulo.')
    ); ;
    switch(opciones){
        case 1:
            areaTriangulo();
            break;
        case 2:
            areaRectangulo();
            break;
        case 3:
            areaCirculo();
            break;
        default:
            break;
    }
}
escogiendoArea();

const pregunta = confirm('¿Deseas continuar hallando alguna area?');

if(!pregunta){
    alert('Programa terminado')
}else{
    alert('Entonces continuemos...');
    escogiendoArea();
}

