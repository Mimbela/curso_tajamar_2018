function app (){

    
    //definicion del objeto del dom
    let eBtnAbrir = document.querySelector ('#btnAbrir') //asocio un manejador de evento
    let eBtnCerrar = document.querySelector ('#btnCerrar')
    let eBtnGoogle = document.querySelector ('#btnGoogle')
    let eBtnImagen = document.querySelector ('#btnImagen')
    let ventana
    let aVentanas = []



    eBtnAbrir.addEventListener('click' , btnAbrir) //btnSalir no lleva parentesis porque sino la estaria ejecutando, DEFINO EL EVENTO
    eBtnCerrar.addEventListener ('click' , btnCerrar)
    eBtnGoogle.addEventListener ('click' , btnGoogle)
    eBtnImagen.addEventListener ('click' , btnImagen)
    
    function btnAbrir (){
         ventana = window.open()
         aVentanas.push(ventana)
         ventana.document.write('<p>Documento recién creado</p>')
    }

    function btnGoogle (){
        ventana = window.open('http://google.es', '' ,
        'top=200' , 'height=30' )
        aVentanas.push(ventana)
    }


    function btnCerrar (){
        aVentanas.forEach((item) => {item.close()})
        aVentanas = []
    }

    function btnImagen(){
        ventana = window.open('./1.jpg')
         aVentanas.push(ventana)

    }

}

window.addEventListener('load', app)