// 了解 call 和 apply 的用法
var pet = {
  words: 'hello',
  speak: function(say) {
    console.log(say + ' ' + this.words);
  }
}

// pet.speak('Speak');

var dog = {
  words: 'dog'
}

// 改变 pet 里的 this，让其指向 dog
pet.speak.call(dog, 'Speak'); 