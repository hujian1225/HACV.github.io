(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{214:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("参考"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%83%B5%E5%B0%B8%E8%BF%9B%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),a("OutboundLink")],1),t._v(" "),a("code",[t._v("https://zh.wikipedia.org/wiki/%E5%83%B5%E5%B0%B8%E8%BF%9B%E7%A8%8B")])]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"linux系统编程复习（1）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux系统编程复习（1）"}},[this._v("#")]),this._v(" Linux系统编程复习（1）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一、linux系统编程复习安排"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、linux系统编程复习安排"}},[this._v("#")]),this._v(" 一、Linux系统编程复习安排")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("ul",[a("li",[t._v("笔试常考")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("进程相关")]),t._v(" "),a("li",[t._v("多线程")]),t._v(" "),a("li",[t._v("C++各种锁")]),t._v(" "),a("li",[t._v("死锁")]),t._v(" "),a("li",[t._v("fork等系统调用强化")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"二、笔试选择题常考知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、笔试选择题常考知识点"}},[this._v("#")]),this._v(" 二、笔试选择题常考知识点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"僵尸进程（僵死进程）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#僵尸进程（僵死进程）"}},[this._v("#")]),this._v(" 僵尸进程（僵死进程）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("僵尸进程: 进程终止，父进程尚未回收，子进程残留资源（PCB）存放于内核中，变成僵尸（Zombie）进程。\n注意:僵尸进程是不能使用kill命令清除掉的。因为kill命令只是用来终止进程的，而僵尸进程已经终止。\n思考！用什么办法可清除掉僵尸进程呢？")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"孤儿进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#孤儿进程"}},[this._v("#")]),this._v(" 孤儿进程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("孤儿进程: 父进程先于子进程结束，则子进程成为孤儿进程，子进程的父进程成为init进程，称为init进程领养孤儿进程。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"init-进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init-进程"}},[this._v("#")]),this._v(" init 进程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("系统初始化进程，是所有用户进程和非调度进程的祖先")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"守护进程（daemon进程）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#守护进程（daemon进程）"}},[this._v("#")]),this._v(" 守护进程（daemon进程）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[s("b",[this._v("“系统进程”")]),this._v("与终端无关，不由用户启动，通常也叫做"),s("b",[this._v("守护进程")]),this._v("，是Unix内核专用的特殊进程。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"三、常用头文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、常用头文件"}},[this._v("#")]),this._v(" 三、常用头文件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("）\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<unistd.h>")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//提供通用的文件、目录、程序及进程操作的函数")])]),t._v("\n代表系统调用函数\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n记忆方法："),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("unistd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("表示的是unix和std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h表示Unix的标准头文件 \n\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("）\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<sys/types.h>")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数据类型定义")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<sys/wait.h>")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//提供进程等待的函数")])]),t._v("\n代表系统调用函数\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("waitpid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])])}],!1,null,null,null);s.default=e.exports}}]);