//1.标准情况
function a1() {
    var [a,b,c] = [1,2,3]
    console.log(a,b,c);
}

// 【2】左右结构相同，但有些位置没有对应的值；

function a2_1() {
    var [a,,c] = [1,2,3]
    console.log(a,c);
    //          1,3
}
// a2_1()


function a2_2() {
    var [a,b,c] = [1,,3]
    console.log(a,b,c);
    //      1,undefined,3
}


// 【3】数组中嵌套数组

function a3_1() {
    //数组嵌套  
    var [a, [b, c], d]= [1, [2, 3], 4];
    console.log(a,b,c,d);
}
// 同2

function a3_2() {
    var [a, b, c]= [1, [2, 3], 4];
    //      b=[2,3]
}

function a3_3() {
    var [a, [b, c], d]= [1, 2, 3];
    // 报错
}

//扩展运算符    ...
function a3_end() {
    var [a, ...b]= [1, 2, 3, 4];
    console.log('a:', a , ' b:' , b );
    
}
a3_end()