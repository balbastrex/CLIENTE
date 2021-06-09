const arrayIni = [1,3,5];

const multipleFactorial = (values) => {
    return values.map(element => factorial(element))
}

function factorial (element){
    let fact = 1;
    for (let i=1; i<=element; i++){
        fact = fact * i;
    }

    return fact;
}

console.log(`Los factoriales de ${arrayIni} son ${multipleFactorial(arrayIni)}`);
