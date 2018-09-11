// 【4】会报错的情况
//右边不是数组 
// 右边是不可遍历解构
let [foo] = 1;    //number
let [foo] = false;    //boolean
let [foo] = NaN;    //NaN
let [foo] = undefined;    //undefined
let [foo] = null;    //null
let [foo] = {};    //object