// DOMContentLoaded

// EJERCICIO 1

// document.title = 'Ahora trabajando con DOM dinámico';

const newTitle = document.querySelector('title');
newTitle.textContent = 'Ahora trabajando con DOM dinámico';

// EJERCICIO 2

const firstContainer = Array.from(document.getElementsByClassName('text-container'));
firstContainer[0].id = "first-container";

const secondContainer = Array.from(document.getElementsByClassName('image-container'));
secondContainer[0].id = "second-container";


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
    link.addEventListener('mouseover', function (event) { event.target.style.color = 'blue'; event.target.style.textDecoration = 'underline' });
    link.addEventListener('mouseout', function (event) { event.target.style.color = 'white'; event.target.style.textDecoration = 'none' });
});


// EJERCICIO 5

const imgElement = document.getElementById('second-container');

const casilla = document.createElement('input');
casilla.setAttribute('type', 'checkbox');

imgElement.appendChild(casilla);


const button = document.getElementById('img-button');
button.disabled = true;

casilla.addEventListener('change', function() {
    if (this.checked) {
      button.disabled = false;
    } else {
        button.disabled = true;
    }
  });

// casilla.addEventListener('change', function(event){button.disabled = true ? false : true});



  //Ejercicio 6

  button.addEventListener('onclick', function (event){button.disabled = true;document.getElementById('image').src='https://mymodernmet.com/wp/wp-content/uploads/2020/06/mariposa-monarca-fb.jpg';})
