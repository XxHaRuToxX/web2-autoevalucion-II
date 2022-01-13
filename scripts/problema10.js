/* 
    Haz un programa que sirva para resolver sistemas de ecuaciones del tipo: 
        ax + by = c 
        dx + ey = f 
    x=(ce-bf)/(ae-bd) ; y=(af-dc)/(ae-bd) 
    Prueba el funcionamiento del programa para el caso a=1; b=-2; c=-3; d=3; e=1;f=5; si todo funciona correctamente: x=1 ; y=2
*/

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
calcularSistema();