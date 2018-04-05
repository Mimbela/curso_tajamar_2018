(function () {

    function app() {
        let eNombre = document.querySelector("#inpNombre")
        let eApellido = document.querySelector ('#inpApellido')
        let eGuardar = document.querySelector("#btnGuardar")
        let eBorrar = document.querySelector("#btnBorrar")
        let eSaludo = document.querySelector("#outSaludo")

        eGuardar.addEventListener('click', guardar)
        eBorrar.addEventListener('click', borrar)


        function guardar() {  // guardar: recoge y guarda
            let persona = {
                nombre : eNombre.value,
                apellido : eApellido.value
            }
            localStorage.setItem('persona', JSON.stringify (persona)) //json.stringify convierte el objeto en un string
            saludar()
        } //lo almacena
        


        function borrar() { 
            localStorage.removeItem('nombre')
            eSaludo.innerHTML = ''
            eNombre.value = ''
            //eApellido.value = ''
        }


        function saludar() {
            let persona = localStorage.getItem('persona')
            persona = JSON.parse(persona)
            if (persona.nombre || persona.apellido) {
                eSaludo.innerHTML = `Hola ${persona.nombre} ${persona.apellido}`
            }
           
        } 
        saludar()
    }
    window.addEventListener('load', app)
})()








