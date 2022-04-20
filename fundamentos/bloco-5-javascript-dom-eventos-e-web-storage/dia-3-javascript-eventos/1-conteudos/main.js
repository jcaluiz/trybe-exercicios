const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?







function addClassTech (event) {
 const techElement = document.querySelector('.tech'); //chamou a classe tech numa constante
 techElement.classList.remove('tech'); // na classe tech pela constante, removeu a palavra tech para todas as classes com esse nome
 event.target.classList.add('tech'); // o parâmetro event é para chamar o tipo de evento dentro da função chamada abaixo e depois deu a opção de acrescentar o nome tech a classe quando é executado o evento abaixo
 input.value = ''; //limpa o input quando clica em outra caixa
}

firstLi.addEventListener('click', addClassTech); //quando clicado, executa a função de remover todos as classes com tech e acrescenta na clicada onde tem o id firstLi
secondLi.addEventListener('click', addClassTech); //quando clicado, executa a função de remover todos as classes com tech e acrescenta na clicada onde tem o id secondLi
thirdLi.addEventListener('click', addClassTech); //quando clicado, executa a função de remover todos as classes com tech e acrescenta na clicada onde tem o id thirdLi








// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';








input.addEventListener('input', function (event) { //adiciona a constante input o evento input, que significa digitar e depois cria uma função com o parâmetro event
  const techElement = document.querySelector('.tech'); //cria uma constante chamando a classe tech
  techElement.innerText = event.target.value; //chama a constante que chama a classe tech para alterar o texto da seguinte forma: o event já é o evento input com aspas, o target retorna o objeto que disparou o evento e o value é o valor digitado dentro do input, que é a caixa de texto
})








// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?












myWebpage.addEventListener('dblclick', function () {//myWebpage é a constante criada para armazenar o id my-spotrybefy //depois criado um evento de escutador para clique duplo e uma função que ao clicar duas vezes onde está o id my-spotrybefy, redirecionar para a página abaixo
  window.location.replace("https://jcaluiz.github.io/")
});









// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

function mudaCor(event) {
    event.target.style.color = 'blue';
}
myWebpage.addEventListener('mouseover', mudaCor);
function mudaCor2(event) {
  event.target.style.color = 'white';
}
myWebpage.addEventListener('mouseleave', mudaCor2);





function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.