// 调用模块
var events = require("events")
var emmitter = new events.EventEmitter()

//  事件监听 on
emmitter.on("/click",function () {
    console.log('first click?')
})

emmitter.on('/click',function () {
    console.log("second click~");
    
})
// 事件发射 emit

let n = emmitter.emit("/click")
let m = emmitter.emit("/double click")
let n2 = emmitter.emit("/click")
// 返回值为bool值
// 如果该emit发射  有   on监听  则   true  否则为false
console.log(`
click: ${n} 
double click: ${m} 
emit click2: ${n2}`)
