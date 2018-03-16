//*************************************************************************** */
//             x = 1 asigna , ejem: if (x=12)-->true
//             x = = 1  , es igual a 
//             x = = = 1 , es idéntico
//             x + = 1 --> x=1
// >< compara el orden de las cadenas
// OPERADOR TERNARIO: una expresión, lo que quiero devolver 
 






//****************************************************************************** */
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

x = 'abc'
y= 'def'
console.log (x < y) //comparar 

console.log (x.length === y.length) //comparar

//? : EXPRESIÓN ? TRUE: ? FALSE

let edad = 12
console.log (edad > 30 ? 'Buenos días': 'Hola chaval') //ESTO ES COMO UN IF, PARA EXPRESIONES MUY COMPACTAS //OPERADOR TERNARIO
//OPERADOR TERNARIO

//*************************************************** */
let a = 12
let b = 2
let c = 4


if (a < b && a < z){
    console.log ('Comprobado')

}
//***************************** */

if ( a > b || a < z) {
    console.log ('comprobado')
}

//-------------------------------
