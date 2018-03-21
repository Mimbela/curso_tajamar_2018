let aDatos = [2, 5, 7, 4, 9] //array

let oDatos = {              //objeto
    alto: 2,
    amcho: 5,
    largo: 7,
    pero: 4,
    color: 9
}

/* 
console.log("Array con for")

for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i]; //item es la variable que itera, va cogiendo  los valores sucesivos del bucle
    console.log(item)
}

console.log("Objeto forIn")
for (const key in oDatos) { //forin, 

    const item = oDatos[key];
    console.log(item)
}

console.log("Array con forIn")
for (const i in oDatos) { //forin, 
    const item = oDatos[i];
    console.log(item)
}


//ES 6
console.log("objeto forOff")
for (const item of aDatos) {
    console.log(item)
    
} */
aDatos = [2, 5, 7, 4, 9]

aDatos.forEach(item => console.log (item)) //espera funcion callback,simula un bucle for. Mas desclarativo, menos imperativo/* 

let aCuadrados = aDatos.map(item=>item*item) ///espera funcion callback, devuelve el array despues de haber  hecho las operaciones que hemos pedido
console.log (aCuadrados)                                            //map crea una proyección del original


let aPares = aDatos.filter (item => item%2 == 0)//filter espera un callback y devuelve un array
console.log(aPares)

let aImparesCuadrados = aDatos.filter (item => item%2 !=0) .map (item => item*item)
console.log (aImparesCuadrados)

let total = aDatos.reduce((prev, item) => prev += item)//acumula los resultados
console.log (total)


/* aDatos.reduceRight() *///acumula los resultados

/* aDatos.every()
aDatos.some() */