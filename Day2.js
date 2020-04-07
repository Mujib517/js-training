// log 

// function log() {
//     for (var key in arguments) {
//         console.log(arguments[key]);
//     }
// }

// log("afdjf", "kfjadkfj", "fajdkfjk", "kfdajkfj");

// 2. Constructor function
// pascal casing
function Mobile(color) {
    this.width = 5; // 4 byte
    this.height = 7; // 4
    this.color = color; // 4
}

Mobile.prototype.call = function () {
    console.log("Calling...");
}
Mobile.prototype.sms = function () { }

var m1 = new Mobile("Black"); // object, 16 bytes
var m2 = new Mobile("Grey"); // 16 bytes


m1.call();
m2.call();

