//设置环境变量
// let url = 'http://localhost:3000';
console.log(process.env.NODE_ENV)
//如果代码放到服务器上就没有这个环境变量
//走上线环境
let url='';
if(process.env.NODE_ENV == 'dev'){
        url ='http://localhost:3000'
}else{
       url = 'www.baidu.com'
}
console.log(url)
//当前队列 底部
process.nextTick(()=>{
    console.log(1)
})
//第二个队列
setImmediate(()=>{
    console.log(2)
})
setTimeout((...a)=>{
    console.log(a)
},100,'dddasdasd')