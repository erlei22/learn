// map 一个一个的重新处理一下 
// reduce  每一次的return 都是下一次的temp
// filter
// forEach

let arr1 = [1,2,3,4]

let arr2 = arr1.reduce(function (temp,item,index) {
    console.log(temp);
    return temp+item
})
console.log(arr2);
