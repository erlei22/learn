var http = require("http");
var url = require("url");
function start(route, handle) {
    var count = 0;

    function onRequest(request, response) {
        console.log(count++ + "#:");
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " recived.");

        // route(handle, pathname);    //来源于上面的start的参数

        // response.writeHead(200);
        // response.write("abc!");
        
        var postData = "";
        request.setEncoding("utf8");
        request.addListener("data", function (postDataChunk) {      //data事件
            postData += postDataChunk;
            console.log("Received POST data chunk " + postDataChunk + ".");
            console.log("————————");
        })
        request.addListener("end", function () {
            console.log(1);
            
            route(handle, pathname, response, postData);
        })


        response.end();
    }

    http.createServer(onRequest).listen(5555);
    console.log("Server has started!");
}
exports.start = start;