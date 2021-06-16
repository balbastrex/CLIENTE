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


    function buttonstyle(button){
        button.style.backgroundColor = 'blue';
        button.style.padding = '1em';
    }
    const capa=document.getElementById('buttons-container');
    const boton1=document.createElement('button');
    const text=document.getElementById('text');
    console.log(text);
    const div2=document.createElement('div');
    text.appendChild(div2);
    const span1=document.createElement('span');
    div2.appendChild(span1);



    const result = () => {
        span1.textContent = countWord(text);
    }

    capa.appendChild(boton1);
    boton1.innerText='Contar Palabras'; 
    boton1.addEventListener('click',()=>{
      text.textContent = countWord(text);
      buttonstyle();
    });
});