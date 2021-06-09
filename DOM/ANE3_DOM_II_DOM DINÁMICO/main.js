// DOMContentLoaded

// EJERCICIO 1

document.title = 'Ahora trabajando con DOM dinámico';

// EJERCICIO 2

// nuevoId.Id

// EJERCICIO 3

const parrafo = document.querySelector('p');

    parrafo.style.fontSize = '50%';

    
// const parrafos = document.getElementsByTagName('p');
//     [...parrafos].forEach(parrafo => {
//     parrafo.style.fontSize = '50px';
//     console.log('hola');
// });


// EJERCICIO 4

const links = document.getElementsByTagName('a');

[...links].forEach(link => {
    link.style.textDecoration = 'none';
});


// EJERCICIO 5

const imgElement = document.getElementById('second-container');

console.log(imgElement);

const casilla = document.createElement('input');
casilla.setAttribute('type', 'checkbox');

imgElement.appendChild(casilla);

// const casilla = document.createElement('checkbox');

// document.body.firstChild(casilla);

