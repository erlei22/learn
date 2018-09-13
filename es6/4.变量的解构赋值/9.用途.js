// 1/交换变量的值
// 不适合交换对象的属性，会出错
function test1_1() {
    let obj = {
        x:1,
        y:3
    }

    console.log(obj);

    ({
        x:obj.y,
        y:obj.x
    } = obj)
    
    console.log(obj);
    
    
}
// test1_1()


function test1_2() {
    let x = 1
    let y = 2;
    [x,y] = [2,1]
    let b,c
    [b,c] = [x,y]
    console.log(b,c);
    [x,y] = [y,x]
    console.log(x,y);
}

// test1_2()

// 总结
// 交换的话 对象不行，不会报错，但是交换结果是错的
// 交换的话 数组可以，ojbk

// 【2】在函数返回多个值时方便取出

// 函数可以返回一个数组然后结构拿出

function test2_1() {
    return [2,3,4]
}
// let [a,b,c] = test2_1()
// console.log([a,b,c]);

// 试一下对象

function test2_2() {
    return {a:2,b:3,c:5}
}
// let {a,b,c} = test2_2()
// console.log(a,b,c);

// 【3】函数参数的定义

// 可以无视顺序，当然是对象，数组肯定还是按照index来

function test3({b,c,a}) {
    console.log(a,b,c);
}

// test3({a:1,b:2,c:3})
// 感觉上来真的挺好用的啊~不会传错值了


// 下面是照着水哥写的打一遍

// 4.提取json
// ajax拿到的用户信息，是一个对象，解构出来可以直接用
// but我觉得没多大提升啊....

// 5.函数参数给默认值
// 声明函数的时候可以直接加默认值，这个是真的舒服

// 6.获取模块的指定方法
// 比如我们调用一个模块，需要使用它的a,b方法，之前是直接将这个模块赋给m(第三个值)
// 然后通过m.a和m.b来调用，现在可以直接赋值给a和b变量

// 7.遍历Map结构
// 可以使用更简单的方法拿key和value
function test7() {
    const map = new Map();
    map.set("a",1)
    map.set("b",2)

    for (const item of map) {
        console.log(item);
    }

    for (const [key,value] of map) {
        console.log(key,value);
    }

}
test7()