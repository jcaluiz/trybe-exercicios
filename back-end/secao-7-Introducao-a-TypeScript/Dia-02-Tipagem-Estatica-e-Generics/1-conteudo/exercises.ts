type bird = {
    x: string,
    y: string,
}

type sum = {
    x: number,
    y: number,
}

function printBird(b: bird):void {
    console.log(`O primeiro pássaro é ${b.x}`);
    console.log(`O segundo pássaro é ${b.y}`);
}

function printSum(s: sum):void {
    console.log(s.x + s.y);
}

printBird({x: 'Tiziu', y: 'Pardal'});
printSum({x: 2, y: 3});
