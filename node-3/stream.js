//流 可读流和可写流
//流 边读边写 不是疯读
let fs = require('fs');
//读取默认bufferleixing
let rs=fs.createReadStream('1.txt',{highWaterMark:1});
let arr =[];
rs.on('data',(chunk)=>{
    arr.push(chunk)
    rs.pause();
    process.nextTick(()=>{
        rs.resume()
    },2000)
})

//data 全部取出来 才会执行
rs.on('end',function(){
    console.log(Buffer.concat(arr).toString())
})
rs.on('err',(err)=>{
    console.log(err)
})

