


let aDatos =  [23 , 54 , 65 , 34 , 78 , 67]

for ( let i = 0 ; i < 6 ; i++ ){
    console.log (`hola a todos, esta es la vuelta `, i+1) //i+1 es para que no empiece a mostrar en el terminal desde el cero
}

let total = 0 



for (let i = 0; i < aDatos.length; i++) {
    //const element = array[i];
    total += total + aDatos [i]
    
}

console.log (`El total es  ${total}`)

for ( let i = aDatos.length-1 ;i>=0 ; i--){
    total += total + aDatos [i]
}

console.log (`El total al revés es  ${total}`)


console.log (aDatos)