// 1.我的es5的面向对象还需要再看一下


function User(name,pas) {
    this.name = name
    this.pas = pas
}

User.prototype.showName = function () {
    console.log(this.name);
}

User.prototype.showPas = function () {
    console.log(this.pas);
}

var u1 = new User('erlei','123')

u1.showName()

u1.showPas()