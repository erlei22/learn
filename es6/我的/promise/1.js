// promise 承诺

// 异步 ，同时进行多个操作
// 同步 ， 一个一个过，队列
let p = new Promise(function (resolve,reject) {
    // 异步代码
})


//所有的都完成 resolve和reject都可以
Promise.all( p1 ,p2, p4 ).then(function (resList) {
    let [res1,res2,res3] = resList
    console.log(res1,res2,res3);
    console.log("全部成功了才会到这里");
    
},function () {
    console.log("只要有一个失败了就会到这里");
    
})



//只要有一个成功就 =》 
// 不管有没有失败

Promise.race()