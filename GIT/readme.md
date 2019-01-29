# git上一些常用操作把

自己记录一下，自己在项目过程中也一直在用，不过没有系统的了解过。有个[学习git的小游戏](https://learngitbranching.js.org/)，按照那个小游戏，一点一点列把，可以当做游戏答案。

- [git上一些常用操作把](#git%E4%B8%8A%E4%B8%80%E4%BA%9B%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C%E6%8A%8A)
  - [主要](#%E4%B8%BB%E8%A6%81)
    - [基础篇](#%E5%9F%BA%E7%A1%80%E7%AF%87)
      - [循序渐进地介绍 Git 主要命令](#%E5%BE%AA%E5%BA%8F%E6%B8%90%E8%BF%9B%E5%9C%B0%E4%BB%8B%E7%BB%8D-git-%E4%B8%BB%E8%A6%81%E5%91%BD%E4%BB%A4)

## 主要

### 基础篇

#### 循序渐进地介绍 Git 主要命令

1. Git Commit 提交代码
    ````javaScript
    git commit
    ````
2. 创建分支
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
3. 切换分支
    ````javaScript
    git checkout <your-branch-name>
    ````
4. 2与3的简洁版
    ````javaScript
    /*有个更简洁的方式：如果你想创建一个新的分支同时切换到新创建的分支的话，可以通过 */
     git checkout -b <your-branch-name>
    ````
