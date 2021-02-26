(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{304:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("背景：\n我们总说C语言中const修饰的变量看上去似乎是常量，其实是个“冒牌货”，应该叫”常变量”，比如用指针间接赋值，就能改变了。")]),t._v(" "),n("p",[t._v("代码测试：\n将指针间接修改变量值的代码放到C语言编译器和C++编译器去测试")]),t._v(" "),n("p",[t._v("DevC++的C语言编译器")]),t._v(" "),t._m(2),t._m(3),t._v(" "),n("p",[t._v("DevC++的C++语言编译器")]),t._v(" "),t._m(4),t._m(5),t._v(" "),n("p",[t._v("奇特的结果：\n我们要是写了这样的函数在银行程序中，要是用不同编译器，那么对账就对不上了。\n总结：\nC中的const是个常变量，变量的值能够被间接修改。\nC++中的const是一个真正的常量！")]),t._v(" "),t._m(6),t._v(" "),n("p",[t._v("那么，我们或许会疑惑：\nQ：我们说C++中的是一个真正的常量，那为什么，没有C++编译器对我们”用指针间接修改”的行为，没有报warning或者error呢？\nA：C++要兼容C，所以，它认为这个语法是可以的\nQ：那么问题又来了，那他既然兼容，那么为什么最后却没改变那个变量的值呢？\nA：因为C++只是兼容那种语法写法，但是底层的实现却对const关键字进行了加强。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("p",[t._v("当C++编译器，扫描到常量声明时，它不再像C语言那样，把这个const给它单独分配内存。")]),t._v(" "),n("p",[t._v("在我们先前的//test.cpp中。\nC++进行了如下操作：")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),n("p",[t._v("我们现在来证明这个开辟的内存空间的存在")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),n("p",[t._v("Tips：\n只有下面两种的时候，它才会分配空间")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),n("p",[t._v("证明的代码：")]),t._v(" "),t._m(21),t._v(" "),n("img",{attrs:{src:"/photos/2020.5.30_31/05.png",width:"80%"}}),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),n("p",[t._v("C++对C语言的const关键字进行了增强！\n"),n("font",{attrs:{color:"red",size:"3"}},[t._v("\n特点：\nC++中的const修饰的变量，变成了真正的常量，所以叫const常量")])],1),t._v(" "),t._m(24),t._v(" "),n("p",[t._v("Tips:要想了解C++中const实现机制，请移步《C++中对C的const关键字增强》一文")]),t._v(" "),t._m(25),t._v(" "),t._m(26),n("p",[t._v("当成员函数被声明为const时，如果这个const成员函数试图修改这个对象的数据，编译器将视为错误。\n因为：你都和我约定了不能修改，那就得履行。")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),n("p",[t._v("函数返回值采用“引用传递”的场合,出现在类的赋值函数中，目的是为了实现链式表达。\n例如：")]),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._v(" "),n("p",[t._v("补充杂项：")]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"c-中对c的const关键字增强"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-中对c的const关键字增强"}},[this._v("#")]),this._v(" C++中对C的const关键字增强")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一、问题导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、问题导入"}},[this._v("#")]),this._v(" 一、问题导入")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//demo.c ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("98")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("结果：\n"),s("img",{attrs:{src:"/photos/2020.5.30_31/01.png",width:"80%"}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//test.cpp ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<cstdio>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("98")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("结果：\n"),s("img",{attrs:{src:"/photos/2020.5.30_31/02.png",width:"80%"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Tips：\n"),s("table",[s("td",{attrs:{bgcolor:"#FFFF",FF:""}},[this._v("\n以上两次测试，都没有显示warning和error")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"二、底层原理分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、底层原理分析"}},[this._v("#")]),this._v(" 二、底层原理分析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1）c-编译器对const做了一些加强，做了一些特殊的处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1）c-编译器对const做了一些加强，做了一些特殊的处理"}},[this._v("#")]),this._v(" 1）C++编译器对const做了一些加强，做了一些特殊的处理")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("blockquote",[n("ul",[n("li",[t._v("1）扫描到这一行，const int a=98;\nC++编译器会把这个"),n("b",[t._v("变量a")]),t._v("放在一个"),n("b",[t._v("符号表（键值-值对）")]),t._v("里面\n"),n("b",[t._v("此时，并没有分配内存！！！")]),t._v("\n注意：这样的话，key和value是定了，不能修改的了。\n符号表具体的实现和我们的内存中的，栈，堆不是同一套实现机制。\n有很多常量就都放在这个里面了。\nTips：\n当你去"),n("b",[t._v("使用")]),t._v("这个a的时候，它就给你从符号表里面给你把这个98给拿出来，供你"),n("b",[t._v("使用")]),t._v(" "),n("table",[n("td",{attrs:{bgcolor:"#FFFF",FF:""}},[t._v('\n注意"使用"一词')])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("2）遇到类似这样的情况，此时才给a变量另外分配一个内存。\n扫描到这一句p=(int "),s("em",[this._v(")&a;\n当你对这个a变量取地址的时候，C++编译器，会为这个a再"),s("b",[this._v("单独的开辟一块内存空间")]),this._v("，然后你把这个内存空间，赋给了p，相当于一个指针P指向了这里。然后你通过")]),this._v("p去间接的修改的地址，不再是原来的值（value）,而是我们新开辟的空间的值（注意理解）\n所以，当你再使用a的时候，你打印的还是98（符号表中的a）\n"),s("img",{attrs:{src:"/photos/2020.5.30_31/03.png",width:"90%"}})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2）证明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2）证明"}},[this._v("#")]),this._v(" 2）证明")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//solution.cpp ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<cstdio>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("98")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a=%d\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*p=%d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("打印的是:\n"),s("img",{attrs:{src:"/photos/2020.5.30_31/04.png",width:"80%"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("b",[this._v("注意：")]),this._v(" "),s("table",[s("td",{attrs:{bgcolor:"#FFFF",FF:""}},[this._v("\nC++编译器虽然可能为const常量分配空间，但不会"),s("b",[this._v("使用")]),this._v("其存储空间中的值，除非你用指针操作。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"三、结论和补充"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、结论和补充"}},[this._v("#")]),this._v(" 三、结论和补充")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("1）C语言中的const变量\nC语言中const变量是只读变量，"),s("b",[this._v("有自己的存储空间")]),this._v("\n2）C++中的const常量\n"),s("table",[s("td",{attrs:{bgcolor:"#FFFF",FF:""}},[this._v("\n注意：可能分配存储空间,也可能不分配存储空间!")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("编译过程中若发现"),s("b",[this._v("使用常量")]),this._v("则直接以符号表中的值替换")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("当const常量为全局，并且需要在其它文件中使用,即使用了"),s("b",[this._v("extern")]),this._v("操作符")]),this._v(" "),s("li",[this._v("当使用&操作符取const常量的地址，编译过程中若发现对const使用了"),s("b",[this._v("&操作符")]),this._v("，则给对应的常量分配存储空间（兼容C）")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"四、补充疑问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、补充疑问"}},[this._v("#")]),this._v(" 四、补充疑问")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Q：那么要是分配内存，C++中那个const的分配内存是在什么时候分配的呢？是在编译器"),s("b",[this._v("编译阶段")]),this._v("，还是在"),s("b",[this._v("执行阶段")]),this._v("分配？\n"),s("table",[s("td",{attrs:{bgcolor:"#FFFF",FF:""}},[this._v("\nＡ：C++中const分配内存的时机，是在编译期间！（记住！）")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//test.cpp ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<cstdio>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("98")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&a=%d\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&b=%d\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用了取地址 ")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&c=%d\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("结果表明：\nconst int b的地址在a和c之间，符合我们局部变量申请内存的"),s("b",[this._v("压栈的顺序")]),this._v("，"),s("b",[this._v("它并没有因为，&b这句话写到int c后面，就先分配a，c最后才b")]),this._v("，而是，它扫描完之后，看到这里有&b了，就分配地址了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"详解c-中const常见用途"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#详解c-中const常见用途"}},[this._v("#")]),this._v(" 详解C++中const常见用途")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("区别：")])]),this._v(" "),s("blockquote",[s("ul",[s("li",[this._v("1）C语言中的const变量\nC语言中const变量是只读变量，"),s("b",[this._v("有自己的存储空间")])]),this._v(" "),s("li",[this._v("2）C++中的const常量\n注意："),s("b",[this._v("可能分配存储空间,也可能不分配存储空间!")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1）const成员函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1）const成员函数"}},[this._v("#")]),this._v(" 1）const成员函数")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetLength")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" itslength"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//成员函数声明为常量")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2）指向const对象的指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2）指向const对象的指针"}},[this._v("#")]),this._v(" 2）指向const对象的指针")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果声明了一个"),s("b",[this._v("指向const对象")]),this._v("的指针，则通过该指针只能调用const方法（成员函数）。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("blockquote",[n("p",[t._v("-因为：const就是用来规定，"),n("b",[t._v("属于这个对象")]),t._v("的是不能有改变的")]),t._v(" "),n("blockquote",[n("ul",[n("li",[t._v("const成员函数（常量成员函数），不会去修改这个对象任何"),n("b",[t._v("非静态成员变量")]),t._v("的值。")]),t._v(" "),n("li",[t._v("static成员函数（静态成员函数），也不会去修改这个对象任何"),n("b",[t._v("非静态成员变量")]),t._v("(毕竟，静态成员函数和静态成员变量其实本质是全局变量嘛，不需要作用在具体的对象上，"),n("b",[t._v("我们写在类里面，只是为了彰显和这个类有紧密的关系")]),t._v(")")]),t._v(" "),n("li",[t._v("因此，我们指向const对象的指针，能够调用的是const成员函数和static成员函数")]),t._v(" "),n("li",[t._v("普通成员函数，内部可以实现修改非静态成员变量的语句，所以"),n("b",[t._v("可能会破坏const对象规定的，不能改变我的内部数据的原则")]),t._v("。")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[t._v("Rectangle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pRect "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Rectangle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Rectangle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pConstRect "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Rectangle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指向const对象")]),t._v("\nRectangle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pConstPtr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Rectangle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pConstRect是指向const对象的指针，它只能使用声明为const的成员函数，如GetLength（）。")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3）const-修饰函数的返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3）const-修饰函数的返回值"}},[this._v("#")]),this._v(" 3）const 修饰函数的返回值")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" operate "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" A "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("other"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 赋值函数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nA a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a, b, c 为A 的对象")]),t._v("\na "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正常的链式赋值")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不正常的链式赋值，但合法")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果将赋值函数的返回值加const 修饰，那么该返回值的内容不允许被改动。上例中，语句 a = b = c 仍然正确，但是语句 (a = b) = c 则是非法的。")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4）补充"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4）补充"}},[this._v("#")]),this._v(" 4）补充")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("blockquote",[n("ul",[n("li",[t._v("非const对象可以访问"),n("b",[t._v("任意的")]),t._v("成员函数,自然包括const成员函数,静态成员函数")]),t._v(" "),n("li",[t._v("const对象的成员是不可修改的,然而const对象通过指针维护的对象却是可以修改的.")]),t._v(" "),n("li",[t._v("const成员函数不可以修改对象的数据,不管对象是否具有const性质.它在编译时,以是否修改成员数据为依据,进行检查。")]),t._v(" "),n("li",[t._v("然而加上mutable修饰符的数据成员,对于任何情况下通过任何手段都可修改,自然此时的const成员函数是可以修改它的")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("blockquote",[n("ul",[n("li",[t._v("const 修饰引用（&）修饰输入参数的用法：")])]),t._v(" "),n("blockquote",[n("ul",[n("li",[t._v("1-对于"),n("b",[t._v("非内部数据类型")]),t._v("的输入参数，应该将“"),n("b",[t._v("值传递")]),t._v("”的方式改为“"),n("b",[t._v("const 引用传递")]),t._v("”，目的是提高效率。例如将"),n("code",[t._v("void Func(A a)")]),t._v(" 改为"),n("code",[t._v("void Func(const A &a)")]),t._v("。当然，虽然这样的确能提高效率。但此时千万千万要小心，一定要搞清楚函数究竟是想返回一个对象的“拷贝”还是仅返回“别名”就可以了，否则程序会出错。")]),t._v(" "),n("li",[t._v("2-对于"),n("b",[t._v("内部数据类型")]),t._v("的输入参数，不要将“值传递”的方式改为“const 引用传递”。否则既达不到提高效率的目的，又降低了函数的可理解性。例如"),n("code",[t._v("void Func(int x)")]),t._v(" 不应该改为"),n("code",[t._v("void Func(const int &x)")]),t._v("。（如何理解？？？）")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("const 修饰星号（*）用法：")])]),this._v(" "),s("blockquote",[s("ul",[s("li",[this._v("如果给以“指针传递”方式的函数返回值加const 修饰，那么函数返回值（即指针）的内容不能被修改，该返回值只能被赋给加const 修饰的同类型指针。例如函数")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n如下语句将出现编译错误：\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("str "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n正确的用法是\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("str "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])])}],!1,null,null,null);s.default=e.exports}}]);