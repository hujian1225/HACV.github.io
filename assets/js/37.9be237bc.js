(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{202:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.bilibili.com/video/BV1pE41197Qj",target:"_blank",rel:"noopener noreferrer"}},[t._v("B站传送门"),a("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("引入问题")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("正是因为上面，朴素算法的大规模数据区间和查询复杂度太高了，所以引入了“树状数组”这种数据结构来降低复杂度。")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("lowbit()操作：")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("$lowbit(n)= n&( (~n)+1 ) = n&( ~n+1 )$")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("所以，lowbit(n)=n&(-n)")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("由于求的是“区间和查询”-》想到-》前缀和相减的方法-》使用树形结构来维护，就会把复杂度降到$O(logn)$")]),t._v(" "),a("p",[t._v("对于一个序列，我们在其上建立一个这样的森林结构：\n"),a("font",{staticStyle:{background:"yellow"},attrs:{size:"3"}},[t._v("每个节点t[x]保存以x为根的子树中叶节点值的和")]),t._v(" "),a("img",{attrs:{src:"https://gitee.com/HACV/images_bed/raw/master/MainBlog/2020/2020_11/11_11/1.png"}})],1),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("把每个节点t[x]的x转化为二进制后")]),t._v(" "),a("img",{attrs:{src:"https://gitee.com/HACV/images_bed/raw/master/MainBlog/2020/2020_11/11_11/2.png"}}),t._v(" "),a("p",[a("font",{staticStyle:{background:"yellow"},attrs:{size:"3"}},[t._v("我们会发现每一层的"),a("strong",[t._v("末尾的零")]),t._v("的个数都是相同的（我用红色箭头标记了）")])],1),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[a("font",{staticStyle:{background:"yellow"},attrs:{size:"3"}},[t._v("1、t[x]节点的父节点为t[x + lowbit(x)] ")]),t._v(" "),a("font",{staticStyle:{background:"yellow"},attrs:{size:"3"}},[t._v("2、整颗树的高度为$logn+1$ ")])],1),t._v(" "),t._m(15),t._v(" "),a("img",{attrs:{src:"https://gitee.com/HACV/images_bed/raw/master/MainBlog/2020/2020_11/11_11/4.png"}}),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("向x号位置进行加k")]),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),a("img",{attrs:{src:"https://gitee.com/HACV/images_bed/raw/master/MainBlog/2020/2020_11/11_11/5.png"}}),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("可以发现向左上找上一个节点只需要将下标-=lowbit(这个节点的下标)")]),t._v(" "),t._m(21),a("p",[t._v("然后，如果我们要求区间和，我们可以分别求出前缀和，并相减。")]),t._v(" "),t._m(22),t._v(" "),a("p",[t._v("树状数组-》是一个动态维护前缀和的工具-》我们需要灵活应用它")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),a("p",[t._v("（5分钟）")]),t._v(" "),a("p",[t._v("（6分20）")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),a("p",[t._v("复杂区间问题，使用树状数组就不是很方便了。\n我们可以转而使用**扩展性更强的“线段树”**来进行区间维护。")]),t._v(" "),t._m(28),t._v(" "),a("p",[t._v("代码总结。")])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"树状数组（binary-indexed-tree）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#树状数组（binary-indexed-tree）"}},[this._v("#")]),this._v(" 树状数组（Binary Indexed Tree）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一、引入问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、引入问题"}},[this._v("#")]),this._v(" 一、引入问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("给出一个长度为n的数组,完成以下两种操作\n●将第x个数加上k\n●输出区间[x,y]内每个数的和\n题目来源: Luogu P3374树状数组1\n给出一个数组要求支持"),s("strong",[this._v("单点修改")]),this._v("和"),s("strong",[this._v("区间和的查询")]),this._v("操作")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）对比两种情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）对比两种情况"}},[this._v("#")]),this._v(" （1）对比两种情况")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th"),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td"),t._v(" "),a("td",[t._v("暴力算法")]),t._v(" "),a("td",[t._v("引入DS-树状数组")])]),t._v(" "),a("tr",[a("td",[t._v("单点修改")]),t._v(" "),a("td",[t._v("$O(1)$")]),t._v(" "),a("td",[t._v("$O(logn)$")])]),t._v(" "),a("tr",[a("td",[t._v("区间和查询")]),t._v(" "),a("td",[t._v("$O(n)$")]),t._v(" "),a("td",[t._v("$O(logn)$")])]),t._v(" "),a("tr",[a("td",[t._v("n次查询，大数据量情况")]),t._v(" "),a("td",[t._v("O(n"),a("sup",[t._v("2")]),t._v(")")]),t._v(" "),a("td",[t._v("$O(nlogn)$")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"二、前置知识-lowbit-操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、前置知识-lowbit-操作"}},[this._v("#")]),this._v(" 二、前置知识- lowbit()操作")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("它表示非负整数在二进制表示下最低位1和后面的0构成的十进制数值")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("eg. lowbit(44)=lowbit( (101"),a("strong",[t._v("100")]),t._v(")"),a("sub",[t._v("2")]),t._v(" )=("),a("strong",[t._v("100")]),t._v(")"),a("sub",[t._v("2")]),t._v("=4")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("由位运算容易知道：\n101100\n010011\n加一\n010100\n然后，按位&")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("此外，因为计算机存储使用的是补码，取反加一后获得的是负的这个值。\n"),s("code",[this._v("~n+1=-n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"三、树状数组–思想及实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、树状数组–思想及实现"}},[this._v("#")]),this._v(" 三、树状数组–思想及实现")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("问题：")]),this._v(" "),s("li",[this._v("那么每个节点覆盖的长度是多少呢？")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）观察1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）观察1"}},[this._v("#")]),this._v(" （1）观察1")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）观察2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）观察2"}},[this._v("#")]),this._v(" （2）观察2")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("进一步观察知道："),s("strong",[this._v("t[x]节点覆盖的长度就是lowbit(x)")]),this._v(" "),s("img",{attrs:{src:"https://gitee.com/HACV/images_bed/raw/master/MainBlog/2020/2020_11/11_11/3.png"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（3）归纳出公式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（3）归纳出公式"}},[this._v("#")]),this._v(" （3）归纳出公式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（4）代码，add-n-k"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（4）代码，add-n-k"}},[this._v("#")]),this._v(" （4）代码，add(n,k)")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//for(; x<=n; x+=lowbit(x) )")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（5）ask操作（核心）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（5）ask操作（核心）"}},[this._v("#")]),this._v(" （5）ask操作（核心）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("查询这个点的前缀和，需要从这个点"),s("strong",[this._v("向左上")]),this._v("找到上一个节点，"),s("strong",[this._v("并加上其节点")]),this._v("的值")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"再次观察"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#再次观察"}},[this._v("#")]),this._v(" 再次观察")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" rt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//for(; x ; x-=lowbit(x) )")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \trt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" rt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"四、树状数组的扩展应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、树状数组的扩展应用"}},[this._v("#")]),this._v(" 四、树状数组的扩展应用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("（1）单点修改+区间查询（前面的例子）")]),this._v(" "),s("li",[this._v("（2）区间修改，单点查询")]),this._v(" "),s("li",[this._v("（3）区间修改，区间查询等操作")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）区间修改，单点查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）区间修改，单点查询"}},[this._v("#")]),this._v(" （2）区间修改，单点查询")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"数组→树状数组→前缀区间维护→和、异或和、最大值、最小值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组→树状数组→前缀区间维护→和、异或和、最大值、最小值"}},[this._v("#")]),this._v(" 数组→树状数组→前缀区间维护→和、异或和、最大值、最小值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("对于一个序列我们可以根据其建立一个树状数组去维护其"),s("strong",[this._v("前缀区间")]),this._v("\n注意：\n其维护的值不只有和。\n异或和，最大值，最小值等。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"而对于区间修改，区间查询这样复杂的区间操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#而对于区间修改，区间查询这样复杂的区间操作"}},[this._v("#")]),this._v(" 而对于区间修改，区间查询这样复杂的区间操作")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"五、总结与代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、总结与代码"}},[this._v("#")]),this._v(" 五、总结与代码")])}],!1,null,null,null);s.default=e.exports}}]);