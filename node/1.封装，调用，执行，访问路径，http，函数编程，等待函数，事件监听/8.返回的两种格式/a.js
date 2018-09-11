let http = require("http")

http.createServer(myListen).listen(5555)
function myListen(request,response) {
    // application/xml 、 text/xml、text/html、text/plain
    response.writeHead(200,{"Content-type":'text/html'})

    response.write("https://github.com/erlei22/learn_node/blob/master/NodeJs%E2%80%94%E2%80%94%EF%BC%881%EF%BC%89%E5%B0%81%E8%A3%85%EF%BC%8C%E8%B0%83%E7%94%A8%EF%BC%8C%E6%89%A7%E8%A1%8C%EF%BC%8C%E8%AE%BF%E9%97%AE%E8%B7%AF%E5%BE%84%EF%BC%8Chttp%EF%BC%8C%E5%87%BD%E6%95%B0%E7%BC%96%E7%A8%8B%EF%BC%8C%E7%AD%89%E5%BE%85%E5%87%BD%E6%95%B0%EF%BC%8C%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC/8.%E8%BF%94%E5%9B%9E%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%A0%BC%E5%BC%8F/asset/aa.html")

    response.end()
}
console.log(`myListen start`);

// 还是不懂  我想返回一个html咋办，，，