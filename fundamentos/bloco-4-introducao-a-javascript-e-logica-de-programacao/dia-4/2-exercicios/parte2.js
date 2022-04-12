// 1- palindromo

// let verificaNome = 'arara';

// function palindromo() {
//     let nomeContrario = [];
//     let verificaPalindromo;
//     for (let index = verificaNome.length - 1; index >= 0; index -= 1) {
//         nomeContrario.push(verificaNome[index]);
//     }
//     for (let index = 0; index < verificaNome.length; index += 1) {
//         if (nomeContrario[index] === verificaNome[index]) {
//             verificaPalindromo = true;
//         } else {
//             verificaPalindromo = false;
//         }
//     }

//     return verificaPalindromo;
// }

// console.log(verificaNome, 'é palindromo:', palindromo());

// verificaNome = 'desenvolvimento';

// console.log(verificaNome, 'é palindromo:', palindromo());

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .



function indiceDoMaiorNumero () {
    let array = [2, 3, 6, 7, 10, 1];
    let verificaNumero = 0;
    let maiorArray = 0;
    for(let index = 0; index < array.length; index += 1) {
        for(let index2 = 0; index2 < array.length; index2 += 1) {
            if(array[index] > array[index2]) {
                verificaNumero = index + 1;
            }
            if(verificaNumero > maiorArray) {
                maiorArray = verificaNumero;
            }
        }
    }
    maiorArray = maiorArray - 1;
    
    return maiorArray;
}

console.log(indiceDoMaiorNumero());