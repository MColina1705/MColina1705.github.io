/*console.log ("HOla MUNDO");

let numero1 = 3;
let numero2 = 5;
let resultado = numero1 + numero2

console.log ("La suma es:" + resultado)
*/

document.getElementById ('Boton').onclick = function () {
    console.log ("Capturamos el evento click");
    document.getElementById ('demo').innerHTML = "Estamos probando nuestro primer evento en js";
}

document.getElementById ('Boton_Color').onclick = function () {
    document.body.style.backgroundColor = '#FF0000'
}

document.getElementById ('Boton_default').onclick = function () {
    document.body.style.backgroundColor = 'white'
}
/*
document.getElementsByClassName ('parrafo')
*/
const collection = document.getElementsByClassName ("Prueba");
for (let i = 0; i < collection.length; i++);{
    collection(i).style.backgroundColor = "yellow"
}

