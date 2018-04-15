import {CURSOS} from "./cursos.js"
//importar : Obtener datos o información 
//desde un programa o una aplicación distintos a los que se están usando.

//exportar: Enviar datos o información a un programa o una aplicación distintos a los que se están
 //usando."voy a exportar este fichero para que puedas trabajar con él"
export class Formulario {
    constructor (){ //no es una plantilla, es para inicializar valores
        this.datos = {
            nombre:'',
            apellido: '',
            nacimiento:'',
            email :'',
            passwd:'',
            datos:'',
            isOk: false, //esta prpopiedad se inicializa a false
            isOk2: false,
            turno:'',
            curso: {},
            asignaturas:[]
        }
        //inicializamos elementos y ejecución de funciones predeterminadas,dentro del constructor
        this.isLeido = false
        this.accederDom()//se van a inicializar todos los elementos de acceso al DOM
        this.definirManejadores()//está definiendo todos los eventos que va a tener html
    }

}

