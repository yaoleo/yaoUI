require.config({
	paths:{
		jquery:'jquery-1.12.1.min'
	}
})

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
		});
	});
})
//定制皮肤