const small = document.getElementById ('small')
const color = document.getElementById ('color')
const large = document.getElementById ('large')
const nombre = document.getElementById ('nombre')


color.addEventListener("click", cambiarColor);

const colorRandom = () => {
    return Math.round(Math.random () * 255)
}  

function cambiarColor () { 
    const red = colorRandom()
    const green = colorRandom ()
    const blue = colorRandom ()
    console.log (red, green, blue)

    nombre.style.color = `rgb(${red},${green},${blue})`
}

small.addEventListener("click", pequenio);

function pequenio () {
    nombre.style.fontSize = `x-small`

}

large.addEventListener("click", grande);

function grande (){
    nombre.style.fontSize = `xx-large`
}