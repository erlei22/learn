// 调用模块
var events = require("events")
var emmitter = new events.EventEmitter()

// 只监听一次   once 

emmitter.once('/click' ,function () {
    console.log('first click');
    
})
emmitter.once('/click' ,function () {
    console.log('second click');
    
})
 
// 事件发射 emit

let n = emmitter.emit("/click")
let m= emmitter.emit("/click")
console.log(n,m)