const input =document.getElementById("contador")
const mas =document.getElementById("mas")
const reset=document.getElementById("reset")
const menos=document.getElementById("menos")

let contador=input.value


menos.addEventListener("click",()=>{
contador=input.value-1
    if(contador>=0 ){ 
        input.value=contador
    } 

})

// mas.addEventListener("click",()=>{
// contador= parseInt(input.value)+1
// input.value=contador
// })
// con el mas estaba concatenando
mas.addEventListener("click",()=>{
    contador= Number(input.value)+1
    input.value=contador

})
reset.addEventListener("click",()=>{
    contador=0 
    input.value=contador
})
