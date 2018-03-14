'use strict' //etiqueta el uso estricto del lenguaje, te obliga a codificar todo correctamente.


//a y b son argumentos PRIMERO
function sumar(a, b) {
    var c = a + b
    console.log("El resultado es ", c)
    return c

}


function restar(a, b) {
    var c = a - b
    console.log("El resultado es ", c)
    return c
}

//paso 2 parámetros SEGUNDO
sumar(123, 34);
sumar(23, 45);
sumar(2, 5)

restar(123, 34);
restar(23, 45);
restar(2, 5)