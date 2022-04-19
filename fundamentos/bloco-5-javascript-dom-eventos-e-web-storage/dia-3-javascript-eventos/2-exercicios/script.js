function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//   Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>


const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const listDays = document.querySelector('#days');

for (index = 0; index < dezDaysList.length; index += 1) {
  let daysDez = dezDaysList[index];
  let daysDezItem = document.createElement('li');
  daysDezItem.innerHTML = daysDez;

  listDays.appendChild(daysDezItem);
  daysDezItem.className = "day"

  // Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

  if (index === 25 | index === 32) {
    daysDezItem.className = "day holiday"
  }
  // Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
  if (index === 5 | index === 12 | index === 19) {
    daysDezItem.className = 'day friday'
  }
  if (index === 26) {
    daysDezItem.className = 'day holiday friday'
  }
}
