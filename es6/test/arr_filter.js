// map 一个一个的重新处理一下              映射
// reduce  每一次的return 都是下一次的temp 累计
// filter  每次通过true false 来决定返回值 筛选
// forEach  和for循环吗，没啥区别把......

let arr1 = [1,2,3,4,5,6,7,8]

let arr2 = arr1.filter( item => item%3 == 0)
console.log(arr2);
