let fs = require('fs');

// fs.readFile('file.txt','utf-8',function (err,data) { //故意写错文件名
//     if (err) {
//         console.log("读取错误:"+err)
//         return
//     }
//     console.log(data)
// })

fs.readFile('a.txt','utf-8',function (err,data) {
    if (err) {
        console.log("读取错误:"+err)
        return
    }
    console.log(data)
})

//第二个参数是读取格式  这个是个异步请求



// var fs = require('fs');
// var data = fs.readFileSync('test.txt', 'utf-8');
// console.log(data);
// 这个是个同步请求，目前我也看不出区别...