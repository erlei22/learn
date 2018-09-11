// 3、同一级作用域里面，只允许对一个变量使用一个let来进行声明。

{
    var x = 1 ;
    var x = 2 ; //  ok
}

// {
//     var a = 1; //SyntaxError: Identifier 'a' has already been declared
//     let a = 2;
// }

// 换个位置还是一样

// {
//     let a = 2;
//     var a = 1; 
// }
// var a = 1;
// ^

// SyntaxError: Identifier 'a' has already been declared

