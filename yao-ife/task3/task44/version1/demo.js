window.onload = function(){
	function init(){
		var waterfall = new Waterfall();
		waterfall.initColumn()
		
		waterfall.addContent();
		// add scroll event
		function loadMore() {
		  window.onscroll = function() {
		    var screenHeight = (document.documentElement.scrollTop || document.body.scrollTop) +(document.documentElement.clientHeight || document.body.clientHeight);
		    var container = waterfall.columns[waterfall.getMinHeightIndex()];
		    var containerHeight = container.offsetTop  + container.offsetHeight;
		    if (containerHeight < screenHeight) {
		      waterfall.addContent();
		    }
		  }
		}
		loadMore();
	}
	
	init();	
	
}


