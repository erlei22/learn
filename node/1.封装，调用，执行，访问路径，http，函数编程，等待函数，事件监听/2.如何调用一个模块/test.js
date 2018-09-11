function test(x , y = '未输入') { 
    console.log(`x:${x},y:${y}`);
 }

 exports.test1 = test ; // 封装模块的时候   
 //左边是外面的名字   右边是里面的名字