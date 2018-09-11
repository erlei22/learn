// 1、指向非按引用传递类型的变量，其变量值不可以被修改
function test1() {

    const a = 1;
    a = 2; //报错 TypeError: Assignment to constant variable.

}
// test1()


// 2、指向引用类型的变量，其值可以被修改，但是不能让其指向另外一个对象

function test2_1() {
    const a = {
        a1: 1
    }
    a.a1 = 2
    console.log(a);
    //   { a1: 2 }

}
//   test2_1()

function test2_2() {
    let a = {
        a1: 1
    }
    let b = {
        b1: 2
    }
    const c = a
    console.log(c);
    // { a1: 1 }
    c = b
    //^    
    // TypeError: Assignment to constant variable.
}
test2_2()

//   3、不能声明const变量时不赋值

function test3() {
    const a
    //SyntaxError: Missing initializer in const declaration
}
// test3()

// 4、块级作用域，相关特性类似let
        // 1.块级作用域
        // 2.不存在变量提升
        // 3.不能重复使用

// 5、指向一个被冻结的对象
