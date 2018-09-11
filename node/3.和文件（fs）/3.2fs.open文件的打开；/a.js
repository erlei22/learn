let fs = require('fs')

fs.open("a.txt","a","0666",function (error,fd) {
    if (error) throw error;
    fs.write(fd ,"add me",function (e) {
        if(e) throw e;
        fs.closeSync(fd);
    })
})


//在 a.txt这个文件中 增加 "add me" 这个内容