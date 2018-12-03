# 重新学习js prototype

看的是博客园的一篇文章[https://www.cnblogs.com/loveyoume/p/6112044.html]

___
1. 只有函数才可以才可以使用prototype这个属性，是函数的原型对象。
2. prototype是函数的属性，同时也是函数的原型对象。
3.  特别指出：  Array.prototype是一个数组   String.prototype是一个字符串     Object.prototype是一个对象  这三个特殊例子，不像构造函数的prototype一样。
4. 我也不知道为啥扯到了  Array.prototype.slice.call  学~
```` JavaScript
    function func(){
        var args = Array.prototype.slice.call(ageuments , 1)
        return args
    }

    // Array   数组
    // slice   数组的方法，截取？ 数组的，字符串我常用，数组基本不用
    // call    这个和apply以后还得单独看一下  call是让一个函数调用引用他的函数  先去call把
    // agements  是js 函数对象的一个属性，作用是获取函数的实参

````