# node与文件
* 首先需要模块fs

## 1.读取文件readFile
异步
```node
 fs.readFile(filename, [encoding], [callback(err, data)])
 ```

*   读取文件 (文件名，编码格式，回调函数)     
*   回调有两个参数（第一个是error，第二个是data。文件内容）

同步
```
readFileSync(文件名, 文件编码)
// 少个回调函数就是同步了???
```

error最好try catch
## 2.文件的打开
```
    fs.open(path, flags, [mode], [callback(err, fd)])
```
* path 是路径 
* flags 是打开方式
```
    追加是啥？
```

* r :以`读取`模式打开文件
* r+:以`读写`模式打开文件
* w :以`写入`模式打开文件，如果文件不存在则创建
* w+:以`读写`模式打开文件，如果文件不存在则创建
* a :以`追加`模式打开文件，如果文件不存在则创建
* a+:以`读取追加`模式打开文件，如果文件不存在则创建
* error~表示错误信息     

```
    下面两个不懂
```
* mode是权限 默认0666  6表示4+2；根据推测，1执行，2写，4读，他们的和就是权限；没懂
* fd表示文件描述符：非负整数，表示操作系统内核为当前进程所维护的打开文件的记录表索引。 


## 3.fs.read文件的读取
```
fs.read(fd, buffer, offset, length, position, callback(err, bytesRead, buffer));

```

没懂 先按照水哥的代码走吧
```
其作用是从fs.open的回调函数中的文件描述符fd中读取数据，并写入buffer指向的缓冲区对象。

offset是buffer写入的偏移量；
length是要从文件中读取的字节数；

position是文件读取的起始位置（当为null时，则从当前文件指针的位置读取）；

回调函数传递的bytesRead表示读取的字节数；buffer表示缓冲区对象；
```