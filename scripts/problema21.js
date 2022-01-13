/* 
    Haz un programa que escriba 50 números aleatorios enteros entre 1 y 6.
*/
const aleatorio=(inferior, superior)=> {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}

const mostrarNumerosAleatorios =()=>{
    let numeros = []
    for(let i = 0; i < 50; i++){
        numeros.push(aleatorio(1,6))
    }
    alert(`Los numeros aleatorios entre 1 y 6 son: \n${numeros}`)
}
mostrarNumerosAleatorios();

