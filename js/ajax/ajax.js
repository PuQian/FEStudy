// 原生 js 实现 ajax 请求
var ajax = function(params){
	params = params || {};
	params.data = params.data || {};

	// 判断是 ajax 请求还是 jsonp 请求
	var isJson = params.jsonp ? jsonp(params) : json(params);

	// ajax 请求
	function json(params) {
		var type = (params.type || 'GET').toUpperCase();
		
		// 实例化 XMLHttpRequest 对象
		var xhr = null;
		if(window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		}else if(window.ActiveXObject) {  // IE6 及一下版本
			xhr = new ActiveXObject(Microsoft.XMLHTTP);
		}

		// 监听
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4) {
				if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
					var response = '';

					// 判断接受数据的内容类型
					var type = xhr.getResponseHeader('Content-Type');

					if (type.indexOf('xml') != -1 && xhr.responseXML) {  // xml 数据类型
						response = xhr.responseXML;
					} else if (type === 'application/json') { // json 响应
						response = JSON.parse(xhr.responseText);
					} else {  // 字符串响应
						response = xhr.responseText;
					}
					params.success(response);
				} else { // 调用失败回调函数
					params.error(status);
				}
			}
		}

		// 连接和传输数据
		if(params.type === 'GET') {  // get 请求，参数：请求方式、请求地址，是否异步请求
			xhr.open(params.type, params.url + '?' + params.data, true);
			xhr.send(null);
		} else {  // post 请求
			xhr.open(params.type, params.url, true);
			// 指定提交时的内容类型
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'); 
			xhr.send(params.data);
		}
	}

	// jsonp 请求
	function jsonp(params) {
		var callbackName = params.jsonp;   // jsonpCallback 函数名
		var head = document.getElementsByTagName('head')[0]; 

		// 创建 script 标签
		var script = document.createElement('script');
		head.appendChild(script);

		// 设置传递给后台的回调函数参数名
		params.data['callback'] = callbackName;
		// 格式化要传递的数据 data
		var data = formatParams(params.data);

		// 创建 jsonp 回调函数（服务器返回参数中调用 jsonPcallback函数）
		window[callbackName] = function(json) {
			head.removeChild(script);
			clearTimeout(script.timer);
			window[callbackName] = null;
			params.success(json);
		}

		// 发送请求
		console.log(params.url);
		script.src = params.url + '?' + data;

		// 超时处理

	}
}

//格式化参数
function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }
    return arr.join('&');
}