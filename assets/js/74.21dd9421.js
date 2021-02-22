(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{239:function(t,n,e){"use strict";e.r(n);var s=e(0),_=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[e("font",{staticStyle:{background:"yellow"}},[t._v("还有一些架构模式等没有进来，笔记没整理完毕，暂停，先写出博客框架")])],1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("1）初学设计模式，千万不要背类图——容易厌学\n2）要做的是积累案例（背场景）——很好的方法。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("基本原则：")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("这只是刚刚开始提出来的脚手架，最终，还是要理解所有的7条基本原则的。")]),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("开放封闭原则：类的改动是通过增加代码进行的，而不是修改源代码。\nTips：我们23种设计模式大部分都是为了解决的这个开放-封闭原则。因为他实现了：解耦\n解释：通过增加代码而不是修改原先的代码：")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("依赖倒置原则：依赖于抽象(接口),不要依赖具体的实现(类)，也就是针对接口编程。")]),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("一个对象应当对其他对象尽可能少的了解，从而降低各个对象之间的耦合，提高系统的可维护性。例如在一个程序中，各个模块之间相互调用时，通常会提供一个统一的接口来实现。这样其他模块不需要了解另外一个模块的内部实现细节，这样当一个模块内部的实现发生改变时，不会影响其他模块的使用。(黑盒原理)")]),t._v(" "),t._m(14),t._v(" "),e("ol",[e("li",[t._v("工厂方法模式（Factory Method）：定义一个创建对象的接口，但由子类决定需要实例化哪一个类。 工厂方法使得子类实例化的过程推迟\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("生产成系列对象>")])],1),t._v(" "),e("li",[t._v("抽象工厂模式（Abstract Factory）：提供一个接口，可以创建一系列相关或相互依赖的对象，而无需指定它们具体的类\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("复杂对象构造")])],1),t._v(" "),e("li",[t._v("构建器模式（Builder）：将一个复杂类的表示与其构造相分离，使得相同的构建过程能够得出不同的表示\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("克隆对象")])],1),t._v(" "),e("li",[t._v("原型模式（Prototype）：用原型实例指定创建对象的类型，并且通过拷贝这个原型来创建新的对象\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("单实例")])],1),t._v(" "),e("li",[t._v("单例模式（Singleton）：保证一个类只有一个实例，并提供一个访问它的全局访问点\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("转换接口")])],1),t._v(" "),e("li",[t._v("适配器模式（Adapter）：将一个类的接口转换成用户希望得到的另一种接口。它使原本不相容的接口得以协同工作\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("继承树拆分")])],1),t._v(" "),e("li",[t._v("桥接模式（Bridge）：将类的抽象部分和它的实现部分分离开来，使它们可以独立地变化\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("树形目录结构")])],1),t._v(" "),e("li",[t._v("组合模式（Composite）：将对象组合成树型结构以表示“整体-部分”的层次结构，使得用户对单个对象和组合对象的使用具有一致性\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("动态附加职责")])],1),t._v(" "),e("li",[t._v("装饰模式（Decorator）：动态地给一个对象添加一些额外的职责。它提供了用子类扩展功能的一个灵活的替代，比派生一个子类更加灵活\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("对外统一接口")])],1),t._v(" "),e("li",[t._v("外观模式（Facade）：定义一个高层接口，为子系统中的一组接口提供一个一致的外观，从而简化了该子系统的使用\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("汉字编码")])],1),t._v(" "),e("li",[t._v("享元模式（Flyweight）：提供支持大量细粒度对象共享的有效方法\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("快捷方式")])],1),t._v(" "),e("li",[t._v("代理模式（Proxy）-- 结构型：为其他对象提供一种代理以控制这个对象的访问\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("传递职责")])],1),t._v(" "),e("li",[t._v("职责链模式（Chain of Responsibility）：通过给多个对象处理请求的机会，减少请求的发送者与接收者之间的耦合。将接收对象链接起来，在链中传递请求，直到有一个对象处理这个请求\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("日志记录，可撤销")])],1),t._v(" "),e("li",[t._v("命令模式（Command）：将一个请求封装为一个对象，从而可用不同的请求对客户进行参数化，将请求排队或记录请求日志，支持可撤销的操作\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("虚拟机的机制")])],1),t._v(" "),e("li",[t._v("解释器模式（Interpreter）：给定一种语言，定义它的文法表示，并定义一个解释器，该解释器用来根据文法表示来解释语言中的句子\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("数据集>")])],1),t._v(" "),e("li",[t._v("迭代器模式（Iterator）：提供一种方法来顺序访问一个聚合对象中的各个元素，而不需要暴露该对象的内部表示\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("不直接引用")])],1),t._v(" "),e("li",[t._v("中介者模式（Mediator）-- 行为型：用一个中介对象来封装一系列的对象交互。它使各对象不需要显式地相互调用，从而达到低耦合，还可以独立地改变对象间的交互\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("游戏存档")])],1),t._v(" "),e("li",[t._v("备忘录模式（Memento）：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，从而可以在以后将该对象恢复到原先保存的状态\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("联动")])],1),t._v(" "),e("li",[t._v("观察者模式（Observer）：定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并自动更新\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("状态变成类")])],1),t._v(" "),e("li",[t._v("状态模式（State）：允许一个对象在其内部状态改变时改变它的行为\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("多方案切换")])],1),t._v(" "),e("li",[t._v("策略模式（Strategy）：定义一系列算法，把它们一个个封装起来，并且使它们之间可互相替换，从而让算法可以独立于使用它的用户而变化\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("框架")])],1),t._v(" "),e("li",[t._v("模板方法模式（Template Method）：定义一个操作中的算法骨架，而将一些步骤延迟到子类中，使得子类可以不改变一个算法的结构即可重新定 义算法的某些特定步骤\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("数据与操作分离")])],1),t._v(" "),e("li",[t._v("访问者模式（Visitor）：表示一个作用于某对象结构中的各元素的操作，使得在不改变各元素的类的前提下定义作用于这些元素的新操作\n速记关键词："),e("font",{staticStyle:{background:"yellow"}},[t._v("数据与操作分离")])],1)]),t._v(" "),e("p",[t._v("五、其他的模式补充")]),t._v(" "),e("p",[e("font",{staticStyle:{background:"yellow"}},[t._v("还有一些架构模式等没有进来，笔记没整理完毕，暂停，先写出博客框架")]),t._v("\n1）简单工厂模式\n2）")],1)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"设计模式（design-patterns）基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设计模式（design-patterns）基础"}},[this._v("#")]),this._v(" 设计模式（Design_Patterns）基础")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"一、设计模式杂谈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、设计模式杂谈"}},[this._v("#")]),this._v(" 一、设计模式杂谈")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"前置知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前置知识"}},[this._v("#")]),this._v(" 前置知识")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("blockquote",[e("ul",[e("li",[t._v("1）"),e("strong",[t._v("UML中类图")]),t._v("，类和类之间的关系一定要会，不然会影响设计模式的学习效果")]),t._v(" "),e("li",[t._v("2）设计模式的基础是"),e("strong",[t._v("多态")]),t._v("！！多态的基础是虚函数。")]),t._v(" "),e("li",[t._v("Tips：这也告诉我们看别人"),e("code",[t._v("C++和Java")]),t._v("等面向对象的代码的时候，要注意是否有多态发生。")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"学习方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#学习方法"}},[this._v("#")]),this._v(" 学习方法")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"二、设计模式的基本原则（贯穿23种设计模式始终）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、设计模式的基本原则（贯穿23种设计模式始终）"}},[this._v("#")]),this._v(" 二、设计模式的基本原则（贯穿23种设计模式始终）")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("基本原则都是围绕设计模式要达到的"),n("strong",[this._v("目的")]),this._v("设计的：\n"),n("strong",[this._v("高内聚，低耦合")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("blockquote",[e("ul",[e("li",[t._v("1)"),e("strong",[t._v("开放封闭原则")]),t._v("（"),e("strong",[t._v("OCP")]),t._v(",Open For Extension, Closed For Modification Principle）\n类的改动是通过增加代码进行的，而不是修改源代码。")]),t._v(" "),e("li",[t._v("2)"),e("strong",[t._v("单一职责原则")]),t._v("（"),e("strong",[t._v("SRP")]),t._v(",Single Responsibility Principle）\n类的职责要单一，对外只提供一种功能，而引起类变化的原因都应该只有一个。")]),t._v(" "),e("li",[t._v("3)"),e("strong",[t._v("依赖倒置原则")]),t._v("（"),e("strong",[t._v("DIP")]),t._v(",Dependence Inversion Principle）\n依赖于抽象(接口),不要依赖具体的实现(类)，也就是针对接口编程。")]),t._v(" "),e("li",[t._v("4)"),e("strong",[t._v("接口隔离原则")]),t._v("（"),e("strong",[t._v("ISP")]),t._v(",Interface Segegation Principle）\n不应该强迫客户的程序依赖他们不需要的接口方法。一个接口应该只提供一种对外功能，不应该把所有操作都封装到一个接口中去。")]),t._v(" "),e("li",[t._v("5)"),e("strong",[t._v("里氏替换原则")]),t._v("（"),e("strong",[t._v("LSP")]),t._v(", Liskov Substitution Principle）任何抽象类出现的地方都可以用他的实现类进行替换。实际就是虚拟机制，语言级别实现面向对象功能。")]),t._v(" "),e("li",[t._v("6)"),e("strong",[t._v("优先使用组合而不是继承原则")]),t._v("（CARP,Composite/Aggregate Reuse Principle）\n如果使用继承，会导致父类的任何变换都可能影响到子类的行为。\n如果使用对象组合，就降低了这种依赖关系。")]),t._v(" "),e("li",[t._v("7)"),e("strong",[t._v("迪米特法则")]),t._v("（"),e("strong",[t._v("LOD")]),t._v(",Law of Demeter）\n一个对象应当对其他对象尽可能少的了解，从而降低各个对象之间的耦合，提高系统的可维护性。例如在一个程序中，各个模块之间相互调用时，通常会提供一个统一的接口来实现。这样其他模块不需要了解另外一个模块的内部实现细节，这样当一个模块内部的实现发生改变时，不会影响其他模块的使用。(黑盒原理)")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"三、核心的几条原则详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、核心的几条原则详解"}},[this._v("#")]),this._v(" 三、核心的几条原则详解")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"_1-开放封闭原则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-开放封闭原则"}},[this._v("#")]),this._v(" 1)开放封闭原则")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("举个例子：\n以前我们玩过的“赛尔号”（或者说“洛克王国”）宠物之间互相攻击的效果：\n双方宠物互相攻击的效果如果这样实现的：\n我在宠物类A中放上攻击宠物B的效果函数\n在宠物B中放上攻击宠物A的效果的函数\n那么，当外界需求变化（项目中常有的事情）：在某一周需要推出一只新宠物的时候，我们又需要写新宠物C和宠物A和B战斗的效果。\n我们就需要在类A中写上攻击C的效果，类B中写上攻击C的效果，类C中写上攻击A，B的效果。\n这样的改代码，就是在原有代码中修改。\n试想一下，以后有1000只宠物，要是每个类中都这么去加成员函数，不说编码长度很长，\n最重要的，我们每次推出一只新宠物，要修改这么多个类，极其麻烦，也容易出错。\n\n为了在实现这种情况的技术上的解决类与类之间的耦合：\n我们将宠物抽象为一个基类，其他宠物都继承自这。\n我们在基类中定义一个攻击的纯虚函数，其他继承的宠物，自行实现攻击效果就好了。\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v('Tips：\n三种面向对象机制：\n继承：其实是为了复用别人写的代码而产生的，也就是复用"过往人"的智慧\n增强了系统的'),n("strong",[this._v("可重用性")]),this._v('。\n多态：其实是为未来人写了一个框架，在我的框架中，"未来人"增加一个效果，多态便可以扩展。\n增强了系统的'),n("strong",[this._v("可扩展性")]),this._v("。\n封装：增强了系统的"),n("strong",[this._v("可读性")]),this._v("。")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"_2-依赖倒置原则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-依赖倒置原则"}},[this._v("#")]),this._v(" 2)依赖倒置原则")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"_3-迪米特法则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-迪米特法则"}},[this._v("#")]),this._v(" 3)"),n("strong",[this._v("迪米特法则")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"四、23种设计模式记忆"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、23种设计模式记忆"}},[this._v("#")]),this._v(" 四、23种设计模式记忆")])}],!1,null,null,null);n.default=_.exports}}]);