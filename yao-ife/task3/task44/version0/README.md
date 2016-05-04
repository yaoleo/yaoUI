没做过，没时间，只能看了一下Masonry插件的用法。

1.
把每个小内容块放在一个拥有相关类的容器里(.box)
然后把所有的内容块放在一个大的容器里(#masonry)
这里我们把内容块图片放在一个拥有 .box 类的 <div> 标签里
用 #masonry 和 .box 类来触发使用瀑布流

2.
用jquery的话：
$(function() {
    var $container = $('#masonry');
    $container.imagesLoaded(function() {
        $container.masonry({
                itemSelector: '.box',
                gutter: 20,
                isAnimated: true,
            });
     });
});
解释：这里我们首先定位想使用瀑布流的大容器是什么
这里就是带有 #masonry ID 的 <div> 标签
在 var $container = $('#masonry'); 
这行代码中定义。
然后我们还要说明瀑布流里的每个内容块容器上共同的类是什么，
这里就是带有 .box 类的 <div> 标签，
在itemSelector : '.box', 这行代码中定义

3.参考下来结合要求
采用绝对布局
大概需要：

接口：

瀑布流的父容器
瀑布流的子容器
子容器的列数目
（列之间的宽度，父容器的padding）
点击子容器是否有回调事件

方法：

子容器的内容获取
子容器的内容大小，高度
子容器的位置计算
向父容器中添加子容器
回调事件函数


0.0版本，非常简单，已经完成。。。2016/5/2