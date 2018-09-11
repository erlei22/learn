var y = 1

{
    console.log(y); // 1 这里的y 会到外面去拿 采用父级作用域
    var y = 2
}


//局部变量与全局变量，变量作用域


var x = 1
{
    console.log(x); //ReferenceError: x is not defined
    let x = 2       
}