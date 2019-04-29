
async function test1(){
    console.time('a');
    const run1 = await go(1000)
    console.log(1)

    const run2 = await go(2000)
    console.log(2)

    const run3 = await go(3000)
    console.log(3)
    console.timeEnd('a');

}
async function test2(){
    console.time('a');
    const all = Promise.all( [ await go(1000) ,  await go(2000) ,  await go(1001)] ).then( () => {
        console.timeEnd('a');
    })
}
 function go(ms){
    return new Promise((resolve) => {
     setTimeout(() => {
        console.log(ms)
        resolve()
    }, ms)
    })
}
test2()
// async function timeout(ms) {
//     await new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }
  
//   async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value);
//   }
  
//   asyncPrint('hello world', 50);