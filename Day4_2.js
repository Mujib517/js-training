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

// ES7
async function call() {
    try {
        var res = await addAsync(0, 20); // synchronous. resolution
        console.log(res);
    } catch (e) {
        console.log(e);
    }
}

call();

// nodejs backend. server, db, file, http. 80%
// react. browser. html, window, alert
// 7 times nodejs.