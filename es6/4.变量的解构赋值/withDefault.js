// 如果解构时带有默认值会怎么样
// 成功解构就拿解构获取的值，失败就拿默认值
//                      undefine?

// 【1】标准情况下
var [a, b = 2, c, d = 10]=[1, , 3, 4];
console.log(a,b,c,d);



// 【2】右边不写和undefined是一样的
function test2() {
    var [a = 1] = [undefined];  //1
    var [a = 1] = [null];   //null
    var [a = 1] = [3];  //3
    var [a = 1] = ["abc"];  //"abc"
    var [a = 1] = [{m: 1}]; //{m:1}
    var [a = 1] = [true];   //true
    var [a = 1] = [NaN];    //NaN
    
}


// 【3】在使用之前已经被声明的变量可以作为默认值使用。
function test3_1(params) {
    var a = 1;
    var [b = a] = [];
    console.log(b);
    //1 原理与1一样
}

function test3_2(params) {
    
    var [b = a] = [];
    console.log(a);//变量提升
    
    var a = 1;
    b;    //undefined   变量提升
}


