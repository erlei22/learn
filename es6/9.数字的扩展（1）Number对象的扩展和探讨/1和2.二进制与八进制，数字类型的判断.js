

// 原来js是不能以数字的形式表达二进制，只能通广场parseInt(数字，2)将数字解释为二进制，并返回值，例如
function test1_1(Number) {
    console.log(parseInt(10, 2));
}
// test1_1()
//或者将数字转为二进制的字符串，如代码：
function test1_2() {
    var a = 2;
    console.log(a.toString(2));
}
// test1_2()

// 在ES6中，添加了二进制数字的表达法，以0b或者0B做完开头后面跟数字即可，如代码:
function test1_3() {
    console.log(0b10);
    console.log(0B100);
}
// test1_3()

// 1.2 八进制
// 之前八进制数字以0开头，例如010表示8，但仅在非严格模式下生效。

// 如果注意过的话，会发现在es5里，严格模式下不能使用八进制数字，会抛出一个SyntaxError。

// 在es6里，支持严格模式下的八进制数字的表示了，方法就是以0o开头（第二个是字母o，大小写都可以）；
function test2() {
    console.log(0o10);
    console.log(0O100);
}
// test2()


// 1.3 转为十进制使用
// 1、可以直接和其他数字类型进行计算，会被隐式转换为十进制并输出结果，列如:

function test3_1() {
    console.log(0o100 - 0o10);
    console.log(0o100 - 1);

}


// 2、数字类型判断
// 2.1、判断数字是否是有限的
function test2_1() {

    var test = {
        toString: function () {
            return 1
        }
    };
    console.log(test);
    console.log(isFinite(test));
    console.log(Number.isFinite(test))
    //不会被隐式转换，false;

}
test2_1()

// 2.2、判断是否是NaN
// 其实和上面的一样，就是增加的方法不会触发隐式转换

// 2.3、判断是否为整数

// Number.isInteger() 也不接受隐式转换

// 1.0000 你说是不是整数

function test3() {

    Number.isInteger(-1.0);    //整数，true
    Number.isInteger(true);    //不会隐式转换，false
    Number.isInteger('1');    //不会隐式转换，false
    Number.isInteger(Infinity);    //正无穷不算是整数，false
    var test = {};
    test.toString = function () {
        return 1;
    }
    Number.isInteger(test);    //不会被隐式转换，fals

}

// 2.4、Number.parseInt()与Number.parseFloat()
Number.parseInt === parseInt;    //true
Number.parseFloat === parseFloat;    //true
// 尬


