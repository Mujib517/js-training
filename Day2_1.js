// Object.create
// Prototype inheritance
// ES5: sloppy, strict



var abstractMobile = {
    call: function () {
        console.log("calling...");
    }
};

var mobile = Object.create(abstractMobile, {
    width: { value: 5, enumerable: true, writable: false, configurable: true },
    height: { value: 5, enumerable: true },
    color: { value: "Black", enumerable: false, },
});


mobile.width = 100; //read only

console.log(mobile);


function fun() {
    'use strict';
    x = 10;
}

fun();

// git init 
// git pull
// git push
// git clone [addr]

// git add .
// git commit -m "message"
// git push