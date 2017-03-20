// 请编写一个JavaScript 函数toRGB，它的作用是转换CSS中常用的颜色编码
// 例子：alert(toRGB("#0000FF"));  // 输出 rgb(0, 0, 255)

// 方法一：目前的写法（使用 parseInt + 数组方法）
function toRGB(value){
	if(value[0] != '#' || value.length != 7) {
		return value;
	}
	var tempArr = [];
	for(var i = 1; i <= value.length; i = i + 2) {
		tempArr.push(parseInt(value[i] + value[i+1], 16));
	}
	console.log(hehe);
	return 'rgb(' + hehe.join(', ') + ')';
}
console.log(toRGB('#0000FF'));