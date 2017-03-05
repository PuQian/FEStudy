// var pet = {
//   words: 'hello',
//   speak: function() {
//     console.log(this.words);    // hello
//     console.log(this === pet);  // true
//   }
// }

// pet.speak();



// function pet(words) {
//   this.words = words;

//   console.log(this.words);       // hello
//   console.log(this === global);  // true
// }

// pet('hello');


function Pet(words){
  this.words = words;
  this.speak = function() {
    console.log(this.words);  // hello
    console.log(this instanceof Pet);  // true
  }
}

var car = new Pet('hello');

car.speak();