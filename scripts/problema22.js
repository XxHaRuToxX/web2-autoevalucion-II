/* 
    En matemáticas no se puede dejar un resultado numérico sin racionalizar, ya que el resultado sin
    racionalizar tiene un error mayor.
    Haz un programa para comprobar la afirmación anterior, concretamente para las fracciones:
    2/sqr(3) y 2*sqr(3)/2
*/

const racionalizar = () =>{
    let numerador = 2;
    let denominador = Math.sqrt(3);

    alert('Racionalizaremos 2/sqr(3)...')

    let solucion = numerador/denominador;
    alert('La solucion de la racionalizacion es: ' + solucion)
}

racionalizar();

