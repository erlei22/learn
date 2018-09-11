var server = require("./server");   //调用该模块

var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(handle);   //调用该模块的方法（注意方法名是test.js中e