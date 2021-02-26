(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{281:function(t,n,s){"use strict";s.r(n);var e=s(0),a=Object(e.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("img",{attrs:{src:"https://gitee.com/HACV/images_bed/raw/master/MainBlog/2020/2020_07/07_18/2020_07_18_Memory_Management_01_MyPaint.png",size:"80%"}}),t._v(" "),t._m(6),t._v(" "),t._m(7),s("p",[t._v("注意：\n1）我为什么要将.rodata和.text这么画呢?因为这两段区域的权限是read only的"),s("br"),t._v("\n将来在"),s("code",[t._v("链接")]),t._v("的时候，会把他们完成数据段合并，合并到一块"),s("br"),t._v("\n2）其实ELF文件，映射到虚拟内存空间（不存在，假象的，但是用来分析进程很有用）"),s("br"),t._v("\n不止以上，我画的这几个段，但那些和我们编程无关的话，比如，调试段，我们就没画了"),s("br"),t._v("\n3）"),s("font",{staticStyle:{background:"yellow"}},[t._v("我们在分析C语言和C++的底层原理的时候，用上面的粗略的就完全足够了，没必要用太详细的")])],1),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("计算机工作流程\n程序-》加载后-》进程（进程实际不存在）（虚拟内存空间-》映射-》物理内存空间）")]),t._v(" "),s("p",[t._v("以Linux系统为例")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("补充：")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("现在内核")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("2)"),s("a",{attrs:{href:"https://www.zhihu.com/question/36103513",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎"),s("OutboundLink")],1),t._v("\n具体链接到一个国外的\n"),s("code",[t._v("https://manybutfinite.com/post/anatomy-of-a-program-in-memory/")]),t._v(" "),s("img",{attrs:{src:"https://gitee.com/HACV/images_bed/raw/master/MainBlog/2020/2020_07/07_18/2020_07_18_Memory_Management_03.png",size:"80%"}})])]),t._v(" "),t._m(13)]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("ul",[s("li",[t._v("《"),s("a",{attrs:{href:"https://book.douban.com/subject/3652388/",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序员的自我修养"),s("OutboundLink")],1),t._v("》， 俞甲子 / 石凡 / 潘爱民")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/111682188",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客"),s("OutboundLink")],1),t._v("，知乎")])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"内存管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内存管理"}},[this._v("#")]),this._v(" 内存管理")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"学习内存管理意义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#学习内存管理意义"}},[this._v("#")]),this._v(" 学习内存管理意义")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("p",[t._v("1）C语言和"),s("code",[t._v("C++")]),t._v("底层原理分析利器"),s("br"),t._v("\n2）将我学过的"),s("code",[t._v("计算机组成原理")]),t._v("，"),s("code",[t._v("汇编")]),t._v("，"),s("code",[t._v("C语言")]),t._v("，"),s("code",[t._v("C++")]),t._v("和"),s("code",[t._v("操作系统")]),t._v("能够很好的串起来")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"一、程序加载后的虚拟内存分布"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、程序加载后的虚拟内存分布"}},[this._v("#")]),this._v(" 一、程序加载后的虚拟内存分布")])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("ul",[n("li",[this._v("环境：\n32位，Linux，ELF格式文件")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"虚拟内存空间大致分布"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#虚拟内存空间大致分布"}},[this._v("#")]),this._v(" 虚拟内存空间大致分布")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"从下到上进行说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从下到上进行说明"}},[this._v("#")]),this._v(" 从下到上进行说明")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("9）内核区：kernel映射到进程虚拟内存，但程序无法访问\n\n\n8）argv,environ:命令行参数和环境变量\n\t其实就比如 `ping -t www.baidu.com`，我们也可以写命令行的参数\n\n7）Stack（栈/堆栈，向低地址生长）：\n\t程序中，『非静态的局部变量』放的地方\n\t- 吐槽，叫栈就好了，前面还加个堆，以前入门的时候，还在这个到底是堆，还是栈。。。\n\n6）共享库：\n\t比如，Linux你所制作的.so（动态库），加载的位置就是在这。\n\t内存映射段，文件映射（包括动态库）和匿名映射。示例：/lib/libc。所以\n\t\n5）heap（堆，向高地址生长）：\n\t比如C语言中`malloc`的，`C++`中`new`\n\t- 吐槽：这个堆和数据结构中的堆不一样，弄得那时候先学数据结构的我，\n\t看到这个，条件反射问最大堆还是最小堆...最后发现都不是\n\n\n\n4）.bss：\n\t 存放程序中『初始化为0』的`全局变量`和`静态变量（全局+局部）`\n\t『未初始化』的`全局变量`和`静态变量（全局+局部）`\n3）.data（数据段）:\n\t存放『已初始化』的`全局变量`和`静态变量（全局+局部）`\n\n\n\n2）.rodata（只读存储区，有书叫常量区）:\n\t比如存放，**字符产常量**\n1）.text（代码段，还叫.code）:\n\t程序源代码编译之后的机器指令，放在这个代码段\n\t-吐槽：有的书上，把.rodata和.text统称为代码段，这些规定还真是。。\n\n\n0）其实这里，还有一个保留区：禁止访问，这也解释了我们\n\t为什么不能给地址为0的地方写数据，不然就会产生段错误。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"二、辨析：程序-进程-虚拟内存空间-物理内存空间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、辨析：程序-进程-虚拟内存空间-物理内存空间"}},[this._v("#")]),this._v(" 二、辨析：程序+进程+虚拟内存空间+物理内存空间")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("blockquote",[s("ul",[s("li",[t._v("程序：比如，编译后的可执行文件a.out，是用ELF格式存储")]),t._v(" "),s("li",[t._v("进程和虚拟内存空间：执行程序，就会产生进程，产生进程的同时就产生了这个进程"),s("strong",[t._v("对应的")]),t._v("虚拟内存\n注意：进程是不存在的，但是我们可以通过\n虚拟内存"),s("strong",[t._v("实际不存在")]),t._v("的，但是引入这个抽象的概念，能够简化我们汇编编程，C语言编程等程序设计。\n正是因为有虚拟内存，所以，我们才能在物理内存少于虚拟内存的地方，还能跑起来程序")]),t._v(" "),s("li",[t._v("物理内存空间：也就是我们的内存条，是"),s("strong",[t._v("实际存在")]),t._v("的。")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("blockquote",[s("ul",[s("li",[t._v("我们想要获取进程的进程id啥的，可以通过"),s("code",[t._v("内核区")]),t._v("的"),s("strong",[t._v("PCB")])]),t._v(" "),s("li",[s("code",[t._v("虚拟内存")]),t._v("如何映射到"),s("code",[t._v("实际内存")]),t._v("？\n通过CPU中，有个硬件叫做"),s("code",[t._v("MMU")])]),t._v(" "),s("li",[t._v("如果r和w权限和r权限的那两个段的大小允许的话，\n我们会把他放到一个page(页）里面，\n在我们32位机上，一个页面的大小，是4KB\n这样的目的是为了节省内存，节省空问")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"三、其他书籍上，关于虚拟内存空间的画法等，收集"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、其他书籍上，关于虚拟内存空间的画法等，收集"}},[this._v("#")]),this._v(" 三、其他书籍上，关于虚拟内存空间的画法等，收集")])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("ul",[n("li",[this._v("1）程序员的自我修养\nP167\n"),n("img",{attrs:{src:"https://gitee.com/HACV/images_bed/raw/master/MainBlog/2020/2020_07/07_18/2020_07_18_Memory_Management_02.png",size:"80%"}})])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("ul",[n("li",[this._v("说明的问题：\n栈的生长方式等的争论，这个其实取决于操作系统和硬件实现，但是业界目前面试等时候，还是默认用大多数机型的，我前面写的那种的方式。")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("ul",[n("li",[this._v("3）CSAPP（深入理解计算机系统）\n原书第2版，中文P554\n"),n("img",{attrs:{src:"https://gitee.com/HACV/images_bed/raw/master/MainBlog/2020/2020_07/07_18/2020_07_18_Memory_Management_04.png",size:"80%"}})])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);n.default=a.exports}}]);