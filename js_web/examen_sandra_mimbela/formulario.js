import { CURSOS } from './cursos.js'

export class Formulario {
    constructor() {
        this.datos = {
            email : '',
            passwd : '',
            nombre : '',
            primerApellido : '',
            segundoApellido : '',
            nacimiento : '',
            curso : '',
            asignaturas : [],
            aficiones : []
        }

        this.accederDom()
        this.presentarAsignaturas(this.domRadioCurso)
        this.definirManejadores()

    }

    accederDom() {
        this.domFormulario = document.querySelector('#formExam')
        this.domEmail = document.querySelector('#email')
        this.domPasswd = document.querySelector('#passwd')
        this.domRepPasswd = document.querySelector('#repPasswd')
        this.domNombre = document.querySelector('#nombre')
        this.domPApellido = document.querySelector('#papellido')
        this.domSApellido = document.querySelector('#sapellido')
        this.domFechaNac = document.querySelector('#fechaNac')
        this.domRadioCurso = document.querySelectorAll('[name="curso"]')
        this.domChkMusica = document.querySelector('#chkMusica')
        this.domChkViajar = document.querySelector('#chkViajar')
        this.domChkPintura = document.querySelector('#chkPintura')
        this.domChkFotografia = document.querySelector('#chkFotografia')
        this.domChkCine = document.querySelector('#chkCine')
        this.domChkLectura = document.querySelector('#chkLectura')
        this.domChkDeporte = document.querySelector('#chkDeporte')
        this.domChkBaile = document.querySelector('#chkBaile')
        this.domDivInfo = document.querySelector('#info')
        this.domBtnEnviar = document.querySelector('#submit')
        this.domBtnRestablecer = document.querySelector('#btnReset')
        this.domSelectAsignaturas = document.querySelector('#asignaturas')
    }

    definirManejadores() {
        this.domFormulario.addEventListener('submit', this.enviar.bind(this));
        this.domFormulario.addEventListener('reset', this.resetForm.bind(this));
        this.domRepPasswd.addEventListener('blur', this.checkPassword.bind(this));
    }



    enviar(ev) {
        this.recogerDatos()
        this.presentarDatos()
    }

    resetForm(ev) {
        this.datos = new Formulario()
    }


    recogerDatos() {
        this.datos.email = this.domEmail.value
        this.datos.passwd = this.domPasswd.value
        this.datos.nombre = this.domNombre.value
        this.datos.primerApellido = this.domPApellido.value
        this.datos.segundoApellido = this.domSApellido.value
        this.datos.nacimiento = new Date(this.domFechaNac.value)
        this.datos.curso = this.procesarRadio(this.domRadioCurso)
        this.datos.asignaturas = this.procesarSelect(this.domSelectAsignaturas)
    }

    checkPassword() {
        if(this.domPasswd.value === this.domRepPasswd.value){
            console.warn('las contraseñas son iguales')
        }
        else
        {
            alert('password')
        }
        
        //return this.domPasswd.value === this.domRepPasswd ? this.domPasswd.value : ;

    }

    procesarRadio(nodo) {
        let value
        nodo.forEach((item) => {
            if (item.checked) {
                value = item.value
            }
        })
        return value
    }
    procesarSelect(node){
        let listAsignaturas = []
        for(let i = 0; i < node.length; i++){
            if(node.options[i].selected){
                let valor = node.options[i].value
                listAsignaturas.push(valor)
            }
        }
        return listAsignaturas
    }
    presentarAsignaturas(ev) {
        let index
        for(let i = 0; i < ev.length; i++){
            if(ev[i].checked){
                index = i
                break
            }
        }
        let asignaturas = CURSOS[index].asignaturas
        let HTMLResult = ''
        asignaturas.forEach(elem => HTMLResult += `<option>${elem}</option>`)
        this.domSelectAsignaturas.innerHTML = HTMLResult

    }
    presentarDatos() {
        let resultadoHTML =
            `<div>
            <p>La persona ${this.datos.nombre} ${this.datos.primerApellido} con identificacion ${this.datos.email} ha nacido el ${this.datos.nacimiento}
        </div >`

        this.domDivInfo.innerHTML = resultadoHTML
    }

}