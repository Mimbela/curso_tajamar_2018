export class Formulario {
    constructor (){
        this.accederDom()
        this.definirManejadores()

    }
    accederDom(){
        this.domBtnSaludar = document.querySelector ('#btnSaludar')
    }

    definirManejadores(){
        this.domBtnSaludar.addEventListener(`click` , this.domBtnSaludar.bind(this))
    }

    saludar (){
        console.log ('Hola amigos')
    }
}