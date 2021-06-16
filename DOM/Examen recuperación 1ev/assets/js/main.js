document.addEventListener('DOMContentLoaded', () => {

    const countWord = (section) => {
        let count = 0;
        const text = section.textContent.replace(',', '');
        const textContent = text.replace('.', '');
        const words = textContent.split(' ');
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > 0) {
                count++;
            }
        }
        return count;
    }


    // function buttonstyle(button){
    //     button.style.backgroundColor = 'blue';
    //     button.style.padding = '1em';
    // }



    // const capa=document.getElementById('buttons-container');
    // const boton1=document.createElement('button'); 

    // const text=document.getElementById('text');
    // console.log(text);

    // const div2=document.createElement('div');
    // text.appendChild(div2);
    // const span1=document.createElement('span');
    // div2.appendChild(span1);

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
    console.log(text);
    
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

    // ejercicio 4


});