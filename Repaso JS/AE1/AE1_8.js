const askForNumberInRange = (minimum, maximum) => {
    return window.prompt(`Introduce un número entre ${minimum} y ${maximum}: `);
};

const generateRandomNumberInRange = (minimum, maximum) => {
    minimum = Math.ceil(minimum);
    maximum = Math.floor(maximum);
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

(function AE1_8(){
    let response = askForNumberInRange(1, 12);
    while (parseInt(response) < 1 || parseInt(response) > 12) {
        window.alert('No es un valor válido. Inténtalo de nuevo');
        response = askForNumberInRange(1, 12);
    }
    const randomNumber = generateRandomNumberInRange(1, 12);
    console.warn(`El número aleatorio es ${randomNumber}`);
    if (randomNumber === parseInt(response)) {
        window.alert('Has acertado');
    } else {
        window.alert('Has fallado');
    }
    
})();