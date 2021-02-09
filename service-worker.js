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
    "revision": "697d8dcbc15cab8c2cdf0d7c0b895388"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/01.OJ/11.CCF第3题对症下药_精简代码 (1).html",
    "revision": "95097544b9b2258fdfb40ad0ad16e729"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/01.OJ/12.CCF第4题对症下药_图论.html",
    "revision": "6a1cfe1cb1f50a9bdede137814e1c4ba"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/02.设计数据结构/2020-11-14-TrieTree.html",
    "revision": "8abc7e74910de829805a93a2d1343466"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/02.设计数据结构/2020-11-16-LRU.html",
    "revision": "d00b9b02fdd6f16653ed60fb1ae338fc"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/02.设计数据结构/2020-12-17-SkipList.html",
    "revision": "5062433b846178b53a3f6c0bc762370a"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/02.设计数据结构/index.html",
    "revision": "3085744010c14adba0a115e4a59ee43d"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/02.设计数据结构/LRU缓存结构.html",
    "revision": "7b5c26cbec52b935620d0b02e3845026"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/02.设计数据结构/设计跳表.html",
    "revision": "4a56a69fb29ee34c2fde3377067026ad"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/03.STL/01.STL容器记忆.html",
    "revision": "982f353947a43367ea785d7b081ef2ff"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/03.STL/02.STL常用算法积累.html",
    "revision": "dd9df9ffd88da6b69db8199cfe9175b5"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/03.STL/03.字符串专题详解.html",
    "revision": "ab4308536b3dab15fc520fd17c902e2c"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/03.STL/STL概览.html",
    "revision": "c5f4f00dfb4ee464797cfb1a0cd5c427"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part00.Challenge.html",
    "revision": "15f8d878047809ab45aa5b66a641dabc"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part00.OJ.html",
    "revision": "67341a658b9ed9fdd9e3b4894c910fe7"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part01.tree.html",
    "revision": "fe11daa396f49203afdcf6c34eb9ce37"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part02.Dp.html",
    "revision": "7a70a028a7e60960a607e4c8a83675fa"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part03.STL.html",
    "revision": "9a2bc318848e33f7e76662d8f6fc8e37"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part04.StringMatching.html",
    "revision": "a4b9f973fdf2127539293ca203e212f7"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part05.ICPC.html",
    "revision": "7cfb8678effbdc49a88f5beaf3c849ba"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/____链表和树和图刷题经验.html",
    "revision": "2e6d7ab54e0b4bd898a0a317bd0ea01f"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/01.排序算法复杂度记忆.html",
    "revision": "2128f35d84d21ec93386651af858bac2"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/02.九大排序模板.html",
    "revision": "ddd5a6601652cd16da3d7aa23f4a5d72"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/03.LinearSort.html",
    "revision": "8f4188ce6a7142aab0e325b13490dd3d"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/09.二分查找.html",
    "revision": "039902552c96f3a553f692bfecabe3f5"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/排序和查找.html",
    "revision": "593c4518eda0ca1b1f453d6391b8c314"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/数组-两数之和.html",
    "revision": "836fa9fabde7a678d2f57b0671bf1993"
  },
  {
    "url": "02.DataStructureAndAlgorithm/02.Skills/01.双指针专题总结.html",
    "revision": "83aa62bc2249eca24b2fa8f972779ad6"
  },
  {
    "url": "02.DataStructureAndAlgorithm/02.Skills/02.位运算专题总结.html",
    "revision": "b58e7d90c27226012937dad84254e676"
  },
  {
    "url": "02.DataStructureAndAlgorithm/02.Skills/2020-10-23-LinkList.html",
    "revision": "e11b7e00a699becfc885ba105240c589"
  },
  {
    "url": "02.DataStructureAndAlgorithm/02.Skills/2020-10-24-Trees.html",
    "revision": "c81ed3824590662dfc8942b9cc9ce251"
  },
  {
    "url": "02.DataStructureAndAlgorithm/03.SupplyBox/01_01.Manacher.html",
    "revision": "d2fba8da117dbf597271066a109e2916"
  },
  {
    "url": "02.DataStructureAndAlgorithm/04.math/01.Prime_sieve_algorithm.html",
    "revision": "8f69749f718fc0a064bef5ad292790c3"
  },
  {
    "url": "02.DataStructureAndAlgorithm/05.DFS_BFS/01.图论DFS和BFS模板.html",
    "revision": "e62a6ce4414e41298bb4f0ccb02c1db4"
  },
  {
    "url": "02.DataStructureAndAlgorithm/06.ICPC/01.BinaryIndexedTree.html",
    "revision": "3aad8f1d7596bbddf4c60157707ae5f4"
  },
  {
    "url": "02.DataStructureAndAlgorithm/06.ICPC/02.SegmentTree.html",
    "revision": "71c14911ef015e793b45c8456945c942"
  },
  {
    "url": "02.DataStructureAndAlgorithm/06.ICPC/03.ChairmanTree.html",
    "revision": "d33b3ed471bb3f36b2577b8753fc0351"
  },
  {
    "url": "02.DataStructureAndAlgorithm/index.html",
    "revision": "c4a27c3e2db199eefc21cec60de5686b"
  },
  {
    "url": "03.OS/index.html",
    "revision": "d01b2c48b5208e70eff66446a76ba1a1"
  },
  {
    "url": "03.OS/Linux/01.MyDebian.html",
    "revision": "ec4d33384c216e3d69018c796e0c0dfb"
  },
  {
    "url": "03.OS/Linux/02.MyRedhat.html",
    "revision": "312091788ade84a8d0d20539ede6f6a8"
  },
  {
    "url": "03.OS/Linux/03.Linux_Vim.html",
    "revision": "2bbed6ceba627097073410f5d1a5182f"
  },
  {
    "url": "03.OS/Linux/04.LinuxCommand.html",
    "revision": "11b4080e635f287453a84ac7d30b16bc"
  },
  {
    "url": "03.OS/Linux/05.kaliLinux.html",
    "revision": "e21c2eec052312c12b769d35a5a52bb3"
  },
  {
    "url": "03.OS/Linux/05.Linux资源库.html",
    "revision": "f649a8378c46c8107fb4648e744b3446"
  },
  {
    "url": "03.OS/Linux/06.LinuxNote.html",
    "revision": "3dc7eeb8e6e10550f0dfb5fd409fbecf"
  },
  {
    "url": "03.OS/OSBasic/01.POSIX.html",
    "revision": "ac99d5d8fa049d3899b3a9778272498a"
  },
  {
    "url": "03.OS/OSBasic/02.LinuxSystemprogramming01.html",
    "revision": "982b4e6372484fe3ab47353bff08ac0f"
  },
  {
    "url": "03.OS/OSBasic/2020-06-11-The-concept-of-Process-and-Thread.html",
    "revision": "8144de8bc9ea5c2e6506a72d6a6fe73f"
  },
  {
    "url": "03.OS/OSBasic/2020-07-20-Linux-System-day01.html",
    "revision": "f82b67c0f3db31073f44abc698f30082"
  },
  {
    "url": "03.OS/OSBasic/2020-07-20-Linux-System-day02.html",
    "revision": "2bcc7e107450dc42b2dbf8e4bfcae092"
  },
  {
    "url": "03.OS/OSBasic/2020-07-20-Linux-System-day03.html",
    "revision": "23be34f03017aaabd358b050f83ef419"
  },
  {
    "url": "03.OS/OSBasic/2020-07-20-Linux-System-day04.html",
    "revision": "c3a1414bcdae82a1b6c18b1d2b16aed8"
  },
  {
    "url": "03.OS/OSBasic/2020-07-21-Linux-System-pthread.html",
    "revision": "ded04522e1d4e1a2f071a73d9921d5e2"
  },
  {
    "url": "03.OS/OSBasic/2020-07-22-Linux-System-Multithreading.html",
    "revision": "8b465c185a9f05be034a81aae2391f90"
  },
  {
    "url": "03.OS/OSBasic/2020-07-26-Unix-Book.html",
    "revision": "251a912b2fbf7899112276be7d5bcf3c"
  },
  {
    "url": "03.OS/Windows/00.EnvironmentVariable.html",
    "revision": "b9cd0f52c3cd838e955ae303d1d881dc"
  },
  {
    "url": "03.OS/Windows/01.ToolSoftwareShortcut.html",
    "revision": "d29deab20fa811c1f3d8eea9d7903b97"
  },
  {
    "url": "03.OS/Windows/02.RunCommand.html",
    "revision": "9ee84ba5c8f57ca290940461b6f17c60"
  },
  {
    "url": "03.OS/Windows/03.GlobalShortcut.html",
    "revision": "81dca6088a9eaf2beb780efcd6c98dcf"
  },
  {
    "url": "03.OS/Windows/04.WindowsLinuxDirectory.html",
    "revision": "9da9a9c7fc01fbc82c43342ae65f2949"
  },
  {
    "url": "03.OS/Windows/05.DistinguishVB_A_S.html",
    "revision": "8726eb01b8519aabb328abb25db7806c"
  },
  {
    "url": "03.OS/Windows/06.OtherShortcut.html",
    "revision": "f2db19be71beec53fce7e2ea209d2a12"
  },
  {
    "url": "03.OS/Windows/07.WindowsRegistry.html",
    "revision": "1c4905675ee72c9fea965696807f3daa"
  },
  {
    "url": "04.Net/Analyse/01.LinuxAndWindows.html",
    "revision": "c8458a4b01045b0c010aad97b8b41156"
  },
  {
    "url": "04.Net/Analyse/02.wireshark基础.html",
    "revision": "6300f0ede593d44f845ba418cf39f39c"
  },
  {
    "url": "04.Net/Basis/01.TCPIP.html",
    "revision": "4c9ade71acf2f9832330b5534e5ac6c5"
  },
  {
    "url": "04.Net/Basis/02.NetBasis.html",
    "revision": "0f4ab4db315a6d8387eb31f417802cca"
  },
  {
    "url": "04.Net/Basis/03.TCP.html",
    "revision": "081538c3aaf2bae334f17fb95066638c"
  },
  {
    "url": "04.Net/Basis/05.FAQ.html",
    "revision": "cff8007d72f4b71eaf6e6c98b4a20911"
  },
  {
    "url": "04.Net/index.html",
    "revision": "70c84ef612ab858ee7707b6cb9696093"
  },
  {
    "url": "04.Net/Server/Part01.多进程和多线程服务器.html",
    "revision": "1113700ddb6ff637517fe696fdace173"
  },
  {
    "url": "04.Net/Server/Part02.Unix和Linux下IO多路复用服务器.html",
    "revision": "351569e530a69a2f749a2842bd9e0514"
  },
  {
    "url": "05.SE/DesignPatterns/01.DesignPatterns.html",
    "revision": "763ab4a0afb0300ae081d985d5090164"
  },
  {
    "url": "05.SE/DesignPatterns/02.Singelton.html",
    "revision": "a23cebfa613240ca8fd36ccad6d2a01e"
  },
  {
    "url": "05.SE/index.html",
    "revision": "d7c5094a250b5838f5520e13fb639177"
  },
  {
    "url": "05.SE/UML/01.UML.html",
    "revision": "7d3afb94db4130536292b410b5a3bdb0"
  },
  {
    "url": "05.SE/UML/02.UML.html",
    "revision": "b077a4e3071b3373c296169d1c1348d2"
  },
  {
    "url": "06.SQL/01.SQL/01.SQL语法.html",
    "revision": "aff5713ff757e3cfcabb8928f0ebdb39"
  },
  {
    "url": "06.SQL/02.DataBase/03.红黑树.html",
    "revision": "1c1dd01de1347a58343b1a36a52a62ad"
  },
  {
    "url": "06.SQL/04.Redis/01.Redis.html",
    "revision": "7d0fb4d076984537d9b6a37445339354"
  },
  {
    "url": "06.SQL/index.html",
    "revision": "2867abb858a6520334de51ea1b2311ce"
  },
  {
    "url": "07.InternalSkill/Assembly/00.AssemblyTools.html",
    "revision": "cc0d63ee2920f1bfd5efe48c555d2dd6"
  },
  {
    "url": "07.InternalSkill/Assembly/01.AssemblyReadingSkills.html",
    "revision": "4d5cb3e06f9c391a22fb63d670dc89dd"
  },
  {
    "url": "07.InternalSkill/Assembly/02.ASCII.html",
    "revision": "3122d4ed5ace25555f63c1ca0a3d16f3"
  },
  {
    "url": "07.InternalSkill/Assembly/03.AT_T汇编与INTEL汇编.html",
    "revision": "170244588080caf051c10ad51a08c036"
  },
  {
    "url": "07.InternalSkill/Assembly/04.X86_Register.html",
    "revision": "b282369549eaa9783939648e99754c7e"
  },
  {
    "url": "07.InternalSkill/Assembly/05.NASM的AT_T汇编.html",
    "revision": "085db7489f6be0c0fbc1ad1eb6a6c0ab"
  },
  {
    "url": "07.InternalSkill/Assembly/06.汇编手动加栈.html",
    "revision": "65015d7daf2b5ea79250607c512a8533"
  },
  {
    "url": "07.InternalSkill/Hardware/01.各大电脑厂商进入BIOS.html",
    "revision": "85de01e4e99bcbcf602fe6ec8ffb91c7"
  },
  {
    "url": "07.InternalSkill/Hardware/2020-06-25-Underlying-coding.html",
    "revision": "f4524ba4dc6162aea76be41a59a73bc9"
  },
  {
    "url": "07.InternalSkill/Hardware/2020-06-26-Displacement.html",
    "revision": "5a5a49fe311b5e66167f3875bd8826ab"
  },
  {
    "url": "07.InternalSkill/index.html",
    "revision": "b80bd28bfdeeaf18f89a98f9b205da2c"
  },
  {
    "url": "07.InternalSkill/PrinciplesOfCompilation/01.MemoryAlignment.html",
    "revision": "0a916688cae96bbf09d7ca5a741aa814"
  },
  {
    "url": "07.InternalSkill/PrinciplesOfCompilation/02.BigEndianLittleEndian.html",
    "revision": "4e45a6b14644460017fcc393db9823c2"
  },
  {
    "url": "07.InternalSkill/PrinciplesOfCompilation/2020-10-06-Memory.html",
    "revision": "4ded7026466d9f40462189578dbdaed7"
  },
  {
    "url": "07.InternalSkill/PrinciplesOfCompilation/Part01.RPC.html",
    "revision": "7598394fdaaca1caf04d392ea90071ec"
  },
  {
    "url": "07.InternalSkill/PrinciplesOfCompilation/Part02.GCC.html",
    "revision": "b58d274dfeec2d402df287f2a7432f26"
  },
  {
    "url": "08.Tools/book/00.书单和思考.html",
    "revision": "ca9f4489e92c40e7a8cb5f7871b7995f"
  },
  {
    "url": "08.Tools/employment/01.公司别名.html",
    "revision": "20e6bf3de52ce6f3eae925521a1218db"
  },
  {
    "url": "08.Tools/employment/02.公司福利.html",
    "revision": "88c3ae0ecb29a6c3b611219fc3ee380f"
  },
  {
    "url": "08.Tools/employment/03.IT技术岗位求职流程和术语.html",
    "revision": "a064b1dcfdb481266337421f5d041487"
  },
  {
    "url": "08.Tools/guide.html",
    "revision": "c8be3284077c444cd9f3579934413074"
  },
  {
    "url": "08.Tools/index.html",
    "revision": "760d1eca6b7ff1cd71ba3452a6601356"
  },
  {
    "url": "08.Tools/ToolSoftware/01.Markdown.html",
    "revision": "9f0c886a908c85dc34f90cfce32bc295"
  },
  {
    "url": "08.Tools/ToolSoftware/02.Git.html",
    "revision": "905f6efcbb1025a379722531e92dcd19"
  },
  {
    "url": "09.Language/00.GeneralEducation/00.编程的其他通识知识.html",
    "revision": "7057a9b12c5fa4e625b29e870dcf0d33"
  },
  {
    "url": "09.Language/00.GeneralEducation/01.TheRulesOfVariableName.html",
    "revision": "f99f8fb16eac7eedf743eeafc68d6aff"
  },
  {
    "url": "09.Language/01.core/01.C语言指针详解.html",
    "revision": "d1d4d9ee73a9f3a509bf330cb1c04776"
  },
  {
    "url": "09.Language/01.core/01.MemoryManagement.html",
    "revision": "d359adae1a9d7aebd75a7c868985d0ce"
  },
  {
    "url": "09.Language/01.core/02.C_priority_and_associative_memory.html",
    "revision": "11009877f4a6625d15a7f930e6651163"
  },
  {
    "url": "09.Language/01.core/03.C语言内嵌汇编.html",
    "revision": "c45b927d139c4b402d4fc272681f7902"
  },
  {
    "url": "09.Language/01.core/04.ShallowDeepCopy.html",
    "revision": "be717241bbafcc094d4505c4939848e9"
  },
  {
    "url": "09.Language/01.core/05.ValueAddressReference.html",
    "revision": "193ddb96b891253b52e96a7a70e4a723"
  },
  {
    "url": "09.Language/01.core/06.C++变量的各种属性.html",
    "revision": "7e48fa9c199c386e68f3d10d4bf21af5"
  },
  {
    "url": "09.Language/01.core/2020-12-15-CandPointer.html",
    "revision": "2ee02945592fb3526a14679f799809b0"
  },
  {
    "url": "09.Language/01.core/2020-12-25-constant.html",
    "revision": "6fd046c76d950b2b86b87cf9ddb3f1f2"
  },
  {
    "url": "09.Language/01.core/C++核心/01.C和C++优先级详解.html",
    "revision": "28828a62f0f60ec027a6b8f25bedb22c"
  },
  {
    "url": "09.Language/02.function/01.sscanfANDsprintf.html",
    "revision": "ffcdd9a541048dff2aaa835d5cc70a74"
  },
  {
    "url": "09.Language/02.function/02.memset_fill.html",
    "revision": "b9ab5740ba83fdd2944ad2d62517473f"
  },
  {
    "url": "09.Language/04.history/___多态强化练习题01.html",
    "revision": "95637d2019c86fade3c306ffa1633b43"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/01.命名空间.html",
    "revision": "8fb10405592d4a16b0d9e64555cfd621"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/02.static成员.html",
    "revision": "9844d162674f888f018f80a7de6d4150"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/03.到底什么是成员函数.html",
    "revision": "36e1bb66df121b006667abf428e386a1"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/04.C语言中的流和缓冲器的概念.html",
    "revision": "fe5276f2c33478ca8131acb1fa5d118e"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/C++中变量和函数.html",
    "revision": "af2961691a2312ab8e4d207f76541b7f"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/C++对C的加强namespace.html",
    "revision": "e0d23a630531bf7204f344314f8caa29"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/C++概念辨析详解.html",
    "revision": "7a9fb9bc6e50f9c065ff78c621eda22c"
  },
  {
    "url": "09.Language/04.history/01.面向对象难点.html",
    "revision": "3cbabb36ec203c3d6353d94f5c46ae60"
  },
  {
    "url": "09.Language/04.history/02.C++多态详解.html",
    "revision": "3fde9bd31e5d2036ba6a954c4755e0d3"
  },
  {
    "url": "09.Language/04.history/03.C++重载详解.html",
    "revision": "ff3fcba177c0a4a0d4638bfbfddf81d2"
  },
  {
    "url": "09.Language/04.history/C++.html",
    "revision": "3848c894f9f38f1926e66cd599cb9ee2"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-05-31-Cplusplus-const.html",
    "revision": "1f2a187a9551f80162f8c9f06aec5f64"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-06-02-C-Array-init.html",
    "revision": "1204cf58fd36a7ffbaa6a367bae9a6cc"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-06-03-Const-in-C-language.html",
    "revision": "099c2e676f2d1cd05524daef074ea4b3"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-06-04-Const-in-C-language.html",
    "revision": "1d3c0b54248a4711af6143ba0e8c17b8"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-06-06-Discrimination.html",
    "revision": "a05c717aa08016590d236d555fc9e7f5"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-06-06-The-development-of-C-language-standard.html",
    "revision": "515208931f91d9723541c7f99d0ac3d1"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-06-07-C_check_array_bounds.html",
    "revision": "0e3efe3cd65a44cf05d58fcdbe403cc5"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-06-09-Bit-Segment.html",
    "revision": "4bfb66b9bebe27703cf2159494d425d3"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-06-10-Union.html",
    "revision": "82ce276b0fa0de683a58b5541a6335d4"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-06-12-Flexible-Array.html",
    "revision": "ef014a6272432f632f448c8f0f1ffd66"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-07-29-Const-Define.html",
    "revision": "2c34cad4733e72f9b3bf04ceb29b7c19"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-12-21-variable.html",
    "revision": "110c5d717871e49da203483151cba604"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-12-25-constant.html",
    "revision": "d6b004ab4ba44fb699566127f8cf7334"
  },
  {
    "url": "09.Language/index.html",
    "revision": "ae3cc8fdc2004d1ed82f8db2a91ecefe"
  },
  {
    "url": "404.html",
    "revision": "8d0a969809ccce8b69d0303b53949e5a"
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
    "url": "assets/js/10.ebd9e5bb.js",
    "revision": "049dacb4da6ca8bf92896609c03bb23c"
  },
  {
    "url": "assets/js/100.58510c48.js",
    "revision": "3cad8bf35e9cf7cddd9444e229ea8d7c"
  },
  {
    "url": "assets/js/101.1acfc2fa.js",
    "revision": "c034086376c50c0494818d32ccc3705a"
  },
  {
    "url": "assets/js/102.e9d8b6d7.js",
    "revision": "34877568b602dc2fd1367dbdbbb63e67"
  },
  {
    "url": "assets/js/103.bc49ab10.js",
    "revision": "623d986640965b74801d6dbe54e48f82"
  },
  {
    "url": "assets/js/104.d9c8a8aa.js",
    "revision": "b433301141a202e76985d94d3dc22b99"
  },
  {
    "url": "assets/js/105.2988f13c.js",
    "revision": "d2c5cdd11b919dc338befe04e301c4e2"
  },
  {
    "url": "assets/js/106.4e5665ee.js",
    "revision": "658dbe71d90c44ae75d4ae42eb32eaaf"
  },
  {
    "url": "assets/js/107.379fa1b3.js",
    "revision": "bd877a12a3764eb738eeaa5ab27b895f"
  },
  {
    "url": "assets/js/108.947b5c69.js",
    "revision": "d3cde80eec073a8c7ac2912f8f7164fc"
  },
  {
    "url": "assets/js/109.66e72927.js",
    "revision": "605d9b5a75ad7312c4b502218e9a90c2"
  },
  {
    "url": "assets/js/11.8f5f6683.js",
    "revision": "157b623caabca7642f7297081f1cb5ba"
  },
  {
    "url": "assets/js/110.0903950a.js",
    "revision": "9ec15f8928296ac784ae68dba14f12ec"
  },
  {
    "url": "assets/js/111.f7a61215.js",
    "revision": "249c66391f01ccf4d511bf8c7234e91b"
  },
  {
    "url": "assets/js/112.ee6b9add.js",
    "revision": "094286f80f46bbaf896ee370fecf2519"
  },
  {
    "url": "assets/js/113.a881ea53.js",
    "revision": "f52c4c8e54cb4510d6f79bb4336ebae1"
  },
  {
    "url": "assets/js/114.606270cc.js",
    "revision": "c3cab35cdc9d233cc6bc25761b63e6d0"
  },
  {
    "url": "assets/js/115.410862fe.js",
    "revision": "218b67310e08ccd8b67194f3546bdf45"
  },
  {
    "url": "assets/js/116.2e789c33.js",
    "revision": "fdc196bd9e4161fb76b6ca26865fae55"
  },
  {
    "url": "assets/js/117.120bf6fc.js",
    "revision": "2788cbf7c1cae50f5dbecc6577722aec"
  },
  {
    "url": "assets/js/118.0479fb97.js",
    "revision": "b4e7be5cf95411772aba55eba1f1e73b"
  },
  {
    "url": "assets/js/119.a309ee1f.js",
    "revision": "60e55f387e982f16c68eeb227de27b27"
  },
  {
    "url": "assets/js/12.593ef9ae.js",
    "revision": "60c78e0f22a9205518d94b9e9d253308"
  },
  {
    "url": "assets/js/120.e0d4e2e4.js",
    "revision": "da3ce8afc097cfbdcc1c945e8a3df484"
  },
  {
    "url": "assets/js/121.f9c9a1bf.js",
    "revision": "e22b22cad60f35177bd26ab317a8fec4"
  },
  {
    "url": "assets/js/122.614e3863.js",
    "revision": "77ac3e2cc656f733f03b3dd5c3dd1e98"
  },
  {
    "url": "assets/js/123.59eda613.js",
    "revision": "d3d04f428c19fdf63000d966f8a60c5d"
  },
  {
    "url": "assets/js/124.354edc11.js",
    "revision": "f622138b65c4030cb22bb8c699b35acd"
  },
  {
    "url": "assets/js/125.2391dcff.js",
    "revision": "6a9cfc40230bdefc21d0ed20a1937d5a"
  },
  {
    "url": "assets/js/126.15a9c8b2.js",
    "revision": "d550b508cabaf4ddab217da6c19db00f"
  },
  {
    "url": "assets/js/127.bfbab0b8.js",
    "revision": "53888eb15d809a0772d7e3703829c88c"
  },
  {
    "url": "assets/js/128.39c25858.js",
    "revision": "37b58639b34b3467558739f36ce8297b"
  },
  {
    "url": "assets/js/129.81926f8a.js",
    "revision": "56e19ed7648e7dbd1e055a3770b5d27f"
  },
  {
    "url": "assets/js/13.67a13924.js",
    "revision": "ce8e316b5a4627a2653f12cf584cb0e4"
  },
  {
    "url": "assets/js/130.ea86dcab.js",
    "revision": "1a3cf0e6b4b70b92f8e0cbddcee15567"
  },
  {
    "url": "assets/js/131.35757ef3.js",
    "revision": "4a2e68df0871301e2e927616b030d2be"
  },
  {
    "url": "assets/js/132.f8217f3d.js",
    "revision": "f306f294d115507b0fec7d268fe46840"
  },
  {
    "url": "assets/js/133.95b1a76d.js",
    "revision": "abe22d9d2e9d439e0bc6dca05aac3bf4"
  },
  {
    "url": "assets/js/134.ed30a6f9.js",
    "revision": "c31eb9916e23394eec4dfb5b245c903a"
  },
  {
    "url": "assets/js/135.4f726db9.js",
    "revision": "a3ebcda0c0a0929c04338abbdf6d006b"
  },
  {
    "url": "assets/js/136.4920df01.js",
    "revision": "35a3732e5d91e1d24cc40aa0e08b38d7"
  },
  {
    "url": "assets/js/137.af233d74.js",
    "revision": "99e5ce7531f0b6a118b03b711ecf9e50"
  },
  {
    "url": "assets/js/138.49e4b258.js",
    "revision": "cf2f0e5a47197997ac7db71e271e4a74"
  },
  {
    "url": "assets/js/139.3b119368.js",
    "revision": "6eaac22bdd76642f2ef987501860a735"
  },
  {
    "url": "assets/js/14.b89e9981.js",
    "revision": "017026cc6ca2658c54a0234f8f621c5b"
  },
  {
    "url": "assets/js/140.241c821d.js",
    "revision": "16c1f6497f4395b26cbcbb5c2d65813c"
  },
  {
    "url": "assets/js/141.f867e128.js",
    "revision": "3cacfa31ac55a11b28f229d497c947e0"
  },
  {
    "url": "assets/js/142.0a6b954c.js",
    "revision": "4fb8ab3733cd613167abd81b5da7bfa5"
  },
  {
    "url": "assets/js/143.38b8b740.js",
    "revision": "8816e79867ec25427638dcf2a17f4501"
  },
  {
    "url": "assets/js/144.4e1daec9.js",
    "revision": "f06ea27870b3374867868a1f6946e742"
  },
  {
    "url": "assets/js/145.7c4ded43.js",
    "revision": "754e3e8d259220f6d9a5f8a16ce3f51c"
  },
  {
    "url": "assets/js/146.7edb655a.js",
    "revision": "c0ca5d67ea2a6a5222d6f0c6bf37b1eb"
  },
  {
    "url": "assets/js/147.1d86e8ae.js",
    "revision": "783f45eb370de4a731e7498bcfca74a6"
  },
  {
    "url": "assets/js/148.f74e0f1c.js",
    "revision": "ed28c722e663469b0cba230bfc895420"
  },
  {
    "url": "assets/js/149.d1a65e22.js",
    "revision": "5a76390550f288a26536688c7ec771c9"
  },
  {
    "url": "assets/js/15.8658dbcc.js",
    "revision": "213e65b8c66219ab676bb4d1e893de34"
  },
  {
    "url": "assets/js/150.4357a103.js",
    "revision": "7d68cafefeee39e603281688644bfe7c"
  },
  {
    "url": "assets/js/151.414c037d.js",
    "revision": "bdb5d372c9f79b40972e02178bccdfa7"
  },
  {
    "url": "assets/js/16.0c69adc6.js",
    "revision": "bcaaff7455d3b5f109a5c573b9273f31"
  },
  {
    "url": "assets/js/17.a20e9f3e.js",
    "revision": "45eee9c18ac0f8b4c919750eadc6ebad"
  },
  {
    "url": "assets/js/18.bda70dd0.js",
    "revision": "d99aa75c4cb2e202a878d796aedbd421"
  },
  {
    "url": "assets/js/19.ada15e0a.js",
    "revision": "2f2e292014fc2943d419586045741a14"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/20.39ab60f2.js",
    "revision": "1a9fb61e8988d64774aace701c1c4bcb"
  },
  {
    "url": "assets/js/21.3a6af5e1.js",
    "revision": "b87a303ea3f80d12e292961b90b0574e"
  },
  {
    "url": "assets/js/22.aca118be.js",
    "revision": "c7d0865dea610f4267b9b9994c79f529"
  },
  {
    "url": "assets/js/23.997c768f.js",
    "revision": "6132c2641650e8c13cb6379451d80b76"
  },
  {
    "url": "assets/js/24.2388b656.js",
    "revision": "4552d564ce7c284f1816e26951faecff"
  },
  {
    "url": "assets/js/25.2e398a29.js",
    "revision": "0ebb0454c12140929849d682f47aa7b2"
  },
  {
    "url": "assets/js/26.999e43d6.js",
    "revision": "9cd042d3ad4a5cb322456d7c990f3229"
  },
  {
    "url": "assets/js/27.2be0cf10.js",
    "revision": "a2ec4566a4a4a2473a25f3b40ce5ba2b"
  },
  {
    "url": "assets/js/28.b39e69d3.js",
    "revision": "5e4d18b184968d1c35d7010f93f9a73b"
  },
  {
    "url": "assets/js/29.bc9dcf63.js",
    "revision": "a3955f9f00e785410719f81fd27ee6bc"
  },
  {
    "url": "assets/js/3.53ecd128.js",
    "revision": "011c06d38edf659e8dd7c206c8cd4c45"
  },
  {
    "url": "assets/js/30.e43bc868.js",
    "revision": "a403ac5061a5bb9a6ef5ee0e3a9b7377"
  },
  {
    "url": "assets/js/31.b8db3815.js",
    "revision": "c001bbab0a6b13a32685be901733e812"
  },
  {
    "url": "assets/js/32.9c52ac0c.js",
    "revision": "bfb117e7991ea7a543a6239ac6cbf233"
  },
  {
    "url": "assets/js/33.942c1377.js",
    "revision": "ba3beb2163a44005999d3995766f6cf7"
  },
  {
    "url": "assets/js/34.ad488c6d.js",
    "revision": "89639e6e7ba24874bf091f54281cdaa6"
  },
  {
    "url": "assets/js/35.bde7fe50.js",
    "revision": "783d2e7b04438f172838d3c3fd231087"
  },
  {
    "url": "assets/js/36.dc87e012.js",
    "revision": "61f3c339682b8895aa2f74b8dbbcb95d"
  },
  {
    "url": "assets/js/37.9be237bc.js",
    "revision": "9677ec1c6bc9b84db5419b3a74c9fa4f"
  },
  {
    "url": "assets/js/38.a2ed656e.js",
    "revision": "c25db265cf22ab34dd9832d7ec3dcd34"
  },
  {
    "url": "assets/js/39.c6893003.js",
    "revision": "ac3997a9fb79f9b7ffc250db90251e4c"
  },
  {
    "url": "assets/js/4.7737ee66.js",
    "revision": "946d0f7381a24b6ae6799b4a26e04b13"
  },
  {
    "url": "assets/js/40.ed6f077a.js",
    "revision": "3be8949b9c62e8a8fe2543289c268b4d"
  },
  {
    "url": "assets/js/41.95871ed4.js",
    "revision": "adb970b78f988b0b149e9714bb45c58d"
  },
  {
    "url": "assets/js/42.2252d8af.js",
    "revision": "2dc4c472861086ef6c34a509a32426ed"
  },
  {
    "url": "assets/js/43.081ffb45.js",
    "revision": "9bff460a654097f9e57d751d5f390914"
  },
  {
    "url": "assets/js/44.a6b3c3cf.js",
    "revision": "402fa511a7b2ef920d547a290985a8dd"
  },
  {
    "url": "assets/js/45.a3ce1167.js",
    "revision": "579a9059c168d2432e55a7b17de0b24e"
  },
  {
    "url": "assets/js/46.befd8516.js",
    "revision": "19680e63cef8a030f92135a90759ebf5"
  },
  {
    "url": "assets/js/47.f34f9cc4.js",
    "revision": "856a2da7ccb71159c48d6ef4094e8c48"
  },
  {
    "url": "assets/js/48.62761611.js",
    "revision": "36c68767ac9bd14e95a9310db55023f6"
  },
  {
    "url": "assets/js/49.5d8825e5.js",
    "revision": "8dbe0365e82323497975d0e42d4a17aa"
  },
  {
    "url": "assets/js/5.44a635f1.js",
    "revision": "ed5487e8b91cc7bba58929cbf361a8d7"
  },
  {
    "url": "assets/js/50.0d413cee.js",
    "revision": "5fb8ae5d8bb4e98c6085b6b9442e0b5a"
  },
  {
    "url": "assets/js/51.7c6d64d3.js",
    "revision": "624b978629154114cde6e9f1fd13f160"
  },
  {
    "url": "assets/js/52.900f0e6d.js",
    "revision": "0a415688f66a770f641dca327dd650a8"
  },
  {
    "url": "assets/js/53.ca23aed2.js",
    "revision": "c7482768ea1958dd5be2ce4a627c6926"
  },
  {
    "url": "assets/js/54.f172bf59.js",
    "revision": "a370745387a808c1ac3c1863066341ba"
  },
  {
    "url": "assets/js/55.1b9517bc.js",
    "revision": "f4f4e20347352ae386828ef27a2901f7"
  },
  {
    "url": "assets/js/56.80334add.js",
    "revision": "d8b1fc65e0ef5afadcb7793dd554057d"
  },
  {
    "url": "assets/js/57.7894c325.js",
    "revision": "7997a88d13da380895c61645a4c7bcaf"
  },
  {
    "url": "assets/js/58.2c167e62.js",
    "revision": "e09ec402eeef74112ed866c0d052c208"
  },
  {
    "url": "assets/js/59.e54585ea.js",
    "revision": "28063da475c5112a56576352ef36b7cb"
  },
  {
    "url": "assets/js/6.aad427eb.js",
    "revision": "3556382540d7a8b96e885db239b4a93e"
  },
  {
    "url": "assets/js/60.78afe802.js",
    "revision": "f4d934b95145ea0a5cc683dcfda02617"
  },
  {
    "url": "assets/js/61.d3de9a8d.js",
    "revision": "e52aabbeae0c6ef5bd6e3404b785e827"
  },
  {
    "url": "assets/js/62.2a9ca0f4.js",
    "revision": "26b3dd26e197e986e54b1d3ec5dbe49e"
  },
  {
    "url": "assets/js/63.52ef0271.js",
    "revision": "6eada3eaf135325fb809de907b1df6f9"
  },
  {
    "url": "assets/js/64.5dce8ce0.js",
    "revision": "2af6a3ddd005aaf0b4eef12ae07b3f67"
  },
  {
    "url": "assets/js/65.ffb04f2b.js",
    "revision": "dc4fc15ab6388978859ff92c93365eec"
  },
  {
    "url": "assets/js/66.896cdc01.js",
    "revision": "f2917d3068dea45e32e0bf6f6504bcf0"
  },
  {
    "url": "assets/js/67.d6ca691a.js",
    "revision": "b762d7abf4a8537b5e4f9b8f1676863c"
  },
  {
    "url": "assets/js/68.e988fcba.js",
    "revision": "700f699b57ae94eb4da4eeebc32de2b7"
  },
  {
    "url": "assets/js/69.56cdd1c7.js",
    "revision": "b3077383db0dc416bd2338a79e798e8a"
  },
  {
    "url": "assets/js/7.620fa364.js",
    "revision": "44cd77f70a0d01587f9c4773d5439df2"
  },
  {
    "url": "assets/js/70.51c8d23a.js",
    "revision": "fcfeca6c19accfa30a6f0761343492ca"
  },
  {
    "url": "assets/js/71.de32e86c.js",
    "revision": "5c57ece8f371e789ceccdcaf0d12c332"
  },
  {
    "url": "assets/js/72.03a9f5e4.js",
    "revision": "d3cad2026dca892731942d061a640767"
  },
  {
    "url": "assets/js/73.ca41987b.js",
    "revision": "7db7550beff207a002fdf9de8a8de264"
  },
  {
    "url": "assets/js/74.88d83cef.js",
    "revision": "4548e1250c51879a9af067a1d9a8f538"
  },
  {
    "url": "assets/js/75.b3683b54.js",
    "revision": "8441e7bfd272a9d3fbf8829182bf77a0"
  },
  {
    "url": "assets/js/76.43d2e38b.js",
    "revision": "bf9a27d222a9f86b5fa795ef0c4fa168"
  },
  {
    "url": "assets/js/77.f3af5f07.js",
    "revision": "3d00ce48c7d3bbeedbf49a6b44690806"
  },
  {
    "url": "assets/js/78.e3fc9b02.js",
    "revision": "b45c866be0ed4c9d48337ba6818d1055"
  },
  {
    "url": "assets/js/79.24cdce5c.js",
    "revision": "0289ce346632964a2e09c84a0d6d9b9b"
  },
  {
    "url": "assets/js/8.2fb63ebd.js",
    "revision": "649cc6388c4bd5235f0fc35d0e3e4bad"
  },
  {
    "url": "assets/js/80.2ad1db1b.js",
    "revision": "9fb7bae532f4a0ce7f9efb86d6179620"
  },
  {
    "url": "assets/js/81.f1725f8c.js",
    "revision": "04445ea72d7c58659aa0494507c4c340"
  },
  {
    "url": "assets/js/82.c920e30f.js",
    "revision": "fd5234c01e76fdf4c73e5f0f459c1732"
  },
  {
    "url": "assets/js/83.e76f0172.js",
    "revision": "56b121b3743fb7cb99f20e5aced9abe2"
  },
  {
    "url": "assets/js/84.2c1fc3ff.js",
    "revision": "d7aa72dd5f8f32221b0bd0c15ae50c0a"
  },
  {
    "url": "assets/js/85.e613049c.js",
    "revision": "e1dafeab5c383d58a776481078836a38"
  },
  {
    "url": "assets/js/86.b67437ac.js",
    "revision": "70936691cac27f62130f17e45679a92f"
  },
  {
    "url": "assets/js/87.40536e04.js",
    "revision": "55ea25895854fec6684f318a06afb831"
  },
  {
    "url": "assets/js/88.43da89fb.js",
    "revision": "e61146a7876a5e51999dfc73ecf78a58"
  },
  {
    "url": "assets/js/89.31670b27.js",
    "revision": "091e8e571cd07fc39c52b4bc37e9dd6a"
  },
  {
    "url": "assets/js/9.48d24621.js",
    "revision": "8366388359cc3d1e9eeb6787f296477d"
  },
  {
    "url": "assets/js/90.356e80c4.js",
    "revision": "1784244f84dc2b6f3ebd6ffc78ab8b70"
  },
  {
    "url": "assets/js/91.efbe9da4.js",
    "revision": "da73b9d00a2a07a6ffbb28e23873b18d"
  },
  {
    "url": "assets/js/92.89a08c16.js",
    "revision": "53982f0f6c6320c9cd0228825952d44e"
  },
  {
    "url": "assets/js/93.7bb24f82.js",
    "revision": "6830cd79887067e7978f18ec88074e5b"
  },
  {
    "url": "assets/js/94.6a11b890.js",
    "revision": "bfeeec9a4698f9c10cbcb013c0cbebf5"
  },
  {
    "url": "assets/js/95.e43143a6.js",
    "revision": "f5e249edbd748ba5d4a27d37acf6e9d2"
  },
  {
    "url": "assets/js/96.9a9179a7.js",
    "revision": "393252a3f3924a2364eefd972a83e079"
  },
  {
    "url": "assets/js/97.8bf6fdb0.js",
    "revision": "b8bb3a2ae12a4ce074cd4384a8ea6b35"
  },
  {
    "url": "assets/js/98.52c296d9.js",
    "revision": "c8dfdbdc364c4f63ff33415ef3e9e685"
  },
  {
    "url": "assets/js/99.6d470e1a.js",
    "revision": "30e43d48c7c8a2e013bf2fff0d919ea0"
  },
  {
    "url": "assets/js/app.0d587972.js",
    "revision": "fb6e042c95f798c5fc81c4a436c6d920"
  },
  {
    "url": "guide.html",
    "revision": "bc7a7b663ea1407e62e4244e9cd0e983"
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
    "revision": "1f717ecaaf47b1d71072699738788235"
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
