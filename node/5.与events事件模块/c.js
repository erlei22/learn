// 调用模块
var events = require("events")
var emmitter = new events.EventEmitter()

// 移除监听  removeListener,funName   
// 带funname的是删除某个  不带的是删除所有
let first = function () {
    console.log('first event');
}
 
let second = function () {
    console.log('second event');    
}

emmitter.on('/click',first)

emmitter.on('/click',second )

emmitter.emit("/click")

emmitter.removeListener("/click",first)
console.log('first  del');

emmitter.emit("/click")