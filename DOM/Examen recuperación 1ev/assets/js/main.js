document.addEventListener('DOMContentLoaded', () => {

    // Ejercicio 1

    const countWord = (section) => {
        let count = 0;
        const text = section.textContent.replace(',', '');
        console.log(text);
        const textContent = text.replace('.', '');
        const words = textContent.split(' ');
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > 0) {
                count++;
            }
        }
        return count;
    }

    const capa = document.getElementById('buttons-container');

    const button1=document.createElement('button');
    const button2=document.createElement('button');
    button1.innerText='Contar Palabras'; 
    button2.innerText='Restablecer'; 
    button2.disabled = true;
    capa.appendChild(button1);
    capa.appendChild(button2);


    const textContainer = document.getElementsByClassName('text-container');
    const text = textContainer[0];
    
    const div2=document.createElement('div');
    const span1=document.createElement('span');
    span1.style.fontSize = '200%';
    div2.appendChild(span1);
    text.appendChild(div2);

    button1.addEventListener('click',()=>{
    span1.textContent = countWord(text);
    div2.appendChild(span1);
    button2.disabled = false;
    });

    button2.addEventListener('click', ()=>{
        div2.removeChild(span1);
        button2.disabled = true;
    });

    // Ejercicio 2

    const limitContainer = document.getElementsByClassName('input-container');
    const limit = limitContainer[0];
    console.log(limit);
    
    const textSize = (section, limit) => {
        const text = section.textContent.replace(',', '');
        console.log(text);
        const textContent = text.replace('.', '');
        console.log(textContent);
        const words = textContent.split(' ');
        console.log(words);
        const newText = [];

        for (let i = 0; i < words.length; i++) {
            if (words[i].length > 0) {
                newText.push(words[i]);
            }

            if (newText.length = (limit+1)){
                return newText;
            }
        }

    }

    text.textContent = textSize(text, 2);

    //Ejercicio 3

    //Ejercicio 4

    /*const bodyBg = document.querySelector('body');
    bodyBg.addEventListener('mouseover', function(event){event.target.style.backgorundColor = 'deeppink';})
    bodyBg.addEventListener('mouseout', function(event){event.target.style.backgorundColor = 'white';});*/

    


});