// call 和 apply 都是js的内置函数  
//  他的作用是改变 call/apply函数里面第一个参数对象的指针，使他指向引用他的函数

//  call 与apply的区别就是  call后带的是字符串  apply后面带的是数组

// 总的来说就是 改变第一个参数的this，使他变成引用他的函数 ok go this



// 构建全局对象的add函数
function add(a,b) {
    console.log(a+`+`+b)
}

// 构建以obj为对象的add函数 注意这里的函数体是 a*b  表明与a+b不同
var obj = {};

obj.add = function (a,b) {
    console.log(a+`*`+ b);
}

obj.sub = (a,b) => {
    console.log(a+`/`+b)
}

// 构建sub函数
sub = (a,b) => {
    console.log(a+`-`+b);
}

obj.arg1 = () => {
    console.log(a+`%`+b);
}

obj.arg2 = (a,b) => {
    console.log(a+`%`+b);
}

arrg = () =>{

}


var a = 1

function P(a) {
    if (a) {
        this.a = a
    }
    this.snedA = function () {
        console.log(this.a);
    }
}
var x = new P()

//实验1
obj.add.call(add,1,2);//
obj.add.call(window.add,1,2);//
obj.add.call(window,1,2);//
//实验2
add.call(obj.add,1,2);//
add.call(obj,1,2);//
add.call(window,1,2);//
//实验3
sub.call(add,1,2);//
sub.call(window.add,1,2);//
sub.call(obj.add,1,2);//
//实验4
add.call(sub,1,2);//
add.call(window.sub,1,2);//
add.call(obj.sub,1,2);//
//实验6
obj.call(sub,1,2);
//
window.call(sub,1,2);
//
//实验7
obj.arg1.call(add,1,2);
//
obj.arg2.call(arg,1,2);//






// 不加this，这题没质量