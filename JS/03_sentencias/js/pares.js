//reconocer si un numero es par o impar

//****************************************************************************************************** */

function calcularPar (n){
    let r = 0
    if (isNaN (n/2)){
        r = -1
    }else {
        r = n%2
    }
return r
}

/* 
function test (n){
    console.log (n) 
} */
/* 
test(calcularPar ())
test(calcularPar ('pepe'))
test(calcularPar (12))
test(calcularPar (11))


function mostrarEsPar (n){
    const aMensajes = [
        `El numero ${n} es PAR`,
        `El numero ${n} es IMPAR`
        `El DATO  ${n} no es un número`
    ]


let r = calcPar (n)
r = ( r === -1) ? 2 : r
console.log (aMensajes[r])

} */

//*********************************************************************** */


function mostrarEsParCasos (n){
    let r = calcularPar (n)
    let mensaje 
    switch (r) {
        case 0 : 
        mensaje =  `El numero ${n} es PAR`
        break
        case 1: 
        mensaje =  `El numero ${n} es IMPAR`
        break
        case -2:
        mensaje= `El DATO  ${n} no es un número`
        break
        case -3:
        mensaje= `El DATO  ${n} no es un decimal`
        break
        
        
    }

    console.log (mensaje)
}


mostrarEsParCasos ('pepe')
mostrarEsParCasos (12)
mostrarEsParCasos (11)




























//result = number1 % number2