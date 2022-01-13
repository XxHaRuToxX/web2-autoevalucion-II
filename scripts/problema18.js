/* 
    Haz un programa que dibuje un cuadrado, con el carácter que quieras, a partir del lado.
*/

const dibujarCuadrado =()=>{
    let lado = parseInt(prompt('Ingrese el lado del cuadrado: '));
    
    for(let i = 1; i <= lado; i++){
        for(let j = 1; j <= lado; j++){
            document.write('° ')
        }
        document.write('</br>')
    }
}
dibujarCuadrado();


