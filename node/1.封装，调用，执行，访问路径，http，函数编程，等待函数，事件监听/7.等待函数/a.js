function sleep(miliSeconds) {
    let startTime = new Date().getTime()
    while (new Date().getTime() < startTime + miliSeconds);  //等待参数的时间
        console.log(1);
    
}
sleep(3000)

// 这个真的是学到了，以前真的是不知道~