// Objects
// Dictionaries
// 1. Literals 
// access: dot, bracket
// camelCasing 

var mobile = {
    // width: 5, // 4 bytes
    height: 7, // 4 bytes

    // 4 bytes
    call: function () {
        console.log("calling...");
    },
    "my prop": "abc"
};

// mobile.color = "Black";
// delete mobile.width;

// mobile["brand"] = "Apple"; // mobile.brand ="Aple"

// console.log(mobile["my prop"]); //mobile.color

// // mobile.call(); 
// mobile["call"]();

// for (var key in mobile) {
//     console.log(key, mobile[key]);
// }

var mobile = {
    width: 5, // 4 bytes
    height: 7, // 4 bytes
    color: "Black",
    // 4 bytes
    call: function () {
        console.log("calling...");
    },
    "my prop": "abc"
};


var mobile2 = {
    width: 5, // 4 bytes
    height: 7, // 4 bytes
    color: "Red",
    // 4 bytes
    call: function () {
        console.log("calling...");
    },
    "my prop": "abc"
};


var mobile2 = {
    width: 5, // 4 bytes
    height: 7, // 4 bytes
    color: "Yellow",
    // 4 bytes
    call: function () {
        console.log("calling...");
    },
    "my prop": "abc"
};
