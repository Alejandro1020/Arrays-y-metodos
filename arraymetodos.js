let numeros=[-5,200,-5.5,100]

//agregar un nuevo elemento a mi arreglo
numeros.push(10)


numeros.forEach(numero=>console.log(numero))

//filtrar el arreglo

let filtro=numeros.filter(function(numero){

   return(numero>=100)     
})
console.log(filtro)

//buscar elemento en un array

let buscado=numeros.find(function(numero){
    return(numero>10)
})
console.log(buscado)

//buscar elementos de otra manera
let ubicado=numeros.some(function(numero){
    return(numero==100)
})
console.log(ubicado)

//recorriendo y modificando arreglos al mismo tiempo

let mapa=numeros.map(function(numero){
    return(numero=numero+1)
})
console.log(mapa)