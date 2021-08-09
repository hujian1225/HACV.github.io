(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{258:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/RAII",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科"),e("OutboundLink")],1),t._v("：RAII")]),t._v(" "),e("li",[t._v("为解决资源管理时的"),e("font",{staticStyle:{background:"yellow"}},[t._v("异常安全性")])],1)]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),e("ul",[e("li",[t._v("参考自："),e("a",{attrs:{href:"https://www.cnblogs.com/KillerAery/p/9539705.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客园"),e("OutboundLink")],1)])]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),e("p",[e("font",{staticStyle:{background:"yellow"}},[t._v("仔细理解：书上P482-484")])],1),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),e("ul",[e("li",[e("font",{staticStyle:{background:"yellow"}},[t._v("C++")]),t._v("的内置类型（"),e("code",[t._v("bool/int/double/char")]),t._v("）都是值语义，标准库里的 "),e("code",[t._v("complex<>")]),t._v("、"),e("code",[t._v("pair<>")]),t._v("、"),e("code",[t._v("vector<>")]),t._v("、"),e("code",[t._v("map<>")]),t._v("、"),e("code",[t._v("string")]),t._v(" 等等类型也都是值语义。")],1),t._v(" "),e("li",[e("font",{staticStyle:{background:"yellow"}},[t._v("Java")]),t._v("语言中的"),e("code",[t._v("primitive types（基础类型）比如：int 、short、long")]),t._v("也是值语义")],1)]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),e("ul",[e("li",[e("font",{staticStyle:{background:"yellow"}},[t._v("别名：")]),t._v("对象语义也叫"),e("strong",[t._v("指针语义")]),t._v("，**引用语义（reference semantics）**等")],1),t._v(" "),e("li",[t._v("通常是指一个目标对象由源对象拷贝生成，但生成后与源对象之间依然共享底层资源，对任何一个的改变都将随之改变另一个。就像包含有指针成员变量的自定义类在默认拷贝构造函数下对其对象之间进行的拷贝。拷贝后目标对象和源对象的指针成员变量仍指向同一块内存数据。如果当其中一个被析构掉后，另一个对象的指针成员就会沦为名副其实的悬垂指针！")])]),t._v(" "),e("p",[t._v("核心理解：”对象语义“这个词中“对象”指的是"),e("font",{staticStyle:{background:"yellow"}},[t._v("『"),e("strong",[t._v("面向对象")]),t._v("』")]),t._v("意义下的对象，并不是我们"),e("font",{staticStyle:{background:"yellow"}},[t._v("『"),e("strong",[t._v("语法意义上class生成的")]),t._v("』")]),t._v("对象，我们的结论是：『面向对象意义下的对象，对象拷贝是禁止的』")],1),t._v(" "),t._m(19),t._v(" "),t._m(20),e("ul",[e("li",[t._v("结论："),e("font",{staticStyle:{background:"yellow"}},[t._v('『面向对象』意义下的"对象"是'),e("code",[t._v("non-copyable")]),t._v("（不能够拷贝的）")])],1)]),t._v(" "),t._m(21),t._v(" "),e("ul",[e("li",[e("p",[e("font",{staticStyle:{background:"yellow"}},[t._v("Java")]),t._v("语言中class对象"),e("font",{staticStyle:{background:"yellow"}},[t._v("都是")]),t._v("“对象语义”")],1),t._v(" "),e("ul",[e("li",[e("font",{staticStyle:{background:"yellow"}},[t._v("Java")]),t._v("语言没有办法实现『真正的』“值语义”class，只好用"),e("code",[t._v("immutable object")]),t._v("来模拟")],1),t._v(" "),e("li",[e("font",{staticStyle:{background:"yellow"}},[t._v("Java")]),t._v("语言中有"),e("code",[t._v("value object")]),t._v("一说，按照定义，它实际上是"),e("code",[t._v("immutable object（不可改变的对象）")]),t._v("，比如"),e("code",[t._v("Interger，String，BigInterger")])],1)])]),t._v(" "),e("li",[e("p",[e("font",{staticStyle:{background:"yellow"}},[t._v("C++")]),t._v("语言中class本质上是"),e("font",{staticStyle:{background:"yellow"}},[t._v("值语义")]),t._v("，值语义对象，比如"),e("code",[t._v("pair<>，vector<>，string<>")]),t._v("等，都是可修改的（mutable）")],1)])]),t._v(" "),t._m(22),t._v(" "),e("p",[t._v("值语义（value semantics）")]),t._v(" "),t._m(23),t._v(" "),e("p",[t._v("对象语义（object semantics）")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("缺点：对象语义的object由于不能拷贝，因此我们只能在"),e("font",{staticStyle:{background:"yellow"}},[t._v("C++的实现")]),t._v("是通过’指针“或”引用“来使用它")],1)]),t._v(" "),t._m(24),t._v(" "),t._m(25)]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),e("ul",[e("li",[t._v("由于C++中class本质上是"),e("font",{staticStyle:{background:"yellow"}},[t._v("值语义")]),t._v("，这\n"),t._m(29)],1),t._v(" "),e("li",[t._v("在其他『面向对象语言』，比如Java中，这都不需要费脑筋。。")])]),t._v(" "),e("p",[t._v("书上P488")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),e("ul",[e("li",[e("font",{staticStyle:{background:"yellow"}},[t._v("智能指针既不是『值语义』也不是『对象语义』")])],1),t._v(" "),e("li",[t._v("由于『值语义和对象语义的原因』\n"),e("ul",[e("li",[e("font",{staticStyle:{background:"yellow"}},[t._v("如果不使用智能指针，用C++做面向对象编程将会困难重重")])],1)])])]),t._v(" "),t._m(32),t._v(" "),e("p",[t._v("C++复杂的根源在于三大约束：")]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),e("blockquote",[e("p",[t._v("参考自："),e("a",{attrs:{href:"https://blog.csdn.net/myan/article/details/148900",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSDN的myan（孟岩）"),e("OutboundLink")],1)])]),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),e("ul",[e("li",[t._v("孟岩"),e("a",{attrs:{href:"https://blog.csdn.net/myan",target:"_blank",rel:"noopener noreferrer"}},[t._v("在CSDN上的博客"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("《Linux多线程服务端编程》，陈硕")]),t._v(" "),e("li",[t._v("光城，"),e("a",{attrs:{href:"https://light-city.club/sc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("C++那些事"),e("OutboundLink")],1)])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"c-高阶论题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-高阶论题"}},[this._v("#")]),this._v(" C++高阶论题")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("术语\n\t内存泄漏\nc++编程风格惯用法\n\t1.类初始化列表\n\t2.枚举类替换命名空间\n\t3.RAII(资源获取即初始化)\n\t4.copy and swap\n\t5.pImpl(指针指向具体实现)\n编程范式\n\t过程式编程\n\t基于对象编程\n\t面向对象编程\n\t泛型编程\n\t函数式编程\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_01-c-惯用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-c-惯用法"}},[this._v("#")]),this._v(" 01.C++惯用法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-1-raii-资源获取即初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-raii-资源获取即初始化"}},[this._v("#")]),this._v(" 1.1.RAII(资源获取即初始化)")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("blockquote",[e("p",[t._v("RAII（资源获取即初始化）『"),e("strong",[t._v("R")]),t._v("esource "),e("strong",[t._v("A")]),t._v("cquisition "),e("strong",[t._v("I")]),t._v("s "),e("strong",[t._v("I")]),t._v("nitialization』")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("它是在一些面向对象语言中的一种惯用法。\n\nRAII源于C++\n在Java，C#，D，Ada，Vala和Rust中也有应用\n1984-1989年期间，比雅尼·斯特劳斯特鲁普和安德鲁·柯尼希在设计C++异常时，为解决资源管理时的异常安全性而使用了该用法[1]，后来比雅尼·斯特劳斯特鲁普将其称为RAII[2]。\n\nRAII要求，资源的有效期与持有资源的对象的生命期严格绑定，即由对象的构造函数完成资源的分配（获取），同时由析构函数完成资源的释放。在这种要求下，只要对象能正确地析构，就不会出现资源泄露问题。\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-2-pimpl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-pimpl"}},[this._v("#")]),this._v(" 1.2.pImpl")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("pImpl（指向实现的指针）『"),s("strong",[this._v("P")]),this._v("ointer to "),s("strong",[this._v("Impl")]),this._v("ementation』，Implementation，实现，实施")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("是一种 C++ 编程技巧\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("它将类的"),s("strong",[this._v("实现细节")]),this._v("从对象表示中移除，放到一个『"),s("strong",[this._v("分离的类")]),this._v("』中，并以一个『"),s("strong",[this._v("不透明的指针")]),this._v("』进行访问。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("优点：\n\t1、减少依赖项（降低耦合性）：其一减少原类不必要的头文件的依赖，加速编译；其二对Impl类进行修改，无需重新编译原类。\n\t2、接口和实现的分离（隐藏了类的实现）：私有成员完全可以隐藏在共有接口之外，给用户一个间接明了的使用接口，尤其适合闭源API设计。\n\t3、可使用惰性分配技术：类的某部分实现可以写成按需分配或者实际使用时再分配，从而节省资源。\n\t\n缺点：\n\t1、每个类需要占用小小额外的指针内存。\n\t\n\t2、每个类每次访问具体实现时都要多一个间接指针操作的开销，并且在使用、阅读和调试上都可能有所不便\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-3-copy-and-swap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-copy-and-swap"}},[this._v("#")]),this._v(" 1.3.copy and swap")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_02-value-semantics和object-semantics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-value-semantics和object-semantics"}},[this._v("#")]),this._v(" 02."),s("code",[this._v("value semantics")]),this._v("和"),s("code",[this._v("object semantics")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("参考自：《Linux多线程服务器编程》，使用muduoC++网络库")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-1-值语义（value-semantics）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-值语义（value-semantics）"}},[this._v("#")]),this._v(" 2.1.值语义（value semantics）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("所谓值语义是指目标对象由源对象拷贝生成，且生成后与源对象完全无关，彼此独立存在，改变互不影响。就像 int 类型变量相互拷贝一样。")]),this._v(" "),s("li",[this._v("value semantics：指的是对象的拷贝与原对象无关")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("举例：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("拷贝之后就与源对象完全脱离关系")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-2-对象语义（object-semantics）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-对象语义（object-semantics）"}},[this._v("#")]),this._v(" 2.2.对象语义（object semantics）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("例子：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("薪资管理系统中，一个对象叫：员工张三\n我们拷贝“员工张三”这个对象是没有意义的！！\n因为员工张三这个对象代表的是一个活生生的人，我们拷贝它是被禁止的。\n\n服务器开发中，也有类似的情况\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br"),s("span",{staticClass:"line-number"},[this._v("5")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("举例：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-3-优点缺点对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-优点缺点对比"}},[this._v("#")]),this._v(" 2.3.优点缺点对比")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("优点：生命期管理很简单，比如 C++中"),s("code",[this._v("int")]),this._v("类型一样—你不需要操心 int 对象 的生命期。\n"),s("ul",[s("li",[this._v("因为：值语义的对象要么是"),s("code",[this._v("stack object")]),this._v("，要么是"),s("code",[this._v("作为其他object的成员")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("code",[this._v("immutable")]),this._v("不可修改的")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("code",[this._v("mutable")]),this._v("可修改的")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_03-c-惯用法和value-semantics组合拳"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_03-c-惯用法和value-semantics组合拳"}},[this._v("#")]),this._v(" 03.C++惯用法和"),s("code",[this._v("value semantics")]),this._v("组合拳")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("值语义，对象语义")]),this._v(" "),s("li",[this._v("RAII")]),this._v(" "),s("li",[this._v("智能指针")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-1-c-的值语义是『双刃剑』"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-c-的值语义是『双刃剑』"}},[this._v("#")]),this._v(" 3.1.C++的值语义是『双刃剑』")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("才会出现"),e("code",[t._v("object slicing")]),t._v("这种语言独有的问题！！")]),t._v(" "),e("li",[t._v("才会需要程序员注意："),e("code",[t._v("pass-by-value")]),t._v("和"),e("code",[t._v("pass-by-const-reference")]),t._v("的取舍")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("值语义是"),s("strong",[this._v("C++语言3大约束之一")]),this._v("，C++的设计初衷是让用户定义的类型（class）能像内置类型（int）一样工作，具有"),s("strong",[this._v("同等")]),this._v("的地位。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-3-问题：智能指针？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-问题：智能指针？"}},[this._v("#")]),this._v(" 3.3.问题：智能指针？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_04-c-语言层面高度探讨"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_04-c-语言层面高度探讨"}},[this._v("#")]),this._v(" 04.C++语言层面高度探讨")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("与C的完全兼容")]),this._v(" "),s("li",[this._v("静态类型检查")]),this._v(" "),s("li",[this._v("最高性能")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("在三大约束下，C++未能完善对于面向对象思想的支持，未能建立强大的动态能力，从而使得C++在OO这个单项上存在本质缺陷")]),this._v("。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("事实上，C++的过程、OB模型相当成熟和稳定")]),t._v(" "),e("li",[t._v("而泛型模型，就单项来说，除了语法丑陋之外也没有大的问题。")]),t._v(" "),e("li",[t._v("缺陷集中体现在OO模型的实现，并因此干扰了其他几个范式的完整程度。\n"),e("ul",[e("li",[t._v("然而，OO的缺陷绝非设计者的偏执，其原因在于三大约束。如果坚持三大约束，则即使再重新设计一次，结果也与今日相差不远。Stroustrup在多种场合表示，对C++的设计没有大的后悔之处，意思就是这个。")]),t._v(" "),e("li",[t._v("侯捷先生早在2001年初即对我说，C++在OO上不及Java，当时体会不深，认为没有大一统的单根类库会使设计更加灵活，后来又认为凭借GP可以抵消OO的不足甚至超越之，现在看来即使不是不可能，这条道路也必然是艰辛异常，成败难以预料。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_05-c-的编程范式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_05-c-的编程范式"}},[this._v("#")]),this._v(" 05.C++的编程范式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_5-1-过程式编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-过程式编程"}},[this._v("#")]),this._v(" 5.1.过程式编程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_5-2-基于对象编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-基于对象编程"}},[this._v("#")]),this._v(" 5.2.基于对象编程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_5-3-面向对象编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-面向对象编程"}},[this._v("#")]),this._v(" 5.3.面向对象编程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_5-4-泛型编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-泛型编程"}},[this._v("#")]),this._v(" 5.4.泛型编程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_5-5-函数式编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-函数式编程"}},[this._v("#")]),this._v(" 5.5.函数式编程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);s.default=n.exports}}]);