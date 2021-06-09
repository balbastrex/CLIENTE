(function AE2_1b() {

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


// ---------------------------------------------------------------------------------


// (function AE2_2() {

//     const valores = ['Ana', 2, 'Javi', 5, 'Roberto', 7, 'Vanessa', 10];

//     const filtrado = (valores) => {
//         return valores.filter(valores.filter((elemento => typeof elemento === 'string') || (elemento => elemento % 2 === 0)));
//     };

//     const no_impares = valores.map(filtrado(valores));

    

//     console.log(filtrado(valores));
//     console.log(no_impares);
// })();