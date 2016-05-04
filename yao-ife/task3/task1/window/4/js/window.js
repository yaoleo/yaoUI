//原生弹窗 ：alert confirm prompt
// 问题： 阻塞进程 不同浏览器样式不同 不可定制样式
define(['jquery'],function($){
	function Window(){
		this.cfg = {
			width: 500,
			height: 300,
			title:"系统消息",
			content: "",
			handler: null,
			hasCloseBtn: false,
			skinClassName: null,
		}
	}

	Window.prototype = {
		alert:function(cfg){
			var CFG = $.extend(this.cfg, cfg);
			
			var boundingBox = $('<div class = "window_boundingBox">'+
									'<div class = "window_header">'+ CFG.title + '</div>'+
									'<div class = "window_body">' + CFG.content +'</div>'+
									'<div class = "window_footer"><input type="button" value="确定";></div>'+
									'</div>'
								);
			boundingBox.appendTo("body");
			btn=boundingBox.find(".window_footer")
			btn.click(function(){
				CFG.handler && CFG.handler();
				boundingBox.remove();
			});

			boundingBox.css({
				width: CFG.width+"px",
				height:CFG.height+"px",
				left: (CFG.x || (window.innerWidth-CFG.width)/2)+"px",
				top:(CFG.y || (window.innerHeight() - CFG.height)/2)+"px",
			
			});
			if(CFG.hasCloseBtn){
				var closeBtn = $('<span class="window_closeBtn">X</span>');
				closeBtn.appendTo(boundingBox);
				closeBtn.click(function() {
					boundingBox.remove();
				});
			}
			if(CFG.skinClassName){
				boundingBox.addClass(CFG.skinClassName);
			}
		},
		confirm: function(){},
		prompt:  function(){},
	}

	return{
		Window:Window
	}

})