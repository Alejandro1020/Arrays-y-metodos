let peliculas=[
    {nombre:'Harry potter', genero:'ciencia ficcion',costo:2000},
    {nombre:'Gragon ball super',genero:'anime',costo:3000},
    {nombre:'wakanda forever', genero:'ciencia ficcion',costo:5000},
    {Django:'Django sin cadenas', genero:'ciencia ficcion',costo:1500},
    {nombre:'El viaje del chigui', genero:'anime',costo:2000}
]

let filtro=peliculas.filter(function(pelicula){
    

    return(pelicula.costo>=2000)

})

console.log(filtro)

let filtro2=peliculas.filter(function(pelicula){
    return(pelicula.genero=='anime')
    
    
})
buscado=filtro2.find(function(buscar){
    return(buscar.costo==3000)
})
console.log(buscado)


filtro3=peliculas.map(function(pelicula){
    return(pelicula.costo=pelicula.costo/1000)
})
console.log(peliculas)

filtro4=peliculas.map(function(pelicula){
    return pelicula.nombre=pelicula.nombre='Alejo'
})
console.log(peliculas)