var classModule = require('./class');

// exports 挂载模块暴露的属性和方法
// exports.add = function(classes) {
//   classses.forEach(function(item, index) {
//     var _class = item;
//     var teacherName = item.teacherName;
//     var students = item.students;

//     classModule.add(teacherName, students);  
//   })
// }

classModule.add('Alice', ['Bob', 'Jack']);
