// 把一个字面量对象，变成某个类的实例（注意 prototype 是函数的属性，constructor指向函数本身）
function Type(){}
var a = {};
a = new Type();
a instanceof Type;  // true

