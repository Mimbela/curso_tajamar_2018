//*********************************************************** */
// NUMBER strin y boolean son VALORES

//******************************************* */

//Elementales ->por valor
//number , string, boolean

let x = 12
let y = 2 * x //*asignacion de valor
 x = x + 2

console.log (y)  //24
console.log (x) //14

//******************************************************************** */
/*Los objetos o datos referenciados se manipulan por referencia*/

let o1 = {valor :12}
let o2 = o1 //asignacion de referencia, crea una referencia, apunta al mismo bloque de datos o1 pero no a un clon
o1.valor = 24

console.log (o1) //24

console.log (o2) //24