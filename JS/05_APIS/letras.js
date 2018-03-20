/** @function : comprobar si la cadena es :
 *  todo mayúsculas, =1
 *  todo minúsculas =2
 *  mezcla de ambos =0
 * @param : string
 * @returns: number
*/

function ComprobarMayusculas (cadena = '' ) {
    let r = 0 //empezamos con cero salvo que vayamos a multiplicar, también el cero es el resultado de una mezcla

    
    if (cadena.toUpperCase() === cadena){
        r=1
        //está todo en mayúsculas
    }else if
    (cadena.toLowerCase()=== cadena){
        r=2
        //está todo en minúsculas
    } 

    return r 
}

/* console.log (ComprobarMayusculas ('HOLA PEPE'))//1

console.log (ComprobarMayusculas ('hola pepe'))//2

console.log (ComprobarMayusculas ('Hola Pepe'))//3 */

function MostrarComparacionMayusculas(cadena){
    aMensajes = [
        'La frase mezcla mayúsculas y minúsculas ',
        'Todas las letras son mayúsculas',
        'Tolas las letras son minúsculas'
    ]

    let sMensaje = `
    En la frase "${cadena}"
    ${aMensajes [ComprobarMayusculas (cadena)]}
    `
    console.log (sMensaje)

}
MostrarComparacionMayusculas ('HOLA PEPE')
MostrarComparacionMayusculas ('hola pepe')
MostrarComparacionMayusculas ('Hola Pepe')
