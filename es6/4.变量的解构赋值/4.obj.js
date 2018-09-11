// 对象的解构赋值

// 简单来说，对象解构是根据key给变量赋值该key的val，数组解构是根据顺序给对应位置的变量赋值；

// 1.标准情况
function test1(params) {
    var {'abc': a} = {'abc': 1};
    a;    //1
}

// 【2】变量名就是key

function test2() {
    var {abc} = {'abc': 1};
    console.log(abc);//1 有点没搞懂，因为这样写是不是完全可以给报错...

    
}
// test2()

// 【3】解构失败，简单来说，就是该变量没有对应的key，取值undefined
function test3() {
    var {abc} = {};
    abc;    //undefined
}

// 【4】脑洞一下，【1】和【2】情况结合下是什么？
function test4() {
    var {a: b, a} = {a: 1};
    a;    //1
    b;    //1
}

// 【5】对已有变量进行解构赋值
// 已声明变量，在解构赋值时需要用括号括住整行代码
function test5() {
    var a;
    // {a} = {a: 1};    //Uncaught SyntaxError: Unexpected token =

    var a;
    ({a} = {a: 1});    //括号括起来，正常运行 

    var a;
    var {a} = {a: 1};

    let a;
    let {a} = {a: 1};    //报错，因为let不能2次

    var a;
    var {a} = {a: 1};    //不会报错, 2次var是允许的
    //懵
}

// 【6】解构赋值时，赋值形式并非深度复制
function test6() {
    var a = {
        b: {c: 1}
    };
    a.b.c;  //1
    var {b} = a;
    console.log(b.c);
    
    
    b.c = 2;
    b.c;    //2
    console.log(a.b.c);
        a.b.c;  //2
}
// test6()

function test6_2() {
    var a = {
        x: {c: 1}
    };
    a.b.c;  //1
    var {x} = a;
    console.log(x.c);
    
    
    x.c = 2;
    x.c;    //2
    console.log(a.b.c);
        a.b.c;  //2
}
// test6_2()
// 【7】用解构赋值可以方便的取出其他对象中的某个方法或属性

function test7() {
    var computed = {
        add: function (a, b) {
            return a + b;
        },
        minus: function (a, b) {
            return a - b;
        }
    };
    var {add, minus} = computed;
    add(2, 3);
    minus(2, 3);
}

// 【8】数组可以视为带key的对象来进行解构赋值

function test8() {
    var arr = [2, 4, 6, 8];
    var arr2 = {
            0:a,
            1:b,
            [arr.length - 1]:d,
            [arr.length - 2]:c
    }= arr;
    //很奇怪，因为key在右边value在左边
    console.log(arr2);
    // arr2还是arr
}
// 左边数组右边只能是数组；左边对象，右边可以是数组，或对象
// test8()

// 【9】对象的默认值

function test9() {
    var {
        a:A = 10,
        b:B,
        C = 20
    } = { b:1 };
    A;    //10
    B;    //1
    C;    //20  
}
