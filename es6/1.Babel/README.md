# 大概的知道了，细节上面还有很多需要回来重看

## 1.控制台输出

在es6这个目录下面

``` javaScript
     babel a.js
     控制台会输出转码完毕之后的内容
```

## 2.单文件转换

在es6这个目录下面

``` javaScript
    babel a.js -o b.js
    babel a.js -o ../es5/b.js
```

## 3.将一个目录下的所有文件（递归执行）全部转码输出到某个文件夹下（同名转换）：

在1.Babel这个目录下面

``` javaScript
    babel es6 -d es5
    -d 表示输出到文件夹
    转换过程是递归的 子文件下的子文件也会转
```