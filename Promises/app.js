'use strict';
var promiseCount = 0;

console.log(`On line 4 promiseCount is: ${promiseCount}`);
testPromise();
console.log(`On line 6 promiseCount is: ${promiseCount}`);
testPromise();
console.log(`On line 8 promiseCount is: ${promiseCount}`);
testPromise();

function testPromise() {
    var thisPromiseCount = ++promiseCount;

    console.log(`Line 14, thisPromiseCount is:${thisPromiseCount}. Started (Sync code started)`);

    // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
    var p1 = new Promise(
        // The resolver function is called with the ability to resolve or
        // reject the promise
        function(resolve, reject) {
            console.log(`Line 21, thisPromiseCount is:${thisPromiseCount}. Promise started (Async code started)`);
            // This is only an example to create asynchronism
            setTimeout(
                function() {
                    // We fulfill the promise !
                    console.log(`Line 26`);
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

    // We define what to do when the promise is resolved/fulfilled with the then() call,
    // and the catch() method defines what to do if the promise is rejected.
    p1.then(
        // Log the fulfillment value
        function(val) {
            console.log(`Line 37, val is:${val}. Promise fulfilled (Async code terminated)`);
        })
    .catch(
        // Log the rejection reason
        function(reason) {
            console.log(`Line 42. Handle rejected promise (${reason}) here.`);
        });

    console.log(`Line 45, thisPromiseCount is:${thisPromiseCount}. Promise made (Sync code terminated)`);
}

