/*
突然想到Vue的
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})

这个第一个state 默认参数是怎么做的

 */

let Store = (options) => {
    this.state =  options.state
    this.mutations =  options.mutations
}
function A(options) {
    this.name = 1
    let x = this.name
    this.obj = {
        increment (x,...args) {
        // 变更状态
        x 
        console.log(x,args);
        
      }
    }
}
const aa = new A()
options = {
    state: {
      count: 1
    },
    mutations: {
      increment () {
        // 变更状态
       
        console.log(1);
        
      }
    },
    test(){
        console.log(1);
        
    }
  }

  const store = new Store(options)