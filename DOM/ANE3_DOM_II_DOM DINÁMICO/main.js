// DOMContentLoaded

// EJERCICIO 1

// document.title = 'Ahora trabajando con DOM dinámico';

const newTitle = document.querySelector('title');
newTitle.textContent = 'Ahora trabajando con DOM dinámico';

// EJERCICIO 2

// const sections = document.getElementsByTagName('div');
// console.log(sections);

// const newId = (index) => {

//     id = `sección${index}`;
//     console.log(id);
//     return id;

// }; 


// arrayfrom(sections).forEach(section => {section.id = `sección${sections.indexOf(secion)}`});
// console.log(sections);
//------------------------------------

// [...sections].forEach(section => {section.id = `sección${}`});
// console.log(sections);


// [...sections].forEach(section => {console.log(section.id)
    
// });



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
    // link.style.textDecoration = 'none';
    link.addEventListener('mouseover', function(event){event.target.style.color = 'blue'; event.target.style.textDecoration = 'underline'});
    link.addEventListener('mouseout', function(event){event.target.style.color = 'white'; event.target.style.textDecoration = 'none'});
});


// EJERCICIO 5

const imgElement = document.getElementById('second-container');

//console.log(imgElement);

const casilla = document.createElement('input');
casilla.setAttribute('type', 'checkbox');

imgElement.appendChild(casilla);

// const casilla = document.createElement('checkbox');

// document.body.firstChild(casilla);

