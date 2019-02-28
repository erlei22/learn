let http = require("http");
let util = require("util");
let server = new http.Server();
server.on("request",function (req,res) {
    res.writeHead(200,{'Content-type':'text/html;charst=utf8'});
    res.write("<head><meta charset='uft-8'></head>")
    for (const i in req.headers) {
        if (req.headers.hasOwnProperty(i)) {
            const element = req.headers[i];
            res.write(`req.headers[${i}]:${element}</br>`)
        }
    }
    res.end();
})
server.listen(3333)
console.log(`server start `);
