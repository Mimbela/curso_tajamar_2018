function app (){

    
    //definicion del objeto del dom
    let eBtnAbrir = document.querySelector ('#btnAbrir') //asocio un manejador de evento
    let eBtnCerrar = document.querySelector ('#btnCerrar')
    let ventana
    let aVentanas = []



    eBtnAbrir.addEventListener('click' , btnAbrir) //btnSalir no lleva parentesis porque sino la estaria ejecutando, DEFINO EL EVENTO
    eBtnCerrar.addEventListener ('click' , btnCerrar)

    function btnClick(ev){
        console.log(ev)
        togle
    }



    
    function btnAbrir (){
         ventana = window.open()
         aVentanas.push(ventana)
    }

    function btnCerrar (){
        aVentanas.forEach((item) => {item.close()})
        aVentanas = []
    }

}

window.addEventListener('load', app)