(function AE2_1() {

    const valores = ['Ana', 2, 'Javi', 5, 'Roberto', 7, 'Vanessa', 10];

    const filtrado = (valores) => {
        return valores.filter(elemento => typeof elemento === 'string');
    };

    const no_impares = (valores) => {
        return valores.filter(elemento => typeof elemento === 'number' && elemento % 2 === 0);
    };
    
    console.log(`Array original: ${valores}`);

    console.log(`Valores que no son de tipo texto: ${filtrado(valores)}`);

    console.log(`Valores de tipo numérico no impares: ${no_impares(valores)}`)
    // console.log(filtrado(valores));
    // console.log(no_impares(valores));
})();


// ------------------------------------primera parte del ejercicio corregida--------------------------------------------


// (function AE2_1() {
//     const valores = ['Ana', 2, 'Javi', 5, 'Roberto', 7, 'Vanessa', 10];

//     const filtrado = (valores) => {
//     return valores.filter(elemento => typeof elemento === 'string');
//     }

//     console.log(filtrado(valores));
// })();


// ------------------------------------funciona pero no es lo que pide-------------------------------------------------


// (function AE1_1(){
//     let valores = ['Ana', 2, 'Javi', 5, 'Roberto', 7, 'Vanessa', 10];
//     let pos = 0;

//     if (typeof(valores[pos]) === 'string') {
//         pos +=1;
//     } else {
//         valores.splice(pos, 1);
//         pos +=1;
//     };

//     if (typeof(valores[pos]) === 'string') {
//         pos +=1;
//     } else {
//         valores.splice(pos, 1);
//         pos +=1;
//     };

//     if (typeof(valores[pos]) === 'string') {
//         pos +=1;
//     } else {
//         valores.splice(pos, 1);
//         pos +=1;
//     };

//     if (typeof(valores[pos]) === 'string') {
//         pos +=1;
//     } else {
//         valores.splice(pos, 1);
//         pos +=1;
//     };

//     if (typeof(valores[pos]) === 'string') {
//         pos +=1;
//     } else {
//         valores.splice(pos, 1);
//         pos +=1;
//     };

//     console.log(valores);
// }

// )();


// -----------------------------------intento con foreach---------------------------------------------------


// function compare(pos, valores){
//     if (typeof(valores[pos]) === 'string') {
//         pos +=1;
//         return pos ,valores;
//     } else {
//         valores.splice(pos, 1);
//         pos +=1;
//         return pos, valores;
//     };

// };

// (function AE1_1(){
    
//     let pos = 0;

//     valores.forEach(Element => compare(pos, valores));

//     console.log(valores);
// }

// )();

//---------------------------intento con switch-----------------------------------------

// (function AE1_1(){
//     let valores = ['Ana', 2, 'Javi', 5, 'Roberto', 7, 'Vanessa', 10];
//     let pos = 0;

//     switch(absoluteValue = value >= 0 ? value : value * -1) {

//     };
// }

// )();


