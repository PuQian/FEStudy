// 不使用循环，创建一个长度为 5 (或者更大) 的数组，每个元素的值等于它的下标
var arr = Array(5).join(",").split(",").map(function(item, index) {
	return index;
})
console.log(arr);

// 实现一个shuffle方法，将数组中的元素随机乱序排列
// 方法一：利用 sort 函数（性能不是特别好）
function shuffle(arr) {
	arr.sort(function(a, b){
		return Math.random() < 0.5 ? 1 : -1;
	});
}

// 有一个长度为 100 的数组，请以优雅的方式求出该数组的前 10 各元素之和
function sum(arr){
	return arr.slice(0, 10).reduce(function(prev, next) {
		return prev + next;
	})
}
console.log(sum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));