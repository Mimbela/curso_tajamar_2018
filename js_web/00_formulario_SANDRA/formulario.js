import { CURSOS } from "./cursos.js"
//importar : Obtener datos o información 
//desde un programa o una aplicación distintos a los que se están usando.

//exportar: Enviar datos o información a un programa o una aplicación distintos a los que se están
//usando."voy a exportar este fichero para que puedas trabajar con él"
export class Formulario {
    constructor() { //no es una plantilla, es para inicializar valores
        this.datos = {

            email: '',
            passwd: '',
            nombre: '',
            apellido: '',
            apellido2: '',
            fecha: '',
            musica: '',
            viajar: '',
            pintura: '',
            fotografia: '',
            cine: '',
            lectura: '',
            deporte: '',
            baile: '',
            cursos: {},
            asignaturas: []
        }
        //inicializamos elementos y ejecución de funciones predeterminadas,dentro del constructor

        this.accederDom()//se van a inicializar todos los elementos de acceso al DOM
        this.definirManejadores()//está definiendo todos los eventos que va a tener html
    }

    accederDom() {
        this.domFormulario = document.querySelector('#form1')

        this.domInpNombre = document.querySelector('#nombre')
        this.domInpApellido = document.querySelector('#apellido')
        this.domInpApellido2 = document.querySelector('#apellido2')
        this.domInpFecha = document.querySelector('#fecha')
        this.domInpEmail = document.querySelector('#email')
        this.domInpPasswd = document.querySelector('#passwd')




        this.domSelectCurso = document.querySelector('#curso')
        this.domSelectTopics = document.querySelector('#topics')
        this.domDivTopics = document.querySelector('#div_topics')
        this.domDivResultados = document.querySelector('#resultados')

    }
    definirManejadores() {
        this.domFormulario.addEventListener('submit', this.enviar.bind(this))
        this.domSelectCurso.addEventListener('change', this.presentarAsignaturas.bind(this))
        this.domFormulario.addEventListener('reset', this.resetForm.bind(this));
    }



    enviar(ev) {

        this.recogerDatos()
        this.presentarDatos()
    }

    resetForm(ev) {
        this.datos = new Formulario()
    }

    
    
    recogerDatos() {
        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.apellido2 = this.domInpApellido2.value
        this.datos.fecha = new Date(this.domInpFecha.value)
        this.datos.email = this.domInpEmail.value
        this.datos.passwd = this.domInpPasswd.value


       
        this.datos.curso = this.procesarSelect(this.domSelectCurso)
    }

    procesarRadio(nodo) {
        let value
        nodo.forEach((item) => {
            if (item.checked) {
                value = item.value
            }
        })
        return value //"mañana" "tarde"  "noche"
    }

    procesarSelect(nodo) {
        let index = nodo.selectedIndex
        return {
            code: nodo.options[index].value,
            text: nodo.options[index].textContent
        }
    }

    presentarAsignaturas(ev) {
        ev.target.firstElementChild.classList.add('ocultar')
        let topics = CURSOS[ev.target.selectedIndex - 1].asignaturas
        let HTMLResult = ''
        topics.forEach(elem => HTMLResult += `<option>${elem}</option>`)
        this.domDivTopics.classList.remove('ocultar')
        this.domSelectTopics.innerHTML = HTMLResult
    }

    presentarDatos() {
        let resultadoHTML =
            `<h2>Resultados</h2>
        <ul>
            <li>Nombre: ${this.datos.nombre}</li>
            <li>Apellido: ${this.datos.apellido}</li>
            <li>Fecha nacimiento: ${this.datos.nacimiento}</li>
            <li>e-Mail: ${this.datos.email}</li>
            <li>Contraseña: ${this.datos.passwd}</li>
            <li>Datos extra: ${this.datos.datos}</li>
           
           
            <li>Curso: ${this.datos.curso.text}</li>
           

        </ul>
        `
        this.domDivResultados.innerHTML = resultadoHTML
        console.dir(this.datos)

    }


}
