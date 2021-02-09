(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{309:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),n("p",[s._v("C和C++中const和#define的区别：（？）\n有相同的地方，也有不同的地方")]),s._v(" "),n("p",[s._v("注意："),n("font",{staticStyle:{background:"yellow"}},[s._v("数组下标不能用变量！！")])],1),s._v(" "),n("p",[s._v("摘选自我写的另一篇博客的部分")]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("概述：\nQ：C语言中，const关键字限定一个变量为只读，但它是真正意义上的只读吗？\nA：C语言中的并不是的！const虽说是constant的简写，是不变的意思。\n但在C语言中，const并不是说它修饰常量，而是说它限定一个变量为只读。")]),s._v(" "),n("li",[n("strong",[s._v("C语言中，const关键字修饰的变量并非真正意义完完全全的只读！")]),s._v("\n（难怪叫常变量,因为C语言中const就没有把这个变量变成常量！）\n"),n("font",{staticStyle:{background:"yellow"}},[s._v("Tips："),n("code",[s._v("C++")]),s._v("中则对const关键字进行了加强，使得真的变成了常量（详情见"),n("code",[s._v("C++")]),s._v("中const详解）\n所以，我们常说"),n("code",[s._v("C++")]),s._v("中const修饰的变量，叫做const常量。")])],1)])]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),s._m(7),s._m(8),s._m(9),s._v(" "),s._m(10),s._m(11),s._m(12),s._v(" "),s._m(13),s._v(" "),s._m(14),s._v(" "),s._m(15),s._m(16),s._m(17),s._v(" "),s._m(18),n("p",[s._v("这个现象，就和#define很类似")]),s._v(" "),s._m(19),s._v(" "),s._m(20),s._m(21),s._v(" "),s._m(22),s._v(" "),s._m(23),s._v(" "),s._m(24),n("p",[s._v("输出")]),s._v(" "),s._m(25),s._m(26),s._v(" "),s._m(27),n("p",[s._v("这样就卸载了那个a定义")]),s._v(" "),n("p",[s._v("方法2）C++中const的作用域检查")]),s._v(" "),s._m(28),s._v(" "),s._m(29),n("p",[s._v("上面是const的作用域检查。")]),s._v(" "),n("p",[n("font",{staticStyle:{background:"yellow"},attrs:{size:"5"}},[s._v("当const int &a= 10;\t const修饰引用时，也会分配存储空间。（如何理解？）")])],1)])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"const和-define对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#const和-define对比"}},[this._v("#")]),this._v(" const和#define对比")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"一、综述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、综述"}},[this._v("#")]),this._v(" 一、综述")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("const的用途：\n其实是"),t("code",[this._v("C++")]),this._v("里面，用来替换"),t("code",[this._v("#define")]),this._v("的一个方法，一个手段。")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("p",[s._v("综上，所以"),n("code",[s._v("C")]),s._v("语言中const修饰的变量，由于底层还是变量，所以"),n("strong",[s._v("不能作为数组下标")]),s._v(" "),n("code",[s._v("C++")]),s._v("中const修饰的变量，由于在没有使用地址等情况，是常量，所以"),n("strong",[s._v("可以作为数组下标")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"二、代码测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、代码测试"}},[this._v("#")]),this._v(" 二、代码测试")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"_1）未使用const的变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1）未使用const的变量"}},[this._v("#")]),this._v(" 1）未使用const的变量")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h4",{attrs:{id:"c语言测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c语言测试"}},[this._v("#")]),this._v(" C语言测试")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//demo.c ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这种语法在C语言编译器不通过（显然的）")]),s._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OK"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[Error]variable-sized object may not be initialized\n[Warning] excess elements in array initializer[enabled by default]\n[Warning](near initialization for 'test')[enabled by default]\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h4",{attrs:{id:"c-测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-测试"}},[this._v("#")]),this._v(" "),t("code",[this._v("C++")]),this._v("测试")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//demo.cpp ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("<cstdio>")])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这种语法在C++语言编译器也不通过")]),s._v("\n\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OK"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[Error]variable-sized object 'test' may not be initialized\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("但是神奇的。\n上面这种语法在"),t("code",[this._v("Linux内核")]),this._v("里面是成立的，原因是Linux的内核的gcc编译器支持。\n但是，我们的C语言和C++编译器都不支持这种语法现象！！")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"_2）使用const的变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2）使用const的变量"}},[this._v("#")]),this._v(" 2）使用const的变量")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h4",{attrs:{id:"c语言测试-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c语言测试-2"}},[this._v("#")]),this._v(" C语言测试")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//demo.c ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//C中编译是不通过的！")]),s._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OK"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[Error]variable-sized object may not be initialized\n[Warning] excess elements in array initializer[enabled by default]\n[Warning](near initialization for 'test')[enabled by default]\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h4",{attrs:{id:"c-测试-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-测试-2"}},[this._v("#")]),this._v(" C++测试")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//demo.cpp ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("<cstdio>")])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//编译是通过的！")]),s._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OK"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"三、-define测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、-define测试"}},[this._v("#")]),this._v(" 三、#define测试")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//demo.cpp 和demo.c中下面")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("<cstdio>")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//C语言中是#include<stdio.h>")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("a")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")])])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("b")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")])])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//编译是通过的！。。。")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//PS：在C++中，a是#define，b是const也可以编译成功！！！")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//当然C语言，显然PS中这种情况不行。")]),s._v("\n    \n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OK"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("p",[s._v("对比总结：\n"),n("code",[s._v("C++")]),s._v("中的const和"),n("code",[s._v("#define")]),s._v("（无论，C语言还是"),n("code",[s._v("C++")]),s._v("（因为一样））\n相同之处：\n1）不言而喻，上面代码展示了\n不同之处：\n1）"),n("code",[s._v("C++中的const常量")]),s._v("是由"),n("strong",[s._v("编译器")]),s._v("处理的，提供类型检查和"),n("strong",[s._v("作用域检查")]),s._v("\n2）宏定义由"),n("strong",[s._v("预处理器")]),s._v("处理，单纯的文本替换")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"四、作用域检查（代码证明）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、作用域检查（代码证明）"}},[this._v("#")]),this._v(" 四、作用域检查（代码证明）")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"_1）-define测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1）-define测试"}},[this._v("#")]),this._v(" 1）#define测试")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("<cstdio>")])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fun1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("a")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")])])]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fun2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a=%d\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//#define可以使用，，，")]),s._v("\n\t\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fun1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fun2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("a=10\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("显然，#define的这种写法\n那个宏定义的作用域。。。作用域太那啥了。\n那么如何将这个宏的作用域限制在那个函数里面呢？\n方法1）"),t("code",[this._v("#define")]),this._v("之后记得"),t("code",[this._v("#undef")])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fun1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("a")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")])])]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("undef")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[s._v("a  ")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"_2）c-中const测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2）c-中const测试"}},[this._v("#")]),this._v(" 2）C++中const测试")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("<cstdio>")])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fun1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fun2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b = %d\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//不能调用那个fun1函数中的b，因为const的作用域检查")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fun1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fun2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])])}],!1,null,null,null);t.default=e.exports}}]);