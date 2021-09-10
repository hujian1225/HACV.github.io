(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{230:function(t,s,e){"use strict";e.r(s);var r=e(0),_=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("我介绍的 Antlr 和 LLVM 工具，前者能帮你做编译器前端的工作，后者能帮你完成编译器后端 的工作。在课程中，你能真正运用编译技术解决报表设计等实际问题")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),e("ul",[t._m(15),t._v(" "),e("li",[t._v("而且咱们"),e("font",{staticStyle:{background:"yellow"}},[e("strong",[t._v("大学讲的编译原理")])]),t._v("，也是"),e("strong",[t._v("侧重讲解前端技术")]),t._v("，可见编译器的前端技术有多么重要。")],1)]),t._v(" "),e("p",[t._v("**“前端”指的是编译器对程序代码的分析和理解过程。**它通常只跟语言的语法有关，跟目标机器无关")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),e("p",[t._v("在讲解上下文无关文法时，我提到了文法的递归调用，你也许会问，是否在算法上也需要递归的调用呢？要不怎么叫做“递归下降算法”呢？")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),e("p",[t._v("我们已经知道，语法规则是由上下文无关文法表示的，而上下文无关文法是由一组替换规则（又叫产生式）组成的")]),t._v(" "),e("p",[t._v("在实际应用中，语法规则经常写成下面这种形式：")]),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.antlr.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载 Antlr 工具"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Antlr 通过解析规则文件来生成编译器。规则文件以.g4 结尾，词法规则和语法规则可以放在同一个文件里。不过为了清晰起见")])]),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),e("p",[t._v("计算机的处理器有很多不同的架构，比如 x86-64、ARM、Power 等，每种处理器的指令集都不相同，那也就意味着汇编语言不同。我们目前用的电脑，CPU 一般是 x86-64 架构，是 64 位机。（如不做特别说明，本课程都是以 x86-64 架构作为例子的）")]),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),t._m(57),t._v(" "),e("p",[t._v("本节课，我想与你分享 3 个方面的技术发展趋势，以及它们对编译技术的影响")]),t._v(" "),t._m(58),t._v(" "),t._m(59),t._v(" "),e("p",[t._v("首先，它需要编译器能够支撑，机器学习对庞大计算力的需求，同时兼容越来越多新的硬件 架构")]),t._v(" "),e("p",[t._v("由于机器学习的过程需要大量的计算，仅仅采用 CPU 效率很低，所以 "),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%9C%96%E5%BD%A2%E8%99%95%E7%90%86%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("GPU"),e("OutboundLink")],1),t._v(" 和 "),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%BC%A0%E9%87%8F%E5%A4%84%E7%90%86%E5%8D%95%E5%85%83",target:"_blank",rel:"noopener noreferrer"}},[t._v("TPU"),e("OutboundLink")],1),t._v(" 等新的 硬件架构得到了迅速的发展。对于编译技术来说，首要的任务，是要充分发挥这些新硬件的 能力；因为 AI 的算法要能跑在各种后端架构上，包括 CPU、GPU 和 TPU，也包括仍然要 采用 SIMD 等技术，所以后端技术就会变得比较复杂")]),t._v(" "),t._m(60),t._v(" "),t._m(61),t._v(" "),t._m(62),t._v(" "),t._m(63),t._v(" "),t._m(64),t._v(" "),t._m(65),t._v(" "),t._m(66),t._v(" "),t._m(67),t._v(" "),t._m(68),t._v(" "),t._m(69),t._v(" "),e("ul",[t._m(70),t._v(" "),e("li",[t._v("我们开发一款应用，通常需要支持 Web、IOS 和 Android 三种平台，有时候，甚至需要提 供 Windows 和 macOS 的桌面客户端。不同的平台会需要不同的技术栈，从而导致一款应 用的开发成本很高，这也是前端工程师们不太满意的地方.所以，前端工程师们一直希望能用一套技术栈，搞定多个平台。比如，尝试用 Web 开发的 技术栈完成 Android、IOS 和桌面应用的开发。React Native、Electron 等框架是这个方 面的有益探索；Flutter 项目也做了一些更大胆的尝试。")]),t._v(" "),e("li",[e("font",{staticStyle:{background:"yellow"}},[t._v("你可以把这种技术思路叫做"),e("strong",[t._v("大前端")]),t._v("：同一套代码，支持多个平台。")])],1)]),t._v(" "),t._m(71),t._v(" "),t._m(72),t._v(" "),t._m(73),t._v(" "),t._m(74),t._v(" "),t._m(75),t._v(" "),t._m(76),t._v(" "),t._m(77),t._v(" "),t._m(78),t._v(" "),e("p",[t._v("元编程是这样一种技术："),e("font",{staticStyle:{background:"yellow"}},[t._v("你可以让计算机程序来操纵程序，也就是说，用程序修改或生成程序。")]),t._v("另一种说法是，具有元编程能力的语言，能够"),e("strong",[t._v("把程序当做数据来处理")]),t._v("，从而让程序产生 程序。")],1),t._v(" "),e("blockquote",[e("p",[t._v("哈哈，但是："),e("font",{staticStyle:{background:"yellow"}},[t._v("你学过编译原理就知道，在 CPU 眼里，程序本来就是数据")])],1)]),t._v(" "),t._m(79),t._v(" "),t._m(80),t._v(" "),t._m(81),t._v(" "),e("ul",[e("li",[t._v("学习技术的过程，是跟大师对话的过程，是融入科技发展这条历史河流的过程，是一个有温 度的心路历程。 有同学在留言区说，这门课，串联了计算机领域的很多基础课程。的确如他所说，当然，我也认为编译原理这门课，串联着整个计算机发展的历史，以及做出重要贡献的一代代大师。")]),t._v(" "),e("li",[t._v("据说，张小龙曾经说过，读懂了《"),e("a",{attrs:{href:"https://book.douban.com/subject/5375620/",target:"_blank",rel:"noopener noreferrer"}},[t._v("失控"),e("OutboundLink")],1),t._v("》这本书的人，可以直接去他的团队上班。我猜，他 对复杂系统科学情有独钟，产生了很多的心得。而任正非先生则对热力学中熵的理论感触很 深，并把它深刻地融入到了华为的价值观和管理体系中。")]),t._v(" "),e("li",[t._v("感谢 Antlr 工具的作者特恩斯·帕尔（Terence Parr）以及")]),t._v(" "),e("li",[t._v("LLVM 的核心作者 克里斯·拉特纳（Chris Lattner）")])]),t._v(" "),t._m(82),t._v(" "),t._m(83),t._v(" "),t._m(84),t._v(" "),t._m(85),t._v(" "),t._m(86),t._v(" "),t._m(87),t._v(" "),t._m(88),t._v(" "),e("ul",[e("li",[e("strong",[t._v("文法（Grammar）")]),t._v("，是"),e("font",{staticStyle:{background:"yellow"}},[t._v("形式语言（Formal Language）")]),t._v("的一个术语。所以也有 Formal Grammar 这样的说法。这里的文法是定义清晰的规则，比如，我们的词法规则、语法规则和属性规则，都是用形式文法来定义的。\n"),t._m(89)],1),t._v(" "),t._m(90),t._v(" "),e("li",[t._v("问题是，"),e("font",{staticStyle:{background:"yellow"}},[t._v("Grammar 这个词，在中文很多应用场景中也叫做语法。这是会"),e("strong",[t._v("引起混淆")]),t._v("的地方。我们在使用的时候要小心一点儿就行了")]),t._v("。")],1),t._v(" "),t._m(91)]),t._v(" "),t._m(92),t._v(" "),t._m(93),t._v(" "),t._m(94),t._v(" "),e("blockquote",[e("p",[t._v("维基百科："),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/ANTLR",target:"_blank",rel:"noopener noreferrer"}},[t._v("ANTLR"),e("OutboundLink")],1)])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("ANTLR")]),t._v("（全名："),e("strong",[t._v("AN")]),t._v("other "),e("strong",[t._v("T")]),t._v("ool for "),e("strong",[t._v("L")]),t._v("anguage "),e("strong",[t._v("R")]),t._v("ecognition）是基于LL(*)算法实现的语法解析器生成器（parser generator），用"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java"),e("OutboundLink")],1),t._v("语言编写，使用自上而下（top-down）的递归下降"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/LL%E5%89%96%E6%9E%90%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("LL剖析器"),e("OutboundLink")],1),t._v("方法。")]),t._v(" "),e("li",[t._v("Antlr 是一个开源的工具，支持根据规则文件生成词法分析器和语法分析器，它自身是用 Java 实现的。")])]),t._v(" "),t._m(95),t._v(" "),e("ul",[e("li",[e("p",[t._v("维基百科："),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/LLVM",target:"_blank",rel:"noopener noreferrer"}},[t._v("LLVM"),e("OutboundLink")],1)])]),t._v(" "),t._m(96)]),t._v(" "),t._m(97),t._v(" "),t._m(98)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"编译原理基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译原理基础"}},[this._v("#")]),this._v(" 编译原理基础")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('<font style="background:yellow">\n')])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"✔️开篇词-为什么你要学习编译原理？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#✔️开篇词-为什么你要学习编译原理？"}},[this._v("#")]),this._v(" ✔️开篇词 | 为什么你要学习编译原理？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("我喜欢做平台性的软件，而编译技术就是产品取得优势的关键。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("很多国外厂商的软件，普遍都具备"),s("strong",[this._v("二次编程能力")]),this._v("，比如 Office、CAD、GIS、 Mathematica 等等。德国 SAP 公司的企业应用软件也是用自己的业务级语言编写的。目 前来看，谷歌也好，苹果也好，微软也好，这些技术巨头们的核心能力，都是拥有自己的语言和生态。可见编译技术有多么重要！")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"⭐️编译器前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⭐️编译器前端"}},[this._v("#")]),this._v(" ⭐️编译器前端")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_01丨理解代码：编译器的前端技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01丨理解代码：编译器的前端技术"}},[this._v("#")]),this._v(" 01丨理解代码：编译器的前端技术")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"🐾词法分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🐾词法分析"}},[this._v("#")]),this._v(" 🐾词法分析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("词法分析是把程序分割成一个个 Token 的过程，可以通过构造"),s("strong",[this._v("有限自动机")]),this._v("来实现。\n"),s("ul",[s("li",[this._v("上述编译过程其实跟你的实际工作息息相关。比如，词法分析就是你工作中 "),s("strong",[this._v("使用正则表达式")]),this._v("的过程，比如grep,awk,sek")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"🐾语法分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🐾语法分析"}},[this._v("#")]),this._v(" 🐾语法分析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("语法分析是把程序的结构识别出来，并形成一棵便于由计算机处理的抽象语法树。可以用 "),s("strong",[this._v("递归下降的算法")]),this._v("来实现。\n"),s("ul",[s("li",[this._v("而语法分析在你解析文本文件、配置文件、模型定义文件，或者做 "),s("strong",[this._v("自定义公式功能")]),this._v("的时候都会用到。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"🐾语义分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🐾语义分析"}},[this._v("#")]),this._v(" 🐾语义分析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("语义分析是"),s("strong",[this._v("消除语义模糊")]),this._v("，生成一些属性信息，让计算机能够依据这些信息生成目标代 码。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-1-前端-中端-后端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-前端-中端-后端"}},[this._v("#")]),this._v(" 1.1.前端-中端-后端")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/%E7%BC%96%E8%AF%91%E5%99%A8%E7%9A%84%E5%89%8D%E7%AB%AF%E4%B8%AD%E7%AB%AF%E5%90%8E%E7%AB%AF.jpg",alt:"编译器的前端中端后端"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("分享了一些使用编译技术的场景。其中"),s("strong",[this._v("有的场景")]),this._v("，你"),s("strong",[this._v("只要掌握编译器的前端技术")]),this._v("就能解决。比如文本分析场景，软件需要用户自定义功能的场景以及前端编程语言的翻译场景等。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("后端”则是生成目标代码的过程，跟目标机器有关")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_02-正则文法和有限自动机：纯手工打造词法分析器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-正则文法和有限自动机：纯手工打造词法分析器"}},[this._v("#")]),this._v(" 02 | 正则文法和有限自动机：纯手工打造词法分析器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("提到词法分析的工作是将一个长长的字符串识别出一个个的单词，这一个个单词就是 "),s("strong",[this._v("Token")]),this._v("。而且词法分析的工作是"),s("strong",[this._v("一边读取一边识别字符串")]),this._v("的，不是把字符串都读到内存再识别。你在听一位朋友讲话的时候，其实也是同样的过程，一边听，一边提取信息")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_03丨语法分析（一）：纯手工打造公式计算器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_03丨语法分析（一）：纯手工打造公式计算器"}},[this._v("#")]),this._v(" 03丨语法分析（一）：纯手工打造公式计算器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("语法分析的原理")]),this._v("和"),s("strong",[this._v("递归下降算法（Recursive Descent Parsing），并初步了解上下文无关文法（Context-free Grammar，CFG）")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-1-上下文无关文法和正则文法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-上下文无关文法和正则文法"}},[this._v("#")]),this._v(" 3.1.上下文无关文法和正则文法")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("正则文法是"),e("strong",[t._v("上下文无关文法")]),t._v("的一个"),e("strong",[t._v("子集")]),t._v(" "),e("ul",[e("li",[t._v("区别呢，就是上下文无关文法"),e("strong",[t._v("允许")]),t._v("递归调用，而正则文法"),e("strong",[t._v("不允许")]),t._v("。")])])]),t._v(" "),e("li",[t._v("上下文无关的意思是，无论在任何情况下，文法的推导规则都是一样的。\n"),e("ul",[e("li",[t._v("好在你见到的"),e("strong",[t._v("大多数")]),t._v("计算机语言，都能用上下文无关文法来表达它的语法。")])])]),t._v(" "),e("li",[t._v("那有没有"),e("strong",[t._v("上下文相关")]),t._v("的情况需要处理呢？也是有的，但那"),e("strong",[t._v("不是")]),t._v("语"),e("strong",[t._v("法")]),t._v("分析阶段负责的，而是放在"),e("strong",[t._v("语义")]),t._v("分析阶段来处理的。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-2-「文法的递归调用」和「算法的递归调用」"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-「文法的递归调用」和「算法的递归调用」"}},[this._v("#")]),this._v(" 3.2.「文法的递归调用」和「算法的递归调用」")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("的确，我们之前的算法只算是用到了“下降”，没有涉及“递归”，现在，我们就来看看如何用"),e("strong",[t._v("递归的算法")]),t._v("翻译"),e("strong",[t._v("递归的文法")]),t._v("。")]),t._v(" "),e("li",[t._v("但是，我们遇到麻烦了。这个麻烦就是"),e("strong",[t._v("出现了无穷多次调用")]),t._v("的情况\n"),e("ul",[e("li",[t._v("“2+3”这个文法规则的"),e("strong",[t._v("第一部分就递归地引用了自身")]),t._v("，这种情况叫做**左递归。**通过上面的分析，我们知道左递归是递归下降算法无法处理的，这是递归下降算法最大的问题。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_04-语法分析（二）：解决二元表达式中的难点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_04-语法分析（二）：解决二元表达式中的难点"}},[this._v("#")]),this._v(" 04 | 语法分析（二）：解决二元表达式中的难点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("左递归（Left Recursive）、优先级（Priority）和结合性（Associativity）。")]),this._v(" "),s("li",[this._v("我们要想深入探讨语法规则设计，需要像在词法分析环节一样，先了解如何用"),s("strong",[this._v("形式化")]),this._v("的方法表达语法规则。“工欲善其事必先利其器”。"),s("strong",[this._v("熟练")]),this._v("地阅读和书写语法规则，是我们在语法分析环节需要掌握的一项基本功。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_4-1-书写语法规则，并进行推导"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-书写语法规则，并进行推导"}},[this._v("#")]),this._v(" 4.1.书写语法规则，并进行推导")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bnf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bnf"}},[e("code",[t._v("add "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::=")]),t._v(" mul "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" add "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" mul\nmul "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::=")]),t._v(" pri "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" mul "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pri\npri "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::=")]),t._v(" Id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Num "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("(")]),t._v("add"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("这种写法叫做**“巴科斯范式”，**简称 BNF。"),s("strong",[this._v("Antlr 和 Yacc 这两个工具都用这种写法")]),this._v("。为了简化书写，我有时会在课程中把“::=”简化成一个冒号。你看到的时候，知道是什么意思就可以了。")]),this._v(" "),s("li",[this._v("你有时还会听到一个术语，叫做**扩展巴科斯范式 (EBNF)。**它跟普通的 BNF 表达式最大的区别，就是里面会用到类似正则表达式的一些写法。比如下面这个规则中运用了 * 号，来表示这个部分可以重复 0 到多次：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bnf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bnf"}},[e("code",[t._v("add -> mul "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" mul"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("其实这种写法跟标准的 BNF 写法是等价的，但是更"),s("strong",[this._v("简洁")]),this._v("。为什么是等价的呢？"),s("strong",[this._v("因为一个项多次重复，就等价于通过递归来推导")]),this._v("。从这里我们还可以得到一个推论：就是上下文无关文法包含了正则文法，比正则文法能做更多的事情。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"消除左递归"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消除左递归"}},[this._v("#")]),this._v(" 消除左递归")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("并不是所有的算法都不能处理左递归，对于另外一些算法，"),s("strong",[this._v("左递归是没有问题的，比如 LR 算法")]),this._v("。")]),this._v(" "),s("li",[this._v("消除左递归，用一个标准的方法，就能够把左递归文法改写成非左递归的文法")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"尾递归"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尾递归"}},[this._v("#")]),this._v(" "),s("strong",[this._v("尾递归")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("在研究递归函数的时候，有一个概念叫做**尾递归，**尾递归函数的最后一句是递归地调用自身。")]),this._v(" "),s("li",[this._v("编译程序通常都会把尾递归转化为一个循环语句，使用的原理跟上面的伪代码是一样的")]),this._v(" "),s("li",[this._v("因此，把"),s("strong",[this._v("尾递归转化为循环语句也是一种编译优化")]),this._v("技术。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"左递归问题是我们用递归下降算法写语法分析器遇到的最大的一只“拦路虎”。解决这只“拦路虎”以后，你的道路将会越来越平坦"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#左递归问题是我们用递归下降算法写语法分析器遇到的最大的一只“拦路虎”。解决这只“拦路虎”以后，你的道路将会越来越平坦"}},[this._v("#")]),this._v(" 左递归问题是我们用递归下降算法写语法分析器遇到的最大的一只“拦路虎”。解决这只“拦路虎”以后，你的道路将会越来越平坦")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_05-语法分析（三）：实现一门简单的脚本语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_05-语法分析（三）：实现一门简单的脚本语言"}},[this._v("#")]),this._v(" 05 | 语法分析（三）：实现一门简单的脚本语言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"实现一个简单的-repl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现一个简单的-repl"}},[this._v("#")]),this._v(" 实现一个简单的 REPL")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("strong",[t._v("脚本语言")]),t._v("一般都会提供一个"),e("strong",[t._v("命令行窗口")]),t._v("，让你输入一条一条的语句，"),e("strong",[t._v("马上解释执行它")]),t._v("，并得 到输出结果，比如 Node.js、Python 等都提供了这样的界面。这个输入、执行、打印的循环过程就叫做 REPL（Read-Eval-Print Loop）。")]),t._v(" "),e("li",[t._v("学完这讲以后，你也能找到了一点感觉：Shell 脚本也好，PHP 也好，JavaScript 也好， Python 也好，其实都可以这样写出来。")]),t._v(" "),e("li",[t._v("回顾过去几讲，你已经可以分析词法、语法、进行计算，还解决了左递归、优先级、结合性 的问题。甚至，你还能处理语法错误，让脚本解释器不会因为输入错误而崩溃。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_06-编译器前端工具（一）：用antlr生成词法、语法分析器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_06-编译器前端工具（一）：用antlr生成词法、语法分析器"}},[this._v("#")]),this._v(" 06 | 编译器前端工具（一）：用Antlr生成词法、语法分析器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/20210909162405.png",alt:"image-20210909162405522"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("如果让编译程序实现上面这么多工作，完全手写效率会有点儿低，那么我们有什么方法可以提升效率呢？答案是借助工具。")]),t._v(" "),e("li",[t._v("编译器前端工具有很多，比如\n"),e("ul",[e("li",[t._v("Lex（以及 GNU 的版本 Flex）")]),t._v(" "),e("li",[t._v("Yacc（以及 GNU 的版本 Bison）")]),t._v(" "),e("li",[t._v("JavaCC 等等。")])])]),t._v(" "),e("li",[t._v("你可能会问了：“那为什么我们这节课只讲 Antlr，不选别的工具呢？”主要有两个原因。\n"),e("ul",[e("li",[t._v("第一个原因是 Antlr 能支持更广泛的目标语言，包括 Java、C#、JavaScript、Python、Go、C++、Swift。无论你用上面哪种语言，都可以用它生成词法和语法分析的功能。而我们就使用它生成了 Java 语言和 C++ 语言两个版本的代码")]),t._v(" "),e("li",[t._v("第二个原因是 Antlr 的语法更加简单。它能把类似左递归的一些常见难点在工具中解决，对提升工作效率有很大的帮助")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"antlr-工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#antlr-工具"}},[this._v("#")]),this._v(" Antlr 工具")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("既然用 Antlr 可以不管左递归问题，那之前为什么要费力气解决它呢？”那是因为当你遇到某些问题却没有现成工具时，还是要用纯手工的方法去解决问题。而且，有的工具可能没有这么智能，你需要写出符合这个工具的规则文件，比如说不能有左递归的语法规则。"),s("strong",[this._v("还是那句话：懂得基础原理，会让你站得更高。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"⭐️编译器后端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⭐️编译器后端"}},[this._v("#")]),this._v(" ⭐️编译器后端")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_20-高效运行：编译器的后端技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_20-高效运行：编译器的后端技术"}},[this._v("#")]),this._v(" 20 | 高效运行：编译器的后端技术")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/20210909165828.png",alt:"image-20210909165828340"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_21-运行时机制：突破现象看本质，透过语法看运行时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_21-运行时机制：突破现象看本质，透过语法看运行时"}},[this._v("#")]),this._v(" 21 | 运行时机制：突破现象看本质，透过语法看运行时")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_22-生成汇编代码（一）：汇编语言其实不难学"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_22-生成汇编代码（一）：汇编语言其实不难学"}},[this._v("#")]),this._v(" 22 | 生成汇编代码（一）：汇编语言其实不难学")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("对于静态编译型语言，比如 C 语言和 Go 语言，编译器后端的任务就是生成汇编代码，然后再由汇编器生成机器码，生成的文件叫目标文件，最后再使用链接器就能生成可执行文件或库文件了。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/20210909170632.png",alt:"下载"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"计算机的处理器架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算机的处理器架构"}},[this._v("#")]),this._v(" 计算机的处理器架构")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_23-生成汇编代码（二）：把脚本编译成可执行文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_23-生成汇编代码（二）：把脚本编译成可执行文件"}},[this._v("#")]),this._v(" 23 | 生成汇编代码（二）：把脚本编译成可执行文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_24-中间代码：兼容不同的语言和硬件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_24-中间代码：兼容不同的语言和硬件"}},[this._v("#")]),this._v(" 24 | 中间代码：兼容不同的语言和硬件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("LLVM 汇编码（LLVM Assembly），是 LLVM 的 IR")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"⭐️09丨面向未来的编程语言-3讲"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⭐️09丨面向未来的编程语言-3讲"}},[this._v("#")]),this._v(" ⭐️09丨面向未来的编程语言 (3讲)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_36丨当前技术的发展趋势以及其对编译技术的影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_36丨当前技术的发展趋势以及其对编译技术的影响"}},[this._v("#")]),this._v(" 36丨当前技术的发展趋势以及其对编译技术的影响")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("人工智能，以及如何让编程和编译技术变得更智能？")]),this._v(" "),s("li",[this._v("云计算，以及是否需要云原生的语言？")]),this._v(" "),s("li",[this._v("前端技术，以及能否出现统一各个平台的大前端技术？")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"趋势-1：让编程更智能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#趋势-1：让编程更智能"}},[this._v("#")]),this._v(" 趋势 1：让编程更智能")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("同时，前端也有不同的技术框架， 人工智能，以及如何让编程和编译技术变得更智能？ 云计算，以及是否需要云原生的语言？ 前端技术，以及能否出现统一各个平台的大前端技术？ 比如谷歌的 TensorFlow、Facebooke 的 pyTorch 等。那么编译器怎样更好地支持多种前 端和多种后端呢？")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("张量处理单元")]),this._v("（英文："),s("strong",[this._v("Tensor Processing Unit，"),s("strong",[this._v("简称：TPU），也称")]),this._v("张量处理器")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("strong",[t._v("图形处理器")]),t._v("（英语："),e("strong",[t._v("G")]),t._v("raphics "),e("strong",[t._v("P")]),t._v("rocessing "),e("strong",[t._v("U")]),t._v("nit，缩写："),e("strong",[t._v("GPU")]),t._v("；又称"),e("strong",[t._v("显示核心")]),t._v("、"),e("strong",[t._v("显卡")]),t._v("、"),e("strong",[t._v("视觉处理器")]),t._v("、"),e("strong",[t._v("显示芯片")]),t._v("或"),e("strong",[t._v("绘图芯片")]),t._v("）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("比如说，"),s("strong",[this._v("在后端技术部分，很多算法都是 NP 完全的")]),this._v("。这就是说，如果你用穷举的方法找 出最优解，成本非常高。这个时候，就会用启发式（heuristic）的算法，也就是凭借直观 或经验构造的算法，能够在可接受的花费下找出一个可行的解。那么采用人工智能技术，通 过大数据的训练，有可能找出更好的启发式算法，供我们选择。这是人工智能和编译技术结 合的一个方向。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("我建议你了解，编译技术和人工智能这两个领域的知识。那些计算机的基础知识会一直有用")]),this._v("，你可以参与到编程范式迁移，这样一个伟大的进程中。现有程序开发中的那些简单枯 燥，又不需要多少创造力的工作，也就是大家通常所说的“搬砖”工作，可能会被 AI 代 替。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"而我猜测，未来的机会可能会留给两类人："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#而我猜测，未来的机会可能会留给两类人："}},[this._v("#")]),this._v(" 而我猜测，未来的机会可能会留给两类人：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("一类是具备更加深入的计算机基础技能，能应对未来挑战的，计算机技术人才，他们为 新的计算基础设施的发展演化，贡献自己的力量。")]),this._v(" "),s("li",[this._v("另一类是应用领域的专家和人才。他们通过更富有创造力的工作，利用新的编程技术实 现各种应用。编写应用程序的重点，可能不再是写代码，而是通过人工智能，训练出能 够反映领域特点的模型")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"趋势-2：云原生的开发语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#趋势-2：云原生的开发语言"}},[this._v("#")]),this._v(" 趋势 2：云原生的开发语言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("云计算技术现在的普及度很广，所有应用的后端部分，缺省情况下都是跑在云平台上的，云 就是应用的运行环境。")]),this._v(" "),s("li",[this._v("而在云环境下，软件模块以服务的形式存在，也就是说，一个模块通过 RESTful 接口或各种 RPC 协议，调用另外的模块的功能。程序还需要处理通讯失败的情 况，甚至要在调用多个微服务时，保证分布式事务特性。而我们却没从编译技术的角度，帮 助程序员减轻这个负担。")]),this._v(" "),s("li",[this._v("导致的结果是：现在后端的程序特别复杂。你要写很多代码，来处理 RPC、消息、分布式 事务、数据库分片等逻辑，还要跟各种库、框架、通讯协议等等打交道。更糟糕的是，这些 技术性的逻辑跟应用逻辑，混杂在一起，让系统的复杂度迅速提高，开发成本迅速提升，维 护难度也增加。很多试图采用微服务架构的项目因此受到挫折，甚至回到单一应用的架构。")]),this._v(" "),s("li",[this._v("所以，一个有意义的问题是：能否在语言设计的时候，就充分利用云的基础设施，实现云原 生（Cloud Native）的应用？")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"趋势-3：大前端技术栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#趋势-3：大前端技术栈"}},[this._v("#")]),this._v(" 趋势 3：大前端技术栈")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("上面所讲的云计算，针对的是后端编程，而与此对应的，是前端编程工作。\n"),s("ul",[s("li",[this._v("后端工作的特点，是越来越云化，让工程师们头疼的问题，是处理分布式计算环境下，软件 系统的复杂性。当然，前端的挑战也不少。")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("当然，编译技术还有很多其他的研究方向，比如更好地支持"),e("strong",[t._v("并行计算")]),t._v("、"),e("strong",[t._v("支持物联网")]),t._v("和"),e("strong",[t._v("低功耗 场景")]),t._v("，支持"),e("strong",[t._v("区块链")]),t._v("，甚至支持一些同学感兴趣的，未来的量子计算机，等等。不过，在我看 来，我在文中提到的这三个趋势，跟你的关系是最为密切的。因为你现在或多或少地都在接 触 AI、云和前端技术。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_37-云编程：云计算会如何改变编程模式？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_37-云编程：云计算会如何改变编程模式？"}},[this._v("#")]),this._v(" 37 | 云编程：云计算会如何改变编程模式？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("总的来说，现在编写程序是越来越云化了，所以，我们简单地称作"),s("strong",[this._v("云编程")]),this._v("就好了")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("喜欢编程的人，为了获得流畅的性能，电脑配置总是很高，虽然这足以满足 C/C++ 时代的 编程需要，")]),this._v(" "),s("li",[this._v("但进入 Java 时代后，因为应用结构越来越复杂，工程师们有时需要在笔记本或 桌面电脑上，安装各种复杂的中间件，甚至还要安装数据库软件，这时，电脑的配置即便再 高，也很难安装和配置好这么复杂的环境。")]),this._v(" "),s("li",[this._v("那么到了云计算时代，挑战就更大了，比如，你 能想象在电脑上安装 Hadoop 等软件，来做大数据功能的开发吗？")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("因此，工程师们"),s("strong",[this._v("已经习惯于，在云上搭建开发和测试环境，这样，可以随需获取各种云端资源")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("无服务器（Serverless）架构，或者叫做 FaaS（Function as a Service）")]),this._v("，做了进一步 的抽象。你只要把一个个功能写成函数，就能被平台调用，来完成 Web 服务、消息队列处 理等工作。这些函数可能是运行在容器中的，通过 Kubernetes 管理的，并且按照一定的 架构来协调各种服务功能")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_38丨元编程：一边写程序，一边写语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_38丨元编程：一边写程序，一边写语言"}},[this._v("#")]),this._v(" 38丨元编程：一边写程序，一边写语言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("今天，我再带你讨论一个很有趣的话题：元编程。把这个话题放在这一篇的压轴位置，也暗 示了这个话题的重要性。")]),this._v(" "),s("li",[this._v("元编程（Meta Programming）")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("而元编程也有"),e("strong",[t._v("传统编程")]),t._v("所不具备的好处：比如，可以用更简单的编码来实现某个功能，以及 可以按需产生、完成某个功能的代码，从而让系统更有灵活性")]),t._v(" "),e("li",[t._v("某种意义上，元编程让程序员拥有了语言设计者的一些权力。是不是很酷？你甚至可以说， 普通程序员自己写程序，文艺程序员让程序写程序。「2333，离谱」")]),t._v(" "),e("li",[t._v("那么本节课，我会带你通过实际的例子，详细地来理解什么是元编程，然后"),e("strong",[t._v("探讨带有元编程 能力的语言的特性")]),t._v("，以及与编译技术的关系。通过这样的讨论，我希望你能理解元编程的思维，并利用"),e("strong",[t._v("编译技术")]),t._v("和"),e("strong",[t._v("元编程")]),t._v("的思维，提升自己的编程水平。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("学 习编译原理的人，某种意义上都是语言的设计者。而"),s("strong",[this._v("元编程，也是让程序员具有语言设计者 的能力")]),this._v("。所以，你可以利用自己关于编译的知识，来深入掌握自己所采用的语言的元编程能 力。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"✔️结束语-用程序语言，推动这个世界的演化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#✔️结束语-用程序语言，推动这个世界的演化"}},[this._v("#")]),this._v(" ✔️结束语 | 用程序语言，推动这个世界的演化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"✔️faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#✔️faq"}},[this._v("#")]),this._v(" ✔️FAQ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("19 | 案例总结与热点问题答疑：对于左递归的语法，为什么我的推导不是左递归的？")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_01-问题一：对于左递归的语法，为什么我的推导不是左递归的？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-问题一：对于左递归的语法，为什么我的推导不是左递归的？"}},[this._v("#")]),this._v(" 01.问题一：对于左递归的语法，为什么我的推导不是左递归的？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("这个问题本身反映了，进行递归下降分析的时候，如何保持清晰的思路")]),this._v(" "),s("li",[this._v("任何自顶向下的算法，都是在一个大的图里找到一条搜索路径的过程。最后的结果，是经过多次推导，生成跟输入的 Token 串相同的结果，解析完毕以后，所有 Token 也耗光。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_02-问题二：二元表达式的结合性的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-问题二：二元表达式的结合性的实现"}},[this._v("#")]),this._v(" 02.问题二：二元表达式的结合性的实现")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_03-问题三-：二义性文法为什么也能正常解析？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_03-问题三-：二义性文法为什么也能正常解析？"}},[this._v("#")]),this._v(" 03.问题三 ：二义性文法为什么也能正常解析？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_04-问题四：“语法”和“文法”有什么区别和联系？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_04-问题四：“语法”和“文法”有什么区别和联系？"}},[this._v("#")]),this._v(" 04.问题四：“语法”和“文法”有什么区别和联系？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("我们的课程里讲解了正则文法 (Regular Grammar)")]),this._v(" "),s("li",[this._v("上下文无关文法 (Context-free Grammar) 等不同的文法规则，用来描述词法和语法")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("语法分析中的"),s("strong",[this._v("语法（Syntax）")]),this._v("，主要是描述词是怎么组成句子的，一个语言的语法规则，通常指的是这个 Syntax。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("比如，我做了一个规则文件，里面都是一些"),s("strong",[this._v("词法规则（Lexer Grammar）")]),this._v("，我会说，这是一个词法规则文件，或者"),s("strong",[this._v("词法文法")]),this._v("文件。这个时候，把它说成是一个语法规则文件，就有点儿含义模糊。因为这里面并没有语法规则（Syntax Grammar）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_05-正则文法-正则表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_05-正则文法-正则表达式"}},[this._v("#")]),this._v(" 05.正则文法+正则表达式")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("符合"),e("strong",[t._v("正则文法")]),t._v("的表达式称为“"),e("strong",[t._v("正则表达式")]),t._v("”。生成工具 可以读入正则表达式，生成"),e("strong",[t._v("一种叫“有限自动机”的算法")]),t._v("，来完成具体的词法分析工作。")]),t._v(" "),e("li",[t._v("不要被“正则文法”和“有限自动机”吓到。正则文法是一种最普通、最常见的规则，写正则表达式的时候用的就是正则文法。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_06-antlr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_06-antlr"}},[this._v("#")]),this._v(" 06.ANTLR")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_07-llvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_07-llvm"}},[this._v("#")]),this._v(" 07.LLVM")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("业绩产品：中端优化")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[this._v("#")]),this._v(" 参考资料")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("编译原理之美，极客时间，宫文学")])])}],!1,null,null,null);s.default=_.exports}}]);