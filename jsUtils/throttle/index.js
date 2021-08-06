// 节流
// 比如支付按钮，用户手抖了连点了两次，那么实际上应该只付一次的钱
// 比如onPageScroll

const throttle = (fn, wait = 1000) => {
    let lock = false

    return function () {
        if (!lock) {
            lock = true
            fn()
            setTimeout(() => {
                lock = false
            }, wait)
        }
    }

}
export default throttle