

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
