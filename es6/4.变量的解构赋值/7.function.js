// 函数参数的解构赋值
// 1. 函数参数可以解构赋值，解构方法和上面相同。
// 2. 函数参数可以有默认值，有点类似c++函数参数声明时的默认值。

// 【1】函数参数的解构赋值

function addObj({x,y}) {
    console.log(x+y);
    
    return x + y
}

// addObj({x : 1,y : 2})

function addArr([x,y]) {
    console.log(x+y);

    
}
// addArr([3,4])

// 【2】函数参数的默认值
//相当于结构失败拿默认值呗

function show({x=10,y,z=100} = {y:5,z:50}) {
    console.log([x,y,z]);
    
}
show({x:1,y:2,z:3})//就是123，了解

show({x:1 ,y:2})//1 2 不变取外面，z取左边100

show({x:1}) // 1 , undefined ,100
//这个undefined的是为啥呢
show({}) // 10 ,undefined , 100  都是左边

show()//10 , 5 , 50  先右后左

show(1,2,3) // 10 ,undefined , 100  都是左边

show([]) // 10 ,undefined , 100  都是左边

// 总结

//函数结构默认值的时候
// 1.判断是否有参数，无参数先走右边，再走左边
// 2.有参数，先走参数解构，结构失败走左边，右边直接忽略

//all 传参就是覆盖右边







