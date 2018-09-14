# const

1. 简单来说，学过c++的可以理解为c++的const (恨不得现在去学个c++)
2. 非引用类型 无法修改
3. 按引用传递，无法更改指向
4. 准确的说，是让按引用传递时，保证该const变量指向的地址不变（而非该地址里的数据不变）（理解本条需要有指针相关概念）
5. 指向一个被冻结的对象
> **需要重新回来看,暂时看的有点晕不懂指针，就先把水哥的复制粘贴过来,然后学指针**

## 顶层对象的属性

  1. 所谓顶层对象，在js里面指window当一个变量在顶层作用域里（比如说打开浏览器通过F12的console来直接输入命令），那么该变量在之前情况下，是属于window这个顶层对象的属性的；
  2. 我们之前一般称之为全局变量，全局变量在以前会被认为就是window的属性的值；
  3. 而ES6中则不是，全局变量和顶层对象的属性的值将脱钩；
> 要看window必须用html打开，node里面没有window

## 顶层对象的获得

``` javaScript
    不懂，先抄着
    // 方法一
    (typeof window !== 'undefined'
        ? window
        : (typeof process === 'object' &&
    typeof require === 'function' &&
    typeof global === 'object')
        ? global
        : this);

    // 方法二
    var getGlobal = function () {
        if (typeof self !== 'undefined') { return self; }
        if (typeof window !== 'undefined') { return window; }
        if (typeof global !== 'undefined') { return global; }
        throw new Error('unable to locate global object');
    };
```