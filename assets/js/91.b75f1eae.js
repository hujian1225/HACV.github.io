(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{267:function(t,s,e){"use strict";e.r(s);var _=e(0),r=Object(_.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("动态模型图：\n比如说，有多少个人登录这个系统，有多少个人维护这个系统。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("UML中的关系主要包括4种:")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),e("ul",[e("li",[t._v("4）关联关系（association）:代码层面是用“一个类是另外一个类”的"),e("font",{attrs:{size:"4"}},[e("b",[t._v("成员变量")])])],1)]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),e("ul",[e("li",[t._v("意义：在 UML 中, 泛化关系用来表示"),e("font",{attrs:{size:"4"}},[e("b",[t._v("类")])]),t._v("与"),e("font",{attrs:{size:"4"}},[e("b",[t._v("类")])]),t._v(", "),e("font",{attrs:{size:"4"}},[e("b",[t._v("接口")])]),t._v("与"),e("font",{attrs:{size:"4"}},[e("b",[t._v("接口")])]),t._v("之间的继承关系. 泛化关系有时也称为”is a kind of”关系")],1),t._v(" "),t._m(17)]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),e("ul",[e("li",[t._v("意义：在 UML 中, 实现关系用来表示"),e("font",{attrs:{size:"4"}},[e("b",[t._v("类")])]),t._v("与"),e("font",{attrs:{size:"4"}},[e("b",[t._v("接口")])]),t._v("之间的实现关系.")],1),t._v(" "),t._m(20)]),t._v(" "),t._m(21),t._v(" "),e("p",[t._v("PS:实现关系，在C++语言里面没有接口这个概念，Java中有。\n但是C++可以用纯虚函数和抽象类来模拟一个接口。\n纯虚函数的类是抽象类。可以用抽象类弄成接口类，就这么干。")]),t._v(" "),t._m(22),t._v(" "),e("p",[t._v("对于两个相对独立的系统，当一个系统负责构造另一个系统的实例，或者依赖另一个系统的服务时，这两个系统之间体现为依赖关系.\n例如生产零件的机器和零件，机器负责构造零件对象;充电电池和充电器，充电电池通过充电器来充电;自行车Bicycle和打气筒Pump，自行车通过打气筒来充气")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),e("ul",[e("li",[t._v("一个用例可以包含其他用例具有的行为, 并把它包含的用例行为作为自身行为的一部分.")]),t._v(" "),e("li",[t._v("图形：在 UML 中包含关系用"),e("strong",[t._v("虚线箭头")]),t._v("加 “"),e("code",[t._v("<<include>>")]),t._v("”,箭头指向"),e("font",{attrs:{size:"4"}},[e("b",[t._v("被包含")])]),t._v("的用例")],1)]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),e("ul",[e("li",[t._v("如果在完成某个功能的时候偶尔会执行另外一个功能, 则用扩展关系表示.")]),t._v(" "),e("li",[t._v("图形：在 UML 中扩展关系用"),e("strong",[t._v("虚线箭头")]),t._v("加 “"),e("code",[t._v("<<extend>>")]),t._v("”, 箭头指向"),e("font",{attrs:{size:"4"}},[e("b",[t._v("被扩展")])]),t._v("的用例")],1)]),t._v(" "),t._m(27),t._v(" "),e("p",[t._v("说明：在保存成绩的时候，只有发现学生考试没有及格，"),e("font",{attrs:{size:"4"}},[e("b",[t._v("才需要")])]),t._v("扩展到“打印补考通知单”。（偶尔，毕竟并不总是需要打印补考通知单）")],1),t._v(" "),t._m(28),t._v(" "),e("p",[t._v("关于依赖是虚线，关联是实现的对比")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),e("p",[t._v("张三这次开车上班，车是自己的。")]),t._v(" "),e("ul",[e("li",[t._v("关联关系是类与类之间的联结，它使一个类知道另一个类的属性和方法 ，关联可以是双向的，也可以是单向的。")]),t._v(" "),e("li",[e("font",{attrs:{size:"4"}},[e("b",[t._v("双向的关联可以有两个箭头或者没有箭头，单向的关联有一个箭头。")])])],1),t._v(" "),e("li",[t._v("在 Java和C++ 中，关联关系是通过使用成员变量来实现的。 如人与车")]),t._v(" "),e("li",[t._v("关联：一个类是另一个类的成员变量。")])]),t._v(" "),t._m(31),t._v(" "),e("p",[t._v("代码")]),t._v(" "),t._m(32),t._m(33),t._v(" "),e("p",[t._v("也是属于关联，只不过是车和人之间的关系会更加紧密一些而已，")]),t._v(" "),t._m(34),t._v(" "),e("p",[t._v("聚合关系也是通过成员变量来实现的。")]),t._v(" "),e("p",[t._v("对比：\n关联关系所涉及的两个类处在同一个层次上\n而聚合关系中，两个类处于不同的层次上，一个代表整体，一个代表部分。")]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),e("p",[t._v("聚合和组合的区别：\n有无生命的区别。生命中的整体和部分\n比如,公司和部门，公司不存在了，则部门也没有了。要是部门不存在类，公司也没有存在的意义。")]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),e("p",[e("font",[e("b",[t._v("Tips")])]),t._v(":由于各大UML对这个的支持不同，也可能图片会画成下面这样")],1),t._v(" "),t._m(39),t._v(" "),e("p",[e("font",{attrs:{size:"5"}},[e("b",[t._v("总结：")])]),t._v("\n对于聚合和组合的UML图，那个箭头，我们可以省略也可以不省略，其实，我们主要关注菱形！！！\n这是最奇葩的，菱形是放在尾巴的。")],1),t._v(" "),t._m(40),t._v(" "),e("p",[t._v("关联还有一个数量问题")]),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),e("p",[t._v("比如这样表示，一个人可以有1,2,3...n辆车")]),t._v(" "),e("p",[t._v("举例：\n前面聚合的例子：\n一个车站可以有1个引擎，4个轮胎")]),t._v(" "),t._m(44),t._v(" "),e("p",[t._v("1）博客中UML图都将使用"),e("code",[t._v("Start UML")]),t._v("进行编辑\n2）此外，我还常用"),e("code",[t._v("VS2012的建模工具")]),t._v("，里面也有一些常用UML图，详情"),e("a",{attrs:{href:"https://jingyan.baidu.com/article/5d6edee2c9dd2b99ebdeec55.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("可见"),e("OutboundLink")],1),t._v("\n3）当然，还有Rose软件\nJava的话，IEDA还会自动生成类图等")]),t._v(" "),t._m(45),t._v(" "),e("p",[t._v("组合和聚合是有很大区别的，这个区别不是在形式上，而是在本质上：")]),t._v(" "),e("p",[t._v("比如zhiA类中包含B类的一个dao引用b，当A类的一个对象消亡时，b这个引用所指向的对象也同时消亡（没有任何一个引用指向它，成了垃圾对象），这种情况叫做组合，反之b所指向的对象还会有另外的引用指向它，这种情况叫聚合。")]),t._v(" "),e("p",[t._v("在实际写代码时组合方式一般会这样写：\nA类的构造方法里创建B类的对象，也就是说，当A类的一个对象产生时，B类的对象随之产生，当A类的这个对象消亡时，它所包含的B类的对象也随之消亡。\n聚合方式则是这样：\nA类的对象在创建时不会立即创建B类的对象，而是等待一个外界的对象传给它\n传给它的这个对象不是A类创建的。")]),t._v(" "),e("p",[t._v("现实生活中：\n人和人和手，脚是组合关系，因为当人死亡后人的手也就不复存在了。人和他的电脑是聚合关系。 class Hand{ } class Computer{ }")]),t._v(" "),e("p",[t._v("组合： class Person{ private Hand hand; public Person(){ hand = new Hand(); } }")]),t._v(" "),e("p",[t._v("聚合： class Person{ private Computer computer; public setComputer(){ computer = new Computer(); } }")]),t._v(" "),e("p",[t._v("PS:个人觉得人和手那样设计不好\n问：人和他的电脑不是依赖关系吗？\n答：要看你是从那个角度设计的吧，都有可能")]),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),e("p",[t._v("用例图：\n画出来的，要是画出来之后给别人看，没有很大的歧义就算是可以了。")]),t._v(" "),e("p",[t._v("没有板上钉钉的事情，没有错误之分，只是更加合适一点。")]),t._v(" "),t._m(48),t._v(" "),e("p",[t._v("类是类图的主要组件, 由 3 部分组成: 类名, 属性和方法. 在 UML 中, 类用矩形来表示,")]),t._v(" "),t._m(49),t._v(" "),e("p",[t._v("在 UML 中可以根据实际情况有选择的隐藏属性部分或方法部分或两者都隐藏")]),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),e("p",[t._v("参与者(Actor)\n用例(Use Case):\n代码层面，用例，你就把它想象成是一个简单的功能模块就好了。\n关系")]),t._v(" "),t._m(57),t._v(" "),e("ul",[e("li",[t._v("1）泛化："),e("font",{staticStyle:{background:"yellow"}},[t._v("代码层次是用“继承”")]),t._v("（C++或Java）")],1),t._v(" "),e("li",[t._v("2）依赖："),e("font",{staticStyle:{background:"yellow"}},[t._v("代码层面是用，“一个类是另一个类”的"),e("strong",[t._v("函数参数")]),t._v("或"),e("strong",[t._v("函数返回值")]),t._v("实现")])],1)]),t._v(" "),t._m(58),t._v(" "),t._m(59),t._v(" "),t._m(60)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"uml图分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uml图分类"}},[this._v("#")]),this._v(" UML图分类")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("UML系列文章（一）\n2020-07-01  \n\n\n\nsummary: 静态模型图（类图，部署图等）\n2021.08.26.\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_01-uml图分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-uml图分类"}},[this._v("#")]),this._v(" 01.UML图分类")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("静态模型图")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("blockquote",[e("ul",[e("li",[t._v("类图（★★★★★）")]),t._v(" "),e("li",[t._v("对象图")]),t._v(" "),e("li",[t._v("包图")]),t._v(" "),e("li",[t._v("组件图")]),t._v(" "),e("li",[t._v("部署图（★★☆）")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("动态模型图")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("blockquote",[e("ul",[e("li",[t._v("用例图（★★★）")]),t._v(" "),e("li",[t._v("时序图（★★★★）")]),t._v(" "),e("li",[t._v("协作图")]),t._v(" "),e("li",[t._v("状态图")]),t._v(" "),e("li",[t._v("活动图")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_02-uml图的重要性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-uml图的重要性"}},[this._v("#")]),this._v(" 02.UML图的重要性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("1）其中，类图是学习"),s("b",[this._v("设计模式")]),this._v("的两个重要的东西之一，另外就是语言层面的"),s("b",[this._v("“多态”")]),this._v("，还有就是UML中的"),s("b",[this._v("“关系”")]),this._v("。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("b",[this._v("（因为设计模式的很多类图是用UML的类图来表达的。）")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("2）UML图的，时序图什么的，其实我也可以用于平时作技术交流或者PPT中插图，并不一定仅仅用于项目建模。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_03-uml图中关系分类（4种和细分）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_03-uml图中关系分类（4种和细分）"}},[this._v("#")]),this._v(" 03.UML图中关系分类（4种和细分）")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("1）泛化关系（generalization）:代码层次实现："),e("b",[t._v("继承")]),t._v(">")]),t._v(" "),e("li",[t._v("2）实现关系（realization）：代码层次实现：C++可以用"),e("b",[t._v("纯虚函数")]),t._v("和"),e("b",[t._v("抽象类")]),t._v("来模拟一个接口")]),t._v(" "),e("li",[t._v("3）依赖关系（dependency）:代码层次实现：“一个类是另一个类”的"),e("b",[t._v("函数参数")]),t._v("或"),e("b",[t._v("函数返回值")]),t._v("实现")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("包含关系（"),s("code",[this._v("<<include>>")]),this._v("）")]),this._v(" "),s("li",[this._v("扩展关系（"),s("code",[this._v("<<extend>>")]),this._v("）")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("一般关联")]),this._v(" "),s("li",[this._v("聚合")]),this._v(" "),s("li",[this._v("组合")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("注意：关系逐渐加强。一般关联--\x3e聚合--\x3e组合")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）泛化关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）泛化关系"}},[this._v("#")]),this._v(" （1）泛化关系")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("图形：在 UML 中泛化关系用一条"),s("strong",[this._v("实线，空心箭头")]),this._v("从子类指向父类")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/2021.08.26.01.png",alt:"2021.08.26.01"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）实现关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）实现关系"}},[this._v("#")]),this._v(" （2）实现关系")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("图形：在 UML 中实现关系用一条"),s("strong",[this._v("虚线，空心箭头")]),this._v("由子类指向父类")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/2021.08.26.02.png",alt:"2021.08.26.02"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（3）依赖关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（3）依赖关系"}},[this._v("#")]),this._v(" （3）依赖关系")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/2021.08.26.03.png",alt:"2021.08.26.03"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"依赖关系之包含"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖关系之包含"}},[this._v("#")]),this._v(" 依赖关系之包含")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/2021.08.26.04.png",alt:"2021.08.26.04"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"依赖关系之扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖关系之扩展"}},[this._v("#")]),this._v(" 依赖关系之扩展")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/2021.08.26.05.png",alt:"2021.08.26.05"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（4）关联关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（4）关联关系"}},[this._v("#")]),this._v(" （4）关联关系")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("根据虚线和实线，或许可以这么记忆？\n不是自己的车，这种"),s("strong",[this._v("依赖")]),this._v("别人永远是虚的。是自己买的车，和自己"),s("strong",[this._v("关联")]),this._v("紧密的才是实的。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_1、一般关联（实线）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、一般关联（实线）"}},[this._v("#")]),this._v(" 1、一般关联（实线）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/2021.08.26.006.png",alt:"2021.08.26.006"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-cpp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Car")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tCar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" mycar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自己有的")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_2、聚合（空心菱形-实线）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、聚合（空心菱形-实线）"}},[this._v("#")]),this._v(" 2、聚合（空心菱形+实线）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("聚合是"),s("strong",[this._v("整体")]),this._v("和"),s("strong",[this._v("部分")]),this._v("之间的关系，例如汽车由引擎、轮胎以及其它零件组成。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/2021.08.26.07.png",alt:"2021.08.26.07"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_3、组合（实心菱形-实线）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、组合（实心菱形-实线）"}},[this._v("#")]),this._v(" 3、组合（实心菱形+实线）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("代表整体的对象负责代表部分对象的生命周期（重点理解！！！）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/2021.08.26.08.png",alt:"2021.08.26.08"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/2021.08.26.08_2.0.png",alt:"2021.08.26.08_2.0"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"关联关系的多重性（软考考）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关联关系的多重性（软考考）"}},[this._v("#")]),this._v(" 关联关系的多重性（软考考）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("关联关系的多重性是指有多少对象可以参与该关联, 多重性可以用来表达一个取值范围, 特定值, 无限定的范围.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/2021.08.26.number.png",alt:"2021.08.26.number"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("在UML中，多重性可以用下面的格式表示：\n0..1\n0.."),s("em",[this._v("（也可以表示为0..n）\n1（1..1的简写）\n1..")]),this._v("（也可以表示为1..n）\n*（即0..n）\n7\n3,6..9\n0（0..0的简写）（表示没有实例参与关联，一般不用）\n可以看到，多重性是用非负整数的一个子集来表示的。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_04-软件准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_04-软件准备"}},[this._v("#")]),this._v(" 04.软件准备")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_4-1-“聚合”和“组合”的区别是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-“聚合”和“组合”的区别是什么？"}},[this._v("#")]),this._v(" 4.1.“聚合”和“组合”的区别是什么？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"✅静态模型图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#✅静态模型图"}},[this._v("#")]),this._v(" ✅静态模型图")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_01-用例图（★★★）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-用例图（★★★）"}},[this._v("#")]),this._v(" 01.用例图（★★★）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_02-类图（★★★★★）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-类图（★★★★★）"}},[this._v("#")]),this._v(" 02.类图（★★★★★）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("顶端部分存放类的名称")]),this._v(" "),s("li",[this._v("中间部分存放类的属性, 属性的类型及值")]),this._v(" "),s("li",[this._v("底部部分存放类的方法, 方法的参数和返回类型")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("在 UML 中, 公用public类型有 + 表示, 私有private类型用 – 表示, protect保护类型用 # 表示.")]),this._v(" "),s("li",[this._v("UML 的工具开发商可以使用自己定义的符号表示不同的可见性")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("UML系列文章（二）\n2020-07-02"),s("br"),this._v("\n动态模型图（用例图，时序图等）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"✅动态模型图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#✅动态模型图"}},[this._v("#")]),this._v(" ✅动态模型图")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_01-用例图（★★★）-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-用例图（★★★）-2"}},[this._v("#")]),this._v(" 01.用例图（★★★）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1、用途："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、用途："}},[this._v("#")]),this._v(" 1、用途：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("用例图(Use Case Diagram): 也称为用户模型图, 是从软件"),s("strong",[this._v("需求分析")]),this._v("到最终实现的第一步, 它是从客户的角度来描述系统功能。\n所以是\n1）站在客户如何使用系统的角度，把整个软件系统描述出来。\n2）就是把客户的需求给固定下来。\n3）画的图能进行交流就好了，仁者见仁智者见智的过程，并不要求每个人画的用例图完全一样。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2、组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、组件"}},[this._v("#")]),this._v(" 2、组件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3、用例之间关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、用例之间关系"}},[this._v("#")]),this._v(" 3、用例之间关系")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("blockquote",[e("ul",[e("li",[e("strong",[t._v("包含")]),t._v(":一个用例可以包含其他用例具有的行为，也就是说，"),e("strong",[t._v("这个功能模块要使用另一个功能模块")]),t._v("。\neg.教学管理系统，添加学生信息（用例）要使用更新数据库（用例）这个功能模块。")]),t._v(" "),e("li",[e("strong",[t._v("扩展")]),t._v("：完成某个功能的时候"),e("strong",[t._v("偶尔")]),t._v("会执行另外一个功能, 则用扩展关系表示。\neg.比如，在保存成绩的时候，发现，这个学生没有考试及格，以前的做法，就需要补考，就需要扩展到打印补考通知单。（偶尔）")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_02-时序图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-时序图"}},[this._v("#")]),this._v(" 02.时序图")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_03-活动图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_03-活动图"}},[this._v("#")]),this._v(" 03.活动图")])}],!1,null,null,null);s.default=r.exports}}]);