var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

// addEventListener
// 每个 EventEmmiter 最多监听10个事件，不要太多

life.on('event', function(who) {
  console.log('eventOne ' + who + ' action1');
})

life.on('event', function(who) {
  console.log('eventTwo ' + who + ' action2');
})

life.on('event', function(who) {
  console.log('eventThree ' + who + ' action3');
})

life.on('event', function(who) {
  console.log('eventFour ' + who + ' action4');
})

// 执行(返回事件是否被监听过)
var hasListener = life.emit('event', 'obj');

// 获得某个事件的监听的数量
console.log(EventEmitter.listenerCount(life, 'event'));

// 批量移除事件
// life.removeAllListeners('event');