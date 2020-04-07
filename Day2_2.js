// 4. class 
// ES 6 ECMAScript
// WWC 
// ES 7 specification (toString())
// Chrome V8
// Edge Chakra
// Polyfill

class AbstractMobile {
    sms() {
        console.log("sending...");
    }
}

class Mobile extends AbstractMobile {

    constructor() {
        super();
        console.log("constructor");
    }

    width = 10;

    call() {
        console.log("Calling...");
    }
}

var m = new Mobile();
console.log(m.width);
m.call();
m.sms();