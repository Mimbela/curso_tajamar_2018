'use strict'

// ES6 existen let y const con ámbito {}

function mostrar() {
    const X = 2  
    {
        const X = 23 
    }
    console.log(X)  
}

function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio
}

function moatrarCircunferencia(radio) {
    let cir = calcularCircunferencia(radio)
    console.log(`
    La circunferencia de radio ${radio}
    tiene de longitud ${cir}
    `)
}

const X = 5
mostrar() 
moatrarCircunferencia(5)



//${} es para poner un resultado de la variable

//**********************************************************************************************

//mostrar resultado de la circunferencia
//console.log ("La circunferencia es " , circunferencia(2) )

//ES6 existen let y const con ambito {}

//el comportamiento de const y let es idéntico

//******************************************* */
let data= [{precio: 15}, {precio: 5} , {precio:8}]

data.forEach (elen => console.log ("El resultado es ",  elen.precio*25 )
)

