//  dom结构不就是tree

// 1. 深度优先 
//    就是先往儿子走
//    儿子到底了，找这个儿子爸爸的兄弟
//    兄弟继续走兄弟的儿子，就是上面的递归

const fa = document.getElementById("fa")
const deepFirst1 = (fa, list) => {
    if (fa?.children?.length > 0) {

        for (let i = 0; i < fa.children.length; i++) {
            const son = fa.children[i];
            list.push(son)
            deepFirst1(son, list)
        }
    }

}
const list = []
deepFirst1(fa, list)
console.log('%c 🥛 temp: ', 'font-size:20px;background-color: #42b983;color:#fff;', list);



const deepFirst2 = (fa) => {
    let temp = []
    if (fa?.children?.length > 0) {
        for (let i = 0; i < fa.children.length; i++) {
            const son = fa.children[i];
            temp.push(son)
            temp = temp.concat(deepFirst2(son))
        }
    }
    return temp
}

const deep2 = deepFirst2(fa)
console.log('%c 🍞 deep2: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', deep2);



// 使用 stack = [] 来模拟递归堆栈 
const deepFirst3 = (fa) => {
    let stack = [fa]
    let temp = []
    while (stack.length > 0) {
        const item = stack.pop()
        if (item?.children?.length > 0) {
            for (let i = 0; i < item.children.length; i++) {
                const son = item.children[i];
                temp.push(son)
                stack.shift(son)
            }
        }
    }

    console.log('%c 🍾 deepFirst3: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', temp);
    return temp
}

deepFirst3(fa)

