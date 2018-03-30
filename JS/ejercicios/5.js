/* Ejercicio (5)
Pares o Nones
: Recoger un número, mediante 
document.write(prompt('Escribe un número')) o como un campo input, e 
indicar si se trata de un valor par o impar.
Objetivo: Utilizar bucles de control condicionales (
if
).
Anticipar el concepto de control de errores (e.g. utilizando la función 
isNaN)
desarrollos\javascript\JS06_Pares_Nones.html
 */

function parImpar(x) {
    let resultado = x % 2 ? "impar" : "par"
    return resultado
}

function mostrar(x) {
    console.log("El resultado es ", parImpar(x))
}

mostrar(2)//false -par cero
mostrar(3)//true -impar uno