// this 
/*
    1. global object
    2. undefined in strict mode
    3. object.method --> object
    4. inner functions will point either global/undefined
    5. arrow inner function will refers to parent function's this context.

    nodejS - global
    browser - window

    Java - position 
    Javascript - how a method is called.
*/

"use strict";

// function fun() {
//     console.log(this); // global object
// }

var mobile = {
    width: 10,
    id: "Mobile",

    sms: function () {
        function f() {
            console.log(this);
        }
        f();
    }
}

mobile.sms();

var student = {
    name: "Xyz",
    id: "Student",
    add: function (a, b) {
        console.log(this, a, b);
    }
}

var car = {
    id: "Car"
}

// student.add() // student
// mobile.call();
// mobile.call.call(student);


// student.add(10, 20);
// student.add.call(mobile, 10, 20);
// student.add.apply(mobile, [10, 20]);

// var f = student.add.bind(mobile); // this context is fixed

// f();

