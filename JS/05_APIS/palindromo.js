//Reconocer un palindromo: Definir una funcion qie determine si la cadema de texto que se le pasa
//como parametro es un palindromo

//"Isaac no ronca asi", 


app = {
    cadena: '',
    isPalindromo: true,
    aRespuestas: [
        "no parece ser un palíndromo",
        "es un palíndromo"
    ]
}

app.probarPalindromo = function () {
    let cadema = this.cadema

    //Introduce una FRASE
    /* cadena = cadena.toLowerCase()  */ //introduce una frase
    /* aPalabras = cadema.split (' ')  */    //['introduce',' una' , 'frase']
    /* cadema = aPalabras.join('')  */   //'introduceunafrase'

    cadena = cadema.toLowerCase().split(" ").join(""); //esto es lo mismo que las lineas 20 al 22

    var aLetrasReves = cadema.split("").reverse();

    if (cadena != cadena.split("").reverse().join("")) {
        this.isPalindromo = false;
    } else {this.isPalindromo = true;}

}

app.respuesta = function (){
    let sFrase= `La cadema "${this.cadena}"
    ${this.aRespuesta}[Number (this.isPalindromo)]}`}
    console.log (sFrase)


