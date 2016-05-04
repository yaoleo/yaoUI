接口：

瀑布流的父容器
瀑布流的子容器
子容器的列数目
列之间的宽度
点击子容器是否有回调事件

方法：

子容器的内容获取
子容器的内容大小，高度
子容器的位置计算
向父容器中添加子容器
回调事件函数

默认接口如下：
this.cfg = {
        fatherId: "waterfall",      //默认父容器的id
        fallClass: "box",           //默认字容器的类
        columnNum: 4,               //列数 默认值4
        pix: 16,                    //子容器的间距单位px
        isClickShowDetail: true,    //是否有点击回调函数，默认存在
    }

0.1版本，finished。。。2016/5/3