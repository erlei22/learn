let http = require("http");
let util = require("util");
let server = new http.Server();
server.on("request",function (req,res) {
    res.writeHead(200,{"Content-type":'text/html;charset = UTF-8'});
    res.write("<head><meta charset='utf-8'/></head>")
    res.write("<h1>这里是个h1啦</h1>")
    res.write("是否完成 res.copmlete："+req.complete);
    res.write("</br>Http版本协议："+req.httpVersion);
    res.write("</br>请求方法："+req.methd);
    res.write("</br>请求头："+util.inspect(req.headers));//将其转为字符串
    res.write("</br>请求尾："+util.inspect(req.trailers));
    res.write("</br>当前链接套接字："+ req.connetion); //套接字是啥
    res.write("<br/>上面别名："+req.socket);
    res.write("</br>client属性的别名："+req.client);
    res.end();
})

server.listen(2222);
console.log("server start at 2222");