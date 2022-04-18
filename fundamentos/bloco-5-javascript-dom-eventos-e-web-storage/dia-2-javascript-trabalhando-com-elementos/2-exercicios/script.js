// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let body = document.body;
let title = document.createElement('h1');

function criandoFilho (pai, filho) {
    pai.appendChild(filho);
}
criandoFilho(body, title);

title.innerText = 'Exercício 5.2';

// 2- Adicione a tag main com a classe main-content como filho da tag body

let main = document.createElement('main');
body.appendChild(main);
main.className = 'main-content';

// 3- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let section1 = document.createElement('section');
criandoFilho(main, section1);
section1.className = 'center-content';

// 4- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let paragraph1 = document.createElement('p');
section1.appendChild(paragraph1);

// 5- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let section2 = document.createElement('section');
criandoFilho(main, section2);
section2.className = 'left-content';

// 6- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let section3 = document.createElement('section');
main.appendChild(section3);
section3.className = 'right-content';

// 7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

let image1 = document.createElement('img');
image1.src = 'https://picsum.photos/200';
image1.className = 'small-image';
criandoFilho(section2, image1);

// 8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let ul1 = document.createElement('ul');
section3.appendChild(ul1);


let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
let li5 = document.createElement('li');
let li6 = document.createElement('li');
let li7 = document.createElement('li');
let li8 = document.createElement('li');
let li9 = document.createElement('li');
let li10 = document.createElement('li');

criandoFilho(ul1, li1);
criandoFilho(ul1, li2);
criandoFilho(ul1, li3);
criandoFilho(ul1, li4);
criandoFilho(ul1, li5);
criandoFilho(ul1, li6);
criandoFilho(ul1, li7);
criandoFilho(ul1, li8);
criandoFilho(ul1, li9);
criandoFilho(ul1, li10);

// 9- Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

let h3Number1 = document.createElement('h3');
let h3Number2 = document.createElement('h3');
let h3Number3 = document.createElement('h3');
criandoFilho(main, h3Number1);
criandoFilho(main, h3Number2);
criandoFilho(main, h3Number3);




