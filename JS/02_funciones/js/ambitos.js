'use strict'

//var x = 12 //variable global

function mostrar() {
    //var x = 23 //es una variable local
    
    let x =2 //x local
    {
        let x = 23 // x del bloque
    }
    console.log(x)
}

let x = 124 //x global
mostrar()

//ES6 existen let y const con ambito {}

//muestra la 2 porque busca la siquiete x local que es el 2, pero no muestra 124 porque es global