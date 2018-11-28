# 函数的扩展

- [函数的扩展](#%E5%87%BD%E6%95%B0%E7%9A%84%E6%89%A9%E5%B1%95)
    - [1.函数默认值](#1%E5%87%BD%E6%95%B0%E9%BB%98%E8%AE%A4%E5%80%BC)
        - [start](#start)

## 1.函数默认值

### start
 > 简单，实用~

 ```` JavaScript
//  正常状态
function default_key(x=1,y=2){
    console.log(x,y)
}

// 报错状态

function default_wrong(x,x,y){
    console.log(x,y)
}

//特殊情况
let x = 99
function default_warning(a=x+1){
    console.log(a)
}

default_warning()//100

x = 100
default_warning()//101

// 每次重新计算
// 这个和我理解的运算方式差不多,也不知道为啥阮大单独拿出来讲

 ````

 ***

 ### 与结构默认值结合使用

 ```` javaScript

 function foo({x,y=5}){
     console.log(x,y)
 }

 foo({}) // undefined 5

 foo({x:1}) // 1,5

 foo({x:1,y:2}) // 1,2

 foo()  //TypeError: Cannot read property 'x' of undefined
//  看这里的时候需要了解解构,其实也还好~
 ````
 