// 使用 call 和 apply 实现继承
function Pet(words) {
  this.words = words;
  this.speak = function() {
    console.log(this.words);
  }
}

function Dog(words) {
  // Dog 继承 Pet 的属性和方法
  Pet.call(this, words);

  // Pet.apply(this, words);
}

var dog = new Dog('hello');
dog.speak();