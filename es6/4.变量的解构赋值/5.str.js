// 1. 字符串可以被解构赋值，视为一个类似数组的对象


// 【1】右边可以当做一个数组看待
function test1() {
    var str = "hi my name is erlei22"
    var [a,b] = str
    console.log(a,b);
    //          h i
}
// test1()

// 【2】但他终究还是一个字符串，可以用解构赋值的形式，取出他作为字符串的各种方法

function test2() {
    var str = "Hello World!"
    var {split:method} = str
    console.log(method.apply("abc",[""]));
            
}
// test2()

