// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1){
//     console.log(numbers[index]);
// }

// 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for(let index = 0; index < numbers.length; index += 1) {
//     resultado = resultado + numbers[index];
// }
// console.log(resultado);

// // 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     soma = (soma + numbers[index]);
// }

// let mediaAritimetica = soma / numbers.length;

// console.log(mediaAritimetica);

// 4- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     soma = (soma + numbers[index]);
// }

// let mediaAritimetica = soma / numbers.length;

// if (mediaAritimetica > 20) {
//     console.log("Valor maior que 20");
// } else {
//     console.log("Valor menor ou igual a 20");
// }

// 5- Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maior = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     if(numbers[index] > maior) {
//         maior = numbers[index];
//     }
// }

// console.log(maior);

// // 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impar = [];

// for(let index = 0; index < numbers.length; index +=1) {
//     if(numbers[index] % 2 != 0) {
//         let impar1 = numbers[index];
//         impar.push(impar1);
//     }
// }

// if(impar.length > 0) {
//     console.log('existem ' + impar.length + ' número(s) ímpar(es)')
// } else {
//     console.log('nenhum valor ímpar encontrado')
// }

// 7 -Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menor = 100000000

// for(index = 0; index < numbers.length; index += 1) {
//     if(numbers[index] < menor) {
//     menor = numbers[index];
//     }
// }

// console.log(menor);

// 8- Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// for(let index = 1; index < 26; index += 1) {
//     console.log(index);
// }

// 9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

// for(let index = 1; index < 26; index += 1) {
//         console.log(index / 2);
// }

// Bônus

// 1- Ordene o array numbers em ordem crescente e imprima seus valores;

