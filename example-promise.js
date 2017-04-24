function addPromise (a, b) {
    return new Promise(function(resolve, reject){
        if(typeof a ==='number' && typeof b === 'number') {
            resolve(a+b);
        }else{
            reject('One arg is not a number');
        }
    });
}

addPromise(25,15).then(function(result){
    console.log('promise success', result);
}, function (err) {
    console.log('promise error', err);
});

addPromise(15).then(function(result){
    console.log('promise success', result);
}, function (err) {
    console.log('promise error', err);
});

addPromise("Matt").then(function(result){
    console.log('promise success', result);
}, function (err) {
    console.log('promise error', err);
});