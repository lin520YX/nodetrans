let fs = require('fs');
let util =  require('util');
// let promise = new Promise((resolve,reject)=>{
//     fs.readFile('./1.core.js', 'utf8', (err, data) => {
//         if (data) {
//             resolve(data);
//             return;
//         }
//         if (err) {
//             reject(err);
//         }
//     });
// })
let promise=util.promisify(fs.readFile);
promise('./1.core.js', 'utf8',).then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
});


