(function () {
    function app() {
        let idI
        let crono = 0
        let aBotones = document.querySelectorAll('button')//ponemos los id de todos

        aBotones.forEach(item => {
            item.addEventListener('click', btnClick)

        });




        function btnClick(ev) {
            if (ev.target.id === 'btnIniciar') {
                aBotones[0].disabled = true
                idI = setInterval(function (){
                    crono += 0.01
                    eCrono.innerHTML = crono.toFixed(2)
                }, 100)

            } else if (ev.target.id === 'btnParar')) {
                aBotones[0].disabled = false
                idI = setInterval(function ()){
                    crono += 0.01
                    eCrono.innerHTML = crono.toFixed(2)
                }, 100)

            }
        }

        window.addEventListener('load', app)
    }
    ()

