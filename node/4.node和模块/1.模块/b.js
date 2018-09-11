let hello = require("./a").Hello    //这里用的是他导出的外面的名字

let aa = new hello()
aa.say()