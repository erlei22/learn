// this 就是谁调用他，就是谁... over

// http://www.cnblogs.com/pabitel/p/5922511.html 这个文章一个四个例子，前三个我都懂，第四个没看懂


// 1.在一般函数方法中使用 this 指代全局对象

function test1(){
　　　　this.x = 1;
　　　　alert(this.x);
　　}
// 　　test1(); // 1

// 2.作为对象方法调用，this 指代上级对象

function test2(){
    　　alert(this.x);
    }
    var o = {};
    o.x = 1;
    o.m = test2;
    // o.m(); // 1

// 3.作为构造函数调用，this 指代new 出的对象
    function test31(){
    　　　　this.x = 1;
    　　}
    　　var o = new test31();
    // 　　alert(o.x); // 1
        //运行结果为1。为了表明这时this不是全局对象，我对代码做一些改变：
    　　var x = 2;
    　　function test32(){
    　　　　this.x = 1;
    　　}
    　　var o = new test32();
    // 　　alert(x); //2


// 4.apply 调用 ，apply方法作用是改变函数的调用对象，此方法的第一个参数为改变后调用这个函数的对象，this指代第一个参数

    var x = 0;
　　function test4(){
        console.log(this.x);
　　}
　　var o={};
　　o.x = 1;
　　o.m = test4;
　　o.m.apply(); //0
//apply()的参数为空时，默认调用全局对象。因此，这时的运行结果为0，证明this指的是全局对象。如果把最后一行代码修改为
    var a = {}
    a.x = 2 
　　o.m.apply(a); //2