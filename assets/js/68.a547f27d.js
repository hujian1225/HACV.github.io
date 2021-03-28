(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{242:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),n("p",[s._v("1）获得int型最大值\n这样的话在编程的时候就算不带书也能很准确的得知int等的数字大小。\n其实就是不想记忆具体范围。")]),s._v(" "),s._m(2),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),n("p",[s._v("比如，求int类型数据中bit中1点个数。")]),s._v(" "),s._m(6),n("p",[s._v("看上去，蛮好的，但是其实不然\n因为，我们需要注意右移的一个注意点。\n"),n("font",{staticStyle:{background:"yellow"}},[s._v("对于"),n("strong",[s._v("有符号数")]),s._v("的"),n("strong",[s._v("右移")]),s._v("，它会用符号位来补全。")])],1),s._v(" "),n("p",[s._v("这样测试")]),s._v(" "),s._m(7),n("p",[s._v("此外，用1，这样的有符号数测试，就会发现，得出了1，因为他的符号位是0，到时候补的还是0")]),s._v(" "),n("p",[n("font",{staticStyle:{background:"yellow"}},[s._v("改进：（用无符号数来右移，就能解决这种右移可能导致的bug）")])],1),s._v(" "),s._m(8),s._m(9),s._v(" "),n("p",[n("font",{staticStyle:{background:"yellow"}},[s._v("C语言中变量"),n("strong",[s._v("默认为有符号")]),s._v("的类型")]),s._v("\nunsigned关键字声明变量为无符号类型\nC语言中"),n("strong",[s._v("只有整数类型")]),s._v("能够声明unsigned变量")],1),s._v(" "),s._m(10),s._v(" "),s._m(11),n("p",[s._v("计算机中，当确定为有符号数运算时，符号数一律用补码表示，运算时符号位和数字位一起参加运算。\n运算结果也用补码表示。")])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"位运算之左移和右移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#位运算之左移和右移"}},[this._v("#")]),this._v(" 位运算之左移和右移")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"一、用途"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、用途"}},[this._v("#")]),this._v(" 一、用途")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMaxInt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2147483647， 由于优先级关系，括号不可省略")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("p",[s._v("解释：整型int占用4个字节（即32位）\n所以可以表示2"),n("sup",[s._v("32")]),s._v("个数字，int有正负和0；\n所以表示的数字范围是\t-2"),n("sup",[s._v("31")]),s._v("—（2"),n("sup",[s._v("31")]),s._v("-1）\n所以是1（二进制为 00000000 00000000 00000000 00000001）\n移位31位，然后变成了2"),n("sup",[s._v("31")]),s._v("  （二进制为 10000000 00000000 00000000 00000000）\n但是0占掉了一个数字，所以还要减去1，才得到最大的int的数值。\n（二进制为 01111111 11111111 11111111 11111111）\n注意：\n我在测试的时候，在devC++和VS2017中编译这个，都显示了warm\n"),n("code",[s._v("[Warning] integer overflow in expression [-Woverflow]")]),s._v("\n但是都最终还是显示了结果：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("原因：\n1.最高位的进位在计算机中被舍去，因为没有位去存储它\n2.在计算机中似乎"),t("strong",[this._v("只检测有符号数的溢出")]),this._v("（"),t("strong",[this._v("这就和那本书《C陷阱与缺陷》上说的一样，我们不认为无符号整数有溢出。。。")]),this._v("），在编译器中会显示warm，但是它不给你处理，还是会让你运行。（这是正常的，正是因为这样，所以C语言才这么自由，它认为这些你能够自己解决）它还是一样的用加法器和补码器进行有符号数和无符号数的加法和减法。\n补码器真的就是由这样的电路组成\n1.如果是有符号数的取补码，符号位不变，后面的诸位取反然后末尾加1\n2.无符号数的取补码")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"二、右移——注意点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、右移——注意点"}},[this._v("#")]),this._v(" 二、右移——注意点")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        \t"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        \n        n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        \t"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"loop\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//测试")]),s._v("\n        n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//发现，一直输出loop")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//因为-1的二进制全是1，符号位也是1。一直右移，还是把1补进来。")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" temp"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//改进")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temp"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        \t"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        \n        temp"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用-1，测试是32")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"三、c语言中数据表示的杂谈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、c语言中数据表示的杂谈"}},[this._v("#")]),this._v(" 三、C语言中数据表示的杂谈")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("1）有符号数的表示法\n在计算机内部用补码表示有符号数\n正数的补码为正数本身\n负数的补码为负数的绝对值各位取反后加1\n2）无符号数的表示法\n在计算机内部用原码表示无符号数\n"),t("strong",[this._v("无符号数默认为正数")]),this._v("\n无符号数没有符号位\n对于固定长度的无符号数\t\t\t有用！")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//其实，获取C语言中数据范围，还可以查看这些宏，但是不同编译器可能实现不同？忘记查了。")]),s._v("\nMAX_VALUE "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" MIN_VALUE\nMIN_VALUE "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" MAX_VALUE\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])}],!1,null,null,null);t.default=e.exports}}]);