/* 
    Haz un programa que “dibuje” un rectángulo de asteriscos a partir de la base y la altura.
*/
const dibujoRectangulo =()=>{
    let filas = parseInt(prompt('Ingrese la altura del rectangulo: '));
    let columnas = parseInt(prompt('Ingrese la base del rectangulo: '));
    
    for(let i = 1; i <= filas; i++){
        for(let j = 1; j <= columnas; j++){
            document.write('* ')
        }
        document.write('</br>')
    }
}
dibujoRectangulo();
