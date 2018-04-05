(function (){
    function app(){

        let aEnlaces = document.querySelector ('#a')
        /* let aEnlaces = document.querySelector ('#a')
        let aEnlaces = document.querySelector ('#a')
        let aEnlaces = document.querySelector ('#a') */

aEnlaces.forEach(item => {
    item.addEventListener('click' , linkClick)

});

function linkClick(){
    console.log ("linkClick") */
    aEnlaces[0].textcontext= 'no hay linkedin'

}

    }
    window.addEventListener('load', app)
})()







