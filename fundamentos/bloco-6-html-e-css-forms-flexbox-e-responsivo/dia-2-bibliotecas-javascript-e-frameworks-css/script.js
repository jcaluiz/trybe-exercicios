let button = document.querySelector('#button-submit');
let name1 = document.querySelector('#full-name');
let inputField = document.querySelector('.input-field')

function getUserValue(event) {
  event.preventDefault();
  inputField.innerHTML = name1.value;
}

button.addEventListener('click', getUserValue)