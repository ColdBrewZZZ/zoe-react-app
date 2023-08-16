// Require crypto 
// pbkdf2 

// const crypto = require('crypto');

// console.time('hash');

// crypto.pbkdf2('password', 'nodejs', 1E5, 512, 'sha512', (err, key) => {
//     if(!err) {
//         console.log(key.toString('hex'));
//         console.timeEnd('hash');
//     }
// }) 

// crypto.pbkdf2('password', 'nodejs', 1E5, 512, 'sha512', (err, key) => {
//     if(!err) {
//         console.log(key.toString('hex'));
//         console.timeEnd('hash');
//     }
// }) 

// crypto.pbkdf2('password', 'nodejs', 1E5, 512, 'sha512', (err, key) => {
//     if(!err) {
//         console.log(key.toString('hex'));
//         console.timeEnd('hash');
//     }
// }) 

// crypto.pbkdf2('password', 'nodejs', 1E5, 512, 'sha512', (err, key) => {
//     if(!err) {
//         console.log(key.toString('hex'));
//         console.timeEnd('hash');
//     }
// }) 

// console.time('hash5');

// crypto.pbkdf2('password', 'nodejs', 1E5, 512, 'sha512', (err, key) => {
//     if(!err) {
//         console.log(key.toString('hex'));
//         console.timeEnd('hash5');
//     }
// }) 

const http = require('http');

console.time('first-http-request');

http.request('http://www.fashionnova.com/', response => {
    response.on('data', cunk => {});
    response.on('end', () => {
        console.timeLog('first-http-request');
    })
}).end();

http.request('http://www.fashionnova.com/', response => {
    response.on('data', cunk => {});
    response.on('end', () => {
        console.timeLog('http-request');
    })
}).end();

http.request('http://www.fashionnova.com/', response => {
    response.on('data', cunk => {});
    response.on('end', () => {
        console.timeLog('http-request');
    })
}).end();

http.request('http://www.fashionnova.com/', response => {
    response.on('data', cunk => {});
    response.on('end', () => {
        console.timeLog('http-request');
    })
}).end();

http.request('http://www.fashionnova.com/', response => {
    response.on('data', cunk => {});
    response.on('end', () => {
        console.timeLog('http-request');
    })
}).end();


console.time('sixth-http-request');
http.request('http://www.fashionnova.com/', response => {
    response.on('data', cunk => {});
    response.on('end', () => {
        console.timeLog('sixth-http-request');
    })
}).end();
