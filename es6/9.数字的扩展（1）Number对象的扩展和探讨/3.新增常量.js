// 3.1、浮点误差判断，新增极小的常量
console.log(Number.EPSILON === 2.220446049250313e-16);
// 大约可以理解为2.2e-16

// 这个东西我是真的深有体会,做过商城的都知道
  0.1+0.2-0.3 < Number.EPSILON;    //true


// 这里借用阮一峰封装的误差检测函数：

//判断两个数是否相等（误差低于一定范围）
function withinErrorMargin(left, right) {
    //Math.abs的效果是返回绝对值（因为负数必然小于这个常量）
    return Math.abs(left - right) < Number.EPSILON;
}
withinErrorMargin(0.1+0.2, 0.3);    //true


// 3.2、安全整数范围，新增最大安全整数常量和最小安全整数常量
// Number.MAX_SAFE_INTEGER 最大的安全整数
Math.pow(2, 53)+0 === Math.pow(2, 53)+1;    //true
Math.pow(2, 53)+1 === Math.pow(2, 53)+2;    //false
const maxNmb = 9007199254740991
// Number.MIN_SAFE_INTEGER 最小的安全整数
const minNum = -9007199254740991


// 检查一个数字是否是安全整数，可以通过以下方法来判断
Number.isSafeInteger(minNum)

function test2() {
    Number.isSafeInteger(1);    //true
    Number.isSafeInteger(Number.MAX_SAFE_INTEGER);    //true
    Number.isSafeInteger(Number.MAX_SAFE_INTEGER - 1);    //true
    Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1);    //超出范围，false
    Number.isSafeInteger(1.1);    //浮点数显然不是整数，更别说是安全整数了，false
    Number.isSafeInteger(1.0);    //视为整数，true
    Number.isSafeInteger('1');    //不会隐式转换，false
}

// 另外，当可能涉及到超出安全整数范围的问题时，除了结果之外，需要验证 每一个参与计算的数，否则依然可能结果不符合预期，如以下代码：

// 需要验证 每一个参与计算的数
// 需要验证 每一个参与计算的数
// 需要验证 每一个参与计算的数
// 需要验证 每一个参与计算的数
(Math.pow(2,53)+1) - (Math.pow(2,53));    //0
// 需要验证 每一个参与计算的数
// 需要验证 每一个参与计算的数
// 需要验证 每一个参与计算的数
// 需要验证 每一个参与计算的数


// 3.3、正数的最大值和最小值（非es6新增）
Number.MAX_VALUE === 1.7976931348623157e+308
Number.MIN_VALUE === 5e-324

function test3() {
    Number.MAX_VALUE + Math.pow(2,969) === Number.MAX_VALUE;    //true   都是1.7976931348623157e+308  
    Number.MAX_VALUE + Math.pow(2,970) === Number.MAX_VALUE;    //false  左边是1.7976931348623157e+308  右边是infinity  
    Number.MAX_VALUE + Math.pow(2,970);    //Infinity
    Number.MIN_VALUE/2;    //0
    Number.MIN_VALUE/1.2 === Number.MIN_VALUE;    //true
}

// 3.4、探讨：关于2的53次方

