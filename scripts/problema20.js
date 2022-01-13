/* 
    Haz un programa que calcule el número “e” mediante el desarrollo en serie:
    e = 1 + 1/(1!) + 1/(2!) + 1/(3!) + 1/(4!) + ... 1/(50!)
*/
// let e;
// let r = 1;

// const factorial=()=>{
//     for(let x = 1; x <= 50; x++){
//         for(let i = 1; i<=x; i++){
//             r = r * i;
//         }
//         e = 1 + (1/r[x])
//     }
//     alert('El valor de e es: ' + r);
// }

// factorial();

 // Definición de función factorial
 function factorial(num) {
    if (num === 1) {
        return 1;
    } else if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}

// Calcula la suma acumulada de factoriales comenzando desde 1 an
function addRes(n) {
    var res1 = 1;
    for (var i = 1; i <= n; i++) {
        res1 += 1/(factorial(i));
    }
    return res1;
}

// Encapsulado como función principal
function main(n) {
    // Cuando n es 1, el resultado de salida directa es 1, evite imprimir el error de escritura de 1! +2! + ... + 1! = 1, y las condiciones de if else son las mismas
    if (n === 1) {
        document.write("<h1 style='text-align:center;'>" + "<font color = 'red'> El resultado de factorial es: </font> 1! = 1" +
            "</h1>");
    } else if (n === 2) {
        document.write("<h1 style='text-align:center;'>" + "<font color = 'red'> El resultado de factorial es: </font> 1! +2! = 4" +
            "</h1>");
    } else {
        // Devuelve la acumulación final y el resultado
        var res2 = addRes(n);
        // Empalme de cadenas para preparar la salida a la página
        var str = "<font color = 'red'> El resultado de factorial es: </font> 1 + 1/1! + 1/2! + ...... +";
        str += "1/"+n + "! =" + res2;
        document.write("<h1 style='text-align:center;'>" + str + "</h1><hr/>");
    }
}

// Muestra un cuadro de diálogo que solicita al usuario que ingrese n
var n = parseInt(prompt("Ingrese el número de factorial que desea (el número ingresado debe ser un número entero mayor que 0):"));
// Realizar el cálculo de la función principal generar la respuesta (calcular la suma de los factoriales de 1 an)
main(n);



