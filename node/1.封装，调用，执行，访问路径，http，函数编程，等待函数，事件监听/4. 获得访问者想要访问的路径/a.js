//我们先require一个http模块： 
let http = require('http');


//然后调用其方法，创建一个服务器：
http.createServer(onRequest).listen(2222)
// onRequest   是方法名  类似回调



//这个函数的第一个参数request是用户访问的一些东西，我们需要的是其url变量；假设我们访问地址是这样的：
function onRequest(request ) { 
    console.log(request.url);
}



//  我们下来要对这个url做点什么了；
//  虽然直接对上面那个参数进行操纵也可以，但这太笨了，让我们来require一个新的模块url

