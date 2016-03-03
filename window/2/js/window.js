//原生弹窗 ：alert confirm prompt
// 问题： 阻塞进程 不同浏览器样式不同 不可定制样式
define(['jquery'],function($){
	function Window(){
		this.cfg = {
			width: 500,
			height: 300,
		}
	}

	Window.prototype = {
		alert:function(content,handler,cfg){
			var boundingBox = $('<div class = "window_boundingBox"></div>');
			boundingBox.appendTo("body");
			boundingBox.html(content);

			var btn = $('<input type="button" value="确定">');
			btn.appendTo(boundingBox);
			btn.click(function(){
				handler && handler();
				boundingBox.remove();
			});

			$.extend(this.cfg,cfg);//两个字典 同名键值替换
			boundingBox.css({
				width: this.cfg.width+"px",
				height:this.cfg.height+"px",
				left: (this.cfg.x || (window.innerWidth-this.cfg.width)/2)+"px",
				top:(this.cfg.y || (window.innerHeight() - this.cfg.height)/2)+"px",
			
			});
		},
		confirm: function(){},
		prompt:  function(){},
	}

	return{
		Window:Window
	}

})