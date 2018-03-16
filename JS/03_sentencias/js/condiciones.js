//CONDICIONES

const userPepe = {    //object
    nombre: 'pepe',
    apellido: 'perez',
    aficiones: ['deporte', 'papiroflexia'],

    edad: 17,
    isCasado: false,
    genero: 'M'
}

const userMaria = {    //object
    nombre: 'maria',
    apellido: 'lopez',
    aficiones: ['lectura', 'papiroflexia'],

    edad: 53,
    isCasado: true,
    genero: 'F'
}

const MAYORIAEDAD = 18


function crearSaludo(user) {

    let mensaje = 'Hola '


    if (user.edad >= MAYORIAEDAD && user.genero == 'M') {
        mensaje += 'D.'
    }
    else if (user.edad >= MAYORIAEDAD && user.genero == 'F') {
        mensaje += 'Doña'

    }
    mensaje += user.nombre


    if (user.isCasado) {
        if (user.genero == 'M') {
            mensaje += '.saludos a tu mujer'

        } else {
            mensaje += '.saludos a tu marido'

        }

    }

    return mensaje

}

function saludar (usuario){
    console.log (crearSaludo(usuario))
}


function saludarHtml (usuario){
    document.write (crearSaludo(usuario))
}

saludar(userMaria)
saludar(userPepe)
saludarHtml(userMaria)
saludarHtml(userPepe)

//******************************************************************************************************************************** */

