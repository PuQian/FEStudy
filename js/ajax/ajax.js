// 原生 js 实现 ajax 请求
var ajax = function(params){
	var type = params.type || 'GET';

	var xhr = null;
	if(window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}else if(window.ActiveXObject) {
		xhr = new ActiveXObject(Microsoft.XMLHTTP);
	}

	// 监听
	xhr.readystatechange = function(){
		if(xhr.readyState == 4) {
			if((xhr.status >= 200 && xhr.status < 300) || xhr.)
		}
	}
}