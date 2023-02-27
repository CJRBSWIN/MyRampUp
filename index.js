

const btnStar = document.querySelector("#colorStar") // enlazamos variable al html
const colorBurble = document.querySelector("#colorBurble") // enlazamos variable al html
const colorCode = document.querySelector("#colorCode") // enlazamos variable al html
/* con esta funcion hago la conversion de los números que recibo en la función,
para ello utilizo el parseInt, que me convierte el numero recibido en un numero entero */ 

function randomHexNumber(){
    let otherNumber = parseInt(Math.random() *16)
    if (otherNumber < 10)
    return otherNumber
    return String.fromCharCode(otherNumber + 55)
}
/* en esta función creamos la iteración para recibir nuevo valores,
que me permitan obtener los números para el color hexadecimal */
function randomHexColor(){
    let otherColor = "#"
    for(let i = 0; i < 6; i++){
      otherColor = otherColor + randomHexNumber()
    }
    return otherColor
}

//escuchamos el evento
btnStar.addEventListener("click", function () {
    const newColor = randomHexColor()
    colorBurble.style.background = newColor
    colorCode.textContent = newColor
})

let userMultiply = document.querySelector("#multiplicar");
userMultiply = prompt ("¿Que tabla quieres aprender?");
// prompt interactua con el usuario
document.write( "Tabla de multiplicar del  # "  + userMultiply + " " + "<br>")// digamos que imprime un mensaje
for(let i = 1; i <= 10; i++) {
    document.write(userMultiply + " x " + i + " = " + (userMultiply * i) + "<br/>" );
}

