let http = require("http");//http 是node自带的module

function onRequest(request , response) {
                //请求          响应


    response.writeHead(200, { "Content-type" : `text/plain`} )
    //响应头          状态码   json{type:str}  

    response.write("Hello world!");

    //响应内容  
    //但是从html的角度看有点看不懂

    

    response.end();
    //响应结束
}

http.createServer(onRequest).listen(2222)
//创建一个服务   使用onRequset函数   来监听2222端口

console.log("node start!");
