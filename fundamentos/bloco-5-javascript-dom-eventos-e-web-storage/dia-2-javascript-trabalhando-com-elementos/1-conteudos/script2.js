document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'red';

document.getElementById('primeiroFilhoDoFilho').innerText = "Este conteúdo é um teste";

document.getElementById('pai').firstElementChild;

document.getElementById('elementoOndeVoceEsta').parentElement.firstElementChild;

document.getElementById('elementoOndeVoceEsta').nextSibling;

document.getElementById('elementoOndeVoceEsta').nextElementSibling;

document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling

// E a prática? Aqui!
// Crie um irmão para elementoOndeVoceEsta .

let pai = document.getElementById('pai');
let elementoOndeVoceEstaIrmao1 = document.createElement('section');
pai.appendChild(elementoOndeVoceEstaIrmao1);
elementoOndeVoceEstaIrmao1.className = 'elementoOndeVoceEstaIrmao1';

// Crie um filho para elementoOndeVoceEsta .
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let elementoOndeVoceEstaFilho1 = document.createElement('section');
elementoOndeVoceEsta.appendChild(elementoOndeVoceEstaFilho1);
elementoOndeVoceEstaFilho1.className = 'elementoOndeVoceEstaFilho1'

// Crie um filho para primeiroFilhoDoFilho .
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let elementoFilhoDoPrimeiroFilhoDoFilho = document.createElement('section');
primeiroFilhoDoFilho.appendChild(elementoFilhoDoPrimeiroFilhoDoFilho);
elementoFilhoDoPrimeiroFilhoDoFilho.className = 'elementoFilhoDoPrimeiroFilhoDoFilho';
// A partir desse filho criado, acesse terceiroFilho .
let terceiroFilho = elementoFilhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho 
let paiDoPai = document.getElementById('paiDoPai');
let primeiroFilho = document.getElementById('primeiroFilho');
let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
let quartoEUltimoFilho = document.getElementById('quartoEUltimoFilho');

paiDoPai.firstElementChild.removeChild(primeiroFilho);
paiDoPai.firstElementChild.firstElementChild.removeChild(segundoEUltimoFilhoDoFilho);
paiDoPai.firstElementChild.firstElementChild.removeChild(elementoOndeVoceEstaFilho1);
paiDoPai.firstElementChild.removeChild(terceiroFilho);
paiDoPai.firstElementChild.removeChild(quartoEUltimoFilho);
paiDoPai.firstElementChild.removeChild(elementoOndeVoceEstaIrmao1);
paiDoPai.firstElementChild.firstElementChild.firstElementChild.removeChild(elementoFilhoDoPrimeiroFilhoDoFilho);