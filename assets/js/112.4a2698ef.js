(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{278:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[a("strong",[a("center",[t._v("优先级从高到低，分为15级")])],1),t._v(" "),a("img",{attrs:{src:"/photos/2020.5.28/2020_5.28_1.jpg",width:"80%"}}),t._v(" "),a("img",{attrs:{src:"/photos/2020.5.28/2020_5.28_2.jpg",width:"80%"}})]),t._v(" "),t._m(4),t._v(" "),a("p",[a("font",{staticStyle:{background:"yellow"},attrs:{size:"5"}},[t._v("初-单-算-移-关        （出箪蒜一罐）")]),t._v(" "),a("font",{staticStyle:{background:"yellow"},attrs:{size:"5"}},[t._v("位-逻-三-赋-逗        （味落三伏豆）")])],1),t._v(" "),a("p",[t._v("//箪—意指古代盛饭用的圆形竹器")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("解释：\n初：初级运算符\n单：单目运算符\n算：算数运算符（包含2个优先级）\n移：移位运算符\n关：关系运算符（包含2个优先级）")]),t._v(" "),a("p",[t._v("位：位运算（除去，位运算中的单目运算符~ 包含3个优先级）\n逻：逻辑运算符（包含2个优先级）\n三：三目运算符\n赋：赋值运算符\n逗：逗号运算符")]),t._v(" "),t._m(6),t._v(" "),a("p",[a("font",{staticStyle:{background:"yellow"},attrs:{size:"5"}},[t._v("单三赋    从右左")])],1),t._v(" "),a("p",[t._v("除以上规则以外,还有一点。\n标准的C语言编译器对运算符的解析遵循“最大贪婪”规则。")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("当C语言编译器对源程序进行词法分析时，如果运算符的下一个符号还是运算符，并且能和前一个运算符构成一个新的合法运算符时，编译器的词法分析器必须将其解析为两个运算符符号构成的新的运算符。")]),t._v(" "),a("p",[t._v("举一个没太大实际意义的例子来辅证，例如: x=z+++y;\n是按照x=z+（++y）;来计算，还是按照x=（z++）+y;来计算呢?\n根据C编译器的“最大贪婪”规则,是按照x=（z++）+y;来计算，而不是按照x=z+（++y）来计算\n可以验证")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),a("p",[t._v("1、借助“最大贪婪”规则进行“词法分析”\n2、利用优先级进行分析词义")])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"c语言优先级和结合性记忆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c语言优先级和结合性记忆"}},[this._v("#")]),this._v(" C语言优先级和结合性记忆")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"预、前述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预、前述"}},[this._v("#")]),this._v(" 预、前述")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("前述")]),this._v("：以前以为，记忆C语言的优先级和结合性就像孔乙己记忆“回”字的四种写法一样有些没必要，对于技术，简洁即美。但以下场景，记忆C语言的优先级结合性还是有一定好处\n"),s("strong",[this._v("场景")]),this._v("：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("ul",[a("li",[t._v("记忆一些特定的优先级和结合性，能够帮助从编译器角度来快速识别多级指针和数组指针和函数指针判定指针类型。")]),t._v(" "),a("li",[t._v("某些项目的遗留代码中有一些编程风格不好的片段，总是不写括号，遇到就需要查书，对研究别人代码，有一定影响。记忆优先级和结合性，能够降低开发中重构已有代码的难度。")]),t._v(" "),a("li",[t._v("有的相关试题中，有考优先级的题目的存在。（考优先级不是目的，而是为了解决那些风格不好的遗留代码）")]),t._v(" "),a("li",[t._v("由于编译器语法分析阶段的设计原理，其他语言的优先级也可以在此基础上记忆。")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("C语言的优先级，再添加上一些C++本身的运算符，则很容易转换到记忆C++的优先级")]),t._v(" "),a("li",[t._v("Java的运算符的优先级和C语言相似")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一、优先级记忆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、优先级记忆"}},[this._v("#")]),this._v(" 一、优先级记忆")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("记忆场景：\n每年三伏天农作时期，要为田间劳作者送饭，送饭者专门用箪盛着食物前往，还专门为其中一个很喜欢吃大蒜的劳作者带了一罐蒜解馋。后来，劳作者吃着发现，今年的三伏天的黄豆也格外美味。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"二、结合性记忆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、结合性记忆"}},[this._v("#")]),this._v(" 二、结合性记忆")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"三、“最大贪婪”规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、“最大贪婪”规则"}},[this._v("#")]),this._v(" 三、"),s("strong",[this._v("“最大贪婪”规则")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" z"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("z"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出结果为8，而不是9")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//考点：C编译器的“最大贪婪”规则")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"四、用法举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、用法举例"}},[this._v("#")]),this._v(" 四、用法举例")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）记忆第一优先级中的和第二优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）记忆第一优先级中的和第二优先级"}},[this._v("#")]),this._v(" （1）记忆第一优先级中的和第二优先级")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这是一个数组指针，指向的类型是int (*)[3]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这是一个指针数组，里面的是int *类型的指针")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这是一个二级指针，指向的类型是int *")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这是一个函数指针，指向的类型是int (*)(int,int)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这是一个返回值为指针的函数")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）比格基地笔试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）比格基地笔试题"}},[this._v("#")]),this._v(" （2）比格基地笔试题")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//以下程序的k最终值是：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nk "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//答:90")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解释  =是赋值运算符 *=是赋值运算符  +是算数运算符 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//“出箪蒜一罐,味落三伏豆”知，算数运算符优先级高，先算i+j")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//考点：编程语言的优先级")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（3）360公司笔试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（3）360公司笔试题"}},[this._v("#")]),this._v(" （3）360公司笔试题")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//“出箪蒜一罐,味落三伏豆”知,关系运算符==的优先级比赋值运算符=高，知i=0")]),t._v("\n\ti"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//(-*p)中，-和*都是单目运算符，结合性是“单三赋，从右左”，所以，相当于(-n)")]),t._v("\n\tj"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i=%d,j=%d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出为 i=0,j=7")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//考点：编程语言的优先级,结合性")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"五、分析方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、分析方法"}},[this._v("#")]),this._v(" 五、分析方法")])}],!1,null,null,null);s.default=e.exports}}]);