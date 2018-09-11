function sayHellow() {
    this.say = function () {
        console.log('Hello it works');
        
    }
}
//在这里我们有一个    构造函数

module.exports = sayHellow ;
//不管，全部导出?