// globals 
// IIFE immediately invoked function expression
// Module pattern
// Strategy pattern

// (function () {
//     var y = 10;
//     console.log(y);
// })();

// function counter() {
//     var count = 0;
//     var c = 10;
//     var d = 10;

//     function increment() {
//         ++count;
//         console.log(count);
//     }

//     function decrement() {
//         --count;
//         console.log(count);
//     }

//     return {
//         inc: increment,
//         dec: decrement,
//     }
// }

// var c = counter();
// c.inc();
// c.inc();
// c.dec();

function asc(a, b) {
    return a - b;
}

function desc(a, b) {
    return b - a;
}

var arr = [4, 50, -10, 100];

arr.sort(desc);

console.log(arr);