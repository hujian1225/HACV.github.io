(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{235:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("p",[t._v("这些知识，可以说，能够串起来很多现实中的说法\n并且，这些知识"),n("font",{staticStyle:{background:"yellow"}},[t._v("加强了国内教材上未强调的知识")]),t._v("。")],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("私有地址(privateaddress)也叫专用地址（私网IP），它们"),n("font",{staticStyle:{background:"yellow"}},[t._v("不会在全球使用，只具有本地意义。")])],1),t._v(" "),t._m(2),n("img",{attrs:{alt:"",src:"https://uploadfiles.nowcoder.com/images/20171101/9430388_1509499582678_79540D335CBD37FB9AC1EC8191B91765"}}),t._v(" "),n("p",[t._v("私有IP地址范围：\nA: 10.0.0.0~10.255.255.255 即10.0.0.0/8\nB:172.16.0.0~172.31.255.255即172.16.0.0/12\nC:192.168.0.0~192.168.255.255 即192.168.0.0/16")]),t._v(" "),t._m(3),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.zhihu.com/question/302935308/answer/544123478",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎"),n("OutboundLink")],1),t._v("\n作者：架在天国的陆\n链接：https://www.zhihu.com/question/302935308/answer/544123478\n来源：知乎\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")]),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("默认情况下FTP协议使用TCP端口中的 20和21这两个端口，其中20用于传输数据，21用于传输控制。怎么不记混呢，就是0和1的区别，**0是O管道负责传输，1是把手，负责控制。 **")]),t._v(" "),t._m(5),t._m(6),t._v(" "),n("p",[t._v("单工模式：\n我打你 你不能还手  打你这个过程是发送  你抗揍这个过程是接收\n半双工模式：\n我打你  你不能还手  过一会儿 你打我 我不能还手\n全双工模式：\n俩人互殴  我俩可以同时出拳（同时发送）同时抗揍（同时接收）😊😊😊😊😊😊\n23333")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),n("p",[t._v("从上往下数")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),n("p",[t._v("实际上，要是对私网IP进一步划分的话，还分为局域网，或者叫内网。 这个的话，不需要打洞或者NAT映射机制")]),t._v(" "),t._m(14),t._v(" "),t._m(15),n("p",[t._v("IP段，我们了解\n它记录了32位源IP和32位目的IP就好了\n因为我们不用做路由器开发，\n当然如果你要做的话，那你需要了解深入。")]),t._v(" "),n("p",[t._v("TCP有序列号和确认序列号，因为他要对发送的东西，是否成功到达进行校验。所以有这2 者之分。")]),t._v(" "),n("p",[t._v("问题：\n根据IP段的那个规定，16位的总长度（字节数）65535\n但是我们的数据链路层却1500\n前者比后者大，这不冲突了吗？")]),t._v(" "),n("p",[t._v("这个时候，我们引出两个问题，\n我们的IP格式，向下是不是非得封装以太网帧？？？\n不是的\n我们上午介绍的只是，TCP/IP4层模型当中，几种典型的协议，（链路层中，典型协议——以太网帧协议）\n也就是说，你一般情况下是按照这个方式去访问。")]),t._v(" "),n("p",[t._v("如果说你所做的数据传输是比较特殊的数据传输，我可不可以换协议？？\n可以的\n比如说做网络多媒体的，3D动画。")]),t._v(" "),n("p",[t._v("所以前面的解决方案，可以吧IP的拆分成可以的。\n当然，发到那边要再组装，")]),t._v(" "),n("p",[t._v("此外，我们这样的IP很大，我们可以不适用默认的协议，（不封装以太网帧）\n我可不可以自定义协议啊？可以的\n只要我的协议能够在网络当中传输就行了，这不就可以解决这个1500\n"),n("strong",[t._v("这也从一方面说明了，我们的IP协议，不单单能够支持以太网帧协议，我们还能支持其他协议。")]),t._v(" "),n("font",{staticStyle:{background:"yellow"}},[t._v("我们不要弄得太死板这些了，不是说我们IP协议上，就只能是TCP或者UDP协议，其实还能是其他的！！！！只是我们没讲。而且我们网络层，谁说一定是IP，还可以是ICMP，IGMP啥的。还有我们链路层，谁说一定要是以太网帧协议，还可以是用户自定义的，只要我们能够保证数据能够正常传输。我遵循你双绞线，或者同轴电缆，光纤它传输的基本要求，不就可以完成传输嘛")])],1),t._v(" "),t._m(16),t._v(" "),n("p",[t._v("NAT映射机制")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),n("ul",[n("li",[t._v("实际上，对于我们大家来说，我们的网络环境当中，首先数据从网卡 出来\n数据包不是直接发送到你路由器上（先前那样画，只是为了标出重点）\n而是发送到交换机上！！！交换机给你进行IP地址的转发，发给谁？发给路由器，但是我们说，绝大多数的路由器自带交换机的功能啊！！因此我们说，路由器可以替代交换机的基本作用。")]),t._v(" "),t._m(20),t._v(" "),n("li",[t._v("概念："),n("font",{staticStyle:{background:"yellow"}},[t._v("NAT映射表记录的是你当前，连接到我们这个"),n("strong",[t._v("路由器")]),t._v("的终端的"),n("strong",[t._v("局域IP地址")]),t._v("和公网IP地址的对应关系。\n也就是说，路由器它本身所具有的IP，应该是一个公网IP（在整个网络环境当中应该是唯一的）")])],1)]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),n("p",[t._v("实际上也和你的这个路由器有一定的关系，\n因为你的数据包从你的这个计算机里面出来了，所有的行为，实际上都是由路由器控制了。")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._v(" "),n("p",[t._v("date: 2020-06-22 08:00:01")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),n("p",[t._v("（1）通俗解释1")]),t._v(" "),n("p",[t._v("三次握手，就是说三次收发消息的过程。")]),t._v(" "),t._m(34),t._v(" "),n("p",[t._v("C客户端——》S服务器")]),t._v(" "),n("p",[t._v("S收到后，可以确认：")]),t._v(" "),n("p",[t._v("S就知道")]),t._v(" "),t._m(35),t._v(" "),n("p",[t._v("C客户端《——S服务器")]),t._v(" "),n("p",[t._v("S就知道")]),t._v(" "),t._m(36),t._v(" "),n("p",[t._v("C客户端——》S服务器")]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),n("p",[n("a",{attrs:{href:"https://baijiahao.baidu.com/s?id=1654225744653405133&wfr=spider&for=pc",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("牛客：\n因为tcp是全双工模式，接收到FIN时意味将没有数据再发来，但是还是可以继续发送数据，所以断开连接时必须是四次握手")]),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),n("p",[t._v("（摘自知乎）")]),t._v(" "),n("p",[t._v("我看了一些博客和书，都会说TCP是流式传输，那么TCP传输到底因为哪些特性，能被称为流式。")]),t._v(" "),n("p",[t._v("和UDP的数据报传输比有哪些区别呢。")]),t._v(" "),n("p",[t._v("流的数据是没有边界的")]),t._v(" "),n("p",[t._v("udp每一个数据包边界划的明明白白")]),t._v(" "),n("p",[t._v("所以它不是流")]),t._v(" "),t._m(42),t._m(43),t._v(" "),n("ul",[n("li",[t._v("[美] James F.Kurose / [美] Keith W.Ross，《"),n("a",{attrs:{href:"https://book.douban.com/subject/26176870/",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算机网络-自顶向下方法"),n("OutboundLink")],1),t._v("》")]),t._v(" "),n("li",[t._v("[日]竹下隆史 / [日]村山公保 / [日]荒井透 / [日]苅田幸雄，《"),n("a",{attrs:{href:"https://book.douban.com/subject/24737674/",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解TCP/IP"),n("OutboundLink")],1),t._v("》")]),t._v(" "),n("li",[t._v("[日]上野宣，《"),n("a",{attrs:{href:"https://book.douban.com/subject/25863515/",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解HTTP"),n("OutboundLink")],1),t._v("》")]),t._v(" "),n("li",[t._v("花生壳，"),n("a",{attrs:{href:"https://hsk.oray.com/news/6783.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("内网穿透原理是什么？nat内网穿透如何实现？"),n("OutboundLink")],1)])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"『工程项目』网络基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#『工程项目』网络基础"}},[this._v("#")]),this._v(" 『工程项目』网络基础")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一、a、b、c类私有地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、a、b、c类私有地址"}},[this._v("#")]),this._v(" 一、A、B、C类私有地址")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[t._v("A类私有地址："),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("，范围是："),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v("\nB类私有地址："),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("，范围是："),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.31")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v("\nC类私有地址："),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("，范围是："),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）什么是a-b-c类地址？（zhihu）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）什么是a-b-c类地址？（zhihu）"}},[this._v("#")]),this._v(" （1）什么是a.b.c类地址？（zhihu）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("1． A类IP地址一个A类IP地址由1字节的网络地址和3字节主机地址组成，网络地址的最高位必须是“0”， 地址范围从1.0.0.0 到126.0.0.0。可用的A类网络有126个，每个网络能容纳1亿多个主机。"),s("strong",[this._v("(中国有4个A类IPv4地址)")]),this._v(" "),s("br"),this._v("\n2． B类IP地址一个B类IP地址由2个字节的网络地址和2个字节的主机地址组成，网络地址的最高位必须是“10”，地址范围从128.0.0.0到191.255.255.255。可用的B类网络有16382个，每个网络能容纳6万多个主机 。"),s("br"),this._v("\n3． C类IP地址一个C类IP地址由3字节的网络地址和1字节的主机地址组成，网络地址的最高位必须是“110”。范围从192.0.0.0到223.255.255.255。C类网络可达209万余个，每个网络能容纳254个主机。IP地址由4个字节组成(4*8=32 bit)，采用点分十进制标记法，即X.X.X.X的形式，用4个十进制数来对应表示4个字节的二进制数值，数值中间用“.”隔开。每个十进制数的取值在 0～255之间。由于A类地址中首位为0(0XXXXXXX)，所以其第1个十进制数的取值范围被限定于1～126(2的7次方128个)之间(0和 127另有指定)。同理，B类地址中第1、2位为10(10XXXXXX)，第1个十进制数的取值范围被限定于128～191(2的6次方64个)之间。 C类地址中第1、2、3位为110(110XXXXX)，第1个十进制数的取值范围被限定于192～223(2的5次方32个)之间。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("TCP  21 端口： FTP  文件传输服务\nTCP  23 端口： TELNET  终端仿真服务\nTCP  25 端口： SMTP  简单邮件传输服务\nUDP  53 端口： DNS  域名解析服务\nTCP  80 端口： HTTP  超文本传输服务\nTCP  110 端口： POP3  “邮局协议版本3”使用的端口\nTCP  443 端口： HTTPS  加密的超文本传输服务\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"二、记忆（单工-半双工-全双工）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、记忆（单工-半双工-全双工）"}},[this._v("#")]),this._v(" 二、记忆（单工-半双工-全双工）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"三、『数据』封装过程『重要』"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、『数据』封装过程『重要』"}},[this._v("#")]),this._v(" 三、『数据』封装过程『重要』")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("（消息）数据—>段—>包—>帧—>比特流\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("记忆方法：")]),t._v(" "),n("li",[t._v("TCP中是流式数据，抽刀断（"),n("strong",[t._v("段")]),t._v("）水水更流『传输层』")]),t._v(" "),n("li",[t._v("路由器在《自顶向下，计算机网络》中长得像（"),n("strong",[t._v("包")]),t._v("）子『网络层』")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("7层模型")]),t._v(" "),n("th",[t._v("名字")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("应用层，表示层，会话层")]),t._v(" "),n("td",[t._v("PDU（协议数据单元）"),n("strong",[t._v("消息（数据）")])])]),t._v(" "),n("tr",[n("td",[t._v("传输层")]),t._v(" "),n("td",[t._v("PDU"),n("strong",[t._v("段")]),t._v("（数据段）")])]),t._v(" "),n("tr",[n("td",[t._v("网络层")]),t._v(" "),n("td",[t._v("PDU"),n("strong",[t._v("包")])])]),t._v(" "),n("tr",[n("td",[t._v("链路层")]),t._v(" "),n("td",[t._v("PDU"),n("strong",[t._v("帧")])])]),t._v(" "),n("tr",[n("td",[t._v("物理层")]),t._v(" "),n("td",[t._v("PDU"),n("strong",[t._v("比特")])])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("blockquote",[n("p",[t._v("注意：")]),t._v(" "),n("p",[t._v("RFC文档中将TCP的运输层分组称为『报文"),n("strong",[t._v("段")]),t._v("』，UDP的分组称为『数据"),n("strong",[t._v("报")]),t._v("』，并且将网络层分组称为『数据"),n("strong",[t._v("报")]),t._v("』")]),t._v(" "),n("p",[t._v("《计算机网络-自顶向下方法》一书中，看到这个之后，为了避免混淆，将TCP/UDP的分组统称为『报文段』")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"四、4种网络连接『重要』"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、4种网络连接『重要』"}},[this._v("#")]),this._v(" 四、4种网络连接『重要』")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("公网-公网")]),t._v(" "),n("th",[t._v("直接访问")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("公网-私网")]),t._v(" "),n("td",[t._v("NAT映射")])]),t._v(" "),n("tr",[n("td",[t._v("私网-公网")]),t._v(" "),n("td",[t._v("NAT映射")])]),t._v(" "),n("tr",[n("td",[t._v("私网-私网")]),t._v(" "),n("td",[t._v("NAT映射、（公网的服务器）打洞机制")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("记忆方法：")]),this._v(" "),s("p",[this._v("ARP和RARP，对应短和长")]),this._v(" "),s("p",[this._v("IP和MAC，对应短和长")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("ARP是借助IP地址，请求MAC地址\t『短短长』\nRARP是借助MAC地址，请求IP地址\t『长长短』\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1、nat『映射』"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、nat『映射』"}},[this._v("#")]),this._v(" 1、NAT『映射』")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("（数据包在网络当中"),s("strong",[this._v("传递")]),this._v("里面，经常用到的一些技术名词，主要里面涉及到两个，就是上面两个）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("提出囧况："),s("br"),this._v("\n私网IP在公网不可见"),s("br"),this._v("\n比如我们『192.168.X.X』是局域网的IP，只能在局域网中用，进入到公网的IP不会是这样的IP。换言之，这样的IP在公网中是不可见的。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("在广州发信息给上海，甚至可能，\n广州，这边局域网IP是192.168.3.5\n上海目的地的局域网IP也是192.168.3.5\n这个时候，我们的数据怎么传递呢？\n看上去，源IP和目的IP是一样的。\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br"),s("span",{staticClass:"line-number"},[this._v("5")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("为什么，两者能够发送数据呢？？\n其实在我们的"),s("strong",[this._v("路由器")]),this._v("当中，除了我们提到的『路由表』之外，其实还有一个『NAT映射表』这个NAT映射表和我们的路由表组织形式差不多，都是表结构。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("所以，广州和上海，局域网IP还一样的，如何通信？？")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("做法：\n我的QQ,本地192.168.1.35 ：8000端口号\n那么到达第一个路由器（接入的）\n在『NAT映射表』中记录，把192.168.1.35：8000映射为当前路由器的IP地址和端口号\n比如\n192.168.1.35：8000映射为123.24.56.78：1000\n这样，这个数据包在向外面进行转发的时候，所有的路由器在接收到数据包的时候。\n就不认为数据包是192.168.1.35发出来的了『透明的，将私网给隐藏了』\n而是认为，源数据的源IP是123.24.56.78。然后，后续操作就和以前的差不多了。『递归』\n因此这样就实现了：虽然我的公网IP只有一个，但是我的这个公网IP可以下发出多个私有IP（局域网）\n实际上我们现在用的网络环境，不仅是这样的下发，我们还会再下发。『多层NAT映射，因为人口的增长，这样越来越多层，网络传输就会效率低，所以才大力推进IPv6』\n比如，我们自己家的路由器，实际上，你们家里面几个人『对外来说』IP只有一个，但是我们每个人的IP地址不一样。因为我们的IP地址都是私有IP地址。（注意，分清私有IP和公网IP）\n\nNAT映射表解决了，我们中国公网IP地址这么少，但是，到现在能不能访问啊？能够上网。显然，私网和公网IP通信，需要NAT映射表，公网与公网IP不需要用NAT映射表。\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2、nat『穿透』"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、nat『穿透』"}},[this._v("#")]),this._v(" 2、NAT『穿透』")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("NAT穿透，俗称“"),s("strong",[this._v("打洞机制")]),this._v('”，也称"内网穿透"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("打洞机制的由来：")]),this._v(" "),s("p",[this._v("比如QQ聊天，需要经过腾讯服务器，不能直接走。但是显然这个有缺点，聊天文字还好。\n那么，视频电话呢？怎么办，要是从腾讯服务器转一手过去，效率会很低的，因为实时性要求高。")]),this._v(" "),s("p",[this._v("打洞：主要是为了提高，数据传输的效率。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("『路由器默认的保护机制』：陌生的IP，第一次给我发送数据包，我会把这个数据包屏蔽掉，或者说，丢弃掉，主要是为了防止网络环境的恶意攻击。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("解决方法")]),this._v("：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("要想要视频通话的A和B正常通信。\n必须，A和B对于这些路由器是熟悉的才行。\n这个时候，我们需要在这些普通的路由器直接打个洞。（像老鼠掏洞一样）\n因为，原来走法是，要绕道腾讯服务器，现在的走法是直接在其他的路由器直接，掏个洞，钻过去。\n\n但是为了防止路由器，屏蔽陌生IP的话，这个时候，腾讯就参与进来了。因为，我们知道我们的QQ在登录的时候，会访问腾讯的服务器，这样，腾讯和A之间，还有腾讯和B直接的路由器就对这些IP不陌生了。\n现在腾讯服务器做了一件事：打洞。\n腾讯公网的服务器，来帮助我们。两台私有IP之间完成打洞。\n当他把洞打好之后（所以，到达咋样打洞的，俺还是不晓得，），达到的效果就是，A和B直接可以实时通信了。所以，打洞是通过腾讯的公网的服务器来做的！\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("所以说，我们要想打洞的话，势必要借助一个公网IP。")]),this._v("\n腾讯发现A和B要发起视频聊天，所以腾讯就不给他们转发数据了，那样太慢了，")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("打洞机制是谁来完成的？是服务器（公网方服务器）")])]),this._v(" "),s("li",[s("p",[this._v("当然，私网中的局域网的话，就不需要NAT映射和打洞机制。和公网和公网，类似，可以直接访问！")])]),this._v(" "),s("li",[s("p",[this._v("这也解释了，为什么，两个在局域网设置IP，不能一样，因为一样的话，就会显示冲突了。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"五、tcp3次握手和4次挥手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、tcp3次握手和4次挥手"}},[this._v("#")]),this._v(" 五、TCP3次握手和4次挥手")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("希望用专业术语说，虽然打比方能够讲清楚")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）连接时候为什么需要三次握手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）连接时候为什么需要三次握手"}},[this._v("#")]),this._v(" （1）连接时候为什么需要三次握手")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("一个完整的TCP连接，他有一个标准就是说：通讯的双方，都能确认双方是能够正常收发的！"),s("strong",[this._v("（注意，收和发）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("[x] C能正常发（确认）")]),this._v(" "),s("li",[this._v("[ ] C能正常收")]),this._v(" "),s("li",[this._v("[ ] S能正常发")]),this._v(" "),s("li",[this._v("[x] S能正常收（确认）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("[x] C能正常发（确认）")]),this._v(" "),s("li",[this._v("[x] C能正常收（确认）")]),this._v(" "),s("li",[this._v("[x] S能正常发（确认）")]),this._v(" "),s("li",[this._v("[x] S能正常收（确认）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("[x] C能正常发")]),this._v(" "),s("li",[this._v("[x] C能正常收（确定）")]),this._v(" "),s("li",[this._v("[x] S能正常发（确定）")]),this._v(" "),s("li",[this._v("[x] S能正常收")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）为什么断开的时候需要四次挥手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）为什么断开的时候需要四次挥手"}},[this._v("#")]),this._v(" （2）为什么断开的时候需要四次挥手")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("百度：\nhttps://baike.baidu.com/item/tcp%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B/7922126?fr=aladdin\n讲得很好：\n这是因为服务端的LISTEN状态下的SOCKET当收到SYN报文的建连请求后，它"),s("strong",[this._v("可以把ACK和SYN（ACK起应答作用，而SYN起同步作用）放在一个报文里来发送")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("但关闭连接时，当收到对方的FIN报文通知时，它仅仅表示对方没有数据发送给你了；但"),s("strong",[this._v("未必你所有的数据都全部发送给对方了")]),this._v("，所以你可以"),s("strong",[this._v("未必会马上会关闭SOCKET")]),this._v(",也即你可能还需要发送一些数据给对方之后，再发送FIN报文给对方来表示你同意可以关闭连接了，"),s("strong",[this._v("所以它这里的ACK报文和FIN报文多数情况下都是分开发送的")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（3）如何理解tcp流式传输"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（3）如何理解tcp流式传输"}},[this._v("#")]),this._v(" （3）如何理解TCP流式传输?")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("假设你是udp服务器\n我想发三段数据给你 按顺序发\n分别是\nabc\nbbbbbb\nqqqq\n你收到的是三个包 然后告诉我 分别是\nabc\nbbbbbb\nqqqq\n好了现在用tcp\n你收到了abcbbbbbbqqqq\n那么你告诉我\n我发的三段数据是什么？\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);s.default=a.exports}}]);