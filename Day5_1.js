// ES 6
// let
// var - function scoped
// let - blocked scoped

// function fun() {
//     try {
//         var x = 10;
//         throw new Error("failed");
//     } catch (e) {
//         console.log(x);
//     }
// }

// 2. const
// const o = { name: 'xy' };
// o.age = 20; // modification

// const o = {}; // reassignment

// 3. string iterpolation
// var name = "Xyz";
// var age = 20;
// // var msg = name + " is " + age + " years old";
// var msg = `${name} is ${age} years old`;
// console.log(msg);

//4. destructering 

// const person = { name: "Xyz", age: 20, print: function () { } };

// const { name, age, print } = person;

// console.log(name);
// print();
// console.log(name);

// 5. Array destructering
// const arr = [1, 2, 3];
// const [val1, val2] = arr;

// console.log(val1, val2);

//6. spread operator

// const person = {
//     name: "Xyz",
//     age: 20,

//     print: function () {
//         console.log(name, age);
//     }
// };


// const p2 = { ...person, name: "ABC" }; //clone

// console.log(person);
// console.log(p2);

//7. Trailing commas

// const person = {
//     name: "Xyz",
//     age: 20,
//     print: function () {
//         console.log(name, age);
//     },
//     dept: "IT",
// };

// console.log(person);

//8. Spread parameter

// function fun(a, b, c) {
//     console.log(a, b, c);
// }

// var arr = [1, 2, 3, 4, 5, 6];

// fun(...arr);

//9. Arrow function

// function declaration
// fun();

function fun() {
    console.log("fun");
}


// function expression
const fun2 = function () {
    console.log("fun");
}

const fun3 = () => console.log("fun3");

function add(a, b) {
    a++;
    b++;
    return a + b;
}

const arrow = (a, b) => {
    a++;
    b++;
    return a + b;
}

function f(a) {
    return a + 10;
}

const x = a => a + 10;

var res = x(10);
console.log(res);