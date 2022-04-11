// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.


// 1- criar uma variável que retorne o fatorial // 1 multiplicando com 1 dá ele mesmo

// let fatorial = 1;

// // 2- criar uma estrutura de repetição que multiplica de 10 até 1; lembre-se: a ordem dos fatores não altera o produto

// for(let index = 1; index <= 10; index += 1) {
//     //3- criar a multiplicação de 1 ao 10 que armazena em let fatorial
//     fatorial *= index; 
// }

// console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'maria';

// // inverter a palavra trybe
// // criar uma variavel que armazena a palavra invertida
// let invertida = [];
// // fazer com que a estrutura de repetição comece da ultima letra e termine na primeira e armazene numa variavel
// for(let index = word.length - 1; index >= 0; index -= 1) {
//     //formula que acrescenta as letras numa variavel
//     let invertida1 =  word[index];
//     // formula que grave as letras ao contrário
//     invertida.push(invertida1);
// }

// console.log(invertida)

// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'python', 'html', 'javascript', 'css' ];
// let maiorArray;

// //um algoritmo que retorne a maior palavra do array

// // verificar se a proxima palavra é maior que a atual



// //cria uma estrutura de repetição que verifica palavra por palavra o tamanho da letra
// for (let index = 0; index < array.length; index += 1) {
//     //verificar qual palavra é a maior dentro de um array
//     if (array[index].length >= array[0].length && array[index].length >= array[1].length && array[index].length >= array[2].length && array[index].length >= array[3].length && array[index].length >= array[4].length) {
//         maiorArray = array[index];
//     }
// }


// console.log(maiorArray);

// um algoritmo que retorne o menor palavra do array

// let array = ['java', 'python', 'html', 'javascript', 'css' ];
// let menorArray;

// for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length <= array[0].length && array[index].length <= array[1].length && array[index].length <= array[2].length && array[index].length <= array[3].length && array[index].length <= array[4].length) {
//         menorArray = array[index];
//     }
// }

// console.log(menorArray);




// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// let num = 50;
// let ePrimo = [];


// for (let index = 2; index < num; index += 1) {
//     let quantidadeDivisores = 0;

//     for (let index2 = 2; index2 < index; index2 += 1) {
//         if (index % index2 === 0) {
//             quantidadeDivisores += 1;
//         }
//     }
//     if (quantidadeDivisores % index == 0) {
//         ePrimo.push(index);
//     }
// }

// let maiorPrimo = ePrimo[ePrimo.length - 1];




// console.log(maiorPrimo);

