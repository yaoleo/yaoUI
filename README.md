
# yaoUI
前端组件化初步尝试

## 遮罩弹窗组件：
#### 包括默认接口：
	width: 500, 			/* 默认宽度500px */
	height: 300,			/* 默认高度300px */
	title:"系统消息",		/* 默认标题 */
	content: "",			/* 默认正文 */
	handler: null,			/* 默认无回调函数 */
	hasCloseBtn: false,		/* 默认没有关闭按钮 */
	hasMask: true,			/* 默认有遮罩 */
	isDraggable: true,		/* 默认可以拖动 */
	dragHandle: null,		/* 默认拖动触柄 */
	skinClassName: null,	/* 默认皮肤 */

#### 调用方法：
main.js:
```js
	require(['jquery','window'],function($,w){
		$("#a").click(function(){
			new w.Window().alert({
				title: "提示",
				content: "welcome",
				handler: function(){
							alert("you click the button");
						},
				width:400,
				height:200,
				y:50,
				hasCloseBtn: true,
				skinClassName: "window_skin_a",
				dragHandle: ".window_header",
			});
		});
	})
```
html:
```html
	<link rel="stylesheet" type="text/css" href="css/base.css">
	<link rel="stylesheet" type="text/css" href="css/window.css">
	<script src="js/require.js" data-main="js/main.js"></script>
```


#### 在线演示demo：
http://zhangjingyao.com/static/window/demo.html

