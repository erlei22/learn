var http = require("http");
var url = require("url");
function start(route, handle) {
    var count = 0;

    function onRequest(request, response) {
        console.log(count++ + "#:");
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " recived.");

        route(handle, pathname);    //来源于上面的start的参数

        response.writeHead(200);
        response.write("abc!");
        response.end();
    }

    http.createServer(onRequest).listen(5555);
    console.log("Server has started!");
}
exports.start = start;