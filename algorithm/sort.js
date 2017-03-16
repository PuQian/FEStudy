// 插入排序
var insertSort = function(){
	var A = arguments[0]; 
	// var A = Array.prototype.shift.call(arguments);
	for(var i = 1; i < A.length; i++) {
		var x = A[i];
		for(var j = i - 1; j >= 0 && A[j] > x; j--) {
			A[j+1] = A[j];
		}
		A[j+1] = x;
	}
}

// 快速排序
var quickSort = function(A, low, high){
	if (low < high) {
		var pos = Partition(A, low, high);
		quickSort(A, low, pos - 1);
		quickSort(A, pos + 1, high);
	}
}

// 指针同一方向
// var Partition = function(A, low, high) {
// 	var i = low - 1, j = low, temp;
// 	var x = A[high];
// 	for(j = low; j < high; j++) {
// 		if(A[j] <= x) {
// 			i++;
// 			temp = A[j];
// 			A[j] = A[i];
// 			A[i] = temp;
// 		}
// 	}
// 	temp = A[i+1];
// 	A[i+1] = A[high];
// 	A[high] = temp;
// 	return i + 1;
// }

// 指针一前一后
var Partition = function(A, low, high) {
	var x = A[low];
	while(low < high) {
		while(low < high && A[high] >= x) high--;
		A[low] = A[high];
		while(low < high && A[low] <= x) low++;
		A[high] = A[low];
	}
	A[low] = x;
	return low;
}


// 二路归并排序
var mergeSort = function(A, low, high) {
	if(low < high) {
		var mid = Math.floor((low + high)/2);
		mergeSort(A, low, mid); // 注意不是 mid - 1 !! 否则会出现死循环
		mergeSort(A, mid + 1, high);
		merge(A, low, mid, high);
	}
}

// 合并数组
var merge = function(A, low, mid, high) {
	var B = [];
	for(var i = low; i <= high; i++) {
		B[i] = A[i];
	}
	for(var i = low, j = mid + 1, k = i; i <= mid && j <= high; k++) {
		if(B[i] < B[j]) {
			A[k] = B[i++];
		} else {
			A[k] = B[j++];
		}
	}
	while(i <= mid) A[k++] = B[i++];
	while(j <= high) A[k++] = B[j++];
}