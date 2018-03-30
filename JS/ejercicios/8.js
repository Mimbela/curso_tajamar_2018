/* Ejercicio (8)
Factoriales
: Utilizando la estructura for, crear un script que calcule el 
factorial de un número entero, que introduciremos mediante 
document.write(prompt('Escribe un número')) o como un campo input.
Objetivo: Utilizar bucles de control mediante iteraciones 
incondicionales (for).
NOTA: El factorial de un número entero n es una operación 
matemática que consiste en multiplicar todos los factores entre n y 1, 
es decir n * (n-1) * (n-2)* ... * 1. Así, el factorial de 5 (escrito como 5!) 
es igual a:
5! = 5 x 4 x 3 x 2 x 1 = 120
desarrollos\javascript\JS07b_Factorial_1.html
 */

 let dias= ["lunes"  , "martes" , "miercoles" , "jueves" , "viernes" , "sabado" , "domingo"];
 dias.forEach(element => {console.log (element)
 });

 /**CALCULEMOS EL FACTORIAL DE UN NÚMERO */

 function factorial(n){
     let total =1
     for (let i = n; i >= 1; i--) {
             total *=i;
         
         
       
     }
     return total

 }

function mostrar(n){
    let todo = `El resultado es ` 
    + factorial(n)
    console.log (todo)
}


 mostrar(3)
 