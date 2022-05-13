// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(3, (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//   });

// const numberGenerator = () => {
//     return Math.round(Math.random() * 100);
//   }
  
//   console.log(numberGenerator());

const str1 = () => 'Acordando!';
const str2 = () => 'Bora tomar café!!';
const str3 = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func);

doingThings(str1());
doingThings(str2());
doingThings(str3());