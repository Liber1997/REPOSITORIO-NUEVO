const titulo=document.querySelector("#encabezado")
const parrafo=document.getElementById("parrafo")
const boton=document.getElementById("boton")

// titulo.classList.add("tamaño")
// titulo.classList.remove("tamaño")

// parrafo.classList.add("color")
// boton.classList.add("btn")
const agregarClase =(elemento,nombreClase) =>{
    elemento.classlist.add(nombreClase)
    
}
const eliminarClase =(elemento,nombreClase) =>{
    elemento.classlist.remove(nombreClase)
}
agregarClase(titulo,"tamaño")
agregarClase(parrafo,"color")
agregarClase(boton,"btn")

eliminarClase(titulo,"tamaño")
eliminarClase(parrafo,"color")
eliminarClase(boton,"btn")

boton.addEventListener('click', () => {
    intercalarClase(titulo, 'tamaño')
    intercalarClase(parrafo, 'color')
    intercalarClase(boton, 'btn')
})

titulo.addEventListener('mouseover', () => {
    titulo.style.color = 'cyan'
})

titulo.addEventListener('mouseout', () => {
    titulo.style.color = 'black'
})

