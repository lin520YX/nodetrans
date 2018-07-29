let fs = require('fs');
let util = require('util');
//同步读取
// let result=fs.readFileSync('./1.js');
// console.log(result.toString())
// let content1 = fs.readFileSync('./1.txt','utf8');
// let content2 = fs.readFileSync('./2.txt','utf8')
//promise resolve reject 实例.then(success,error)
// fs.readFile('./1.txt','utf8',(err,data)=>{
//     console.log(data)
// })


// const read = (url)=>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile(url,'utf8',(err,data)=>{
//             if(err){
//                    return  reject(err)
//             }
//             else
//             {
//                 resolve(data)
//             }
//         })
//     })
// }
// read('./1.txt').then((data)=>{
//     console.log(data)
// },(err)=>{
//     console.log(err)
// })

let read = util.promisify(fs.readFile);
// // async await es7 node ^7.9
// read('./1.txt').then((data)=>{
//     console.log(data.toString())
// },(err)=>{
//     console.log(err)
// });
//处理promise 队列
let result = async ()=>{
    let content1 = await read('./1.txt','utf8');
    let content2 = await read(content1,'utf8');
    let str = content2+'22';
    console.log(str)
}
result()


