(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{173:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"设计跳表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计跳表"}},[s._v("#")]),s._v(" 设计跳表")]),s._v(" "),a("p",[s._v("看Redis和kafka的时候会接触到“跳表”")]),s._v(" "),a("h2",{attrs:{id:"一、跳表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、跳表"}},[s._v("#")]),s._v(" 一、跳表")]),s._v(" "),a("p",[s._v("为了改善链表的查询时间复杂度。")]),s._v(" "),a("p",[s._v("添加“索引”")]),s._v(" "),a("ul",[a("li",[s._v("一般来说上层节点个数应该是下层节点个数的"),a("strong",[s._v("二分之一")])])]),s._v(" "),a("h3",{attrs:{id:"添加节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加节点"}},[s._v("#")]),s._v(" 添加节点")]),s._v(" "),a("p",[s._v("添加到上一层的概率是二分之一之最简单的方武就是抛奥市")]),s._v(" "),a("p",[s._v("所以我们让他在O和1之间随机如果是O就停止")]),s._v(" "),a("p",[s._v("如果是1就继续")]),s._v(" "),a("p",[s._v("最后正面础现的次数k，就代表我们要需要在第一层到k层之阃添加索引")]),s._v(" "),a("p",[s._v("当然我们也不能能止他限增长")]),s._v(" "),a("p",[s._v("所我们还需要加一个最大值的限制的")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRandom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    Random random "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nextBoolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("MAX_LEVEL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        k"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}],!1,null,null,null);t.default=e.exports}}]);