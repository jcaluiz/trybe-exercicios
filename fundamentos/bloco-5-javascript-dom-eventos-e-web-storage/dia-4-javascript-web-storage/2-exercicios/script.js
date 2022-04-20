// As pessoas devem ter o poder de alterar:
// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte ( Font family ).
const body = document.body;
const header = document.getElementById('header');
const main = header.nextElementSibling;
const section1 = document.getElementById('title').nextElementSibling;

function headerEditor() {
    function editarHeader() {
        header.innerHTML = "Exercício 5.4";
        header.style.textAlign = 'center';
    }
    editarHeader();

    function buttonBackgroundBlue() {
        let buttonHeaderBlue = document.createElement('button');
        header.appendChild(buttonHeaderBlue);
        buttonHeaderBlue.className = 'button-blue';
        buttonHeaderBlue.innerHTML = 'Fundo Cabeçalho Azul';

        buttonHeaderBlue.addEventListener('click', function () {
            if (header.style.backgroundColor === 'blue') {
                header.style.backgroundColor = 'white';
            } else {
                header.style.backgroundColor = 'blue';
            }
        })

    }
    buttonBackgroundBlue()

}
headerEditor();

function titleEditor() {
    let title = document.getElementById('title');
    title.innerHTML = "Aterações dos Estilos da página";

    function alteracaoCorTexto() {
        title.addEventListener('mouseover', function () {
            if (title.style.color === 'blue') {
                title.style.color = 'black';
            } else {
                title.style.color = 'blue'
            }
        })
    }

    alteracaoCorTexto();
}
titleEditor();

function changeBackgroundColorOfBody() {
    let buttonChangeColor = document.createElement('button');
    body.appendChild(buttonChangeColor);
    buttonChangeColor.className = "button-body";
    buttonChangeColor.innerHTML = 'botão altera cor de fundo';

    buttonChangeColor.addEventListener('click', function () {
        if (body.style.backgroundColor === 'gray') {
            body.style.backgroundColor = 'white';
        } else {
            body.style.backgroundColor = 'gray';
        }
    })
}
changeBackgroundColorOfBody();

function mainEditor () {   
    main.className = "main";
}
mainEditor();

function section1Editor () {
    section1.setAttribute('id', 'section1');
    section1.innerHTML = 'O que é o Lorem Ipsum?';

    function createASectionInsideSection1 () {
        let section1Section1 = document.createElement('section');
        section1.appendChild(section1Section1);
        section1Section1.setAttribute('id', 'section1-section1');
        section1Section1.innerHTML = "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum."
    }
    createASectionInsideSection1();
}
section1Editor()