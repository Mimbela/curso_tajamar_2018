
//expresión de asignación
let x = 25

//instrucción --> side effect
console.log(x)

x++
// x = x + 1
console.log(x)

//****************** */

x--
// x = x - 1
console.log(x)

//*************************************** */
//OPERADORES ARITMÉTICOS
x = 27

y = parseInt(x / 5) //5 ESTO LO CONVIERTE EN ENTERO

console.log(y)

let r = x % 5 // 2 ESTO ES EL MÓDULO
console.log(r)

//OPERADORES DE ASIGNACIÓN ARITMÉTICA
x = 12 
x += 4 // x + 4 = 16

console.log(x)

//OPERADORES RELACIONALES

x = 12
y = '12'

console.log (x==y) //es igual
console.log ( x === y) // es idéntico

console.log (x!=y) //no es igual
console.log ( x !== y) // no es idéntico


if(x){ //=x>0
    console.log ("Estoy dentro del if")

}

if(x ===12){ //=x>0
    console.log ("Estoy dentro del if")

}
console.log (!!x) //esto es para voncertir a booleano