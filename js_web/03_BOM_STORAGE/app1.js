(function () {

    function app() {
        let eNombre = document.querySelector("#inpNombre")
        let eGuardar = document.querySelector("#btnGuardar")
        let eBorrar = document.querySelector("#btnBorrar")
        let eSaludo = document.querySelector("#outSaludo")

        eGuardar.addEventListener('click', guardar)
        eBorrar.addEventListener('click', borrar)


        function guardar() {  // guardar: recoge y guarda
            let nombre = eNombre.value //lo recojo, value es una propiedad
            localStorage.setItem('nombre', nombre)
            saludar()
        } //lo almacena
        


        function borrar() { 
            localStorage.removeItem('nombre')
            eSaludo.innerHTML = ''
            eNombre.value = ''
        }


        function saludar() {
            let nombre = localStorage.getItem('nombre')
            if (nombre) {
                eSaludo.innerHTML = `Hola ${nombre}`
            }
           
        } 
        saludar()
    }
    window.addEventListener('load', app)
})()








