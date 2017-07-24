'use strict';
var promiseCount = 0;

console.log(`Line 4 promiseCount is: ${promiseCount}`);
goDoSomeWork().then(val => {
            console.log(`Line 6, val is:${val}. Promise fulfilled (Async code terminated)`);
        }).catch(reason => {
            console.log(`Line 8. Handle rejected promise (${reason}) here.`);
        });

console.log(`Line 11 promiseCount is: ${promiseCount}`);

goDoSomeWork().then(val => {
            console.log(`Line 14, val is:${val}. Promise fulfilled (Async code terminated)`);
        }).catch(reason => {
            console.log(`Line 16. Handle rejected promise (${reason}) here.`);
        });

console.log(`Line 19 promiseCount is: ${promiseCount}`);

goDoSomeWork().then(val => {
            console.log(`Line 22, val is:${val}. Promise fulfilled (Async code terminated)`);
        }).catch(reason => {
            console.log(`Line 24. Handle rejected promise (${reason}) here.`);
        });

function goDoSomeWork() {
    var thisPromiseCount = ++promiseCount;

    console.log(`Line 30, thisPromiseCount is:${thisPromiseCount}. Started (Sync code started)`);

    // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
    return new Promise((resolve, reject) => {
            console.log(`Line 34, thisPromiseCount is:${thisPromiseCount}. Promise started (Async code started)`);
            // This is only an example to create asynchronism
            setTimeout(() => {console.log(`Line 39. thisPromisCount: ${thisPromiseCount}`)}, 2000);

            console.log(`Line 42, call resolve after the setTimeout function.`);
            resolve(thisPromiseCount);
        }
    );
}

