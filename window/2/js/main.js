require.config({
	paths:{
		jquery:'jquery-1.12.1.min'
	}
})

require(['jquery','window'],function($,w){
	
	$("#a").click(function(){
		new w.Window().alert("welcome",function(){
			alert("you click the button");
		},{width:400,height:200,y:50,}
		);
	}) 
})
//问题 ：接口格式混乱