// 将 <ul><li>第1行</li><li>第1行</li>...<li>第10行</li></ul>插入到body中
// 注意性能

function insertUl(){
	var lis = '';
	var ul = document.createElement("ul");

	for(var i = 1; i <= 10; i++) {
		lis += '<li>第' + i + '行</li>';
	}

	ul.innerHTML = lis;
	document.body.appendChild(ul);
}


