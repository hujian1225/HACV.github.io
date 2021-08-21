(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{213:function(a,s,t){"use strict";t.r(s);var n=t(0),r=Object(n.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"scala"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scala"}},[a._v("#")]),a._v(" Scala")]),a._v(" "),t("ul",[t("li",[a._v("来自C++栈的学习者")]),a._v(" "),t("li",[a._v("基于CentOS Linux搭建环境学习")])]),a._v(" "),t("h2",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[a._v("#")]),a._v(" 目录")]),a._v(" "),t("h2",{attrs:{id:"scala编程-译者序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scala编程-译者序"}},[a._v("#")]),a._v(" Scala编程-译者序")]),a._v(" "),t("ul",[t("li",[a._v("相信大多数商业软件的程序员都是从Fortran、Pascal、C/C++/Java或COBOL语言一路学起的。本书中，这一大类的语言被称为是"),t("strong",[a._v("指令式语言")]),a._v("，意指以变量和过程语句构造指令的方式对需要实现的目的进行编码的语言。与之相对的是被称为函数式语言的另一个大类，这种语言把程序的目的转换为函数和函数应用，是以函数计算这种不同的视角来处理一般问题的。")]),a._v(" "),t("li",[a._v("直到现在，Lisp、Scheme或者Haskell 这样的函数式语言也仅仅还是“小众”语言。这在TIOBE语言排行榜上也可见一斑。上榜的前20 位几乎被面向对象的或者面向过程的指令式语言占满。尤其是前三甲则几乎始终被Java、C、和C++所把持。反观函数式语言，Lisp在第13位，是最靠前的了，Scheme在第25位，Haskell在第40位左右。但并不是说函数式语言对于指令式语言就不具有可比性,相反，在很多地方函数式语言都体现了它们独到的优势，如:代码的简洁性、值的不可改变、函数的无副作用、值和函数替换的指称透明等。")]),a._v(" "),t("li",[a._v("但函数式语言与指令式语言总显得有点儿“格格不入”。一-个被指令式语言锻炼出来的头脑很难理解函数式语言的精髓，已经用惯了循环语句的方式解决问题，想要把它转换为递归语句也不是很容易的事情。莫非，函数式语言始终只能作为学术派的思维游戏，而不能适应于现代商业软件开发的需要，因此无缘商业软件开发浪潮的洗礼吗?")]),a._v(" "),t("li",[a._v("所以说，Scala语言的确具有很新颖的创意。因为它能很巧妙地把指令式语言与函数式语言结合在一起。用Martin Odersky 的话说，就是:指令式语言与函数式语言本就是一枚硬币的两面，它们不应是互相排斥、非此即彼的，而是可以互相协调，共同发挥出更大力量的。")])]),a._v(" "),t("h2",{attrs:{id:"序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#序"}},[a._v("#")]),a._v(" 序")]),a._v(" "),t("ul",[t("li",[a._v("Martin Odersky设计的Pizza语言曾经震惊了Java世界。尽管Pizza语言本身并不流行，但它巧妙地把面向对象和函数型语言两种风格融合在了一起，形成了自然而又强有力的组合。Pizza 语言的设计成为了Java泛型的基础，Martin的GJ ( Generic Java)编译器从Java 1.3开始成为了Sun公司的标准编译器（尽管关闭了泛型)。我有幸维护这个编译器多年，因此对Martin设计与实现语言的能力有非常直接的体会。")]),a._v(" "),t("li",[a._v("近年来，静态类型语言受到了冲击。"),t("strong",[a._v("Java的广泛应用暴露了静态语言编程会导致大量固定写法的弊病")]),a._v("。常见的看法是我们应避免静态类型从而消除这种代码，于是人们对动态语言如 Python，Ruby 和Groovy的兴趣开始增加。这种看法被Martin最近的构想，Scala的出现打破。")]),a._v(" "),t("li",[a._v("Scala是一种类型优雅的语言:"),t("strong",[a._v("它是静态类型的，但仅在需要的地方显式定义类型")]),a._v("。Scala 从面向对象和函数式语言两方面获得了强大的特性，然后用全新的理念把它们完美地整合成一体。它的语法是如此的轻量级，而原语（primitive )又如此富有表达力，以至于根本可以认为API的使用不会产生语法开销。我们可以在标准库中，如拆分器、组合器和执行器中发现例子。而这也说明Scala是支持内嵌的特定领域语言。")]),a._v(" "),t("li",[a._v("Scala会成为下一个伟大的语言吗?只有时间可以证明一切。我相信 Martin Odersky 的小组绝对有这样的能力和水平做到这-一-点。不过有一件事是确定无疑的:Scala语言建立了衡量未来语言的新标准。")])]),a._v(" "),t("h2",{attrs:{id:"_01-scala『历史』和『设计思想』"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01-scala『历史』和『设计思想』"}},[a._v("#")]),a._v(" 01.Scala『历史』和『设计思想』")]),a._v(" "),t("h3",{attrs:{id:"_1-1-范式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-范式"}},[a._v("#")]),a._v(" 1.1.范式")]),a._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[a._v("C"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v("是多范式编程语言成功的典范。\n    C"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v("支持和C语言一样的过程式编程范式，\n    也支持面向对象编程范式，\n    支持泛型编程能力。\n    支持多种范式可能是C"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v("直到现在仍然具有强大的生命力的原因之一。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("ul",[t("li",[a._v("Scala是一种多范式的编程语言")]),a._v(" "),t("li",[a._v("Scala是一门多范式的编程语言，一种类似Java 的编程语言，设计初衷是要集成『面向对象编程』和『函数式编程』的各种特性。")]),a._v(" "),t("li",[a._v("我们认为最有意义的学习方式是，不要把Scala看做是改进的Java，而是把它作为一门新的语言。所以这里不会介绍Java的使用经验，而将集中讲解解释器和“对象-函数式”的风格，以及 Scala编程风格。特别强调了可维护性，并发，常用工具和利用类型系统的优势。")])]),a._v(" "),t("h3",{attrs:{id:"_1-2-数据类型大小写之类的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-数据类型大小写之类的"}},[a._v("#")]),a._v(" 1.2.数据类型大小写之类的")]),a._v(" "),t("ul",[t("li",[a._v("C++中都是小写")]),a._v(" "),t("li",[a._v("Java中除了int之类『"),t("strong",[a._v("基本数据类型")]),a._v("』的用小写，泛型编程的都用大写开头『和C++不同』")])]),a._v(" "),t("h3",{attrs:{id:"_1-3-语法对比『难点』"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-语法对比『难点』"}},[a._v("#")]),a._v(" 1.3.语法对比『难点』")]),a._v(" "),t("ul",[t("li",[a._v("Scala 与 Java 的最大区别是：Scala 语句末尾的分号 "),t("code",[a._v(";")]),a._v(" 是可选的")]),a._v(" "),t("li",[a._v("Scala大小写敏感，可以接受。C++和Java也是。。。")])]),a._v(" "),t("p",[a._v("1、"),t("strong",[a._v("类名")]),a._v(" - 对于所有的类名的『"),t("strong",[a._v("第一个字母要大写")]),a._v("』。\n如果需要使用几个单词来构成一个类的名称，每个单词的第一个字母要大写。\n示例："),t("em",[a._v("class "),t("strong",[a._v("M")]),a._v("yFirstScalaClass")])]),a._v(" "),t("p",[a._v("2、"),t("strong",[a._v("方法名称")]),a._v(" - 所有的方法名称的『"),t("strong",[a._v("第一个字母用小写")]),a._v("』。\n如果若干单词被用于构成方法的名称，则每个单词的第一个字母应大写。\n示例："),t("em",[a._v("def "),t("strong",[a._v("m")]),a._v("yMethodName()")])]),a._v(" "),t("p",[a._v("3、"),t("strong",[a._v("程序文件名")]),a._v(" - 程序文件的名称应该与对象名称完全匹配("),t("strong",[a._v("新版本不需要了")]),a._v("，但建议保留这种习惯)。『"),t("strong",[a._v("好家伙，Java的这种弊病也给学习到了")]),a._v('。。。』\n保存文件时，应该保存它使用的对象名称（记住Scala是区分大小写），并追加".scala"为文件扩展名。 （如果文件名和对象名称不匹配，程序将无法编译）。')]),a._v(" "),t("p",[a._v('示例: 假设"HelloWorld"是对象的名称。那么该文件应保存为\'HelloWorld.scala"')]),a._v(" "),t("div",{staticClass:"language-scala line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scala"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("args"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Array"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//Scala程序从main()方法开始处理，")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//这是每一个Scala程序的强制程序入口部分。")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("ul",[t("li",[a._v("类似C++中的")])]),a._v(" "),t("h3",{attrs:{id:"_1-4-思想对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-思想对比"}},[a._v("#")]),a._v(" 1.4.思想对比")]),a._v(" "),t("ul",[t("li",[a._v("可以认为 Scala 程序是对象的集合，通过调用彼此的方法来实现消息传递")]),a._v(" "),t("li",[t("strong",[a._v("字段 -")]),a._v(" 每个对象都有它唯一的『"),t("strong",[a._v("实例变量")]),a._v("』集合，即字段。对象的属性通过给字段赋值来创建。『好家伙，又创建新概念。。。没事干嘛。。不就是变量嘛。。。』")])]),a._v(" "),t("h3",{attrs:{id:"_1-5-支持编程方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-支持编程方式"}},[a._v("#")]),a._v(" 1.5.支持编程方式")]),a._v(" "),t("ul",[t("li",[a._v("1、交互式编程，交互式编程不需要创建脚本文件，『类似、Matlab、Python，好家伙』")]),a._v(" "),t("li",[a._v("2、脚本形式『好家伙，原来我写的代码是脚本？？我还以为是纯编译的。。。』")])]),a._v(" "),t("h2",{attrs:{id:"_02-配置环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_02-配置环境"}},[a._v("#")]),a._v(" 02.配置环境")]),a._v(" "),t("ul",[t("li",[a._v("Scala是基于java之上，大量使用java的类库和变量，使用 Scala 之前必须先安装 "),t("strong",[a._v("Java（>1.5版本）")])])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux MyScala"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# javac -version")]),a._v("\njavac "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),a._v(".0_275\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux MyScala"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# java -version")]),a._v("\nopenjdk version "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.8.0_275"')]),a._v("\nOpenJDK Runtime Environment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),a._v(".0_275-b01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nOpenJDK "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("64")]),a._v("-Bit Server VM "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("25.275")]),a._v("-b01, mixed mode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# wget https://downloads.lightbend.com/scala/2.13.5/scala-2.13.5.rpm")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ls")]),a._v("\nMyJava  MyScala  scala-2.13.5.rpm\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mv scala-2.13.5.rpm /usr/share/")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vim /etc/profile")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# scala")]),a._v("\n-bash: scala: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" not found\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cd /usr/share/")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux share"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# rpm -i scala-2.13.5.rpm")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux share"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# scala")]),a._v("\nWelcome to Scala "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.13")]),a._v(".5 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("OpenJDK "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("64")]),a._v("-Bit Server VM, Java "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),a._v(".0_275"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(".\nType "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" expressions "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" evaluation. Or try :help.\n\nscala"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" q\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("h2",{attrs:{id:"_03-观察现象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_03-观察现象"}},[a._v("#")]),a._v(" 03.观察现象")]),a._v(" "),t("div",{staticClass:"language-scala line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scala"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("object")]),a._v(" HelloWorld "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("args"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Array"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Unit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    println"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello, world!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux MyScala"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# scalac demo.scala")]),a._v("\n\n\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux MyScala"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ll")]),a._v("\ntotal "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v("\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" root root  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("97")]),a._v(" Apr "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":29 demo.scala\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" root root "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("639")]),a._v(" Apr "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":30 HelloWorld.class\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" root root "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("677")]),a._v(" Apr "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":30 HelloWorld$.class\n\n\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux MyScala"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# scala HelloWorld")]),a._v("\nHello, world"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux MyScala"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# java HelloWorld")]),a._v("\nException "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" thread "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"main"')]),a._v(" java.lang.NoClassDefFoundError: scala/Predef$\n        at HelloWorld$.main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("demo.scala:3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        at HelloWorld.main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("demo.scala"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nCaused by: java.lang.ClassNotFoundException: scala.Predef$\n        at java.net.URLClassLoader.findClass"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("URLClassLoader.java:382"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        at java.lang.ClassLoader.loadClass"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ClassLoader.java:418"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        at sun.misc.Launcher"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$AppClassLoader")]),a._v(".loadClass"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Launcher.java:352"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        at java.lang.ClassLoader.loadClass"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ClassLoader.java:351"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("more")]),a._v("\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br")])]),t("ul",[t("li",[a._v("观察到竟然生成了2个文件？？尝试了")]),a._v(" "),t("li",[a._v("Scala编译器将您的Scala代码编译为Java字节代码，然后可以通过' "),t("strong",[a._v("scala")]),a._v(" '命令执行。 ' "),t("strong",[a._v("scala")]),a._v(" '命令类似于"),t("strong",[a._v("java")]),a._v("命令，因为它执行编译的Scala代码。")])])])}],!1,null,null,null);s.default=r.exports}}]);