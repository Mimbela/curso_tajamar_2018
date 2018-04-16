import { CURSOS } from "./cursos.js"
//importar : Obtener datos o información 
//desde un programa o una aplicación distintos a los que se están usando.

//exportar: Enviar datos o información a un programa o una aplicación distintos a los que se están
//usando."voy a exportar este fichero para que puedas trabajar con él"
export class Formulario {
    constructor() { //no es una plantilla, es para inicializar valores
        this.datos = {
            nombre: '',
            apellido: '',
            nacimiento: '',
            email: '',
            passwd: '',
            datos: '',
            isOk: false, //esta prpopiedad se inicializa a false
            isOk2: false,
            turno: '',
            curso: {},
            asignaturas: []
        }
        //inicializamos elementos y ejecución de funciones predeterminadas,dentro del constructor
        this.isLeido = false
        this.accederDom()//se van a inicializar todos los elementos de acceso al DOM
        this.definirManejadores()//está definiendo todos los eventos que va a tener html
    }

    accederDom() {  //acceder al html
        this.domFormulario = document.querySelector('#form1')
        this.domBtnSaludar = document.querySelector('#btnSaludar')
        this.domInpNombre = document.querySelector('#nombre')
        this.domImpApellido = document.querySelector('#apellido')
        this.domInpFecha = document.querySelector('#fecha')
        this.domImpEmail = document.querySelector('#email')
        this.domImpPassws = document.querySelector('#passwd')
        this.domAreaDatos = document.querySelector('#datos')
        this.domRadioTurno = document.querySelectorAll('[name="turno"]')//abarca todos los name TURNO
        //this.domRadioTurno=document.getElementByName (turno)
        this.domCbxIsOk = document.querySelector('#isOk')
        this.domCbxIsOk2 = document.querySelector('#isOk2')
        this.domSelectCurso = document.querySelector('#curso')
        this.domSelectTopics = document.querySelector('#topics')
        this.domDivTopics = document.querySelector('#div_topics')
        this.domDivResultados = document.querySelector('#resultados')
        this.domFieldAcedemic = document.querySelector('#acedemic')

    }
    definirManejadores(){
        this.domFormulario.addEventListener()
        
    }

}

