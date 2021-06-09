const valores = [1,2,3,4,5,6];

const average = (dataArray) => {

    if (!dataArray || dataArray.length === 0) {
        return undefined;
    }

    return dataArray.reduce((acc, item) => item + acc) / dataArray.length;
}

console.log(`Average value: ${average(valores)}`);