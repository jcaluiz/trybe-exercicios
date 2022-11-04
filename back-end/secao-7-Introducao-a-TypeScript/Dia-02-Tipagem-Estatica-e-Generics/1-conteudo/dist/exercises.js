"use strict";
function printBird(b) {
    console.log(`O primeiro pássaro é ${b.x}`);
    console.log(`O segundo pássaro é ${b.y}`);
}
function printSum(s) {
    console.log(s.x + s.y);
}
printBird({ x: 'Tiziu', y: 'Pardal' });
printSum({ x: 2, y: 3 });
