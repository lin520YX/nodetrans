function Dialog() {
    this.time = 3000;
}

Dialog.prototype.$show = function () {
    console.log('show')
}
Dialog.prototype.$hide = function () {
    console.log('hide')
}
//new Dialog().$show()
module.exports = Dialog;
/*+function (exports,module,require){
    module.exports=exports=this={}
    return module.exports
}()*/



