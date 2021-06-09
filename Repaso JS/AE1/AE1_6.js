function calculateDddEvem(number){
    if (typeof number === 'string') {
        const value = parseInt(number);
        return `${number} es un número ${value % 2 === 0 ? 'par' : 'impar'}`;
    }
}

(function AE1_6(){
    const response = window.prompt('Introduce un número entero: ');
    console.log(calculateDddEvem(response));
    
})();