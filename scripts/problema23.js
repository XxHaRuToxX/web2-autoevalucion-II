/* 
    Haz un programa que nos pregunte 10 multiplicaciones aleatoriamente y al final nos dé la nota
    cualitativa.
*/

const multiplicarAleatoriamente = ()=>{
    alert('Resuelva 10 multiplicaciones aleatoriamente...')
    let respuesta;
    let verdadero = 0;
    let falso = 0;
    for(let i = 0; i < 10; i++){
        let multiplicando = parseInt(Math.random()*10);
        let multiplicador = parseInt(Math.random()*10);
        respuesta = parseInt(prompt(`${i+1}.- ¿Cuanto es ${multiplicando} * ${multiplicador}?`));
        if(respuesta === (multiplicando*multiplicador)){
            verdadero = verdadero + 1;
        }else{
            falso = falso + 1;
        }
    }
    alert('Usted respondio ' + verdadero + ' correctamente y ' + falso + ' incorrectamente');
}
multiplicarAleatoriamente();

