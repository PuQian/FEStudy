//////// 查找最小的 k 个元素？
function findKmin(arr){
	for(var i = 0; i < arr.length; i++) {

	}
}

//////// 翻转句子中单词的顺序
// 输入 I am a student. ，输出 student. a am I
function reverseWords(str){
	var arr = str.split(" ");
	return arr.reverse().join(" ");
}
console.log(reverseWords("I am a student.")); 


///////// 在排序数组中查找和为给定值的两个数字
function FindNumbersWithSum(arr, num) {
	var i = 0, j = arr.length - 1;
	var res = [];
	while(i < arr.length - 1 && j > 0) {
		var sum = arr[i] + arr[j];
		if (sum > num) {
			j--;
		} else if (sum < num) {
			i++;
		} else {
			res.push(arr[i]);
			res.push(arr[j]);
			return res;
		}
	}
	return res;
}
console.log(FindNumbersWithSum([1, 2, 3, 4, 5, 6, 7], 10));


/////// 求字符串中第一个只出现一次的字符
// 方法一：js方法
function FirstNotRepeatingChar(str) {
	for(var i = 0; i < str.length; i++) {
		if(str.indexOf(str[i]) === i && str.lastIndexOf(str[i]) === i) {
			return str[i];
		}
	}
	return "";
}
console.log(FirstNotRepeatingChar("abcabcdferdfe"));

// 方法二：类哈希算法（注意 Array 可以使用字符或者字符串作为下标）
function FirstNotRepeatingChar(str) {
	var arr = [];
	for(var i = 0; i < str.length; i++) {
		arr[str[i]] = arr[str[i]] === undefined ? 1 : ++arr[str[i]];
	}
	console.log("哈希之后的数组arr为：");
	console.log(arr);
	for(i = 0; i < str.length; i++) {
		if(arr[str[i]] === 1){
			return str[i];
		}
	}
}
console.log(FirstNotRepeatingChar("abcabcdferdfe"));


/////// 求 Fibonacci 数列的第 n 项
// 方法一：普通的递归
function Fibonacci(n) {
	if (n == 0) {
		return 0;
	} else if(n == 1) {
		return 1;
	} else {
		return arguments.callee(n-1) + arguments.callee(n-2);
	}
}
console.log(Fibonacci(5));

// 方法二：优化的方法？


/////// 反转链表
var reverseList = function(head) {
	var pre = null, cur = head, next;
	while (cur != null) {
		next = cur.next;
		cur.next = pre;
		pre = cur;
		cur = next;
	}
	return pre;
} 


///// 左旋转字符串
// 描述：将字符串的前 n 位移动到字符串的末尾
var LeftRotateString = function(str, n) {
	return str.substr(n).concat(str.substr(0, n));
}
console.log(LeftRotateString("abcdef", 2));


///// 整数的二进制表示中 1 的个数
var NumberOfOne = function(num) {
	var e = num.toString(2);
	console.log(e);
	var res = 0;
	for(var i = 0; i < e.length; i++) {
		if(e[i] === '1') {
			res++;
		}
	}
	return res;
}
console.log(NumberOfOne(122));

///// 输出和为 n 的连续正数序列


///// 从尾到头输出链表
var printList = function(head) {
	if (head != null) {
		if(head.next != null) {
			printList(head.next);
		}
		console.log(head.val);
	}
}


///// 找出数组中两个只出现一次的数字?
var findNumAppearOnce = function(arr){
	var temp = arr[0];
	for(var i = 1; i < arr.length; i++) {
		temp = temp ^ arr[i];
	}
	console.log(temp);
}
console.log(findNumAppearOnce([1,2,3,4,5,4,3,2,1,6]));


///// 在字符串中删除特定的字符 ? 正则表达式
var deleteChars = function(str1, str2) {
	for(var i = 0; i < str2.length; i++) {

	}
	return str1;
}
console.log(deleteChars("They are students.", "aeiou"));


///// 数组中出现次数超过一半的数字
var moreThanHalfNum = function(num){
	var temp = num[0], count = 1;
	for(var i = 1; i < num.length; i++) {
		if(num[i] === temp) {
			count++;
		} else {
			if(--count === 0) {
				temp = num[i];
				count = 1;
			}
		}
	}
	return temp;
}
console.log(moreThanHalfNum([1,2,2,1,9,2,3,4,2,2,2]));


///// 顺时针打印矩阵