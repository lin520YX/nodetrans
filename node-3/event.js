let EventEmitter = require('events');
let {inherits} = require('util');
function Girl(){

}
let girl = new Girl();
inherits(Girl, EventEmitter)
girl.once('ku', (err) => { //订阅
    console.log(err)
})
girl.on('ku', (err) => { //订阅
    console.log(err)
})
// girl.removeAllListeners('ku')
// girl.removeListener('ku',fn)
girl.emit('ku','chengjianshabi')//发布