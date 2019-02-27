// 调用模块
var events = require("events")
var emmitter = new events.EventEmitter()

// 监听 error  如果不进行监听的话，会直接推出程序

let first = function () {
    console.log('first event');
}
 
let error = function (err) {
    console.log('err event:',err)    
}

emmitter.on('/click',first)

emmitter.on('error',error )

emmitter.emit("/click")

emmitter.emit("error",error)

emmitter.emit("/click")