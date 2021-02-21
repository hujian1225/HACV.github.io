(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{238:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"linux下多路io复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux下多路io复用"}},[s._v("#")]),s._v(" Linux下多路IO复用")]),s._v(" "),a("ul",[a("li",[s._v("date: 2020-08-09")])]),s._v(" "),a("h2",{attrs:{id:"一、术语列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、术语列表"}},[s._v("#")]),s._v(" 一、术语列表")]),s._v(" "),a("h3",{attrs:{id:"（1）阻塞（block）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（1）阻塞（block）"}},[s._v("#")]),s._v(" （1）阻塞（Block）")]),s._v(" "),a("ul",[a("li",[s._v("阻塞后可以进行进程调度，CPU利用率高")])]),s._v(" "),a("h3",{attrs:{id:"（2）轮询（poll）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（2）轮询（poll）"}},[s._v("#")]),s._v(" （2）轮询（poll）")]),s._v(" "),a("ul",[a("li",[s._v("马上返回，过一会后，再重新问，可以吗")])]),s._v(" "),a("h3",{attrs:{id:"（3）数据到达和数据拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（3）数据到达和数据拷贝"}},[s._v("#")]),s._v(" （3）数据到达和数据拷贝")]),s._v(" "),a("ul",[a("li",[s._v("数据到达，是借助网络，数据读入到本地的『内核』————因为4层模型中，除了『应用层』其他都是kernel态的")]),s._v(" "),a("li",[s._v("内核到（用户）user区数据拷贝：注意这个")])]),s._v(" "),a("p",[s._v("上面，2个阶段是理解5种IO模型的关键！『参考自Cyc2018』")]),s._v(" "),a("h2",{attrs:{id:"二、多路转接io目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、多路转接io目录"}},[s._v("#")]),s._v(" 二、多路转接IO目录")]),s._v(" "),a("p",[s._v("多路IO转接模型\n有三种")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("select")]),s._v(" "),a("li",[s._v("poll")]),s._v(" "),a("li",[s._v("epoll")])])]),s._v(" "),a("p",[s._v("涉及高性能服务器开发方面"),a("br"),s._v("\nepoll是非常常用的系统调用，在很多的开源项目当中epoll都是核心技术，例如Nginx和Redis等等")]),s._v(" "),a("p",[s._v("目前epoll是linux大规模并发网络程序中的"),a("strong",[s._v("热门首选模型")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1. TCP状态转换\n   3种状态    2MSL  \n2. 半关闭\n   shutdown --- close\n3. 2MSL\n4. **端口复用**（比如，之前演示了，我们服务器在关闭的之后，**一段时间**哪个端口无法使用，实际上我们可以借助一个函数，把这个端口给他复用起来）\n   setsockopt(); --- UNP 7\n5. 多路IO转接服务器\n   server--监听  \n   select\n   \t参数： 返回值    4个辅助函数 \t\n   poll\n   \t参数： struct { fd， evnets， events}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"（1）多线程和多进程服务器特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（1）多线程和多进程服务器特点"}},[s._v("#")]),s._v(" （1）多线程和多进程服务器特点")]),s._v(" "),a("p",[s._v("多线程和多进程效率低的原因：所有监听都是serve.c这个程序自己来做。")]),s._v(" "),a("p",[s._v("有一种好的方法：多路IO转接服务器也叫做"),a("strong",[s._v("多任务IO服务器")]),s._v("。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("该类服务器实现的主旨思想是，不再由『"),a("strong",[s._v("应用程序")]),s._v("』自己监视客户端连接，取而代之由"),a("strong",[s._v("内核")]),s._v("替应用程序监视文件。")])]),s._v(" "),a("li",[a("p",[s._v("重点在“转接”\n多路指的，多个访问请求的客户端。\n转接：言外之意，中间有个人帮我进行转换，转换客户端的请求，转接给我，然后我再进行操作。")])])]),s._v(" "),a("h3",{attrs:{id:"（2）学习select-poll-epoll的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（2）学习select-poll-epoll的原因"}},[s._v("#")]),s._v(" （2）学习select/poll/epoll的原因")]),s._v(" "),a("p",[s._v("原因：CPU消耗大，主要用在CPU切换上")]),s._v(" "),a("p",[s._v("『"),a("strong",[s._v("CPU上下文切换")]),s._v("』，是需要操作一些句柄的，代价高。")]),s._v(" "),a("p",[s._v("多线程和多进程并发\n不适合，客户端非常庞大的情况。\n原因：开销大，占用资源\n详细点：他主要占用的资源，"),a("strong",[s._v("CPU消耗得大")]),s._v("。")]),s._v(" "),a("p",[s._v("起几百个进程，几百个线程，实际上对于Linux操作系统来说，在内核消耗上或者系统内部的消耗上。\n差别不是特别大。\n当然，我们知道，多线程比多进程好一些")]),s._v(" "),a("p",[s._v("上面，如果我们发现，那就是，如果每个客户端都和我进行数据交换。\n那我的"),a("strong",[s._v("CPU")]),s._v("岂不是就要"),a("strong",[s._v("频繁的进行切换")]),s._v("。")]),s._v(" "),a("p",[s._v("如何把这个降低呢？\n才有多路IO转接模型，有三种（难度大一些了，使用起来，也比较不好理解，然后"),a("strong",[s._v("代码量相对来说，大一些")]),s._v("）")]),s._v(" "),a("h4",{attrs:{id:"_1、建立连接的『时候』的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、建立连接的『时候』的好处"}},[s._v("#")]),s._v(" 1、建立连接的『时候』的好处")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("把内核请过来给我当帮手，我只需要根据我的设置请求，通知他，你去帮我监听这几个客户端，是否有请求。当这些客户端有请求的时候，帮助我监听的内核，会给我一个反馈，意思告诉我说，他们要对你发起请求了。）\n\n当我的监听的人，给我反馈的时候，我再去处理，我需不要等待？？\n不需要。比如，我们原先去处理的时候，我要调用accept函数，这个函数会阻塞（或者说等待，等待，客户端给我发链接）\n但是，现在阻塞等待这个事情，我让内核去干了。内核什么时候会给我反馈呢？那就是有人给我有连接请求了。\n所以说，当他给了我反馈的时候，我还需要等待吗？不需要！可以立即完成连接的建立。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"_2、建立连接之『后』的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、建立连接之『后』的好处"}},[s._v("#")]),s._v(" 2、建立连接之『后』的好处")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("我们连接之后的那条线，我们也可以把它丢给内核，要不然的话，\n我还得阻塞在这继续监听，是否给我发数据。\n内核你帮我，反正你监听一个也是听，听一堆也是听。\n监听到有请求的时候，再给我发一个反馈。当我收到反馈的时候，我应该干啥？\n表示对方已经写过了数据啥的了，都已经写到这边了，我所要做的事情就是\n在这个基础上，直接和对方去通信（read）\n\n\n如上，内核的这种行为有点像：\n我们先前讲信号的时候。注册那个信号捕捉函数。\n内核给你反馈了，就说明有事件发生了，但是具体是什么事件，还是不知道。\n比如，我向内核注册一下，帮我看着几个人，\n当内核你看到他有行动的时候，你再告诉我。\n\n有了内核帮我监听，那么我这个serve.c就解放出来了。\n我就不需要再阻塞了，我设置完监听之后，就可以去做其他的时候了。\n上面就是多路IO转接的基本思想。\n\n我们要讲的3种，思路几乎和这个一致。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("总结：")]),s._v(" "),a("ul",[a("li",[s._v("Linux下所有东西都是文件这个思想很重要！")]),s._v(" "),a("li",[a("strong",[s._v("在Linux系统编程和网络编程中，文件描述符的概念很重要！！")])])]),s._v(" "),a("h2",{attrs:{id:"三、select详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、select详解"}},[s._v("#")]),s._v(" 三、select详解")]),s._v(" "),a("p",[s._v("特点：")]),s._v(" "),a("p",[s._v("1、用『数组』实现，文件描述符受到控制")]),s._v(" "),a("p",[s._v("2、")]),s._v(" "),a("p",[s._v("3、超时的时间控制在纳秒级别『ns』")]),s._v(" "),a("p",[s._v("具体实施的话，驱使我们先前的那个内核工作的，是谁来**驱使（需要用到函数，比如select）**呢？")]),s._v(" "),a("p",[s._v("如何使用起来select")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("select\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("\tselect能监听的文件描述符个数受限于FD_SETSIZE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("一般为"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v("，单纯改变进程打开的文件描述符个数并不能改变select监听文件个数\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("\t解决"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v("以下客户端时使用select是很合适的，但如果链接客户端过多，select采用的是轮询模型，会大大降低服务器响应效率，不应在select上投入更多精力\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<sys/select.h>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* According to earlier standards */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<sys/time.h>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<sys/types.h>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<unistd.h>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" nfds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fd_set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("readfds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fd_set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("writefds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\tfd_set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("exceptfds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("timeval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\tnfds"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" \t\t监控的文件描述符集里最大文件描述符加"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，因为此参数会告诉内核检测前多少个文件描述符的状态\n\treadfds：\t监控有读数据到达文件描述符集合，传入传出参数\n\twritefds：\t监控写数据到达文件描述符集合，传入传出参数\n\texceptfds：\t监控异常发生达文件描述符集合"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("如带外数据到达异常，传入传出参数\n\ttimeout：\t定时阻塞监控时间，"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("种情况\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),s._v("，永远等下去\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("设置timeval，等待固定时间\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v("设置timeval里时间均为"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("，检查描述字后立即返回，轮询\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("timeval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" tv_sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* seconds */")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" tv_usec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* microseconds */")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("FD_CLR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fd_set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//把文件描述符集合里fd清0")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("FD_ISSET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fd_set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//测试文件描述符集合里fd是否置1")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("FD_SET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fd_set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//把文件描述符集合里fd位置1")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("FD_ZERO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fd_set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//把文件描述符集合里所有位清0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//上面4个函数重要。有的函数，有点类似信号那部分的啥的？")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("select函数一调，相当于，select函数会驱使内核帮助你完成监听。\n笼统的说，那就是借助select帮我监听、、")]),s._v(" "),a("h2",{attrs:{id:"四、poll详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、poll详解"}},[s._v("#")]),s._v(" 四、poll详解")]),s._v(" "),a("p",[s._v("特点：")]),s._v(" "),a("p",[s._v("1、实际上是在select这种模型上进行的一种升级，或者说，是改版。")]),s._v(" "),a("p",[s._v("2、函数原型比select简单")]),s._v(" "),a("p",[s._v("3、超时的时间控制在毫秒级别『ms』")]),s._v(" "),a("h2",{attrs:{id:"五、epoll『linux专用』"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、epoll『linux专用』"}},[s._v("#")]),s._v(" 五、epoll『Linux专用』")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("epoll是Linux下多路复用IO接口select/poll的增强版本，它能显著提高程序在大量并发连接中只有少量活跃的情况下的系统CPU利用率，因为它会复用文件描述符集合来传递结果而不用迫使开发者每次等待事件之前都必须重新准备要被侦听的文件描述符集合，另一点原因就是获取事件的时候，它无须遍历整个被侦听的描述符集，只要遍历那些被内核IO事件异步唤醒而加入Ready队列的描述符集合就行了。"),a("br"),s._v("\n目前epell是linux大规模并发网络程序中的热门首选模型。")])]),s._v(" "),a("li",[a("p",[s._v("epoll除了提供select/poll那种IO事件的**电平触发（Level Triggered）**外，还提供了边沿触发（Edge Triggered），这就使得用户空间程序有可能缓存IO状态，减少epoll_wait/epoll_pwait的调用，提高应用程序效率。")])]),s._v(" "),a("li",[a("p",[s._v("多路IO转接服务器")])])]),s._v(" "),a("p",[s._v("要掌握epoll与前面的select和poll的区别和联系，以及，epoll的缺点。"),a("br"),s._v("\nepoll的两种模式：epoll ET 和epoll LT")]),s._v(" "),a("h3",{attrs:{id:"（1）et（edge-triggered，边沿触发）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（1）et（edge-triggered，边沿触发）"}},[s._v("#")]),s._v(" （1）ET（Edge Triggered，边沿触发）")]),s._v(" "),a("p",[s._v("​\t\t边沿触发。    event = EPOLLIN | EPOLLET")]),s._v(" "),a("h3",{attrs:{id:"（2）lt（level-triggered，电平触发-水平触发）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（2）lt（level-triggered，电平触发-水平触发）"}},[s._v("#")]),s._v(" （2）LT（Level Triggered，电平触发/水平触发）")]),s._v(" "),a("p",[s._v("​\t\t水平触发。")]),s._v(" "),a("pre",[a("code",[s._v('epoll 非阻塞IO\n\n\t边沿触发    while(read())   fcntl(O_NONBLOCK);\n\n\nepoll 反应堆模型 (libevent 核心思想实现)\n\n\tlibevent  -- 跨平台   精炼--epoll  回调   \n\n\t1. epoll --- 服务器 --- 监听 --- fd ----可读 ---- epoll返回 ---- read --- 小写转大写 --- write ---- epoll继续监听。\n\n\t2. epoll 反应堆模型： ("滑动窗口")\n\n\t1) epoll --- 服务器 --- 监听 --- cfd ---- 可读 ---- epoll返回 ---- read -- cfd从树上摘下 --- 设置监听cfd写事件， 操作 \n')])]),s._v(" "),a("h2",{attrs:{id:"六、工程概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、工程概念"}},[s._v("#")]),s._v(" 六、工程概念")]),s._v(" "),a("h3",{attrs:{id:"（1）心跳包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（1）心跳包"}},[s._v("#")]),s._v(" （1）心跳包")]),s._v(" "),a("ul",[a("li",[s._v("server/client    保持连接状态")])]),s._v(" "),a("p",[s._v("心跳检测机制\n"),a("strong",[s._v("在TCP网络通信中，经常会出现客户端和服务器之间的非正常断开，需要实时检测查询链接状态")]),s._v("。常用的解决方法就是在程序中加入心跳机制。\n"),a("strong",[s._v("Heart-Beat线程")]),s._v("\n这个是最常用的简单方法。在接收和发送数据时个人设计一个守护进程(线程)，"),a("strong",[s._v("定时发送Heart-Beat包")]),s._v("，客户端/服务器收到该小包后，立刻返回相应的包即可检测对方是否实时在线。\n该方法的好处是通用，但缺点就是会改变现有的通讯协议！大家一般都是使用业务层心跳来处理，主要是灵活可控。\nUNIX网络编程不推荐使用SO_KEEPALIVE来做心跳检测，还是在业务层以心跳包做检测比较好，也方便控制。")]),s._v(" "),a("h3",{attrs:{id:"（2）乒乓包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（2）乒乓包"}},[s._v("#")]),s._v(" （2）乒乓包")]),s._v(" "),a("p",[s._v("和心跳包类似，但是它可以携带少量的数据\n比如，微信的朋友圈红点。")])])}],!1,null,null,null);t.default=n.exports}}]);