/* 
    Haz un programa tal que: dados dos vectores del espacio calcule su producto escalar, producto
    vectorial y además nos dé el módulo de los dos vectores y también el módulo del producto vectorial.
    v =(a , b , c) w=(d , e , f)
    Producto Escalar = ad + be + cf
    Producto vectorial = (bf-ec , dc-af , ae-bd)
    Módulo de v = sqrt(a^2 + b^2 + c^2)
*/

let a = parseInt(prompt('Ingrese el primer valor del vector 1: '));
let b = parseInt(prompt('Ingrese el segundo valor del vector 1: '));
let c = parseInt(prompt('Ingrese el tercer valor del vector 1: '));
let d = parseInt(prompt('Ingrese el primer valor del vector 2: '));
let e = parseInt(prompt('Ingrese el segundo valor del vector 2: '));
let f = parseInt(prompt('Ingrese el tercer valor del vector 2: '));

let objetoVector1 = {a, b, c};
let objetoVector2 = {d, e, f};
let i;
let j;
let k;

const productoEscalar = ()=>{
    return objetoVector1.a * objetoVector2.d + objetoVector1.b * objetoVector2.e + objetoVector1.c * objetoVector2.f
}
const productoVectorial = ()=>{
    i = (objetoVector1.b * objetoVector2.f) - (objetoVector2.e * objetoVector1.c);
    j = (objetoVector2.d * objetoVector1.c) - (objetoVector1.a * objetoVector2.f);
    k = (objetoVector1.a * objetoVector2.e) - (objetoVector1.b * objetoVector2.d);
    return (`${i}, ${j}, ${k}`)
}

const moduloProductoVectorUno = ()=>{
    return (Math.sqrt((a * a) + (b * b) + (c * c) ));
}
const moduloProductoVectorDos = ()=>{
    return (Math.sqrt((d * d) + (e * e) + (f * f) ));
}
const moduloProductoVectorial = ()=>{
    return (Math.sqrt((i * i) + (j * j) + (k * k) ));
}

const calcularValores = ()=>{
    alert(`Producto escalar: ${productoEscalar()} 
        \nProducto vectorial: ${productoVectorial()} 
        \nModulo vector uno: ${moduloProductoVectorUno()}
        \nModulo vector dos: ${moduloProductoVectorDos()}
        \nModulo vectorial: ${moduloProductoVectorial()}
    `)
}
calcularValores();


