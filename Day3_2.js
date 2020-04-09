// Synchronous, Asynchronous
// function add(a, b) {
//     a++;
//     a = a + 10;
//     b++;
//     return a + b;
// }

// var res = add(10, 20);
// console.log(res);

// callback
// entity 2
// Async: Timers, DB, File, Web Svc, Events
// single threaded (simple,)
// 1. Callbacks
// 2. Promises
// 3. Observables
// 4. Async await 

// 3 web svc 
// Countries -> State -> City -> ZipCode
function addAsync(a, b, callback) {
    console.log("Started");   // started

    // db call
    setTimeout(function () {
        var content = a + b;
        callback(content, 100);
    }, 3000);     // 1 sec //after delay

    console.log("ended");
    return undefined;
}

// entity 1
addAsync(10, 20, function (a, b) {
    console.log(a, b)
});


// ASync. 
for (var i = 0; i < 10000000000000000; i++) {
    // setTimeout(function () { console.log(i) }, 100);
    // db
}