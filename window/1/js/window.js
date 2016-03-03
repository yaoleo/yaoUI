//原生弹窗 ：alert confirm prompt
// 问题： 阻塞进程 不同浏览器样式不同 不可定制样式
define(['jquery'],function($){
	function  Window(){}

	Window.prototype = {
		alert:function(content,handler){
			var boundingBox = $('<div class = "window_boundingBox"></div>');
			boundingBox.appendTo("body");
			boundingBox.html(content);

			var btn = $('<input type="button" value="确定">');
			btn.appendTo(boundingBox);
			btn.click(function(){
				handler && handler();
				boundingBox.remove();
			})
		},
		confirm: function(){},
		prompt:  function(){},
	}

	return{
		Window:Window
	}

})