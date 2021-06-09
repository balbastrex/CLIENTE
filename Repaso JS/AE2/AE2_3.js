const values = [1,2,3,4,5,6,7,8,9];

// const findMinimum = (values) => {
//     let minimum = values[0];
//     values.forEach(element => {
//         if (element < minimum) {
//             minimum = element;
//         }
        
//     })
//     return minimum;
// }

const findMinimum = (values) => {
    return values.reduce((minimum, element) => element < minimum ? element : minimum);
}

console.log(`El valor mínimo en el conjunto es: ${findMinimum(values)}`);
