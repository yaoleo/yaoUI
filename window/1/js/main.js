require.config({
	paths:{
		jquery:'jquery-1.12.1.min'
	}
})

require(['jquery','window'],function($,w){
	
	$("#a").click(function(){
		new w.Window().alert("welcome",function(){
			alert("you click the button");
		});
	}) 
})
//问题 ： css 都是硬编码 死的