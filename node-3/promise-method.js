//promise 解决回调地狱 链式写法
//解决同步异步结果 Promise.all 条件&& promise.race() 判断请求速度的 快的为准

let fs = require('fs');
let {promisify} = require('util');
let read =promisify(fs.readFile);
Promise.race([read('x.txt','utf8')],[read('y.txt','utf8')]).then((data)=>{
        console.log(data)
},err=>{
    console.log(err)
})
