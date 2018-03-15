'use strict'



function mostrar() {
    
    
    const X =2 
    
    {
        const X = 23
    }
    
    
    console.log(X)
}
//***************************************************************************************** */
//calcular el área de una circunferencia

function calcularCircunferencia (radio){

    return 2 * Math.PI * radio
}
//************************************************************ */

function mostrarCircunferencia (radio){
    let cir = calcularCircunferencia (radio)
    console.log (`
    La circunferencia de radio ${radio}
         tiene la longitud ${cir}
         `)
    }

//${} es para poner un resultado de la variable

//**********************************************************************************************
/* const X = 5 */
mostrar() 

//mostrar resultado de la circunferencia
//console.log ("La circunferencia es " , circunferencia(2) )

//ES6 existen let y const con ambito {}

//el comportamiento de const y let es idéntico

mostrarCircunferencia (5)