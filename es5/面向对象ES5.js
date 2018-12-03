// 面向对象的几种基本模式
// 1.工厂模式 创建工厂函数，封装了以特定接口创建对象的具体细节；但是没有解决对象识别问题
// 2.构造函数 解决了对象识别问题；但每个方法都得重新创建
// 3.原型模式  原型包好了实力共享的属性和方法
// 4.构造+原型...

// 太多了，放弃   换


// 博客园的这个貌似不错  https://www.cnblogs.com/elonhu/p/6984609.html
let dog = {
    age:2,
    name:'dot',
    shout:function () {
        console.log("汪汪汪！");
    },
    showName:function () {
        console.log("dot");
    }
}



// 类的创建

function Dog() {
    // 构造函数的首字母都需要大写
    this.name = "dot";
    // this 指向的就是被创造的实例
    this.age = 2;
    // this.runSpeed = null; //string  
    this.speed = "";   //    原文是写的null 我选择直接写空字符串

    /* 属性的声明一点要放在构造函数的顶部
    有的属性没有初始值，可能在方法里面才赋值
    类型最好先写一下
    */
}

// 看到这里发现需要prototype  行吧 那就prototype

Dog.prototype.shout = function () {
    
}

