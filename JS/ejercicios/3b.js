/*Texto alternativo generado por el equipo:
Operadores relacionales
== es igual a
!=no es igual a 
> es mayor que
<es menor que
>= es mayor o igual que
<=es menor o igual que

Evalúan la comparación 
entre dos términos para 
dar como resultado un 
valor lógico: true o false

!== noes idéntico a (igual sin necesidad de conversión)
===es idéntico a 
?operador ternario condicional
*/
 
function operaciones (){
    let edad = 32
    let Edad  =  edad == 33 ? true : false 
    let Edad1 = edad !=33 ? true : false 
    let Edad2 = edad > 25 ? true : false
    let Edad3 = edad >= 32 ? true : false
    let Edad4 = edad < 45 ? true : false
    let Edad5 = edad <= 45 ? true : false
    console.log (Edad)
    console.log (Edad1)
    console.log (Edad2)
    console.log (Edad3)
    console.log (Edad4)
    console.log (Edad5)

}

operaciones ()