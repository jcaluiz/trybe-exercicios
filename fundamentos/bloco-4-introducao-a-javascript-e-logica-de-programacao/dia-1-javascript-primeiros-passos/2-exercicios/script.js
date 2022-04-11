//Programa 1

const a = 4;
const b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Programa 2

const c = 4;
const d = 2;

if (c > d) {
    console.log(c);
} else {
    console.log(d);
}

//Programa 3

const e = 2;
const f = 4;
const g = 6;

if (e > f && e > g) {
    console.log(e);
} else if (f > e && f > g) {
    console.log(f);
} else if (g > e && g > f) {
    console.log(g);
}

//Programa 4

const h = 0;

if (h > 0) {
    console.log("positive");
} else if (h < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

//Programa 5

const i = -60;
const j = -60;
const k = -60;

if (i + j + k == 180) {
    console.log(true);
} else {
    console.log(false);
}

//Programa 6

let pecaXadrez = "rei"

switch (pecaXadrez) {
    case "peão": 
        console.log("uma casa para frente");
        break;

    case "torre":
        console.log("frente, trás e lado");
        break;

    case "bispo":
        console.log("diagonal");
        break;

    case "cavalo":
        console.log("três casas em L");
        break;

    case "rainha":
        console.log("frente, trás, diagonal e de lado");
        break;

    case "rei":
        console.log("frente, trás, diagonal, lado, apenas uma casa")
        break;

    default:
        console.log("essa peça não existe no xadrez")
}

//Programa 7

let nota = 90;

if (nota <= 100 && nota >=90) {
    console.log("Nota 'A'");
} else if (nota < 90 && nota >= 80) {
    console.log("Nota 'B'");
} else if (nota < 80 && nota >= 70) {
    console.log("Nota 'C'");
} else if (nota < 70 && nota >= 60) {
    console.log("Nota 'D'");
} else if (nota < 60 && nota >=50) {
    console.log("Nota 'E'");
} else if (nota < 50 && nota >=0) {
    console.log("Nota 'F'");
} else {
    console.log("A porcentagem deve ser entre 0 e 100. Erro ao lançar.")
}

//Programa 8

const num1 = 3;
const num2 = 51;
const num3 = 56;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    console.log(true)
} else {
    console.log(false)
}

//Programa 9

const num1 = 4;
const num2 = 58;
const num3 = 57;

if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
    console.log(true)
} else {
    console.log(false)
}

//Programa 10

const numDeProdutos = 1000;
const custoPorProduto = 10;
const vendaPorProduto = 20;
const valorCusto = numDeProdutos * custoPorProduto
const impostoSobreOCusto = valorCusto * 0.2;
const valorCustoTotal = valorCusto + impostoSobreOCusto;
const valorVenda = vendaPorProduto * numDeProdutos;

const lucro = valorVenda - valorCustoTotal

console.log(lucro)

//Programa 11


