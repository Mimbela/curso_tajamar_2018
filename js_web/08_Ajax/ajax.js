function app() {

    document.querySelector('#btnAjax')
        .addEventListener('click', getDatos)

    document.querySelector('#btnAjaxItem')
        .addEventListener('click', getDatos)

        document.querySelector('#btnAjaxBorrar')
        .addEventListener('click', deleteDatos)


    function getDatos(ev) {
        let ajax = new XMLHttpRequest() //esto es una funcion constructora
        ajax.onreadystatechange = statechange

        let metodo = 'GET'
        let url = ''
        if (ev.target.id === 'btnAjax') {
            url = 'http://localhost:3000/posts'
        } else {
            let item = document.querySelector('#item.value')
            if (item) {
                url = 'http://localhost:3000/posts/' + item

            }else{
                return
            }
        }
        function statechange() {  //evento de cambio de estado en el proceso de petición


            if (ajax.readyState === 4) {
                console.log("Comunicación OK")
                if (ajax.status === 200) {
                    let response = JSON.parse(ajax.responseText)
                    console.dir(response)

                } else {
                    console.log(ajax.status)
                    console.log(ajax.statusText)
                }
            }


        }



        ajax.open(metodo, url)
        ajax.send(null)
    }
}






window.addEventListener('load', app, false)