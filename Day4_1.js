// sync, async
// callbacks
// promises
// callback hell, trust issue
// promise caches result

// entity 2
function addAsync(a, b, cb) {
    console.log("method called");
    var prms = new Promise(function (res, rej) {
        setTimeout(function () {
            if (a === 0) rej(new Error("Failed. can't be zero"));
            if (a === 1000) rej("Overlimit");
            var c = a + b;
            res(c);
        }, 1000);
    });

    return prms;
}

function subAsync(a, b) {
    var p = new Promise(function (res, rej) {
        setTimeout(function () {
            var c = a - b;
            res(c);
        }, 1000);
    });

    return p;
}

function mulAsync(a, b) {
    var p = new Promise(function (res, rej) {
        setTimeout(function () {
            var c = a * b;
            res(c);
        }, 1000);
    });

    return p;
}

addAsync(10, 20)
    .then(function (res) {
        return subAsync(res, 10);
    })
    .then(function (res) {
        return mulAsync(res, 20)
    })
    .then(function (res) {
        console.log("final result", res);
    })
    .catch(function (err) {
        console.log(err);
    });

    // .then(function (res) {
    //     console.log(res);
    // })
// .catch();