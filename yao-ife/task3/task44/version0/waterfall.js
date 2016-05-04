function Waterfall(){
	this.cfg = {
		fatherId: "waterfall",  //默认父容器的id
		fallClass: "box",		//默认字容器的类
		columnNum: 4,			//列数 默认值4
		pix: 16,                //子容器的间距单位px
	}
}

Waterfall.prototype = {
	initColumn: function(cfg) { //添加列
      // create column div
      console.log("initColumn");
      this.columns = [];
      cfg = extend({},this.cfg,cfg); //覆盖默认值
      columnNum = cfg.columnNum;

      for (var i = 0; i < columnNum; i++) {
        var columnDiv = document.createElement('div');
        columnDiv.style.width = (100/columnNum) + '%';
        addClass(columnDiv,'waterfallColumn');
        this.columns.push(columnDiv);
        document.getElementById(cfg.fatherId).appendChild(columnDiv);
      }
    },

    getMinHeightIndex: function() {

		var min = this.columns[0].clientHeight;
		var index = 0;
		for (var i = 0; i < this.columns.length; i++) {
			if (this.columns[i].clientHeight < min) {
			  min = this.columns[i].clientHeight;
			  index = i;
			}
		}
			return index;
		},

	createContent: function(cfg){ //添加子容器
		console.log("createContent");
		cfg = extend({},this.cfg,cfg); //覆盖默认值

		var content = document.createElement("div");
		addClass(content,cfg.fallClass);
		document.getElementById(cfg.fatherId).appendChild(content);
		content.style.height = (Math.random()*100+100)+"px";
		content.style.margin = (cfg.pix/2) +"px";

		var img = document.createElement("img");
		content.appendChild(img);
		return content;

		//this.addContent(cfg,content,position);
	},

	addContent: function(){
		console.log("addContent");
		
		//console.log(cfg.contents.row1s);
		for (var i = 0; i < 10; i++) {
			var c = this.createContent();
			var num = document.createElement("div");
			num.innerHTML = i;
			c.appendChild(num);
			//c.innerHTML = i;
			var index = this.getMinHeightIndex();
	        var column = this.columns[index];
	        console.log("index ",index,"c ",c);
	        column.appendChild(c);
		}
	},

};