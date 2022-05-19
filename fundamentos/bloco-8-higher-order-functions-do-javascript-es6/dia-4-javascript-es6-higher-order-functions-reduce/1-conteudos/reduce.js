// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); // 85

// Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce. Caso não consiga, olhe a solução abaixo:

// let number = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > number) {
//         number = numbers[index];
//     }
// }
// console.log(number);

// const getBigger = (bigger, number) => (bigger > number) ? (bigger) : (number);

// const bigger = numbers.reduce(getBigger, 0)

// console.log(bigger);

// faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isEven = (number) => number % 2 === 0;

const sumEven = (result, number) => result + number;

const sumNumbersEven = numbers.filter(isEven).reduce(sumEven);

console.log(sumNumbersEven);