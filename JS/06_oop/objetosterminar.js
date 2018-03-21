//propiedad: autor, titulo, editorial
//valor: lo que hay dentro


//let oDatos = new object ()= {} //un objeto también se puede crear así

//********************************************************************** */

let libro1 = { //objeto como colección de datos
    autor: 'J. R. R. Tolkien',
    titulo: 'El Señor de los Anillos',
    editorial: 'Minotauro',
    fecha: new Date(1954), //new date, porque date es un objeto
    generos: ['Fantasia'],
    mostrarReferencia: function () {
        let ref = this.autor + '. '
        ref += '"' + this.titulo + '". '
        ref += this.editorial + ', ' + this.fecha.getFullYear() + '. '
        console.log(ref)
    }


}
libro1.mostrarReferencia()


//libro1.propietario= 'Alejandro' //esta propiedad la vamos a añadir
//let libro2=libro1 //cambiamos el valor de autor en libro1
//libro2.autor='Pepe'
//console.log(libro1.autor)


/* La diferencia entre funciones y métodos está en el patrón de invocación , 
que determina cual es el valor de this*/
//Patrón de invocación Function
//Patrón de invocación Method

//Patrón de invocación Constructor

//Patrón de invocación Apply


//permite definir el valor de this */