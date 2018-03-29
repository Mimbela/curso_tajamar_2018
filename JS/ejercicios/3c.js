/*Ejercicio (3c -Consola)
Operadores 
relacionales y lógicos
: 
Siguiendo el modelo del 
ejercicio 3, Crear un 
script que realícelas 
siguientes operaciones y 
las muestre por pantalla
Objetivo: Familiarizándonos con el uso de los operadores relacionales y 
lógicos. Comprobar como el mismo script puede ejecutarse por consola.
Alternativa
. Comprobar el uso de estos operadores mediante la 
consola
de JavaScript
*/

function operadoresLogicos (){
    let Stock = 2500;
    let Precio = 26

    precio1  = Precio > 20 && Precio < 30 ? true : false
    precio2 = Precio > 20 && Precio < 25 ? true :false
    stock1 = Stock == 2000 || Stock == 2500 ? true : false
    stock2 = Stock != 2000 || Stock != 2500 ? true : false
    stock3 = Stock >=2000 && Stock<=2200 || Precio > 25 ? true : false

console.log (precio1)
console.log (precio2)
console.log (stock1)
console.log (stock2)
console.log (stock3)
}

operadoresLogicos()