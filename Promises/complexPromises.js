let GOOD = true;
let ONGOING_QUERY_COUNT = 0;
let QUERY_COUNT = 10;
let QUERY_TIMEOUT = 100;
function start() {
    //queryForAsyncFrames(12).then((value) => {
    //    console.log("queryForAsyncFrames.done called with " + value);
    //});
    let pa = a(12);
    console.log("Got the initial promise, wait for completion.");
    pa.then(myresolve, myreject);
    console.log("end of start");
}
function a(id) {
    let internalid = ++id;
    console.log(internalid + " :a called.");
    return new Promise((completed, progress) => {
        console.log(internalid + " :a promise created");
        //pause to take some time
        takeSomeTime();
        let bp = b(internalid);
        console.log(internalid + " :Got the b promise.");
        bp.then((result) => {
            console.log(result + " :b.then called.");
            // Fire progress callback for first set of results
            if (ONGOING_QUERY_COUNT === 0) {
                console.log(result + " :calling progress");
                progress(result);
            }
            ONGOING_QUERY_COUNT++;
            if (ONGOING_QUERY_COUNT < QUERY_COUNT) {
                console.log(result + " :call a after timeout");
                // Keep requesting new data since the async callstacks can be populated at any time after the break
                setTimeout(() => {
                    a(internalid).then((result) => {
                        console.log(result + " :calling completed with delay");
                        completed(result);
                    });
                }, QUERY_TIMEOUT);
            }
            else {
                // Made all the calls, so complete the promise
                console.log(result + " :calling completed");
                completed(result);
            }
        });
    });
}
function b(id) {
    console.log(id + " :b called.");
    return new Promise((resolve, reject) => {
        //do some complex long running work
        console.log(id + " :b promise is created");
        setTimeout(function () {
            if (GOOD) {
                console.log(id + " :calling resolve in b promise");
                resolve(id);
            }
            else {
                console.log(id + " :calling reject in b promise");
                reject(id);
            }
        }, 500);
    });
}
function myresolve(id) {
    console.log(id + " :myresolve.");
    return "resolved";
}
function myreject(data) {
    console.log(data + " :myreject.");
    return "humbug";
}
function takeSomeTime() {
    let timeout = randTimeout();
    console.log("Working time: " + timeout);
    setTimeout(() => { }, timeout);
}
function randTimeout() {
    return Math.floor((Math.random() * 500));
}
start();
//# sourceMappingURL=complexPromises.js.map