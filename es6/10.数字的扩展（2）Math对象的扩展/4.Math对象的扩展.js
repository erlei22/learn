// 4.1、去掉小数部分的Math.trunc()
Math.trunc(1.1)

/*
    1.先隐式转换，不是number类型，直接  NaN
    2.如果可以被转化为number类型，省略掉小数部分(没说省略掉  -  负号)(    +    正号是省略的)
*/ 
function test4_1() {
    Math.trunc(-0);    //-0，注意会保留负号
    Math.trunc('-10.9');    //-10，可以识别字符串
    Math.trunc(0o10);    //8，可以正常识别二进制、八进制和十六进制数字

    var obj = {};
        obj.toString = function () {
        return '+2.9';
    }
    Math.trunc(obj);    //2，对于对象通过toString隐式转换，不会保留+号（但会保留减号）

    Math.trunc('a10');    //NaN，不能被隐式转换为number
    Math.trunc([1, 2]);    //NaN，也不能
    Math.trunc({});    //NaN，显然也不能
}


// 4.2、判定变量的正负Math.sign()
/*
五种情况：
1.正数返回1；
2.负数返回-1；
3.正0返回0；
4.负0返回-0；
5.其他返回NaN；
*/

function test4_2() {
    Math.sign(0);    //0
    Math.sign(-0);    //-0
    Math.sign(100.1234);    //1
    Math.sign(-100.1234);    //-1
    Math.sign(Number.MIN_VALUE);    //1
    Math.sign(Number.MIN_VALUE / 2);    //0，这个是因为已经是最小的数字了，再除以在存储的时候和0一样，于是就变成0了

    var obj = {};
    obj.toString = function () {
        return '+2.9';
    }
    Math.sign(obj);    //1，说明是被隐式转换过的

    Math.sign('a10');    //NaN，不能被隐式转换为number
    Math.sign([1, 2]);    //NaN，也不能
    Math.sign({});    //NaN，显然也不能
}

// 4.3、开立方Math.cbrt()
Math.cbrt(1)
//开平方的是Math.sqrt();