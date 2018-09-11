let http = require("http");
let url = require("url");

function onRequest(request , response) {
    let pathname = url.parse(request.url).pathname
    console.log(`Requset for ${pathname} recived.`);
    response.writeHead(200, { 'Content-type' : `text/plain`} )
    response.write("Hello world!");
    response.end();
}

http.createServer(onRequest).listen(2222)
console.log("node start!");
