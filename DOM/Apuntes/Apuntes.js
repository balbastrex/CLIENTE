//capa con 3 botones

//crear la capa
const capa = document.createElement('div');

// Añadir la capa al body

document.body.appendChild(capa);

//crear los botones
const button1 = document.createElement('input');
button1.setAttribute('type', 'button');
button1.setAttribute('value', 'Soy un botón');
const button2 = document.createElement('button');
const button3 = document.createElement('button');


//añadir los botones a la capa

capa.appendChild(button1);
capa.appendChild(button2);
capa.appendChild(button3);

//disposición de los botones en la capa
capa.style.display = 'flex';


//--------------------------------------------------------------------------------

 
const paragrephElement = document.createElement('p');
paragrephElement.textContent = 'SOy un parrafo';

document.body.appendChild(paragrephElement);