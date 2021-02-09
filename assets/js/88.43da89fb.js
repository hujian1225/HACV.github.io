(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{253:function(t,e,s){"use strict";s.r(e);var r=s(0),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("font",{staticStyle:{background:"yellow"},attrs:{size:"5"}},[t._v("两种主流汇编语法")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("对比：")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("INTEL 格式的指令可以使用大写字母，也可以使用小写字母（以NASM编译器的为例）\nAT&T 格式的一般使用小写字母。")]),t._v(" "),t._m(4),t._m(5),t._v(" "),s("blockquote",[s("ul",[s("li",[s("code",[t._v("INTEL汇编")]),t._v("语法中，第一个表示"),s("strong",[t._v("目的")]),t._v("操作数，第二个表示"),s("strong",[t._v("源")]),t._v("操作数，赋值方向从右向左\n"),s("font",{staticStyle:{background:"yellow"}},[t._v("类似（C语言中a=3，Intel的这个语法，倒是蛮"),s("strong",[t._v("符合")]),t._v("写过高级语言代码人的习惯的）")])],1)])]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("我的github上"),s("a",{attrs:{href:"https://github.com/HACV/Blog_HACV/tree/master/2020/07",target:"_blank",rel:"noopener noreferrer"}},[t._v("收录"),s("OutboundLink")],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"汇编杂谈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#汇编杂谈"}},[this._v("#")]),this._v(" 汇编杂谈")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("ul",[e("li",[e("code",[this._v("AT&T汇编")]),this._v(" 与 "),e("code",[this._v("INTEL汇编")]),this._v("\n在gcc反汇编出来的一般是"),e("code",[this._v("AT&T汇编")]),this._v("\n在VS（比如VS2012）反汇编出来的一般是"),e("code",[this._v("INTEL汇编")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们在用汇编语言编译器"),e("code",[this._v("NASM")]),this._v("写的汇编是"),e("code",[this._v("INTEL汇编")]),this._v("语法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1）指令大小写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1）指令大小写"}},[this._v("#")]),this._v(" 1）指令大小写")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("INTEL的   mov eax,ebx或者MOV EAX, EBX\nAT&T的    movl %ebx, %eax \n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2）指令操作数赋值方向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2）指令操作数赋值方向"}},[this._v("#")]),this._v(" 2）指令操作数赋值方向")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("ul",[e("li",[e("code",[this._v("AT&T汇编")]),this._v("语法第一个为"),e("strong",[this._v("源")]),this._v("操作数，第二个为"),e("strong",[this._v("目的")]),this._v("操作数，方向从左到右\n（不符合习惯）")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3）指令前缀"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3）指令前缀"}},[this._v("#")]),this._v(" 3）指令前缀")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("ul",[e("li",[e("code",[this._v("INTEL汇编")]),this._v("语法中寄存器和立即数不需要前缀")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("ul",[s("li",[s("code",[t._v("AT&T汇编")]),t._v("语法中中"),s("strong",[t._v("寄存器")]),t._v("需要加前缀“"),s("strong",[t._v("%")]),t._v("”；"),s("strong",[t._v("立即数")]),t._v("需要加前缀“"),s("strong",[t._v("$")]),t._v("”")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("INTEL的   MOV EAX,1\nAT&T的    movl $1,%eax \n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4）指令后缀"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4）指令后缀"}},[this._v("#")]),this._v(" 4）指令后缀")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("INTEL汇编")]),this._v("中处理内存操作数时也有类似的语法如：BYTE PTR、WORD PTR、DWORD PTR\n"),e("code",[this._v("AT&T汇编")]),this._v("语法中大部分指令操作码的最后一个字母表示操作数大小，“b”表示 byte（一个\n字节）；“w”表示 word（2，个字节）；“l”表示 long（4，个字节）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("INTEL         \t\t\t\t\tAT&T\nmov al, bl     \t\t\t    movb %bl,%al\nmov ax,bx      \t\t\t\tmovw %bx,%ax\nmov eax, dword ptr [ebx]       movl (%ebx), %eax \n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br"),e("span",{staticClass:"line-number"},[this._v("4")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_5）间接寻址语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5）间接寻址语法"}},[this._v("#")]),this._v(" 5）间接寻址语法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("INTEL汇编")]),this._v("中基地址使用“[”、“]”\n"),e("code",[this._v("AT&T汇编")]),this._v("中使用“(”、“)”")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"扩展阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[this._v("#")]),this._v(" 扩展阅读")])}],!1,null,null,null);e.default=i.exports}}]);