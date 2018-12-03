//网上找的例子看一下
// 5. 如果一开始this找不到   会去找原型链  然后再是window
function Parent() {
    this.a = 1;
    this.b = [1, 2, this.a];
    this.c = { demo: 5 };
    this.show = function () {
        console.log(this.a , this.b , this.c.demo );
    }
}
function Child() {
this.a = 2;
this.change = function () {
 this.b.push(this.a);
 this.a = this.b.length;
 this.c.demo = this.a++;
}
}
Child.prototype = new Parent(); 
// console.log(Child);

var parent = new Parent();
var child1 = new Child();
var child2 = new Child();
child1.a = 11;
child2.a = 12;
// parent.show();
child1.show();
child2.show();
child1.change();
child2.change();
parent.show();
child1.show();
child2.show();