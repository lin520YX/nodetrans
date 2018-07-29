// var buffer = Buffer.alloc(100);
// console.log(buffer);
// var buffer = Buffer.from([1,2,3,4,5]); /10->16/
// console.log(buffer);
// var buffer = Buffer.from('圈圈傻逼');
// console.log(buffer.length);
// console.log(buffer.toString());
//
// //fill
// var buffer = Buffer.allocUnsafe(100);
// buffer.fill(0);
// console.log(buffer);
//
// //slice(截取，克隆) 浅拷贝（slice assign {...{},...{}}）
// var buffer = Buffer.from([1,2,3,4,5]); /10->16/
// console.log(buffer.slice(0,2));
// //深度拷贝 新对象重新赋予值
// // JSON.parse(JSON.stringify(obj))

// var buffer = Buffer.from([1,2,3,4]);
// var newBuffer = buffer.slice(0,1);
// newBuffer[0]=100;
// console.log(buffer)

var buf1 = Buffer.from('城建');
var buf2 = Buffer.from('傻逼');
// var buf = Buffer.allocUnsafe(12);
// buf1.copy(buf,0)
// buf2.copy(buf,6)
// console.log(buf.toString())

//链接buffer
console.log(Buffer.concat([buf1,buf2]).toString())
Buffer.prototype.Myconcat=(list,listLength)=>{
    if(typeof  listLength === 'undefined'){
        listLength = list.reduce((prev,next)=>prev+next.length,0);
    }
    let offset = 0;
    list.forEach((buffer)=>{
        if(Buffer.isBuffer(buffer))return;
        Buffer.copy(buffer,offset);
        offset = offset+buffer.length;
    })
    return Buffer.slice(0,offset)
}
