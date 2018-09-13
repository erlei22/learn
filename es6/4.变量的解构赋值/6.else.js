// 其他基本类型的解构赋值
// 1.尝试转为对象，例如bool，number
// 2. null 或者 undefined 不能转为对象


function test1() {
    var x = 1
    var {y} = x
    console.log(y);
    // undefined
}
// test1()
function test2() {
    // let {toString: a} = 123;
    // console.log(a === Number.portotype.toString);

    let {toFixed: s} = 123;
     // true
    if (s === Number.prototype.toFixed) {
        console.log("it work");
        
    }else{
        console.log("error");
    }
    
}
// test2()


