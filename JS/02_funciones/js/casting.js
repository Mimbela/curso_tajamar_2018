function main() {
    let num1 = 23
    let num2 = '20'
    
    
    let r = num1 - num2
    console.log(r)
    console.log(typeof r)
    console.log(typeof num2)
    
    let x = 'Hola '
    let y = 'Pepe'
    console.log(x + y)
    
    r = num1 + +num2 // 43
    r = r - 1 // 42
    console.log(r)
    console.log(typeof r)    

    r = 1 / 0 
    console.log(r)
    console.log(typeof r)
    if (isNaN(r)) {
        console.log('Ole, has conseguido un NaN')
    }      
}

main()

//************************************************************************************************************************ */
/* CASTING
PARSEINT parseFloat
Number
+


NÚMEROS RAROS:
NaN
Infinito

*/
//***************************************************************************************************************************** */
//let x //ambito global

function main() {

     let num1 = 23 //number //ambito local a la función
    let num2 = '20' //string / {let num2=20 estaría dentro del bloque

    //let r = num1 - num2 //esto da error porque num2 está dentro del bloque y fuera del bloque no se le ve

    //console.log(r)
    console.log(typeof r) //typeof te dice el tipo que es
    console.log(typeof num2)

    //*********************************************************************************************************** */
    let x = 'hola '
    let y = 'pepe'
    console.log(x + y) //sumar : símbolo de la suma y suma de la concatenación, la concatenacion tiene prevalencia a la suma


    /******************************************************************************************************** */

    r = num1 + Number(num2) //*casteo num2 poniendo Number (num2)
    console.log(r) //2320 */
    //************************************************************* */
    r = num1 + +num2 //usamos + + le hace el casteo a number
    console.log(r)

    //********************************************************* */

    r = num1 - x
    console.log (r)
    console.log (typeof r)

    r = 1 / 0 //infinite
    console.log (r)
    console.log (typeof r)
//*********************************************************************** */
    r = 0/0
    console.log ( r)
    console.log (typeof r)
    if (isNaN (r)) {
        console.log ('ole, has conseguido un NaN')
    }


}

main()


