

function main() {

    let num1 = 23 //number
    let num2 = '20' //string


    let r = num1 - num2

    console.log(r)
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


