/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "01.Math/index.html",
    "revision": "f069969ea5ef3af2cc891fd2ecf75943"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/02.LinkListANDTree/01.链表专题.html",
    "revision": "cd75e174627e693e6f97d4ce34ff1eb0"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/02.LinkListANDTree/02.树专题.html",
    "revision": "58d6b0c9107346ec33813ec4b0a1a7da"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/03.STL/00.STL概览.html",
    "revision": "ee3ac7a1765b78566fca7ab867745e17"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/03.STL/01.STL容器记忆.html",
    "revision": "ce8371c6da622223f83810c9c25607cc"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/03.STL/02.STL常用算法积累.html",
    "revision": "ee7b247cc1c740004160524a6f3577ed"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/03.STL/03.字符串专题详解.html",
    "revision": "b13ffd6f18c8be08eafacd04277e26d3"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/03.STL/04.C++中string源码剖析.html",
    "revision": "b66fc259c10ae44358a5c21a1e5a3bc3"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part00.Challenge.html",
    "revision": "2bec688075327e3ac8929bf73d7673af"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part00.OJ.html",
    "revision": "55a9bcd9890f6bf2bd6ef9b9b708bd20"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part02.Dp.html",
    "revision": "aa3deccc8ab6cc7cbaad3b6bebd05a16"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part04.StringMatching.html",
    "revision": "97d7bda5a15bd127675bc638db52cb72"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part05.ICPC.html",
    "revision": "f9c0072d111b758890da2b5323ea6fc0"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/____链表和树和图刷题经验.html",
    "revision": "452747282537d662348591409e76fcad"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/——设计数据结构/2020-11-14-TrieTree.html",
    "revision": "aa1a2e9b3ed5ed68da6c886fa1b519be"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/——设计数据结构/2020-11-16-LRU.html",
    "revision": "b640ca56d6b8bf761012a9b4a340f6e3"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/——设计数据结构/2020-12-17-SkipList.html",
    "revision": "2fb75057fe67682562c709e75797ba63"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/——设计数据结构/index.html",
    "revision": "e9abd743bc1073bab566c34bf6e3a6ab"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/——设计数据结构/LRU缓存结构.html",
    "revision": "61fbcbbe0e84b7c112295611a6d2aec2"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/——设计数据结构/设计跳表.html",
    "revision": "7b43ad13eae76505df41687431e13a41"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/11.CCF第3题对症下药_精简代码 (1).html",
    "revision": "6b4d31ea87ed8664944601319af1c900"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/12.CCF第4题对症下药_图论.html",
    "revision": "189196c5b82012e700a754636aa1e897"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/01.排序算法复杂度记忆.html",
    "revision": "92d15b27802de1eb31cd8fe0fbf95d82"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/02.九大排序模板.html",
    "revision": "a30774673a47c520864d93d004883e0c"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/03.LinearSort.html",
    "revision": "b9de535338320344ef4725646192a95d"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/09.二分查找.html",
    "revision": "d872c1f71d7ba7e2a3a20d325a451e2e"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/排序和查找.html",
    "revision": "ba9b7bc2439ade59b6768035499c66e1"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/数组-两数之和.html",
    "revision": "f427d7c9de52b0edeb23fd4ed9c33981"
  },
  {
    "url": "02.DataStructureAndAlgorithm/02.Skills/01.双指针专题.html",
    "revision": "bd1a2ecc80c64e705b3986d8caada960"
  },
  {
    "url": "02.DataStructureAndAlgorithm/02.Skills/02.递归专题.html",
    "revision": "e475ced109746e6535f21cbb3d6846a9"
  },
  {
    "url": "02.DataStructureAndAlgorithm/03.SupplyBox/algorithm/01.Manacher.html",
    "revision": "5114f2b3354ac1f5de9f55a2d5ee6ad9"
  },
  {
    "url": "02.DataStructureAndAlgorithm/03.SupplyBox/DataStructure/01.位运算.html",
    "revision": "34032c0c75e9e1ba88ed1d349c32d5ff"
  },
  {
    "url": "02.DataStructureAndAlgorithm/03.SupplyBox/DataStructure/04.并查集.html",
    "revision": "1579ed2aaf3e5a19017ca2304c58595f"
  },
  {
    "url": "02.DataStructureAndAlgorithm/04.math/01.Prime_sieve_algorithm.html",
    "revision": "a8c9d6d10e8c7ff0ea60751f953d9903"
  },
  {
    "url": "02.DataStructureAndAlgorithm/05.DFS_BFS/01.图论DFS和BFS模板.html",
    "revision": "ea180c5f9a1a13292bc9781e145fb6f6"
  },
  {
    "url": "02.DataStructureAndAlgorithm/06.ICPC/01.BinaryIndexedTree.html",
    "revision": "98fca279f0ec6153714a428f98d9a9cd"
  },
  {
    "url": "02.DataStructureAndAlgorithm/06.ICPC/02.SegmentTree.html",
    "revision": "ea0939ca4f0db938c5a949786a1114bc"
  },
  {
    "url": "02.DataStructureAndAlgorithm/06.ICPC/03.ChairmanTree.html",
    "revision": "4595e4ed194bd167a75ceec0c0382e85"
  },
  {
    "url": "02.DataStructureAndAlgorithm/index.html",
    "revision": "dd727b119da8e2231bf07e3fdbb428f8"
  },
  {
    "url": "03.OS/index.html",
    "revision": "54571e8a0a04ae1abd9bb177ee532615"
  },
  {
    "url": "03.OS/Linux/01.MyDebian.html",
    "revision": "3716c09d672ec8debd5b48a583411c0e"
  },
  {
    "url": "03.OS/Linux/02.MyRedhat.html",
    "revision": "cca0d813117846dbe9c9f873da66240b"
  },
  {
    "url": "03.OS/Linux/03.Linux_Vim.html",
    "revision": "adbef4ad9cb209334047dee5cf2a42e2"
  },
  {
    "url": "03.OS/Linux/04.LinuxCommand.html",
    "revision": "8308b613b4914dedfa8aff40be191eeb"
  },
  {
    "url": "03.OS/Linux/05.kaliLinux.html",
    "revision": "f27a610bc6d3c9d0ef8b98312221a289"
  },
  {
    "url": "03.OS/Linux/05.Linux资源库.html",
    "revision": "e3298009ac8c2efed7ced2a013b554c7"
  },
  {
    "url": "03.OS/Linux/06.LinuxNote.html",
    "revision": "ff146635c227ec03c4bba7d25c62346f"
  },
  {
    "url": "03.OS/Linux/07.Linux网络诊断.html",
    "revision": "1f0e64395ab3309368cd09292dc4525a"
  },
  {
    "url": "03.OS/OSBasic/01.POSIX.html",
    "revision": "22e9e8b60ac7ab34b80fc261b67260d6"
  },
  {
    "url": "03.OS/OSBasic/02.Unix和Linux开发路线.html",
    "revision": "86ff1a94d9efac8239b4012c1c0e8586"
  },
  {
    "url": "03.OS/OSBasic/03.OS概念辨析.html",
    "revision": "c3aab2cba3ae68176d1f2f52b5fca235"
  },
  {
    "url": "03.OS/OSBasic/04.Linux系统编程.html",
    "revision": "b0f145bfd14027a60b90ebc2c9d28bc0"
  },
  {
    "url": "03.OS/OSBasic/05.进程间通信.html",
    "revision": "d6d35089e924c0020a62120c55cd034c"
  },
  {
    "url": "03.OS/OSBasic/06.线程编程.html",
    "revision": "92ea6003f5f3b48d0220e03da25d5eea"
  },
  {
    "url": "03.OS/OSBasic/OS实验.html",
    "revision": "541cfd13a31bcefda137432892322719"
  },
  {
    "url": "03.OS/Windows/00.EnvironmentVariable.html",
    "revision": "1691e3dbc0976fd7b0dd205863d7394c"
  },
  {
    "url": "03.OS/Windows/01.ToolSoftwareShortcut.html",
    "revision": "5599941513d69a0384639eab1c6834ce"
  },
  {
    "url": "03.OS/Windows/02.RunCommand.html",
    "revision": "6d3f76aa2ad64749aa90c0d25fffa6e9"
  },
  {
    "url": "03.OS/Windows/03.GlobalShortcut.html",
    "revision": "fbd16cdc41aba94f89186fc895d4e061"
  },
  {
    "url": "03.OS/Windows/04.WindowsLinuxDirectory.html",
    "revision": "e61562f8add6d9270c735d89cf47b2bc"
  },
  {
    "url": "03.OS/Windows/05.DistinguishVB_A_S.html",
    "revision": "919ab3b7ffafa9a13e462296bc4c25f6"
  },
  {
    "url": "03.OS/Windows/06.OtherShortcut.html",
    "revision": "0fed2145209c2a9b4198966825598064"
  },
  {
    "url": "03.OS/Windows/07.WindowsRegistry.html",
    "revision": "01fea0d5079e6b3e45d22d4e87cd07b8"
  },
  {
    "url": "03.OS/Windows/08.Windows10电脑经验.html",
    "revision": "347bb5afdcb3d020e6f42e4eb808111c"
  },
  {
    "url": "04.Net/Analyse/01.LinuxAndWindows.html",
    "revision": "94055643a779270135a5ba61744a8b7b"
  },
  {
    "url": "04.Net/Analyse/02.wireshark基础.html",
    "revision": "e6a58e74577bc615270c5c59e24db55a"
  },
  {
    "url": "04.Net/Analyse/03.网络模拟实验环境软件.html",
    "revision": "4c0fd3e6e67a5fbf9760148be729cf0e"
  },
  {
    "url": "04.Net/Basis/01.TCPIP.html",
    "revision": "6fa33d4896398baa685896c5f4b1fd99"
  },
  {
    "url": "04.Net/Basis/02.NetBasis.html",
    "revision": "903646e2eae4c54b9684a5f6e1d20958"
  },
  {
    "url": "04.Net/Basis/03.TCP.html",
    "revision": "d9774378af2a04b4ee73da47e891b642"
  },
  {
    "url": "04.Net/Basis/05.FAQ.html",
    "revision": "8cc7c17af6d7becb7afcda8e88547ee4"
  },
  {
    "url": "04.Net/index.html",
    "revision": "5531b6086d30aaf014120a68873cb253"
  },
  {
    "url": "04.Net/Server/Part01.多进程和多线程服务器.html",
    "revision": "5d8b496e20263ae2232bab58b068e5c4"
  },
  {
    "url": "04.Net/Server/Part02.Unix和Linux下IO多路复用服务器.html",
    "revision": "1e2c22cb00007f93cabbe5f66d5e6cbc"
  },
  {
    "url": "05.SE/DesignPatterns/01.DesignPatterns.html",
    "revision": "c46ddcbd0ac967257192a7bed15bcd21"
  },
  {
    "url": "05.SE/DesignPatterns/02.Singelton.html",
    "revision": "f5b5284a01ef6f7e927f5ee59a1acd06"
  },
  {
    "url": "05.SE/index.html",
    "revision": "1aaf3d2bb890cddff9cc274587b7312b"
  },
  {
    "url": "05.SE/UML/01.UML.html",
    "revision": "96b8e52ff5f8202934a36681a3d8c4db"
  },
  {
    "url": "05.SE/UML/02.UML.html",
    "revision": "604626cd20bcd96fc09f891501e4eaf4"
  },
  {
    "url": "06.SQL/01.SQL/01.SQL语法.html",
    "revision": "c279c6c879eb54ca44269ce4e5617b37"
  },
  {
    "url": "06.SQL/01.SQL/02.SQL解决方案资料.html",
    "revision": "47ca4ea3a3a17186dcec1f429317a212"
  },
  {
    "url": "06.SQL/02.DataBase/03.红黑树.html",
    "revision": "0eec0fc5271527fa0a42e51b04ff2f8e"
  },
  {
    "url": "06.SQL/04.Redis/01.Redis.html",
    "revision": "217d0247d7bacd5d4de0844c15a26110"
  },
  {
    "url": "06.SQL/index.html",
    "revision": "28627fed14c0709ecc0f2bfc5d08be0f"
  },
  {
    "url": "07.InternalSkill/Assembly/00.AssemblyTools.html",
    "revision": "e7b2936c14b01ea667679bbc69821f4e"
  },
  {
    "url": "07.InternalSkill/Assembly/01.AssemblyReadingSkills.html",
    "revision": "91a570fb05d6b7ac1942e6c6ad56e802"
  },
  {
    "url": "07.InternalSkill/Assembly/02.ASCII.html",
    "revision": "57a06e406909f02ed3a60abff7b7c398"
  },
  {
    "url": "07.InternalSkill/Assembly/03.AT_T汇编与INTEL汇编.html",
    "revision": "5917ffd0836573b4de12073e93a203ea"
  },
  {
    "url": "07.InternalSkill/Assembly/04.X86_Register.html",
    "revision": "1872f4b2aba16eadbb4652cc138a1036"
  },
  {
    "url": "07.InternalSkill/Assembly/05.NASM的AT_T汇编.html",
    "revision": "7c2d52009025833ccfc756197c009117"
  },
  {
    "url": "07.InternalSkill/Assembly/06.汇编手动加栈.html",
    "revision": "bb53cfa51dadb03593970df930fa548e"
  },
  {
    "url": "07.InternalSkill/Hardware/01.各大电脑厂商进入BIOS.html",
    "revision": "fe71c629b09c49bb4d2281fef676606d"
  },
  {
    "url": "07.InternalSkill/Hardware/2020-06-25-Underlying-coding.html",
    "revision": "41ccb6bb667ccdb03f35d4b7c53ff917"
  },
  {
    "url": "07.InternalSkill/Hardware/2020-06-26-Displacement.html",
    "revision": "059749d74ed527041a7a7f522493581f"
  },
  {
    "url": "07.InternalSkill/index.html",
    "revision": "390e91c704fa2743fd5758a2c4a60603"
  },
  {
    "url": "07.InternalSkill/PrinciplesOfCompilation/01.内存对齐.html",
    "revision": "e4988fe0955fb92f155c3834c3522608"
  },
  {
    "url": "07.InternalSkill/PrinciplesOfCompilation/02.BigEndianLittleEndian.html",
    "revision": "a94d59abbd7454bc5303a83d4734195c"
  },
  {
    "url": "07.InternalSkill/PrinciplesOfCompilation/Part01.RPC.html",
    "revision": "00297e4462f87541b99c7ac196eadf2b"
  },
  {
    "url": "07.InternalSkill/PrinciplesOfCompilation/Part02.GCC.html",
    "revision": "f4827bfd7c9a3d84f37152a22e100b62"
  },
  {
    "url": "08.Tools/book/00.书单和思考.html",
    "revision": "ae582245fe7abf9462ca72499da4a3e0"
  },
  {
    "url": "08.Tools/employment/01.IT类公司传送门.html",
    "revision": "ed4ac5a86ea5a460b398c1591aa1b57b"
  },
  {
    "url": "08.Tools/employment/02.公司福利.html",
    "revision": "c4b26b41a3bedcf4d3fbc659484353fe"
  },
  {
    "url": "08.Tools/employment/03.IT技术岗位求职流程和术语.html",
    "revision": "1fda707ae16d3fe8028349e95ff8808a"
  },
  {
    "url": "08.Tools/employment/04.FAQ.html",
    "revision": "b8ffeef4e804acc781c6129d79f92824"
  },
  {
    "url": "08.Tools/index.html",
    "revision": "a14b7704052f2a7234f8457e03c472f8"
  },
  {
    "url": "08.Tools/ToolSoftware/01.Markdown.html",
    "revision": "e33cc2696acb85e0fa15c51e5a8009c9"
  },
  {
    "url": "08.Tools/ToolSoftware/02.Git.html",
    "revision": "2b2cd806c6875a1716c8efe041870141"
  },
  {
    "url": "08.Tools/ToolSoftware/03.gdb和makefile.html",
    "revision": "41ba490b794861311e3c9785ef37a230"
  },
  {
    "url": "08.Tools/ToolSoftware/04.Xmind.html",
    "revision": "7a0c08688ed2dda4d5957fef813528ef"
  },
  {
    "url": "09.Language/00.GeneralEducation/00.编程的其他通识知识.html",
    "revision": "d44527e0cec85bdf2ff33472b7a0ed37"
  },
  {
    "url": "09.Language/00.GeneralEducation/01.TheRulesOfVariableName.html",
    "revision": "84b8a7ea3f7f32a1df3a9ad06356843c"
  },
  {
    "url": "09.Language/00.GeneralEducation/09.ICPC模板收集和思考.html",
    "revision": "be4004cfc8723416f28c1cb10258a679"
  },
  {
    "url": "09.Language/01.core/01.C语言指针详解.html",
    "revision": "611e40cc75c6d10c3dfc3d79039f52fc"
  },
  {
    "url": "09.Language/01.core/01.内存管理.html",
    "revision": "071f7554ab71e5f9d787fa700459b958"
  },
  {
    "url": "09.Language/01.core/02.C_priority_and_associative_memory.html",
    "revision": "31db385f138bc059a59e86753f72c96c"
  },
  {
    "url": "09.Language/01.core/03.C语言内嵌汇编.html",
    "revision": "b521a5c605e89f584e7e31a9ae05a5a0"
  },
  {
    "url": "09.Language/01.core/04.深浅拷贝.html",
    "revision": "d65959d08f53c07cdaf69dbb96a7d789"
  },
  {
    "url": "09.Language/01.core/05.ValueAddressReference.html",
    "revision": "aff17672155fe35abf9131016c81296a"
  },
  {
    "url": "09.Language/01.core/06.C++变量的各种属性.html",
    "revision": "92003dee471e04ea1be64907419ec4bf"
  },
  {
    "url": "09.Language/01.core/07.声明和定义和接口和实现.html",
    "revision": "f70eafdef044831f07cb55137e435ee1"
  },
  {
    "url": "09.Language/01.core/2020-12-15-CandPointer.html",
    "revision": "21498c147ea8ae2deec01396da7adf56"
  },
  {
    "url": "09.Language/01.core/2020-12-25-constant.html",
    "revision": "38f735274551472b6feffcacca54ba7a"
  },
  {
    "url": "09.Language/01.core/C++核心/01.C和C++优先级详解.html",
    "revision": "95458128476e0874c004f424f816b06b"
  },
  {
    "url": "09.Language/01.core/contrast/01.C和C++中变量对比.html",
    "revision": "8fdfdd40eb201ab6913f2db6dfbb5c32"
  },
  {
    "url": "09.Language/02.function/01.sscanfANDsprintf.html",
    "revision": "2d281ac66d94ee711bd929bbecb021b5"
  },
  {
    "url": "09.Language/02.function/02.memset_fill.html",
    "revision": "30dae173c0e2b8b4e44674ec407aa1c6"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/01.命名空间.html",
    "revision": "3bce17f95cd06e3fbb7cc512ffc481c6"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/02.static成员.html",
    "revision": "1ce05a519e17fa00379af28119d8b984"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/03.到底什么是成员函数.html",
    "revision": "55bd4f5f79811331312faec83ea9de4d"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/04.C语言中的流和缓冲器的概念.html",
    "revision": "aaf986203f1df9991eecbe3d937c7857"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/C++中变量和函数.html",
    "revision": "72316b8b19e553ecbfaec191f0813f4c"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/C++对C的加强namespace.html",
    "revision": "074bfa36bd33f973e1217b1687124466"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/C++概念辨析详解.html",
    "revision": "503c170da5ee134f473bdf9575356e8c"
  },
  {
    "url": "09.Language/04.history/01.面向对象难点.html",
    "revision": "e4423fcbcf6bf770a6b7624efdbf7a65"
  },
  {
    "url": "09.Language/04.history/02.C++多态详解.html",
    "revision": "0d9414aa6ca13d119c81f3c44271d56c"
  },
  {
    "url": "09.Language/04.history/03.C++重载详解.html",
    "revision": "18de6e68bb898f19f440943564e224b3"
  },
  {
    "url": "09.Language/04.history/C++extension/01.C++中的const.html",
    "revision": "7f4b3e907df73fc55aecc48b982b97fb"
  },
  {
    "url": "09.Language/04.history/LanguangeC/00.C语言标准发展历程.html",
    "revision": "2142ab77122436d003e8f6861f1bebd8"
  },
  {
    "url": "09.Language/04.history/LanguangeC/002.柔性数组.html",
    "revision": "265f5c87fbd67014c394631fb304e442"
  },
  {
    "url": "09.Language/04.history/LanguangeC/01.C语言数组不完全初始化.html",
    "revision": "da190823cd589686f9313c935017bb7d"
  },
  {
    "url": "09.Language/04.history/LanguangeC/03.C语言没有数组下届检查.html",
    "revision": "fa1f99ed8cbf1a90a82621bee80f9aff"
  },
  {
    "url": "09.Language/04.history/LanguangeC/03.联合体.html",
    "revision": "4f383aca8777436c440ae86e66dbc733"
  },
  {
    "url": "09.Language/04.history/LanguangeC/04.位段.html",
    "revision": "d214cb34d22b1d817dea9c4a50255b5b"
  },
  {
    "url": "09.Language/04.history/LanguangeC/05.const在C语言中.html",
    "revision": "b6ef0edae2d408804b561ad53ce9e7a6"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-07-29-Const-Define.html",
    "revision": "43ce102afad4cfc1879f857ae9e901f3"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-12-25-constant.html",
    "revision": "108980d3ad4f30ff9c7386d0568d2bcd"
  },
  {
    "url": "09.Language/index.html",
    "revision": "ae5c9edc84a233b6fa837ba50a2b5ea0"
  },
  {
    "url": "404.html",
    "revision": "6b4d31ea87ed8664944601319af1c900"
  },
  {
    "url": "assets/css/0.styles.8eb0d87d.css",
    "revision": "4128d7f240c09e8131493c3b9d34a224"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8bbeb718.js",
    "revision": "2fb301de3a7b085ba631177eda0e1411"
  },
  {
    "url": "assets/js/100.c96aff95.js",
    "revision": "7c1d72c31e2f91e62b70cc186df58d5b"
  },
  {
    "url": "assets/js/101.bc9e10c9.js",
    "revision": "e34aa9fc0bd39544038b687931f6565d"
  },
  {
    "url": "assets/js/102.3636c93e.js",
    "revision": "bb042b23b7f337c71b86870b949e7ef1"
  },
  {
    "url": "assets/js/103.ebb552c8.js",
    "revision": "8a7e2b01b976760257d8ae42837a036a"
  },
  {
    "url": "assets/js/104.de6df6ef.js",
    "revision": "0cb8b226195a223cc01eaef62695c459"
  },
  {
    "url": "assets/js/105.f2d683b1.js",
    "revision": "a628fb9b430f26b5d8f6d64286fbd334"
  },
  {
    "url": "assets/js/106.8eb3db39.js",
    "revision": "2add0e0fee5d98efeb644802b79c7fd0"
  },
  {
    "url": "assets/js/107.49dc49da.js",
    "revision": "b40c59818461d848730921b990c728f3"
  },
  {
    "url": "assets/js/108.d63b4160.js",
    "revision": "9467b548e5b3181722fffff5c396d09a"
  },
  {
    "url": "assets/js/109.93095842.js",
    "revision": "9e45811c021507c22a0799664d9b2cb4"
  },
  {
    "url": "assets/js/11.390e9c09.js",
    "revision": "b4307833dc20b6817ca3b3596dd79ea3"
  },
  {
    "url": "assets/js/110.6d2bea73.js",
    "revision": "074432441f63c223c64d8dbb3b6ca9b2"
  },
  {
    "url": "assets/js/111.cb3ece3c.js",
    "revision": "67f0ac2a56736a5ec520dc0290f03c01"
  },
  {
    "url": "assets/js/112.13ea0445.js",
    "revision": "f5c546db18f223ec0734b2b8e5ac7b5e"
  },
  {
    "url": "assets/js/113.653e72c4.js",
    "revision": "c3e14d010c26972658b75023d92b8c58"
  },
  {
    "url": "assets/js/114.7957bb00.js",
    "revision": "700dc82882a08a7187b1c9ac19a884bf"
  },
  {
    "url": "assets/js/115.67b56752.js",
    "revision": "19042d89f0c51cb1d46d782bf1a235cd"
  },
  {
    "url": "assets/js/116.f347da22.js",
    "revision": "3126a00269837184adb02224bffbd734"
  },
  {
    "url": "assets/js/117.f7dd83cf.js",
    "revision": "d5705764aeba1875288f542b3ae87389"
  },
  {
    "url": "assets/js/118.6e542651.js",
    "revision": "bd695722832bf5551352df17878c22bb"
  },
  {
    "url": "assets/js/119.83b137bb.js",
    "revision": "0af66e27aff0e61e69de60a445e4e7c9"
  },
  {
    "url": "assets/js/12.47752e11.js",
    "revision": "8908cb11413ff07f46af3493a3bda492"
  },
  {
    "url": "assets/js/120.1d2235c1.js",
    "revision": "043811f30f1673c3ae5df1c6445d1e83"
  },
  {
    "url": "assets/js/121.30ad36ce.js",
    "revision": "56a782c80bf83cf0e501bd860a56e35d"
  },
  {
    "url": "assets/js/122.0d5e845e.js",
    "revision": "09689c5dce0ab340ce265fcbc8d81f4d"
  },
  {
    "url": "assets/js/123.bc5c8b91.js",
    "revision": "a217f1e6b63b89a10b3d504a80176370"
  },
  {
    "url": "assets/js/124.8fe80f17.js",
    "revision": "ef9c92b723d81625872c0b8bdb688cd9"
  },
  {
    "url": "assets/js/125.177547d3.js",
    "revision": "4d44dbaf7d368fe70dd76aa6a11de785"
  },
  {
    "url": "assets/js/126.0d26664c.js",
    "revision": "f7c1f906499cb1dfcd860c3623e3492d"
  },
  {
    "url": "assets/js/127.8fc97e3a.js",
    "revision": "415b7cd853dba180b7707e25dde94097"
  },
  {
    "url": "assets/js/128.2ac1147f.js",
    "revision": "e2f0f5cf951ec31077d90198fcc9b1bb"
  },
  {
    "url": "assets/js/129.93168aba.js",
    "revision": "9d70c528bb09c396c43dbcddd83e3595"
  },
  {
    "url": "assets/js/13.9ab56618.js",
    "revision": "25686229c1380ba1c7baf794093ec481"
  },
  {
    "url": "assets/js/130.15221f81.js",
    "revision": "7c58c144a6006400f726eb15aed04c3c"
  },
  {
    "url": "assets/js/131.e3dcd54e.js",
    "revision": "c44bd2d32fc5d53773a38c7a4f638f53"
  },
  {
    "url": "assets/js/132.17885bdf.js",
    "revision": "4cda976e3512bc7fea6b9f17cb83e14b"
  },
  {
    "url": "assets/js/133.3ba60fd9.js",
    "revision": "ef62cb8ec7bdb932ae0c375110681394"
  },
  {
    "url": "assets/js/134.e4f4af12.js",
    "revision": "0affad83ed2d5e394d4e7425debcd4f0"
  },
  {
    "url": "assets/js/135.2e124765.js",
    "revision": "14c44625abb0df0e23fb9fd81ced7399"
  },
  {
    "url": "assets/js/136.0ebdd155.js",
    "revision": "42120fa6e45b36312d9b6ba583c75c65"
  },
  {
    "url": "assets/js/137.321b7f10.js",
    "revision": "3b28191b91865f83eeae9820abcff6d3"
  },
  {
    "url": "assets/js/138.6fbd28f0.js",
    "revision": "dff16189f311066371562a5c2725f58a"
  },
  {
    "url": "assets/js/139.d6099530.js",
    "revision": "7fa1e264583ebc307ddc76932d33ef3b"
  },
  {
    "url": "assets/js/14.62a5eff5.js",
    "revision": "69f9f62f02bd8a756bc68d7744e9eafc"
  },
  {
    "url": "assets/js/140.04106881.js",
    "revision": "7d3b6f26b25d066d8893e14ede0f5569"
  },
  {
    "url": "assets/js/141.311cae5b.js",
    "revision": "2fe270063f2db849d9a510f40bd29ab6"
  },
  {
    "url": "assets/js/142.196a6e11.js",
    "revision": "509e79f88d510a79011b76fb7a367c32"
  },
  {
    "url": "assets/js/143.9310e9db.js",
    "revision": "26834832812d1536b2470e99ecd66df0"
  },
  {
    "url": "assets/js/144.d648a45c.js",
    "revision": "0ed32686c48a6a7e5bb9d1ed8ee877e3"
  },
  {
    "url": "assets/js/145.d32f32ea.js",
    "revision": "97d8b9ccb5c98a88ceeb9864e02ddbe2"
  },
  {
    "url": "assets/js/146.140dabbb.js",
    "revision": "bb041cb61482bd7b429a8fc0c8407c39"
  },
  {
    "url": "assets/js/147.83a109af.js",
    "revision": "27d04a6541a63795382214d358d7a6f3"
  },
  {
    "url": "assets/js/148.01c0ba2f.js",
    "revision": "8f4532e2c425088250a25973a7b2eaf0"
  },
  {
    "url": "assets/js/149.2981239a.js",
    "revision": "10484cedec814870ea6809c0042cc44b"
  },
  {
    "url": "assets/js/15.7d2d48ae.js",
    "revision": "dc03d0433d6a28669ddb97ac7175a793"
  },
  {
    "url": "assets/js/150.6bd6bd49.js",
    "revision": "a269d335f7fa45264a1d1b77c9c20ea5"
  },
  {
    "url": "assets/js/151.5b65f44b.js",
    "revision": "3e93beaeeea115ed8a47e9932d57cc78"
  },
  {
    "url": "assets/js/152.4e584419.js",
    "revision": "51cc5f37e9febd103e49ccbac30f8b14"
  },
  {
    "url": "assets/js/16.8786bc8f.js",
    "revision": "c14bfd05888b8092fad939ce4836ecb1"
  },
  {
    "url": "assets/js/17.5312e725.js",
    "revision": "1b9b93daa432b1111f3c071db4a35d57"
  },
  {
    "url": "assets/js/18.0627885a.js",
    "revision": "0aac3feb832fa7ab2f7ef1863a20bd62"
  },
  {
    "url": "assets/js/19.110980f3.js",
    "revision": "4c1c9da971bf33cfa7b67affa287c66a"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/20.fada5d94.js",
    "revision": "961a9360ac2e5c10781a82da9213867c"
  },
  {
    "url": "assets/js/21.fef9831b.js",
    "revision": "a4472659b467fe991450a435eeeefa34"
  },
  {
    "url": "assets/js/22.312e3a38.js",
    "revision": "e28ff8e3d0a40280f44627d237b18241"
  },
  {
    "url": "assets/js/23.33f46c53.js",
    "revision": "a00565e4c093f40cdeb378f218332a7e"
  },
  {
    "url": "assets/js/24.00a66de9.js",
    "revision": "4f50a63426883fdfd9b645361b2ad56c"
  },
  {
    "url": "assets/js/25.2f188985.js",
    "revision": "6a6468e480f93d34a207b451418c5c79"
  },
  {
    "url": "assets/js/26.68654ac5.js",
    "revision": "23c06a5a71cfa1d64556315899f9c72a"
  },
  {
    "url": "assets/js/27.6cab9932.js",
    "revision": "c90754c45128a1730334594b599dd24b"
  },
  {
    "url": "assets/js/28.754b96e8.js",
    "revision": "f826ea2d5659cca7534acb16adb225ef"
  },
  {
    "url": "assets/js/29.d1ed41d5.js",
    "revision": "b7583f91f1c772084dc185cc213b01af"
  },
  {
    "url": "assets/js/3.53ecd128.js",
    "revision": "011c06d38edf659e8dd7c206c8cd4c45"
  },
  {
    "url": "assets/js/30.056a1a2e.js",
    "revision": "e57bdc4ef78f8fe74df8c1dc69710b19"
  },
  {
    "url": "assets/js/31.274d0f03.js",
    "revision": "83754c4dd674a847968840466a36aaf3"
  },
  {
    "url": "assets/js/32.d1ec2cf6.js",
    "revision": "e17a42d2ad8f556bcc258ce03a218a20"
  },
  {
    "url": "assets/js/33.94432764.js",
    "revision": "7d6b9d791dd1bd17d73d9b16790ff4b6"
  },
  {
    "url": "assets/js/34.317893db.js",
    "revision": "b16ca0b2ac56b65ee31df9341fdfb7e0"
  },
  {
    "url": "assets/js/35.b0c07e82.js",
    "revision": "361f0ab88ac99aa64e1d5e7ee635d314"
  },
  {
    "url": "assets/js/36.11f4488f.js",
    "revision": "3263b378c55fd4b4c6a59ff8da4fc3f9"
  },
  {
    "url": "assets/js/37.44d06b47.js",
    "revision": "150ef97ab3fb87c99d2e8b1d67efcfc2"
  },
  {
    "url": "assets/js/38.7076aad1.js",
    "revision": "150f87f3ee37be8b3bfad70f40a7c3d9"
  },
  {
    "url": "assets/js/39.28b53f84.js",
    "revision": "3cd58fd4949be498dbd8ce673f4e7b80"
  },
  {
    "url": "assets/js/4.ba718c7b.js",
    "revision": "b656b6c63ff650e579a99b0abe9d12d7"
  },
  {
    "url": "assets/js/40.500abbb7.js",
    "revision": "c2ed0f1e1c7ba16648760c57a9dcd37c"
  },
  {
    "url": "assets/js/41.e7ac9249.js",
    "revision": "a1fe013afd04a6a049a1b83360ec61a2"
  },
  {
    "url": "assets/js/42.bef75a03.js",
    "revision": "2bb761b38755555786ab6d824e63467b"
  },
  {
    "url": "assets/js/43.b60f9929.js",
    "revision": "65fafdb41f6c6dbb1bcbd65bdeff8f12"
  },
  {
    "url": "assets/js/44.0dcdb64d.js",
    "revision": "0301d5fba79ebf383ef506d87742c4f3"
  },
  {
    "url": "assets/js/45.5d0502e0.js",
    "revision": "e22500525df192eb6af1d751c18ecd75"
  },
  {
    "url": "assets/js/46.cf1f18a7.js",
    "revision": "3455ecaa116ce67325031555d287fbae"
  },
  {
    "url": "assets/js/47.f7407700.js",
    "revision": "4d0aead35bde7c5a02a2d001a01361b2"
  },
  {
    "url": "assets/js/48.d97ba0a0.js",
    "revision": "d5263445cffe80fa61e74ca1c7ac271e"
  },
  {
    "url": "assets/js/49.1913c40b.js",
    "revision": "5752418aea4240183cc866abea016956"
  },
  {
    "url": "assets/js/5.4ebbb385.js",
    "revision": "279e303013aaf31c2d66c34447d0a556"
  },
  {
    "url": "assets/js/50.d173ab37.js",
    "revision": "7dce9fb3a0b7b5032f82df77d35e2c69"
  },
  {
    "url": "assets/js/51.97c53fc8.js",
    "revision": "600329ff7010b6927003a6a3b544e1b1"
  },
  {
    "url": "assets/js/52.22666e8a.js",
    "revision": "3acec32173f77121f17e824da9a918f1"
  },
  {
    "url": "assets/js/53.f6a7ee98.js",
    "revision": "722affa36a95d60c893c0695669bf3e2"
  },
  {
    "url": "assets/js/54.b2e1de2a.js",
    "revision": "0391f7e7814e8eb3ff3a2bc9ba5e62ac"
  },
  {
    "url": "assets/js/55.6f390e60.js",
    "revision": "ee4fc31d1e04432221458a0f1a81ac65"
  },
  {
    "url": "assets/js/56.136140cb.js",
    "revision": "b85dd748bddeccaa5c8b73f6dc2ff244"
  },
  {
    "url": "assets/js/57.d30b35bd.js",
    "revision": "c051c470b23d19e5533a0807991c1afa"
  },
  {
    "url": "assets/js/58.800fcd7b.js",
    "revision": "509e654c2c54324a7991a8a58a41cc04"
  },
  {
    "url": "assets/js/59.5c9ae199.js",
    "revision": "1f5bbd1339e429cf1d8c78af230d351e"
  },
  {
    "url": "assets/js/6.0bff5906.js",
    "revision": "91dc44d56e1d4d81b033cfcacbfc599c"
  },
  {
    "url": "assets/js/60.244e06d7.js",
    "revision": "a8cbd87b03808eedb3ac1734f3d507dd"
  },
  {
    "url": "assets/js/61.4989f930.js",
    "revision": "dcdf4a032ef2adb0215f60d3aa294388"
  },
  {
    "url": "assets/js/62.0467583d.js",
    "revision": "6cb73fa9e5ec31cc8d61cc96127f42f0"
  },
  {
    "url": "assets/js/63.aea99875.js",
    "revision": "3b7b5dcf89bba7d64a8280d199eec5d8"
  },
  {
    "url": "assets/js/64.1c08761a.js",
    "revision": "20f8771262a5b6628044d23fbb284f66"
  },
  {
    "url": "assets/js/65.93b72363.js",
    "revision": "8fcf382f293fc7a0d5b261b71a528416"
  },
  {
    "url": "assets/js/66.e6b26353.js",
    "revision": "f91e6fa737220bf3bab7d84cf8c21e64"
  },
  {
    "url": "assets/js/67.d6ca691a.js",
    "revision": "b762d7abf4a8537b5e4f9b8f1676863c"
  },
  {
    "url": "assets/js/68.dfe97b09.js",
    "revision": "4827b8a24edf2ab1a09efa47d2fea993"
  },
  {
    "url": "assets/js/69.1638a457.js",
    "revision": "8e4946c8077640c04a60dc2e964be966"
  },
  {
    "url": "assets/js/7.38fc841b.js",
    "revision": "538520a264f24b4eea5519edd57ce445"
  },
  {
    "url": "assets/js/70.c767d155.js",
    "revision": "d2e0e109bf4bc50f7ad0b1c188e19393"
  },
  {
    "url": "assets/js/71.615ce242.js",
    "revision": "40064224f2e1f9f1f062750ec08efc5a"
  },
  {
    "url": "assets/js/72.28e9c562.js",
    "revision": "54bec0ea501bf07d01fd446275295f3c"
  },
  {
    "url": "assets/js/73.6714f2f2.js",
    "revision": "a6b6233580178afc11eaca85ae8f2837"
  },
  {
    "url": "assets/js/74.5b4694bc.js",
    "revision": "2fb44a17abd68724eb7f0a426458510f"
  },
  {
    "url": "assets/js/75.5df43a08.js",
    "revision": "eafca506a661be4212081da6e06a258d"
  },
  {
    "url": "assets/js/76.c576835d.js",
    "revision": "ca09d5b988a62a6765ee92872c64249c"
  },
  {
    "url": "assets/js/77.bad13a20.js",
    "revision": "3d76e2b052b7cf035fad7bf6192a76f7"
  },
  {
    "url": "assets/js/78.be78e4c1.js",
    "revision": "73394720d6bf3bb5c5057ae15b01907b"
  },
  {
    "url": "assets/js/79.fc581b35.js",
    "revision": "cc34c2b6a59db10311d38f6256b16a55"
  },
  {
    "url": "assets/js/8.f1e98a93.js",
    "revision": "213862671bca594c2fdf54b5415d8dd6"
  },
  {
    "url": "assets/js/80.6051d6c1.js",
    "revision": "0c0cf5994e9b9c3a4aa28bd29adfc142"
  },
  {
    "url": "assets/js/81.f768e4c3.js",
    "revision": "ad45985aa7f677f133c262c52ab8d8b6"
  },
  {
    "url": "assets/js/82.3c79a2af.js",
    "revision": "fa1e6b610e61420b2b8f013fe9f5126e"
  },
  {
    "url": "assets/js/83.9f1fae4b.js",
    "revision": "6de55ea1282dae1acdbd9d2c5e0d3d3b"
  },
  {
    "url": "assets/js/84.f2ca23eb.js",
    "revision": "2294acb08661e320c25502503f184eee"
  },
  {
    "url": "assets/js/85.4ecddbfe.js",
    "revision": "7dd79853db5c81fcc9d15a0549409b14"
  },
  {
    "url": "assets/js/86.fe27d4ca.js",
    "revision": "a55836c81c96eba0340fc7ee03d69241"
  },
  {
    "url": "assets/js/87.bfe5f911.js",
    "revision": "99965b51811690512be3bd96a60ce62b"
  },
  {
    "url": "assets/js/88.6838f2aa.js",
    "revision": "4ed19b6fa1b9e9f07c5cba0d99e23417"
  },
  {
    "url": "assets/js/89.1b1738a3.js",
    "revision": "d7196ccdd4ed4c0a475f6b79b20ac3a8"
  },
  {
    "url": "assets/js/9.76534e6a.js",
    "revision": "f7f3f146678e907c3fdc1e627d2ed21b"
  },
  {
    "url": "assets/js/90.51c2f6f2.js",
    "revision": "8a710744c3bbe807a103a55d7ba8d7f6"
  },
  {
    "url": "assets/js/91.f9257029.js",
    "revision": "4b8734fbab86c6db372b25efc308681c"
  },
  {
    "url": "assets/js/92.8e985572.js",
    "revision": "5e7591088fa189f67263350f8257cdb2"
  },
  {
    "url": "assets/js/93.fd9668e1.js",
    "revision": "434f6cde47eed80e8433600a47f697f4"
  },
  {
    "url": "assets/js/94.e8e70151.js",
    "revision": "1e460e037f072aefd4d8c20e2e3dfd17"
  },
  {
    "url": "assets/js/95.b6e2779f.js",
    "revision": "b0395d7b48ad9ab715a00d4212df9d56"
  },
  {
    "url": "assets/js/96.221d4a5e.js",
    "revision": "a58fcddbf25dbbabc6780b26cac6ac4c"
  },
  {
    "url": "assets/js/97.a9f955f5.js",
    "revision": "5493b06138306a6dd9dee4a3e0e99457"
  },
  {
    "url": "assets/js/98.ea1881e7.js",
    "revision": "0f09e96ad4902b1c52f66e0b47bcea43"
  },
  {
    "url": "assets/js/99.27d22932.js",
    "revision": "d38e63a99288b73068cb1de60a340104"
  },
  {
    "url": "assets/js/app.1e9e0114.js",
    "revision": "635c279994b804c1824b2bf643a65759"
  },
  {
    "url": "guide.html",
    "revision": "b3ef5b8cdae5b2c5298c1c60741ac6b3"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "25a5f66ebedada36e443cf5e9e881c8f"
  },
  {
    "url": "index.html",
    "revision": "87fed9315e7d414feed995e3d55254fd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
