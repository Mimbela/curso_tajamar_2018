//***************************************************************************************** */
//Tipo object se genera por jason
//las partes de un objeto se llaman propiedades, son a su vez valores y de tipos. Propiedades de tipo string, booleano, object (subtipos : object y array)
//Array se usan corchetes, es una mezcla de varios tipos, son modificables, no tienen longitud predefinida, ni secuenciales
// let x {} tipo objeto
// let y [] tipo array
//


//**************************************************************************************** */

let nombre = 'pepe' //string
let edad = 23 //number
let isCasado = true //boolean
let algo //undenifed

let user = {    //object
    nombre: 'pepe',
    apellido: 'perez',
    direccion : {
        calle : '',
        ciudad : '',
        c_postal : ''
    },

    edad: 23,
    isCasado: true
}

console.log (typeof nombre)
console.log (typeof edad)
console.log (typeof isCasado)
console.log (typeof algo)
console.log (typeof nombre)
console.log (typeof user)

console.log (user) //llama al objeto entero

console.log (user.apellido)

user.cargo = "CEO"

console.log (user)
