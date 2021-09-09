(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{224:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"计算机组成原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#计算机组成原理"}},[s._v("#")]),s._v(" 计算机组成原理")]),s._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[s._v("2019-04-22 徐文浩『极客时间』")])]),s._v(" "),n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[s._v("这么多年一直在开发软件，我深感软件这个行业变化太快了。\n    语言上，十年前流行 Java，这两年流行 Go；框架上，前两年流行 TensorFlow，最近又流行 PyTorch。\n    我逐渐发现，学习应用层的各种语言、框架，好比在练拳法招式，可以短期给予你回报，而深入学习“底\n层知识”，就是在练扎马步、核心肌肉力量，是在提升你自己的“根骨”和“资质”\n\t正所谓“练拳不练功，到老一场空”。如果越早去弄清楚计算机的底层原理，在你的知识体系中“储蓄”起这些知识，也就意味着你有越长的时间来收获学习知识的“利息”。虽然一开始可能不起眼，但是随着时间带来的复利效应，你的长线投资项目，就能让你在成长的过程中越走越快。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("如果 想要深入理解，甚至设计一台自己的计算机，体系结构是必不可少的一门课，而组成原理是 计算机体系结构的一个入门版本。")])]),s._v(" "),n("p",[n("img",{attrs:{src:"img/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BB%84%E6%88%90%E5%8E%9F%E7%90%86/01.png",alt:"01"}})]),s._v(" "),n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("在这个专栏构思之初，我就给自己定了一个交付目标：我要把这些知识点和日常工作、生活以及整个计算机行业的发展史联系起来，教你真正看懂、学会、记住组成原理的核心内容，教你更多地从“为什么”这个角度，去理解这些知识点，而不是只是去记忆“是什么”。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"_00丨开篇词丨为什么你需要学习计算机组成原理？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_00丨开篇词丨为什么你需要学习计算机组成原理？"}},[s._v("#")]),s._v(" 00丨开篇词丨为什么你需要学习计算机组成原理？")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("计算机组成中很多组件的设计，都不是凭空发明出来，它们中的很多都来自现实生活中的想 法和比喻。而底层很多硬件设计和开发的思路，其实也和你进行软件架构的开发设计和思路 是一样的。")])]),s._v(" "),n("li",[n("p",[s._v("像《冰与火之歌》里面水舞者教导艾莉亚的一 样，“恐惧比利剑”更伤人。破除对于基础知识“难”的迷信，是迈向更高水平必经的一步。")])])]),s._v(" "),n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("显然，在硬件和软件之间需要一座桥梁，而“计算机组成原理”就扮演了这样一个角色，\n它既隔离了软件和硬件，也提供了让软件无需关心硬件，就能直接操作硬件的接口。\n这里的计算机组成原理改成操作系统是不是更好，而且感觉这句话说的就是操作系统呀\n展开\n作者回复: 其实 操作系统 也是一个“软件”，而开发操作系统，其实只需要关注到“组成原\n理”或者说“体系结构”就好了，而不需要真的了解硬件，比如电路层面的实现。\n操作系统，其实是在“组成原理”所讲到的“指令集”上的一层封装。\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"体系结构的复兴"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#体系结构的复兴"}},[s._v("#")]),s._v(" 体系结构的复兴")]),s._v(" "),n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("刚开始是做应用开发的，后来去做TVM了？大佬说的这个人谁？\n我是做编译出身的，给AI加速器写过编译器，最近也在研究TVM😁😁😁\n作者回复: json同学你好，我原来在做广告系统团队里的同学哦，现在北美做tvm呢，具体名字涉\n及别人的隐私先不透露啦。过去几年在体系结构和编译器上，又出现了很多新的有意思的主题可\n以研究呢，可以称之为体系结构的新的复兴呢\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}],!1,null,null,null);a.default=e.exports}}]);