Number.prototype.add = function () {
    return this + arguments[0]
}
Number.prototype.substract = function () {
    return this - arguments[0]
}
console.log((10).add(10).substract(2).add(10));

