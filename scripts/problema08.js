/* 
    Haz un programa que sirva para calcular un cateto de un triángulo rectángulo a partir del otro cateto y la hipotenusa, de la siguiente forma:
    - El programa nos pide el valor de la hipotenusa.
    - El programa nos pide el valor de un cateto.
    - Si el cateto es mayor que la hipotenusa, el programa nos da un mensaje de error y se acaba.
    - El programa nos da como resultado el valor del otro cateto y nos pregunta si queremos volver a empezar.
*/

const calcularCateto=(cateto1, hipotenusa)=>{
    return Math.sqrt((cateto1*cateto1) - (hipotenusa*hipotenusa));
}

// const volverACalcular=()=>{
//     let cate1 = parseInt(prompt('Ingrese el un cateto: '));
//     let hipo = parseInt(prompt('Ingrese la hipotenusa: '));
//     if(cate1 > hipo){
//         alert('Ingrese un numero menor a ' + hipo);
//     }else{
        
//         alert('El valor del otro cateto es: '+ ((cate1*cate1) - (hipo*hipo)))
//     }
// }
function CatetoOpuesto(){
    do{
        hipotenusa=prompt("Introduce la Hipotenusa");
    }while((isNaN(hipotenusa)==true)||(hipotenusa<=0));
    hipotenusafloat=parseFloat(hipotenusa);

    do{
    catetoAdyacente=prompt("Introduce el valor del Cateto Adyacente");
    }while((isNaN(catetoAdyacente)==true)||(hipotenusafloat<=catetoAdyacente)||(catetoAdyacente<=0));

    catetopu=((hipotenusa*hipotenusa)-(catetoAdyacente*catetoAdyacente));
    alert("El Cateto Opuesto es "+Math.sqrt(catetopu));
}
// volverACalcular();
CatetoOpuesto();


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

