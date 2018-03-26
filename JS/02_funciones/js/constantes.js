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

//***************************FOR EACH**************** */
let data= [{precio: 15}, {precio: 5} , {precio:8}]

data.forEach (elen => console.log ("El resultado es ",  elen.precio*25 )
)

//**************************FOR EACH************************************************************* */
//una viejecita vende 5 camisetas a distintos precios pero aplicandoles el mismo iva del 15%

let camisetas= [{camiseta: 15}, {camiseta: 20}, {camiseta: 15}, {camiseta: 20}, {camiseta : 15}]
camisetas.forEach(element => console.log ("El cliente debe pagar " , element.camiseta* 15)
    
);

//**************************FOR EACH************************************************************* */
//una viejecita vende 5 pantalone a distintos precios pero aplicandoles el mismo iva del 15%

let pantalones= [{pantalon:23}, {pantalon: 34}, {pantalon : 45}, {pantalon : 98}, {pantalon : 54}]

pantalones.forEach (totales => console.log ("La viejecita gana con la venta del pantalón " , totales.pantalon * 15))

//******************************************aplicación del 20% IVA  a los ITEMS********************************************************************** */
let productos = [{item : 20}, {item: 24} , {item :98}, {item : 42}]

productos.forEach (total => console.log (" El total del producto es " , total.item * 20))

//******************************************aplicación del 50% IVA  a los ITEMS de shampoes********************************************************************** */
let shampoes= [{pantene: 12}, {pantene : 40}, {pantene : 29}]

shampoes.forEach ( totality => console.log ("Lo que tiene que pagar por los shampoes es " , totality.pantene * 50 ))
