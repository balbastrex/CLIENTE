const conjunto = [1,2,3,4,5,6];
const x = 0;

const findGreaterThan = (num_x, values) => {
    let result = values.every(element => element > num_x);
    if(result==1) {
        return 'Cierto'
    }else{
        return 'Falso'
    }


}

console.log(findGreaterThan(x, conjunto));


// const findGreaterThan = (num_x, values) => {
//     return values.every(element => element > x);
// }

// console.log(`All values greater than ${x}? ${findGreaterThan(x, conjunto) ? 'Yes' : 'No'}`)