// 防抖


const debounce = (fn = () => { }, config) => {
    const { wait = 1000, immediate = false } = config
    let timer = null

    return function () {
        if (!timer && immediate) {
            fn()
            timer = setTimeout(() => {
                timer = null
            }, wait)
        } else {
            clearTimeout(timer)
            timer = setTimeout(fn, wait)
        }
    }

}
export default debounce
