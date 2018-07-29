let fs = require('fs');
// stat 时间值
// fs.stat('/',(err,stats)=>{
//     console.log(err,stats.isFile())
//     console.log(err,stats.isDirectory())
// //    atime access time
// //    mtime modify time
// //    ctime change time
// //    birthtime
// })

// fs.mkdir('a/b',(err)=>{
// console.log(err)
// })

const  makep=(url,cb)=>{
    let urlAry = url.split('/');
    let index =0;
    const make=(p)=>{
          if(urlAry.length<index)return;
         // 在穿件之前看看是否存在
          fs.stat(p,(err)=>{
              if(err){
                  fs.mkdir(p,(err)=>{
                      make(urlAry.slice(0,++index+1).join('/'))

                  });
              }else{
                  make(urlAry.slice(0,++index+1).join('/'))
              }
          })

    }
    make(urlAry[index]);
}
makep('a/b/c')