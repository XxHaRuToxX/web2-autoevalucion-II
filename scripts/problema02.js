/* 
    Haz un programa que funcione de la siguiente forma:
    - El programa nos pide que escribamos dos números positivos menores de 57
    - El programa nos da como resultado el producto de los dos números
    - Si los números no son positivos o son mayores de 57, el programa nos lo dice.
    - El programa nos pregunta al final si queremos volver a empezar.
*/

const calcularProducto=(valor1, valo2)=>{
    return (valor1 * valo2);
}

const volverACalcular=()=>{
    let num1 = prompt('Ingrese el primer numero: ');
    let num2 = prompt('Ingrese el segundo numero: ');
    if(num1 > 57 || num2 > 57){
        alert('Ingrese un numero menor a 57.');
    }else{
        
        alert(calcularProducto(num1, num2))
    }
}
volverACalcular();


const pregunta = confirm('¿Deseas continuar multiplicando?');
// while(pregunta){
//     alert('Entonces continuemos...');
//     volverACalcular();
//     continue;
// }

if(!pregunta){
    alert('Programa terminado')
}else{
    alert('Entonces continuemos...');
    volverACalcular();
}

