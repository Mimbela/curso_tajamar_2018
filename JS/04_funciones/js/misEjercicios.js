
//PARÁMETROS Y TIPOS PRIMITIVOS

function nominaNeta(sueldoBruto) {
    sueldoBruto += 2000
    return sueldoBruto
}

sueldoEnero = 1500
netoEnero = nominaNeta (sueldoEnero)

console.log (netoEnero)
//**************************************************************************************** */
//PARÁMETROS Y TIPOS REFERENCIADOS
function nomina (mes){
    mes.enero = "1500"

}

var informacion = new Object();
nomina (informacion)


console.log (informacion.enero);

//************************************************************************************************** */