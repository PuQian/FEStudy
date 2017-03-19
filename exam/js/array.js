// 不使用循环，创建一个长度为 5(或者更大) 的数组，每个元素的值等于它的下标
var arr = Array(5).join(",").split(",").map(function(item, index) {
	return index;
})
console.log(arr);

// 实现一个shuffle方法，将数组中的元素随机乱序排列
function shuffle(arr) {
	arr.sort(function(a, b){
		return Math.random() < 0.5 ? 1 : -1;
	});
}