class EventEmitter{
    constructor(){
        this._events = {};
    }
    on(event,cb){
        if(!this._events[event])
            this._events[event]=[cb];
        else
            this._events[event]=[...this._events[event],...[cb]]

    }
    emit(event){
        if(!this._events[event])return;
        this._events[event].forEach(cb => cb());
    }
    removeListener(event,cb){
        let ary=this._events[event];
        if(ary){
            this._events[event]=this._events[event].filter(c=>c!=cb);
        }
    }
    once(event,cb){
        let fn = ()=>{
            cb();
            this.removeListener(event,fn);
        }
        this.on(event,fn);
    }
}
