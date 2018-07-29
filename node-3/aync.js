let fs = require('fs');
let util = require('util');
let read = util.promisify(fs.readFile);
// let x = fs.readFileSync('./x.txt','utf8');
// let y = fs.readFileSync('./y.txt','utf8');
// console.log({x,y})

// let school={};
// read('./x.txt').then((data)=>{
//         console.log(data)
//     school.name=data
// })
// read('./y.txt').then((data)=>{
//     console.log(data)
//     school.age=data
// })
// Promise.all([read('./x.txt','utf8'),read('./y.txt','utf8')]).then((data)=>{
// console.log(data)
// }).catch(err=>{
//
// })

const result = async ()=>{
    let [name,age]=await Promise.all([read('./x.txt','utf8'),read('./y.txt','utf8')])
    console.log(name,age);
}
result()
