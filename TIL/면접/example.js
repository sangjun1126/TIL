// var p = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('a')
//     }, 1000)
// })

// let answer = p.then(res => {
//     return res;
// })

// answer.then(res => {
//     console.log(res)
// })
// console.log(answer)

// function async(callback) {
//     var result;

//     setTimeout(() => {
//         result = callback('결과값');
//     }, 1000);

//     return result;
// }

// var b = async((res) => {
//     return res
// })

// function async(result, callback) {
//     setTimeout(() => {
//         callback(result, function(result) {
//             console.log(result);
//         })
//     }, 1000);
// }

// async(0, function(res, callback) {
//     callback(res)
//     async(res + 1, function(res, callback) {
//         callback(res)
//         async(res + 1, function(res,callback) {
//             callback(res)
//         })
//     })
// })

function async(result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(result);
            resolve(reject);
        }, 1000);
    })
}

async(0).then(res => {
    return async(res + 1);
}).then(res => {
    return async(res + 1);
}) 