/* 
    Haz un programa que escriba todos los múltiplos de 23 inferiores a 1000 y por último nos dé la suma de todos ellos.
*/

let multiplo = 23;
let sumaTotal = 0;

const esMultiplo = ()=>{
    for(let i = 0; i < 1000; i++ ){
        if(i % multiplo === 0){
            sumaTotal = sumaTotal + i;
            // console.log(sumaTotal)
        }
    }
    alert(`La suma total de los multiplos de ${multiplo} son: ${sumaTotal}`);
}
esMultiplo();
