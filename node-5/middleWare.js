function app(){

}
app.middleWare=[]
app.use=function(cb){
    this.middleWare.push(cb);
}
app.use(function(req,res,next){
    next();
});
let index =0;
function next(){

    app.middleWare[index++](null,null,next);
}
next()