(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{174:function(t,_,v){"use strict";v.r(_);var e=v(0),r=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),v("p",[t._v("以上为考研中的9大排序算法。\n就业面试中，不基于比较的排序算法类（3种）")]),t._v(" "),t._m(2),t._v(" "),v("p",[t._v("记忆：\n5大类排序算法，对应3+2+2+1+1\n9大考研基础排序算法+2大就业排序算法")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),v("p",[t._v("其他的是稳定的。")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),v("ul",[v("li",[t._v("2020版"),v("a",{attrs:{href:"https://book.douban.com/subject/30777887/",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据结构高分笔记"),v("OutboundLink")],1),t._v("（第8版），率辉")])])])}),[function(){var t=this.$createElement,_=this._self._c||t;return _("h1",{attrs:{id:"_9大排序算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9大排序算法"}},[this._v("#")]),this._v(" 9大排序算法")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("插入类排序（3种）")]),t._v(" "),v("li",[t._v("直接插入排序")]),t._v(" "),v("li",[t._v("折半插入排序")]),t._v(" "),v("li",[t._v("希尔排序")]),t._v(" "),v("li",[t._v("选择排序（2种）")]),t._v(" "),v("li",[t._v("简单选择排序")]),t._v(" "),v("li",[t._v("堆排序")]),t._v(" "),v("li",[t._v("交换排序（2种）")]),t._v(" "),v("li",[t._v("冒泡排序")]),t._v(" "),v("li",[t._v("快速排序")]),t._v(" "),v("li",[t._v("归并类（1种）")]),t._v(" "),v("li",[t._v("二路归并排序")]),t._v(" "),v("li",[t._v("不基于比较的排序算法类（1种）")]),t._v(" "),v("li",[t._v("基数排序")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("ul",[_("li",[this._v("基数排序")]),this._v(" "),_("li",[this._v("计数排序")]),this._v(" "),_("li",[this._v("桶排序")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"预-详解9大排序算法的启发性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#预-详解9大排序算法的启发性"}},[this._v("#")]),this._v(" 预-详解9大排序算法的启发性")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("插入类排序（3种）")]),t._v(" "),v("li",[t._v("直接插入排序")]),t._v(" "),v("li",[t._v("折半插入排序")]),t._v(" "),v("li",[t._v("希尔排序")]),t._v(" "),v("li",[t._v("选择排序（2种）")]),t._v(" "),v("li",[t._v("简单选择排序")]),t._v(" "),v("li",[t._v("堆排序\n"),v("ul",[v("li",[t._v("重点在于训练“堆”这种数据结构")])])]),t._v(" "),v("li",[t._v("交换排序（2种）")]),t._v(" "),v("li",[t._v("冒泡排序")]),t._v(" "),v("li",[t._v("快速排序\n"),v("ul",[v("li",[t._v("训练“双指针”技巧、分治算法")])])]),t._v(" "),v("li",[t._v("归并类（1种）")]),t._v(" "),v("li",[t._v("二路归并排序\n"),v("ul",[v("li",[t._v("训练用空间换时间的思维、while循环的写法强化")])])]),t._v(" "),v("li",[t._v("不基于比较的排序算法类（1种）")]),t._v(" "),v("li",[t._v("基数排序")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"一、时间复杂度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、时间复杂度"}},[this._v("#")]),this._v(" 一、时间复杂度")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[v("p",[t._v("平均时间复杂度："),v("br"),t._v("\n1、军训的时候，教官说："),v("strong",[t._v("快些")]),t._v("以$$$nlogn$$$的速度"),v("strong",[t._v("归队")]),t._v("\n（快速排序、希尔排序、归并排序、堆排序）"),v("br"),t._v("\n2、特殊的比如：基数排序，平均时间复杂度$$$O(d(n+r))$$$"),v("br"),t._v("\n3、9大排序中，其他的没有列入的都是$$$O(n2)$$$")])]),t._v(" "),v("li",[v("p",[t._v("最"),v("strong",[t._v("坏")]),t._v("时间复杂度"),v("br"),t._v("\n9大排序中，除了"),v("strong",[t._v("快速排序")]),t._v("是$$$O(n2)$$$之外，其他的和"),v("strong",[t._v("平均时间复杂度")]),t._v("一致")])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"二、空间复杂度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、空间复杂度"}},[this._v("#")]),this._v(" 二、空间复杂度")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("1、特殊的：快速排序为$$$O(nlogn)$$$，归并排序为$$$O(n)$$$，基数排序为$$$O(n+m)$$$"),_("br"),this._v("\n2、9大排序中其他的，都是$$$O(1)$$$")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"三、排序算法稳定性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、排序算法稳定性"}},[this._v("#")]),this._v(" 三、排序算法稳定性")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("复习痛苦，情绪"),v("strong",[t._v("不稳定")]),t._v("，"),v("strong",[t._v("快些选堆")]),t._v("好友来聊天。"),v("br"),t._v("\n（快速排序、希尔排序、"),v("strong",[t._v("简单选择")]),t._v("排序、堆排序）")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("注意点：关于“简单选择排序”"),_("br"),this._v("\n数组中的“交换版本”的为不稳定版本。"),_("br"),this._v("\n链表中的“插入版本”的为稳定版本。")])},function(){var t=this.$createElement,_=this._self._c||t;return _("ul",[_("li",[this._v("说到底就是，稳定不稳定，我们还是要看实现，但是如果没有具体说明算法执行流程，我们大致说：不稳定。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"四、其他小提示"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、其他小提示"}},[this._v("#")]),this._v(" 四、其他小提示")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("1、基于“比较”的排序，在"),v("strong",[t._v("最坏")]),t._v("的情况下的时间复杂度至少是  $$$O(nlogn)$$$")]),t._v(" "),v("li",[t._v("我以前还纠结到底是$O(nlogn)$还是$$$O(logn)$$$来着，后面大致给自己想了一个理解方式：")]),t._v(" "),v("li",[t._v("$$$O(logn)$$$比$$$O(n)$$$增长慢，但是“基数排序”这样的不基于比较的算法才线性，那么我们基于比较的应该比他慢一些，时间要长一点。")]),t._v(" "),v("li",[t._v("2、")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"五、外部排序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、外部排序"}},[this._v("#")]),this._v(" 五、外部排序")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);_.default=r.exports}}]);