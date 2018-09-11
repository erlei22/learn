function sayHellow() {
    this.say = function () {
        console.log('Hello it works');
        
    }
}
//在这里我们有一个    构造函数

exports.Hello = sayHellow
//在这里我们导出方法
//左边是外面用的名字  右边是里面用的名字