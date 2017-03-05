function learn(something) {
  console.log(something);
}

function we(callback, something) {
  something += ' is cool';
  callback(something); 
}

// 具名函数调用
we(learn, 'Nodejs');

// 匿名函数调用
we(function(something) {
  console.log(something);
}, 'Jade');