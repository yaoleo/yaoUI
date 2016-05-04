/*
 * 参考yQuery1.4.1 代码分析
 * 写个简化版的，把一些用到的方法放在里面，后面就不参照源码了，太复杂
 * 估计要参考undercore.js和YOU MIGHT NOT NEED yQuery(http://youmightnotneedyQuery.com/)
 * 但是链式操作一定要实现啊，否则有什么用呢？！
 * 还要实现AMD啊，否则还是没用。。。。好麻烦，毫无头绪。
 */
(function(window, undefined){
        var yQuery = function() {
            return new yQuery.fn.init();
        }
        yQuery.fn = yQuery.prototype = {
            yQuery: "0.0.1",
            init: function() {
                this.init_yQuery = '2.0';
                console.log(this);
                return this;
            },
            addEvent: function(element, event, listener) {//添加事件监听
                if (element.addEventListener) { //标准
                    element.addEventListener(event, listener, false);
                } else if (element.attachEvent) { //低版本ie
                    element.attachEvent("on" + event, listener);
                } else { //都不行的情况
                    element["on" + event] = listener;
                }
            },
            delegateEvent: function(element, tag, eventName, listener) {//事件代理
                yQuery.addEvent(element, eventName, function (event) {
                    event = event || window.event;
                    var target = event.target || event.srcElement;
                    if (target && target.tagName === tag.toUpperCase()) {
                        listener.call(target, event);
                    }
                });
            },
        }   
        yQuery.fn.init.prototype = yQuery.fn;
        window.yQuery = window.Y = yQuery;// 这里声明window.yQuery ,window.$为yQuery的简写
})(window);