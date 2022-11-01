(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{451:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"day07-web-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#day07-web-apis"}},[t._v("#")]),t._v(" "),s("strong",[t._v("day07 - Web APIs")])]),t._v(" "),s("p",[s("strong",[t._v("学习目标:")])]),t._v(" "),s("ol",[s("li",[t._v("能够写出移动端触屏事件")]),t._v(" "),s("li",[t._v("能够写出常见的移动端特效")]),t._v(" "),s("li",[t._v("能够使用移动端开发插件开发移动端特效")]),t._v(" "),s("li",[t._v("能够使用移动端开发框架开发移动端特效")]),t._v(" "),s("li",[t._v("能够写出 sessionStorage 数据的存储以及获取")]),t._v(" "),s("li",[t._v("能够写出 localStorage 数据的存储以及获取")]),t._v(" "),s("li",[t._v("能够说出它们两者的区别")])]),t._v(" "),s("h2",{attrs:{id:"_1-1-触屏事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-触屏事件"}},[t._v("#")]),t._v(" "),s("strong",[t._v("1.1. 触屏事件")])]),t._v(" "),s("h3",{attrs:{id:"_1-1-1-触屏事件概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-触屏事件概述"}},[t._v("#")]),t._v(" 1.1.1 触屏事件概述")]),t._v(" "),s("p",[t._v("移动端浏览器兼容性较好，我们不需要考虑以前 JS 的兼容性问题，可以放心的使用原生 JS 书写效果，但是移动端也有自己独特的地方。比如触屏事件 touch（也称触摸事件），Android 和 IOS 都有。touch 对象代表一个触摸点。触摸点可能是一根手指，也可能是一根触摸笔。触屏事件可响应用户手指（或触控笔）对屏幕或者触控板操作。")]),t._v(" "),s("p",[t._v("常见的触屏事件如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/anchuanyuan/TuChuangForITX/main/image/202007/06/193039-291125.png",alt:"图片1"}})]),t._v(" "),s("h3",{attrs:{id:"_1-1-2-触摸事件对象-touchevent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-触摸事件对象-touchevent"}},[t._v("#")]),t._v(" 1.1.2 触摸事件对象（TouchEvent）")]),t._v(" "),s("p",[t._v("TouchEvent 是一类描述手指在触摸平面（触摸屏、触摸板等）的状态变化的事件。这类事件用于描述一个或多个触点，使开发者可以检测触点的移动，触点的增加和减少，等等")]),t._v(" "),s("p",[t._v("touchstart、touchmove、touchend 三个事件都会各自有事件对象。")]),t._v(" "),s("p",[t._v("触摸事件对象重点我们看三个常见对象列表：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/anchuanyuan/TuChuangForITX/main/image/202007/06/193040-613053.png",alt:"图片2"}})]),t._v(" "),s("p",[s("strong",[t._v("因为平时我们都是给元素注册触摸事件，所以重点记住 targetTocuhes")])]),t._v(" "),s("h3",{attrs:{id:"_1-1-3-移动端拖动元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-移动端拖动元素"}},[t._v("#")]),t._v(" 1.1.3  移动端拖动元素")]),t._v(" "),s("ol",[s("li",[t._v("touchstart、touchmove、touchend 可以实现拖动元素")]),t._v(" "),s("li",[t._v("但是拖动元素需要当前手指的坐标值 我们可以使用  targetTouches[0] 里面的pageX 和 pageY")]),t._v(" "),s("li",[t._v("移动端拖动的原理：    手指移动中，计算出手指移动的距离。然后用盒子原来的位置 + 手指移动的距离")]),t._v(" "),s("li",[t._v("手指移动的距离：  手指滑动中的位置 减去  手指刚开始触摸的位置")])]),t._v(" "),s("p",[t._v("拖动元素三步曲：")]),t._v(" "),s("p",[t._v("（1） 触摸元素 touchstart： 获取手指初始坐标，同时获得盒子原来的位置")]),t._v(" "),s("p",[t._v("（2） 移动手指 touchmove： 计算手指的滑动距离，并且移动盒子")]),t._v(" "),s("p",[t._v("（3） 离开手指 touchend:")]),t._v(" "),s("p",[s("strong",[t._v("注意： 手指移动也会触发滚动屏幕所以这里要阻止默认的屏幕滚动 e.preventDefault();")])]),t._v(" "),s("h2",{attrs:{id:"_1-2-移动端常见特效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-移动端常见特效"}},[t._v("#")]),t._v(" 1.2. 移动端常见特效")]),t._v(" "),s("h3",{attrs:{id:"_1-2-1-案例-移动轮播图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-案例-移动轮播图"}},[t._v("#")]),t._v(" 1.2.1 案例: 移动轮播图")]),t._v(" "),s("p",[s("code",[t._v("移动端轮播图功能和基本PC端一致。")])]),t._v(" "),s("ol",[s("li",[t._v("可以自动播放图片")]),t._v(" "),s("li",[t._v("手指可以拖动播放轮播图")])]),t._v(" "),s("h3",{attrs:{id:"_1-2-2-案例分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-案例分析"}},[t._v("#")]),t._v(" 1.2.2. 案例分析:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("自动播放功能")])]),t._v(" "),s("li",[s("p",[t._v("开启定时器")])]),t._v(" "),s("li",[s("p",[t._v("移动端移动，可以使用translate 移动")])]),t._v(" "),s("li",[s("p",[t._v("想要图片优雅的移动，请添加过渡效果"),s("img",{attrs:{src:"images%5CwebAPI%E7%AC%AC7%E5%A4%A91551795152.jpg",alt:"webAPI第7天1551795152"}})])]),t._v(" "),s("li",[s("p",[t._v("自动播放功能-无缝滚动")])]),t._v(" "),s("li",[s("p",[t._v("注意，我们判断条件是要等到图片滚动完毕再去判断，就是过渡完成后判断")])]),t._v(" "),s("li",[s("p",[t._v("此时需要添加检测过渡完成事件  transitionend")])]),t._v(" "),s("li",[s("p",[t._v("判断条件：如果索引号等于 3 说明走到最后一张图片，此时 索引号要复原为 0")])]),t._v(" "),s("li",[s("p",[t._v("此时图片，去掉过渡效果，然后移动")])]),t._v(" "),s("li",[s("p",[t._v("如果索引号小于0， 说明是倒着走， 索引号等于2")])]),t._v(" "),s("li",[s("p",[t._v("此时图片，去掉过渡效果，然后移动")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/anchuanyuan/TuChuangForITX/main/image/202007/06/193048-206572.jpeg",alt:"webAPI第7天1551795483"}})])])]),t._v(" "),s("h2",{attrs:{id:"_1-2-3-classlist-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-classlist-属性"}},[t._v("#")]),t._v(" 1.2.3 classList 属性")]),t._v(" "),s("p",[t._v("classList属性是HTML5新增的一个属性，返回元素的类名。但是ie10以上版本支持。")]),t._v(" "),s("p",[t._v("该属性用于在元素中添加，移除及切换 CSS 类。有以下方法")]),t._v(" "),s("p",[s("strong",[t._v("添加类：")])]),t._v(" "),s("p",[t._v("element.classList.add（’类名’）；")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("focus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'current'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("移除类：")])]),t._v(" "),s("p",[t._v("element.classList.remove（’类名’）;")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("focus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'current'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("切换类：")])]),t._v(" "),s("p",[t._v("element.classList.toggle（’类名’）;")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("focus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toggle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'current'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("code",[t._v("注意:以上方法里面，所有类名都不带点")])]),t._v(" "),s("h3",{attrs:{id:"_1-2-4-案例分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-案例分析"}},[t._v("#")]),t._v(" 1.2.4. 案例分析")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("小圆点跟随变化效果")])]),t._v(" "),s("li",[s("p",[t._v("把ol里面li带有current类名的选出来去掉类名 remove")])]),t._v(" "),s("li",[s("p",[t._v("让当前索引号的小li 加上 current   add")])]),t._v(" "),s("li",[s("p",[t._v("但是，是等着过渡结束之后变化，所以这个写到 transitionend 事件里面")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/anchuanyuan/TuChuangForITX/main/image/202007/06/193052-776624.jpeg",alt:"webAPI第7天1551796072"}})])]),t._v(" "),s("li",[s("p",[t._v("手指滑动轮播图")])]),t._v(" "),s("li",[s("p",[t._v("本质就是ul跟随手指移动，简单说就是移动端拖动元素")])]),t._v(" "),s("li",[s("p",[t._v("触摸元素touchstart：  获取手指初始坐标")])]),t._v(" "),s("li",[s("p",[t._v("移动手指touchmove：  计算手指的滑动距离，并且移动盒子")])]),t._v(" "),s("li",[s("p",[t._v("离开手指touchend:   根据滑动的距离分不同的情况")])]),t._v(" "),s("li",[s("p",[t._v("如果移动距离小于某个像素  就回弹原来位置")])]),t._v(" "),s("li",[s("p",[t._v("如果移动距离大于某个像素就上一张下一张滑动。")])]),t._v(" "),s("li",[s("p",[t._v("滑动也分为左滑动和右滑动判断的标准是 移动距离正负 如果是负值就是左滑 反之右滑")])]),t._v(" "),s("li",[s("p",[t._v("如果是左滑就播放下一张 （index++）")])]),t._v(" "),s("li",[s("p",[t._v("如果是右滑就播放上一张  (index--)")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/anchuanyuan/TuChuangForITX/main/image/202007/06/193054-999484.jpeg",alt:"webAPI第7天1551796363"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/anchuanyuan/TuChuangForITX/main/image/202007/06/193055-657203.jpeg",alt:"webAPI第7天1551796502"}})]),t._v(" "),s("h3",{attrs:{id:"_1-3-1-案例-返回顶部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-案例-返回顶部"}},[t._v("#")]),t._v(" 1.3.1. 案例：返回顶部")]),t._v(" "),s("p",[t._v("当页面滚动某个地方，就显示，否则隐藏")]),t._v(" "),s("p",[t._v("点击可以返回顶部")]),t._v(" "),s("h3",{attrs:{id:"_1-3-2-案例分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-案例分析"}},[t._v("#")]),t._v(" 1.3.2.案例分析")]),t._v(" "),s("ol",[s("li",[t._v("滚动某个地方显示")]),t._v(" "),s("li",[t._v("事件：scroll页面滚动事件")]),t._v(" "),s("li",[t._v("如果被卷去的头部（window.pageYOffset ）大于某个数值")]),t._v(" "),s("li",[t._v("点击，window.scroll(0,0) 返回顶部")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/anchuanyuan/TuChuangForITX/main/image/202007/06/193057-47951.jpeg",alt:"webAPI第7天1551797003"}})]),t._v(" "),s("h2",{attrs:{id:"_1-4-click-延时解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-click-延时解决方案"}},[t._v("#")]),t._v(" 1.4. click 延时解决方案")]),t._v(" "),s("p",[t._v("移动端 click 事件会有 300ms 的延时，原因是移动端屏幕双击会缩放(double tap to zoom) 页面。")]),t._v(" "),s("p",[t._v("解决方案：")]),t._v(" "),s("p",[t._v("​\t1. 禁用缩放。 浏览器禁用默认的双击缩放行为并且去掉300ms 的点击延迟。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v('  <meta name="viewport" content="user-scalable=no"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("​\t2.利用touch事件自己封装这个事件解决300ms 延迟。")]),t._v(" "),s("p",[t._v("​\t原理就是：")]),t._v(" "),s("ol",[s("li",[t._v("当我们手指触摸屏幕，记录当前触摸时间")]),t._v(" "),s("li",[t._v("当我们手指离开屏幕， 用离开的时间减去触摸的时间")]),t._v(" "),s("li",[t._v("如果时间小于150ms，并且没有滑动过屏幕， 那么我们就定义为点击")])]),t._v(" "),s("p",[t._v("代码如下:")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//封装tap，解决click 300ms 延时")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isMove "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" startTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 记录触摸时候的时间变量")]),t._v("\n        obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchstart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            startTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 记录触摸时间")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchmove'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            isMove "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 看看是否有滑动，有滑动算拖拽，不算点击")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchend'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isMove "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" startTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果手指触摸和离开时间小于150ms 算点击")]),t._v("\n                callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行回调函数")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            isMove "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  取反 重置")]),t._v("\n            startTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//调用  ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行代码  });")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[t._v("使用插件。fastclick 插件解决300ms 延迟。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/anchuanyuan/TuChuangForITX/main/image/202007/06/193100-814619.jpeg",alt:"webAPI第7天1551797533"}})])])]),t._v(" "),s("h2",{attrs:{id:"_1-5-移动端常用开发插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-移动端常用开发插件"}},[t._v("#")]),t._v(" 1.5. 移动端常用开发插件")]),t._v(" "),s("h3",{attrs:{id:"_1-5-1-什么是插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-1-什么是插件"}},[t._v("#")]),t._v(" 1.5.1. 什么是插件")]),t._v(" "),s("p",[t._v("移动端要求的是快速开发，所以我们经常会借助于一些插件来帮我完成操作，那么什么是插件呢？")]),t._v(" "),s("p",[t._v("JS 插件是 js 文件，它遵循一定规范编写，方便程序展示效果，拥有特定功能且方便调用。如轮播图和瀑布流插件。")]),t._v(" "),s("p",[t._v("特点：它一般是为了解决某个问题而专门存在，其功能单一，并且比较小。")]),t._v(" "),s("p",[t._v("我们以前写的animate.js 也算一个最简单的插件")]),t._v(" "),s("p",[t._v("fastclick 插件解决 300ms 延迟。 使用延时")]),t._v(" "),s("p",[t._v("GitHub官网地址： "),s("a",{attrs:{href:"https://github.com/ftlabs/fastclick",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://"),s("OutboundLink")],1),s("a",{attrs:{href:"https://github.com/ftlabs/fastclick",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/ftlabs/fastclick"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"_1-5-2-插件的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-2-插件的使用"}},[t._v("#")]),t._v(" 1.5.2. 插件的使用")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("引入 js 插件文件。")])]),t._v(" "),s("li",[s("p",[t._v("按照规定语法使用。")])]),t._v(" "),s("li",[s("p",[t._v("fastclick 插件解决 300ms 延迟。 使用延时")])]),t._v(" "),s("li",[s("p",[t._v("GitHub官网地址： https://github.com/ftlabs/fastclick")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'addEventListener'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DOMContentLoaded'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                       FastClick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-5-3-swiper-插件的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-3-swiper-插件的使用"}},[t._v("#")]),t._v(" 1.5.3. Swiper 插件的使用")]),t._v(" "),s("p",[t._v("中文官网地址： https://www.swiper.com.cn/")]),t._v(" "),s("ol",[s("li",[t._v("引入插件相关文件。")]),t._v(" "),s("li",[t._v("按照规定语法使用")])]),t._v(" "),s("h3",{attrs:{id:"_1-5-4-其他移动端常见插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-4-其他移动端常见插件"}},[t._v("#")]),t._v(" 1.5.4. 其他移动端常见插件")]),t._v(" "),s("p",[t._v("lsuperslide： http://www.superslide2.com/")]),t._v(" "),s("p",[t._v("l iscroll： https://github.com/cubiq/iscroll")]),t._v(" "),s("h3",{attrs:{id:"_1-5-5-插件的使用总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-5-插件的使用总结"}},[t._v("#")]),t._v(" 1.5.5. 插件的使用总结")]),t._v(" "),s("p",[t._v("1.确认插件实现的功能")]),t._v(" "),s("p",[t._v("2.去官网查看使用说明")]),t._v(" "),s("p",[t._v("3.下载插件")]),t._v(" "),s("p",[t._v("4.打开demo实例文件，查看需要引入的相关文件，并且引入")]),t._v(" "),s("p",[t._v("5.复制demo实例文件中的结构html，样式css以及js代码")]),t._v(" "),s("h3",{attrs:{id:"_1-5-6-移动端视频插件-zy-media-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-6-移动端视频插件-zy-media-js"}},[t._v("#")]),t._v(" 1.5.6. 移动端视频插件 zy.media.js")]),t._v(" "),s("p",[t._v("H5 给我们提供了 video 标签，但是浏览器的支持情况不同。")]),t._v(" "),s("p",[t._v("不同的视频格式文件，我们可以通过source解决。")]),t._v(" "),s("p",[t._v("但是外观样式，还有暂停，播放，全屏等功能我们只能自己写代码解决。")]),t._v(" "),s("p",[t._v("这个时候我们可以使用插件方式来制作。")]),t._v(" "),s("p",[t._v("我们可以通过 JS 修改元素的大小、颜色、位置等样式。")]),t._v(" "),s("h2",{attrs:{id:"_1-6-移动端常用开发框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-移动端常用开发框架"}},[t._v("#")]),t._v(" 1.6. 移动端常用开发框架")]),t._v(" "),s("h3",{attrs:{id:"_1-6-1-移动端视频插件-zy-media-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-1-移动端视频插件-zy-media-js"}},[t._v("#")]),t._v(" 1.6.1. 移动端视频插件 zy.media.js")]),t._v(" "),s("p",[t._v("框架，顾名思义就是一套架构，它会基于自身的特点向用户提供一套较为完整的解决方案。框架的控制权在框架本身，使用者要按照框架所规定的某种规范进行开发。")]),t._v(" "),s("p",[t._v("插件一般是为了解决某个问题而专门存在，其功能单一，并且比较小。")]),t._v(" "),s("p",[t._v("前端常用的框架有 Bootstrap、Vue、Angular、React 等。既能开发PC端，也能开发移动端")]),t._v(" "),s("p",[t._v("前端常用的移动端插件有 swiper、superslide、iscroll等。")]),t._v(" "),s("p",[t._v("框架： 大而全，一整套解决方案")]),t._v(" "),s("p",[t._v("插件： 小而专一，某个功能的解决方案")]),t._v(" "),s("h3",{attrs:{id:"_1-6-2-bootstrap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-2-bootstrap"}},[t._v("#")]),t._v(" 1.6.2. Bootstrap")]),t._v(" "),s("p",[t._v("Bootstrap 是一个简洁、直观、强悍的前端开发框架，它让 web 开发更迅速、简单。")]),t._v(" "),s("p",[t._v("它能开发PC端，也能开发移动端")]),t._v(" "),s("p",[t._v("Bootstrap JS插件使用步骤：")]),t._v(" "),s("p",[t._v("1.引入相关js 文件")]),t._v(" "),s("p",[t._v("2.复制HTML 结构")]),t._v(" "),s("p",[t._v("3.修改对应样式")]),t._v(" "),s("p",[t._v("4.修改相应JS 参数")]),t._v(" "),s("h2",{attrs:{id:"_1-7-本地存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-本地存储"}},[t._v("#")]),t._v(" 1.7. 本地存储")]),t._v(" "),s("p",[t._v("随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，HTML5规范提出了相关解决方案。")]),t._v(" "),s("h3",{attrs:{id:"_1-7-1-本地存储特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-1-本地存储特性"}},[t._v("#")]),t._v(" 1.7.1.本地存储特性")]),t._v(" "),s("p",[t._v("1、数据存储在用户浏览器中")]),t._v(" "),s("p",[t._v("2、设置、读取方便、甚至页面刷新不丢失数据")]),t._v(" "),s("p",[t._v("3、容量较大，sessionStorage约5M、localStorage约20M")]),t._v(" "),s("p",[t._v("4、只能存储字符串，可以将对象JSON.stringify() 编码后存储")]),t._v(" "),s("h3",{attrs:{id:"_1-7-2-window-sessionstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-2-window-sessionstorage"}},[t._v("#")]),t._v(" 1.7.2.window.sessionStorage")]),t._v(" "),s("p",[t._v("1、生命周期为关闭浏览器窗口")]),t._v(" "),s("p",[t._v("2、在同一个窗口(页面)下数据可以共享")]),t._v(" "),s("p",[t._v("3、以键值对的形式存储使用")]),t._v(" "),s("p",[t._v("存储数据：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("sessionStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("获取数据：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("sessionStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("删除数据：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("sessionStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("清空数据：(所有都清除掉)")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("sessionStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_1-7-3-window-localstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-3-window-localstorage"}},[t._v("#")]),t._v(" 1.7.3.window.localStorage")]),t._v(" "),s("p",[t._v("1、声明周期永久生效，除非手动删除 否则关闭页面也会存在")]),t._v(" "),s("p",[t._v("2、可以多窗口（页面）共享（同一浏览器可以共享）")]),t._v(" "),s("p",[t._v("3.  以键值对的形式存储使用")]),t._v(" "),s("p",[t._v("存储数据：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("获取数据：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("删除数据：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("清空数据：(所有都清除掉)")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_1-7-4-案例-记住用户名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-4-案例-记住用户名"}},[t._v("#")]),t._v(" 1.7.4.案例：记住用户名")]),t._v(" "),s("p",[t._v("如果勾选记住用户名， 下次用户打开浏览器，就在文本框里面自动显示上次登录的用户名")]),t._v(" "),s("h4",{attrs:{id:"案例分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例分析"}},[t._v("#")]),t._v(" 案例分析")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("把数据存起来，用到本地存储")])]),t._v(" "),s("li",[s("p",[t._v("关闭页面，也可以显示用户名，所以用到localStorage")])]),t._v(" "),s("li",[s("p",[t._v("打开页面，先判断是否有这个用户名，如果有，就在表单里面显示用户名，并且勾选复选框")])]),t._v(" "),s("li",[s("p",[t._v("当复选框发生改变的时候change事件")])]),t._v(" "),s("li",[s("p",[t._v("如果勾选，就存储，否则就移除")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/anchuanyuan/TuChuangForITX/main/image/202007/06/193106-930809.jpeg",alt:"webAPI第7天1551800263"}})])])])])}),[],!1,null,null,null);s.default=e.exports}}]);