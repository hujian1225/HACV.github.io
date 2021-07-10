(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{225:function(t,e,_){"use strict";_.r(e);var s=_(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),_("p",[_("font",{staticStyle:{background:"yellow"}},[t._v("两种主流汇编语法")])],1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),_("ul",[_("li",[_("p",[_("code",[t._v("INTEL汇编")]),t._v("语法中，第一个表示"),_("strong",[t._v("目的")]),t._v("操作数，第二个表示"),_("strong",[t._v("源")]),t._v("操作数，赋值方向从右向左\n"),_("font",{staticStyle:{background:"yellow"}},[t._v("类似（C语言中a=3，Intel的这个语法，倒是蛮"),_("strong",[t._v("符合")]),t._v("写过高级语言代码人的习惯的）")])],1)]),t._v(" "),t._m(9)]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),_("p",[t._v("我的github上"),_("a",{attrs:{href:"https://github.com/HACV/Blog_HACV/tree/master/2020/07",target:"_blank",rel:"noopener noreferrer"}},[t._v("收录"),_("OutboundLink")],1)]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),_("ul",[_("li",[_("font",{staticStyle:{background:"yellow"}},[t._v("Intel处理器系列俗称X86")])],1),t._v(" "),_("li",[_("strong",[t._v("微处理器")]),t._v("的发展：\n自1971年Intel公司开发出第-一个微处理器Intel 4004至今，"),_("br"),t._v("\n微处理器经历了"),_("br"),t._v("\nIntel 8008（8 位）、Intel 8080 （8位）"),_("br"),t._v(" "),_("font",{staticStyle:{background:"yellow"}},[t._v("Intel 8086（16位）")]),t._v("、Intel 8088 （16位）、Intel80286 （16位）"),_("br"),t._v(" "),_("font",{staticStyle:{background:"yellow"}},[t._v("Intel 80386 （32位）")]),t._v("、Intel 80486 （32位）、Pentium （32位）"),_("br"),t._v(" "),_("font",{staticStyle:{background:"yellow"}},[t._v("Pentium pro（64位）")]),t._v("、Pentium II （64位）、Pentium II （64 位）、  Pentium 4 （64位）等。")],1),t._v(" "),_("li",[t._v("这里的32位、64位指的是"),_("strong",[t._v("机器字长")]),t._v("，是指计算机进行一次整数运算所能处理的二进制数据的位数。"),_("br"),t._v(" "),_("font",{staticStyle:{background:"yellow"}},[t._v("（比如，")]),t._v("我在写8086的汇编语言的时候，了解到8086的"),_("b",[t._v("通用寄存器是16位的")]),t._v("，"),_("strong",[t._v("数据线却有20根")]),t._v("，帮助理解机器字长概念）\n"),t._m(22)],1)]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),_("p",[_("font",{staticStyle:{background:"red"}},[t._v("寄存器小写也是可以的，一般反汇编过来的也小写")])],1),t._v(" "),t._m(25),t._m(26),t._v(" "),_("ul",[_("li",[t._v("1）"),_("font",{staticStyle:{background:"yellow"}},[t._v("通用寄存器（8个32位通用寄存器）")])],1)]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),_("ul",[_("li",[t._v("2）"),_("font",{staticStyle:{background:"yellow"}},[t._v("段寄存器（6个32位段寄存器）")])],1)]),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),_("ul",[_("li",[t._v("3）"),_("font",{staticStyle:{background:"yellow"}},[t._v("指令指针寄存器")])],1)]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),_("ul",[_("li",[t._v("4）"),_("font",{staticStyle:{background:"yellow"}},[t._v("标志寄存器")])],1)]),t._v(" "),_("blockquote",[t._m(36),t._v(" "),_("blockquote",[_("p",[t._v("常见标志位：")]),t._v(" "),_("ul",[_("li",[t._v("CF（carry Flag）进位标志， 进位标志CF主要用来反映运算是否产生进位或借位。如果运算结果的最高位产生了一个进位或借位，那么，其值为1，否则其值为0。使用该标志位的情况有：多字(字节)数的加减运算，无符号数的大小比较运算，移位操作，字(字节)之间移位，专门改变CF值的指令等。")]),t._v(" "),_("li",[t._v("SF（signed Flag）符号标志")]),t._v(" "),_("li",[t._v("ZF（zero Flag）零标志//就是你的计算结果是否为0，用他标识？？这是想要像.bss段一样省空间？")]),t._v(" "),_("li",[t._v("OF（overflow Flag）溢出标志")]),t._v(" "),_("li",[t._v("奇偶标志PF(Parity Flag) 奇偶标志PF用于反映运算结果中“1”的个数的奇偶性。如果“1”的个数为偶数，则PF的值为1，否则其值为0。利用PF可进行奇偶校验检查，或产生奇偶校验位。在数据传送过程中，为了提供传送的可靠性，如果采用奇偶校验的方法，就可使用该标志位。")]),t._v(" "),_("li",[t._v("PS：这些条件码由算术指令隐含设置（难怪我反汇编出来没有）")]),t._v(" "),_("li",[t._v("具体可看"),_("a",{attrs:{href:"https://www.jianshu.com/p/41148c56cdb7",target:"_blank",rel:"noopener noreferrer"}},[t._v("简书"),_("OutboundLink")],1)])])])]),t._v(" "),_("p",[t._v("8086处理器的标志寄存器")]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),_("p",[_("a",{attrs:{href:"https://zhidao.baidu.com/question/122898039.html?ivk_sa=1022817r",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度"),_("OutboundLink")],1),_("br"),t._v(" "),_("a",{attrs:{href:"https://blog.csdn.net/yuqian123455/article/details/86894660",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSDN"),_("OutboundLink")],1),_("br"),t._v(" "),_("a",{attrs:{href:"https://recomm.cnblogs.com/blogpost/2331241",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客园"),_("OutboundLink")],1)]),t._v(" "),t._m(40),t._v(" "),_("p",[t._v("32位处理器（以IA-32（Intel Architecture，32bit））\n16位处理器（以8086为例）")]),t._v(" "),t._m(41),t._m(42),t._v(" "),t._m(43),t._m(44),t._v(" "),t._m(45),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),_("p",[t._v("16位的")]),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),_("ul",[_("li",[t._v("《x86汇编语言："),_("a",{attrs:{href:"https://book.douban.com/subject/20492528/",target:"_blank",rel:"noopener noreferrer"}},[t._v("从实模式到保护模式"),_("OutboundLink")],1),t._v("》，李忠 / 王晓波 / 余洁")]),t._v(" "),_("li",[t._v("《"),_("a",{attrs:{href:"https://book.douban.com/subject/25726019/",target:"_blank",rel:"noopener noreferrer"}},[t._v("汇编语言"),_("OutboundLink")],1),t._v("》，王爽")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"汇编语言基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#汇编语言基础"}},[this._v("#")]),this._v(" 汇编语言基础")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_01-两种主流汇编语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01-两种主流汇编语法"}},[this._v("#")]),this._v(" 01.两种主流汇编语法")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[_("code",[t._v("AT&T汇编")]),t._v(" 与 "),_("code",[t._v("INTEL汇编")])]),t._v(" "),_("li",[t._v("在gcc反汇编出来的一般是"),_("code",[t._v("AT&T汇编")])]),t._v(" "),_("li",[t._v("在VS（比如VS2012）反汇编出来的一般是"),_("code",[t._v("INTEL汇编")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们在用汇编语言编译器"),e("code",[this._v("NASM")]),this._v("写的汇编是"),e("code",[this._v("INTEL汇编")]),this._v("语法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("对比：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-1-指令大小写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-指令大小写"}},[this._v("#")]),this._v(" 1.1.指令大小写")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("INTEL 格式的指令可以使用大写字母，也可以使用小写字母（以NASM编译器的为例）"),e("br"),this._v("\nAT&T 格式的一般使用小写字母。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("INTEL的   mov eax,ebx或者MOV EAX, EBX\nAT&T的    movl %ebx, %eax \n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-2-指令操作数赋值方向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-指令操作数赋值方向"}},[this._v("#")]),this._v(" 1.2.指令操作数赋值方向")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[e("code",[this._v("AT&T汇编")]),this._v("语法第一个为"),e("strong",[this._v("源")]),this._v("操作数，第二个为"),e("strong",[this._v("目的")]),this._v("操作数，方向从左到右\n（不符合习惯）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-3-指令前缀"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-指令前缀"}},[this._v("#")]),this._v(" 1.3.指令前缀")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[_("code",[t._v("INTEL汇编")]),t._v("语法中寄存器和立即数不需要前缀")]),t._v(" "),_("li",[_("code",[t._v("AT&T汇编")]),t._v("语法中中"),_("strong",[t._v("寄存器")]),t._v("需要加前缀“"),_("strong",[t._v("%")]),t._v("”；"),_("strong",[t._v("立即数")]),t._v("需要加前缀“"),_("strong",[t._v("$")]),t._v("”")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("INTEL的   MOV EAX,1\nAT&T的    movl $1,%eax \n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-4-指令后缀"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-指令后缀"}},[this._v("#")]),this._v(" 1.4.指令后缀")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[_("code",[t._v("INTEL汇编")]),t._v("中处理内存操作数时也有类似的语法如："),_("code",[t._v("BYTE PTR")]),t._v("、"),_("code",[t._v("WORD PTR")]),t._v("、"),_("code",[t._v("DWORD PTR")])]),t._v(" "),_("li",[_("code",[t._v("AT&T汇编")]),t._v("语法中大部分指令操作码的最后一个字母表示操作数大小，“b”表示 byte（一个\n字节）；“w”表示 word（2，个字节）；“l”表示 long（4，个字节）。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("INTEL         \t\t\t\t\tAT&T\nmov al, bl     \t\t\t    movb %bl,%al\nmov ax,bx      \t\t\t\tmovw %bx,%ax\nmov eax, dword ptr [ebx]       movl (%ebx), %eax \n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br"),e("span",{staticClass:"line-number"},[this._v("4")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-5-间接寻址语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-间接寻址语法"}},[this._v("#")]),this._v(" 1.5.间接寻址语法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("INTEL汇编")]),this._v("中基地址使用“[”、“]”")]),this._v(" "),e("li",[e("code",[this._v("AT&T汇编")]),this._v("中使用“(”、“)”")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"扩展阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[this._v("#")]),this._v(" 扩展阅读")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_02-x86汇编寄存器总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_02-x86汇编寄存器总结"}},[this._v("#")]),this._v(" 02.X86汇编寄存器总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("X86汇编寄存器总结，比如为什么叫eax,ax")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-1-intel微处理器发展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-intel微处理器发展"}},[this._v("#")]),this._v(" 2.1.Intel微处理器发展")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Tips:机器字长准确概念是：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-2-32位处理器寄存器详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-32位处理器寄存器详解"}},[this._v("#")]),this._v(" 2.2."),e("code",[this._v("32位")]),this._v("处理器寄存器详解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("以（IA-32（Intel Architecture，32bit））")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("注意：\n之所以，相对于8086点寄存器名字前面有些变化，原因是：\n我们想要在汇编语言中使用经过扩展（Extend）的寄存器，\n所以需要给他们命名，但是，我们又要兼容16位的8086，所以，在前面的基础上加上E，表示32位的。\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br"),e("span",{staticClass:"line-number"},[this._v("4")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_2-2-1-通用寄存器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-通用寄存器"}},[this._v("#")]),this._v(" 2.2.1.通用寄存器")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("blockquote",[_("ul",[_("li",[t._v("1-1）数据寄存器")])]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("EAX（eax）:（ACC，"),_("strong",[t._v("Acc")]),t._v("umulator）累加器")]),t._v(" "),_("li",[t._v("EBX（ebx）：（BR，"),_("strong",[t._v("B")]),t._v("ase "),_("strong",[t._v("R")]),t._v("egister）基地址寄存器")]),t._v(" "),_("li",[t._v("ECX（ecx）：（CR，"),_("strong",[t._v("C")]),t._v("ount "),_("strong",[t._v("R")]),t._v("egister）计数寄存器")]),t._v(" "),_("li",[t._v("EDX（edx）：（DR，"),_("strong",[t._v("D")]),t._v("ata "),_("strong",[t._v("R")]),t._v("egister）数据寄存器")])])]),t._v(" "),_("ul",[_("li",[t._v("1-2）变址寄存器（Index Register）")])]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("ESI（esi）：（"),_("strong",[t._v("S")]),t._v("ource "),_("strong",[t._v("I")]),t._v("ndex）：源变址寄存器")]),t._v(" "),_("li",[t._v("EDI（edi）：（"),_("strong",[t._v("D")]),t._v("estination "),_("strong",[t._v("I")]),t._v("ndex）：目的变址寄存器")])])]),t._v(" "),_("ul",[_("li",[t._v("1-3）指针寄存器")])]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("EBP（ebp）：（Base Pointer）堆栈基指针")]),t._v(" "),_("li",[t._v("ESP（esp）：（Stack Pointer）堆栈顶指针")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_2-2-2-段寄存器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-段寄存器"}},[this._v("#")]),this._v(" 2.2.2.段寄存器")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"language-txt line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("段寄存器是根据内存分段的管理模式而设置的。内存单元的物理地址\n由段寄存器的值和一个偏移量组合而成的，这样可用两个较少位数的\n值组合成一个可访问较大物理空间的内存地址。比如解决了，8086的\n寄存器是16位，数据线是16位，而地址线却是20位，那么如何寻找到\n后续本应该找的20位可以表示的空间而不是16位表示的空间，段\n寄存器就起到了作用。\t\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("blockquote",[_("ul",[_("li",[t._v("SS（Stack Segment）：栈段（堆栈段）")]),t._v(" "),_("li",[_("strong",[t._v("CS")]),t._v("（Code Segment)：代码段——"),_("code",[t._v("联想到C语言和C++中的.text或者说.code段")])]),t._v(" "),_("li",[_("strong",[t._v("DS")]),t._v("（Data Segment）：数据段——"),_("code",[t._v("联想到C语言和C++中的.data段")])]),t._v(" "),_("li",[t._v("ES（Extra Segment）：扩展段（附加段）")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("注：FS和GS寄存器是从386开始才有的（也就是说"),e("code",[this._v("所有32位和64的都有，所有16位的都没有")]),this._v("）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("ul",[e("li",[this._v("FS（Code Segment)：标志段")]),this._v(" "),e("li",[this._v("GS（Global Segment)：全局段")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_2-2-3-指令指针寄存器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-指令指针寄存器"}},[this._v("#")]),this._v(" 2.2.3.指令指针寄存器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("ul",[e("li",[this._v("EIP（eip）：（Instruction Pointer）指令地址（下一条）")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_2-2-4-标志寄存器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-标志寄存器"}},[this._v("#")]),this._v(" 2.2.4.标志寄存器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("EFLAGS（eflags）：PSW（Program status word register，程序状态字寄存器）\n（有些机器中将PSW称为标志寄存器FR（Flag Register））")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("15")]),t._v(" "),_("th",[t._v("14")]),t._v(" "),_("th",[t._v("13")]),t._v(" "),_("th",[t._v("12")]),t._v(" "),_("th",[t._v("11")]),t._v(" "),_("th",[t._v("10")]),t._v(" "),_("th",[t._v("09")]),t._v(" "),_("th",[t._v("08")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("无")]),t._v(" "),_("td",[t._v("无")]),t._v(" "),_("td",[t._v("无")]),t._v(" "),_("td",[t._v("无")]),t._v(" "),_("td",[t._v("OF")]),t._v(" "),_("td",[t._v("DF")]),t._v(" "),_("td",[t._v("IF")]),t._v(" "),_("td",[t._v("TF")])])])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("07")]),t._v(" "),_("th",[t._v("06")]),t._v(" "),_("th",[t._v("05")]),t._v(" "),_("th",[t._v("04")]),t._v(" "),_("th",[t._v("03")]),t._v(" "),_("th",[t._v("02")]),t._v(" "),_("th",[t._v("01")]),t._v(" "),_("th",[t._v("00")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("SF")]),t._v(" "),_("td",[t._v("ZF")]),t._v(" "),_("td",[t._v("无")]),t._v(" "),_("td",[t._v("AF")]),t._v(" "),_("td",[t._v("无")]),t._v(" "),_("td",[t._v("PF")]),t._v(" "),_("td",[t._v("无")]),t._v(" "),_("td",[t._v("CF")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[this._v("#")]),this._v(" 参考资料")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-3-32位，16位，64位处理器寄存器对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-32位，16位，64位处理器寄存器对比"}},[this._v("#")]),this._v(" 2.3."),e("code",[this._v("32位，16位，64位")]),this._v("处理器寄存器对比")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("注意：\nX86-64是相对于8086点寄存器名字前面有些变化\n在前面的基础上加上R，表示64位的。\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("寄存器大类")]),t._v(" "),_("th",[t._v("寄存器细分")]),t._v(" "),_("th",[t._v("32位")]),t._v(" "),_("th",[t._v("16位")]),t._v(" "),_("th",[t._v("64位")])])]),t._v(" "),_("tbody",[_("tr",[_("td"),t._v(" "),_("td",[t._v("数据寄存器")]),t._v(" "),_("td",[t._v("eax,ebx,ecx,edx")]),t._v(" "),_("td",[t._v("ax,bx,cx,dx")]),t._v(" "),_("td",[t._v("rax,rbx,rcx,rdx")])]),t._v(" "),_("tr",[_("td",[t._v("1）通用寄存器")]),t._v(" "),_("td",[t._v("变址寄存器")]),t._v(" "),_("td",[t._v("esi,edi")]),t._v(" "),_("td",[t._v("si,di")]),t._v(" "),_("td",[t._v("rsi,rdi")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("指针寄存器")]),t._v(" "),_("td",[t._v("ebp,esp")]),t._v(" "),_("td",[t._v("bp,sp")]),t._v(" "),_("td",[t._v("rbp,rsp")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("通用寄存器总结\n8个32位通用寄存器\t\n8个16位通用寄存器\t\n16个64位通用寄存器，64位的新增8个通用寄存器r8-r15\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br"),e("span",{staticClass:"line-number"},[this._v("4")]),e("br")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("寄存器大类")]),t._v(" "),_("th",[t._v("寄存器细分")]),t._v(" "),_("th",[t._v("32位")]),t._v(" "),_("th",[t._v("16位")]),t._v(" "),_("th",[t._v("64位")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("2）段寄存器")]),t._v(" "),_("td",[t._v("段寄存器")]),t._v(" "),_("td",[t._v("ss,cs,ds,es,fs,gs")]),t._v(" "),_("td",[t._v("ss,cs,ds,es")]),t._v(" "),_("td",[t._v("ss,cs,ds,es,fs,gs")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("段寄存器总结 \t\n6个32位段寄存器\n4个16位段寄存器\t\n6个64位段寄存器\t       \t\t\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br"),e("span",{staticClass:"line-number"},[this._v("4")]),e("br")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("寄存器大类")]),t._v(" "),_("th",[t._v("寄存器细分")]),t._v(" "),_("th",[t._v("32位")]),t._v(" "),_("th",[t._v("16位")]),t._v(" "),_("th",[t._v("64位")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("3）标志寄存器")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("eflags")]),t._v(" "),_("td",[t._v("flags")]),t._v(" "),_("td",[t._v("rflags")])])])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("寄存器大类")]),t._v(" "),_("th",[t._v("寄存器细分")]),t._v(" "),_("th",[t._v("32位")]),t._v(" "),_("th",[t._v("16位")]),t._v(" "),_("th",[t._v("64位")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("4）指令指针寄存器")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("eip")]),t._v(" "),_("td",[t._v("ip")]),t._v(" "),_("td",[t._v("rip")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-4-其他细节"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-其他细节"}},[this._v("#")]),this._v(" 2.4.其他细节")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("ul",[e("li",[this._v("FR是16位寄存器，其中有9位有效位用来存放状态标志和控制标志。\n状态标志共6位，CF、PF、AF、ZF、SF和OF，用于寄存程序运行的状态信息，\n这些标志往往用作后续指令判断的依据。\n控制标志有3位，IF、DF和TF，用于控制CPU的操作，是人为设置")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_03-概念辨析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_03-概念辨析"}},[this._v("#")]),this._v(" 03.概念辨析")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-1-微处理器，处理器，cpu，gpu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-微处理器，处理器，cpu，gpu"}},[this._v("#")]),this._v(" 3.1.微处理器，处理器，CPU，GPU")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[t._v("维基百科：\n微处理器（英语：Microprocessor，缩写：µP或uP）是可编程特殊集成电路。\n一种处理器，其所有组件小型化至一块或数块集成电路内。一种集成电路，可在其一端或多端接受编码指令，执行此指令并输出描述其状态的信号。这些指令能在内部输入、集中或存放起来。又称半导体中央处理器（CPU），是微型计算机的一个主要部件。\n微处理器的组件常安装在一个单片上或在同一组件内，但有时分布在一些不同芯片上。\n在具有固定指令集的微型计算机中，微处理器由算术逻辑单元和控制逻辑单元组成。在具有微程序控制的指令集的微型计算机中，它包含另外的控制存储单元[1]。\n"),_("ul",[_("li",[t._v("用作处理通用资料时，叫作中央处理器。这也是最为人所知的应用（如：Intel Pentium CPU）；")]),t._v(" "),_("li",[t._v("专用于图像资料处理的，叫作Graphics Processing Unit图形处理器（如Nvidia GeForce 9X0 GPU）；")]),t._v(" "),_("li",[t._v("用于音讯资料处理的，叫作Audio Processing Unit音讯处理单元（如Creative emu10k1 APU）等等。")])])]),t._v(" "),_("li",[t._v("从物理角度来说，它就是一块集成了数量庞大的微型晶体管与其他电子组件的半导体集成电路芯片。")]),t._v(" "),_("li",[t._v("之所以会被称为微处理器，不仅是因为它比迷你电脑所用的处理器还要小而已。最主要的区别，是因为当初各大芯片厂之制程，已经进入了1微米尺度的阶段。"),_("b",[t._v("在微米尺度下所产制出来的处理器芯片，厂商就会在产品名称上用“微”字，以彰显自身的技术。")]),t._v("与现在的许多商业广告中，“纳米”字眼时常出现一样。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-2-总结："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-总结："}},[this._v("#")]),this._v(" 3.2.总结：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("1.微处理器和处理器"),e("b",[this._v("一般")]),this._v("同义."),e("br"),this._v("\n2.从集合的角度来看，CPU和GPU是处理器的子集")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考资料-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-2"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);e.default=r.exports}}]);