let fs = require('fs')

fs.open("a.txt",'r',function (e,fd) {
    if(e) throw e;
    let buf = new Buffer(8);//创建一个二进制对象
    fs.read(fd,buf,3,4,2,function (err,bytesRead,buffer) { //读取fd，以二进制形式
        if(err) throw err;
        console.log(bytesRead);
        console.log(buffer);
    })
})