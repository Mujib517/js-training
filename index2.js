// functions are first class citizens
// functional programming 
// no void functions
// Everything value
// state(props) behavior(methods)
// refactoring

// function fun() {
//     console.log('daofjkadjfk');
// }

// bad
// SRP. There shd not be more than one reason a class to change
function add(a, b) {
    var c = a + b; // calc
    console.log(c);
    // printing
    // return a + b;
}


add(10, 20);
add("abc", " def");
add([1, 2, 3], [4, 5, 6]);

function f1() {
    return 10;
}
function f2() {
    return 20;
}

add(f1, f2);

// var res = add(10);
// console.log(res);

// console.log("one", "two", "three", "four");

//1. write a log function 


