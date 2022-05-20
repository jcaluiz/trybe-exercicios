// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

// const [saudacao1, func] = saudacoes;

// func(saudacao1);

// ----------------------------------------------------------------------------------------------------------

// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// let consertar = [comida, animal, bebida];
// [animal, bebida, comida] = consertar;

// console.log(comida);
// console.log(animal);
// console.log(bebida);

// -----------------------------------------------------------------------------------------------------------

// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

const pares = [numerosPares, (elements) => elements.filter( (element) => element % 2 === 0)];

let [part1, parte2] = pares;

console.log(part2(part1));

// ainda resolverei essa questão 3;