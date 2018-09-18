# 模板字符串

> 多说一句，真的好用

## 解释：

```` jvaaScript
1.简单来说，就是一个字符串，但是这个字符串里，可以省掉拼接字符串"+"符号，还可以自动保留换行符，空白符等;
2.变量的嵌入靠${a} ,a就是js代码，然后相当于执行完毕转为字符串
4. 如果用过例如Vue.js或者React之类，会发现写法有些相似。
5. vue、react等比这个强大多了=.=
````

>我已经觉得这个很好用了，你跟我说vue，react比这个好用...

## 挑一些我疑惑的写了

### trim方法

````    JavaScript
       var dom = $("#test");
    dom.css("white-space", "pre");
    var str = `今天
    明天
后天`;
    dom.html(str);
````

```` JavaScript
    var dom = $("#test");
    dom.css("white-space", "pre");
    var str = `第一行
第二行`;
    dom.html(str);

````