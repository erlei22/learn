# git上一些常用操作把

自己记录一下，自己在项目过程中也一直在用，不过没有系统的了解过。有个学习git的<a href="https://learngitbranching.js.org/" target="_blank">小游戏</a>，按照那个小游戏，一点一点列把，可以当做游戏答案。

- [git上一些常用操作把](#git%E4%B8%8A%E4%B8%80%E4%BA%9B%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C%E6%8A%8A)
  - [1.主要](#1%E4%B8%BB%E8%A6%81)
    - [1.1基础篇](#11%E5%9F%BA%E7%A1%80%E7%AF%87)
      - [1.1.1循序渐进地介绍 Git 主要命令](#111%E5%BE%AA%E5%BA%8F%E6%B8%90%E8%BF%9B%E5%9C%B0%E4%BB%8B%E7%BB%8D-git-%E4%B8%BB%E8%A6%81%E5%91%BD%E4%BB%A4)

## 1.主要

![游戏截图1](https://github.com/erlei22/img-store/blob/master/Learn-img/gitGame.png)
![游戏截图2](https://github.com/erlei22/img-store/blob/master/Learn-img/gitgame2.png)

### 1.1基础篇

#### 1.1.1循序渐进地介绍 Git 主要命令

1. Git Commit 提交代码
    ````javaScript
    git commit
    ````
2. Git branch 创建分支
    ```` javaScript
    /*
        早建分支！多用分支！
        我现在的公司经常会
        今天提一个需求
        明天又提一个需求
        然后第二个需求要求比第一个先上
        怎么办
        一个需求拉一个分支
        要上一个需求merge一个
    */
    git branch bugFix
    ````
    Git checkout 切换分支
    ````javaScript
    git checkout <your-branch-name>
    ````
    git checkout -b 2与3的简洁版

     ````javaScript
    /*有个更简洁的方式：如果你想创建一个新的分支同时切换到新创建的分支的话，可以通过 */
     git checkout -b <your-branch-name>
    ````

3. Git merge 分支与合并

   功能演示图片
  ![游戏截图3](https://github.com/erlei22/img-store/blob/master/Learn-img/gitgame3.png)
  ![游戏截图4](https://github.com/erlei22/img-store/blob/master/Learn-img/gitgame4.png)
  流程如下图
  ![游戏截图5](https://github.com/erlei22/img-store/blob/master/Learn-img/gitgame5.png)

```` JavaScript
    1. git checkout -b bugFix   //创建并切换到bugFix分支
    2. git commit               //提交代码
    3. git checkout master      //回到master分支
    4. git commit               //提交代码
    5. git merge bugFix         //向master 合并 bugFix 分支的代码
````

1. Git Rebase 另一种合并分支的办法

rebase的话我一开始有点懵，因为我一开始不知道有这个方法，惭愧。   
下面是
>第二种合并分支的方法是 git rebase。Rebase 实际上就是取出一系列的提交记录，“复制”它们，然后在另外一个地方逐个的放下去。  
Rebase 的优势就是可以创造更线性的提交历史，这听上去有些难以理解。如果只允许使用 Rebase 的话，代码库的提交历史将会变得异常清晰。