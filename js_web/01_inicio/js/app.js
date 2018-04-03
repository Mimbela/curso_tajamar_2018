//import{saludar} from "./saludos.js"//.js se añade a mano
//window.alert ("Hola mundo") NO USAR
//console.log("Hola de vuelta de vacas")

(function () {

    let oDom = {
        eBotonSaludar: document.querySelector(`#btnSaludar`)
    }

 
    oDom.eBotonSaludar.onclick = saludo;
   


    function saludo(oE, user = 'amigo') {
        console.log(`Hola ${user}`)
    }


   

})()