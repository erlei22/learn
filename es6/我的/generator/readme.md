# generate-生成器

普通函数-直接运行到底

generater函数，中间能停

```` javaScript
function *show(){
    console.log('a');
    yield;
    console.log('b');
}

let generateObj = show();

generateObj.next(); //a
generateObj.next(); //b

````

## yield 传参、返回

### yield可以传参

```` javaScript
function *show(){
    console.log('a');
    let x = yield;
    console.log('b');
}

let generateObj = show();

generateObj.next(123); //a
generateObj.next(456); //b   456
// 第一个next没有log
// 第二个next有log
// 传参的时候第一个next 是废的;
// 记住一点。yield是从右往左读的。

````

### yield可以返回

```` javaScript
function *show(){
    console.log('a');
    yield 12;
    console.log('b');
}

let generateObj = show();

let res1 = generateObj.next(); //{value:12,done:false}
let res2 = generateObj.next(); //{value:undefined,done:true}
// 最后一个next没有value  要返回靠 return
// 返回值有两个参数，第一个为返回值 第二个为  done:bool
````

---
总结一下  
左边是返回值   yield    右边return出去的值
let res  =  yield  =  $.ajax().then()