window.onload = function () {
	var leftInBtn   = document.getElementById('left-in');
	var leftOutBtn  = document.getElementById('left-out');
	var rightInBtn  = document.getElementById('right-in');
	var rightOutBtn = document.getElementById('right-out');
	var result = document.getElementById('result');

	function getValue(){
		var inputValue  = document.getElementById('value').value.trim();
		if(inputValue !== ""){
			return inputValue;
		}else{
			return false;
		}
	}
	function addEvent(element, type, handler,method) {
        if (element.addEventListener) {
            element.addEventListener(type, function(){handler(method)}, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, function(){handler(method)});
        } else {
            element["on" + type] = function(){handler(method)};
        }
    }

    function createNode(value){
    	var res="";
	    res+="<div class='box'>"+value+"</div>";
	    return res;
	}
	var nodeBox = [];
	function addBox(node,method){
		switch(method){
			case 'left-in':  nodeBox.unshift(node);return nodeBox;
			case 'left-out': nodeBox.shift(node);return nodeBox;
			case 'right-in': nodeBox.push(node);return nodeBox;
			case 'right-out': nodeBox.pop(node);return nodeBox;
		}
		
	}
	function showResult(box){
		var res="";
	    for(var i= 0,len=box.length;i<len;i++){
	        res+="<div class='res-box' data-index="+ i.toString()+">"+box[i].toString()+"</div>";
	    }
	    result.innerHTML=res;
	}
    function callback(method){
    	value = getValue();
    	if(value){
    		node = createNode(value);
    		nodeBox = addBox(node,method);
    		console.log(nodeBox)
    		showResult(nodeBox);
    	}
    }
    function init(){
    	addEvent(leftInBtn, "click", callback,'left-in');
    	addEvent(leftOutBtn, "click", callback,'left-out');
    	addEvent(rightOutBtn, "click", callback,'right-out');
    	addEvent(rightInBtn, "click", callback,'right-in');
    }
    init();
    
} 