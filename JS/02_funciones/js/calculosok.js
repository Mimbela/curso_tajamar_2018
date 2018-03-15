'use strict' //etiqueta el uso estricto del lenguaje, te obliga a codificar todo correctamente.



function sumar(a, b) { //esto es una funcion pura
    var c = a + b

    return c

}


function restar(a, b) {
    var c = a - b

    return c
}


function mostrar(r) {
    console.log("El resultado es ", r) //r HACE UNA LLAMADA

}

//forma 1
var x = 123;
var y = 34;
var r = sumar(x, y)
mostrar(r)


//forma 2
mostrar(sumar(123, 34));
mostrar(sumar(4, 20));
mostrar(sumar(85, 90));

//forma 3
var a = 123;
var b = 34;
var r = restar(x, y)
mostrar(r)


