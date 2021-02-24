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
    "revision": "d1098e67a6f48b7241fab9c96ded2272"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/02.LinkListANDTree/01.链表专题.html",
    "revision": "cedf9073a8637e60279b10189a6da85f"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/02.LinkListANDTree/02.树专题.html",
    "revision": "46afb9cef1fe2747ec3ef83d836bd99c"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/03.STL/00.STL概览.html",
    "revision": "f201b82e60ad17d18daeba832c42525b"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/03.STL/01.STL容器记忆.html",
    "revision": "d01613dec240c1da29d7337dbf9a36e2"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/03.STL/02.STL常用算法积累.html",
    "revision": "6cec1db5e16326faa62c37713b7eb234"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/03.STL/03.字符串专题详解.html",
    "revision": "b973505a8637886d07436fce52bcc618"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/03.STL/04.C++中string源码剖析.html",
    "revision": "2612a262733ea165260e4a25500a5a50"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part00.Challenge.html",
    "revision": "b08fc75f593f883aedb5198d60165fcd"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part00.OJ.html",
    "revision": "932812c7a74615d17e3439ac785f404d"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part02.Dp.html",
    "revision": "9d069583c4bb81adef580d7f538c6ced"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part04.StringMatching.html",
    "revision": "bab74fa696623ec8001c6b3e9e1c5a87"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/Part05.ICPC.html",
    "revision": "f3b8037b6fc56b54808e007efe5378e4"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/____链表和树和图刷题经验.html",
    "revision": "3c3ccafa8c326659c5f3b5031384662d"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/——设计数据结构/2020-11-14-TrieTree.html",
    "revision": "a7d9c6ede5e4d12d98d721744845d04d"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/——设计数据结构/2020-11-16-LRU.html",
    "revision": "dba804b1b28921b92ebe1e91374bf05a"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/——设计数据结构/2020-12-17-SkipList.html",
    "revision": "a3a30fc4b866a3557e361a7f3241a18c"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/——设计数据结构/index.html",
    "revision": "516cfb0fb8907eace36ccd915e601095"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/——设计数据结构/LRU缓存结构.html",
    "revision": "ea58a9d7ed4cf1fddbb04d323d8e692d"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/——设计数据结构/设计跳表.html",
    "revision": "ac396126f7b4dfe03061be6f9ec68973"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/11.CCF第3题对症下药_精简代码 (1).html",
    "revision": "4a48485e28df3575981b91281957de1f"
  },
  {
    "url": "02.DataStructureAndAlgorithm/00.STL/其他未整理/12.CCF第4题对症下药_图论.html",
    "revision": "42f982a22bf029384344a6eb100d52c4"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/01.排序算法复杂度记忆.html",
    "revision": "53e9c3ae5f4db90fb71147aefbb42dd7"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/02.九大排序模板.html",
    "revision": "f6c32407a41779230b7f4572bbaa31ca"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/03.LinearSort.html",
    "revision": "6c396dfc002af80f4a905987d532dbb8"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/09.二分查找.html",
    "revision": "e8895bf534263c1483f8ced97d9db6af"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/排序和查找.html",
    "revision": "3bf537104dae47fba589303f89967b2f"
  },
  {
    "url": "02.DataStructureAndAlgorithm/01.sortANDsearch/数组-两数之和.html",
    "revision": "54d705bcd250ca2733602cc9f5737f2f"
  },
  {
    "url": "02.DataStructureAndAlgorithm/02.Skills/01.双指针专题.html",
    "revision": "4f0a314ef948707a1ccf602f6106dcc5"
  },
  {
    "url": "02.DataStructureAndAlgorithm/02.Skills/02.递归专题.html",
    "revision": "9eed4fcbf90ba023ba0c43a8a9487d00"
  },
  {
    "url": "02.DataStructureAndAlgorithm/03.SupplyBox/02.位运算专题总结.html",
    "revision": "eb8166b9c95f868a79893975c74c4c49"
  },
  {
    "url": "02.DataStructureAndAlgorithm/03.SupplyBox/algorithm/01.Manacher.html",
    "revision": "3409a10922aa64386b91814bf6824b4d"
  },
  {
    "url": "02.DataStructureAndAlgorithm/04.math/01.Prime_sieve_algorithm.html",
    "revision": "013410db4daf51ef0e64a0804b349f54"
  },
  {
    "url": "02.DataStructureAndAlgorithm/05.DFS_BFS/01.图论DFS和BFS模板.html",
    "revision": "0377b48bd3b1fb8bda38bf879fb032cd"
  },
  {
    "url": "02.DataStructureAndAlgorithm/06.ICPC/01.BinaryIndexedTree.html",
    "revision": "fe69f08adee76947fd7bab4f3aa7f2d6"
  },
  {
    "url": "02.DataStructureAndAlgorithm/06.ICPC/02.SegmentTree.html",
    "revision": "62e732c8d495ddd3abb2981823f1eeee"
  },
  {
    "url": "02.DataStructureAndAlgorithm/06.ICPC/03.ChairmanTree.html",
    "revision": "81240c15e0093251d7e86f3b0816ded2"
  },
  {
    "url": "02.DataStructureAndAlgorithm/index.html",
    "revision": "d0613471e386b8d4848f1731f86af7db"
  },
  {
    "url": "03.OS/index.html",
    "revision": "6160894135dc57021d823872207aefea"
  },
  {
    "url": "03.OS/Linux/01.MyDebian.html",
    "revision": "2c4528b3ca525a3567c4c86b575b2454"
  },
  {
    "url": "03.OS/Linux/02.MyRedhat.html",
    "revision": "a231bc6b39c319b30032ff7401709917"
  },
  {
    "url": "03.OS/Linux/03.Linux_Vim.html",
    "revision": "3ef0c40028a6eabc20e42256d937d3b7"
  },
  {
    "url": "03.OS/Linux/04.LinuxCommand.html",
    "revision": "3db1cdbf83c5482dfaade530821f74d5"
  },
  {
    "url": "03.OS/Linux/05.kaliLinux.html",
    "revision": "55ac2140d4b4c7e368e62698ab27793f"
  },
  {
    "url": "03.OS/Linux/05.Linux资源库.html",
    "revision": "9f4eba92baeeb85fa81c918c462efbff"
  },
  {
    "url": "03.OS/Linux/06.LinuxNote.html",
    "revision": "30cf649a148a63e5e1af2df78948c900"
  },
  {
    "url": "03.OS/Linux/07.Linux网络诊断.html",
    "revision": "9b6495289e36041ae1b3a8d6e9ab1bb0"
  },
  {
    "url": "03.OS/OSBasic/01.POSIX.html",
    "revision": "7b10fba5f369afd343275dfdde1f0aa9"
  },
  {
    "url": "03.OS/OSBasic/02.Unix和Linux开发推荐.html",
    "revision": "49e0e320cca8658e7e9619a6aae6213a"
  },
  {
    "url": "03.OS/OSBasic/03.OS概念辨析.html",
    "revision": "1584b8440a06af563802e4a08385100a"
  },
  {
    "url": "03.OS/OSBasic/04.Linux系统编程.html",
    "revision": "b00300df6669882a985471841e1dba1a"
  },
  {
    "url": "03.OS/OSBasic/05.进程间通信.html",
    "revision": "6f8fcaca8f64674514adc1025fe93006"
  },
  {
    "url": "03.OS/OSBasic/06.线程编程.html",
    "revision": "066c6321dccff58447cbe347230ac3d3"
  },
  {
    "url": "03.OS/OSBasic/OS实验.html",
    "revision": "2f7077de22a997d10a9cee13328edaae"
  },
  {
    "url": "03.OS/Windows/00.EnvironmentVariable.html",
    "revision": "7214c4aad92bb5699583d3651ff67805"
  },
  {
    "url": "03.OS/Windows/01.ToolSoftwareShortcut.html",
    "revision": "094f0357aa495ebc313b922fa679a112"
  },
  {
    "url": "03.OS/Windows/02.RunCommand.html",
    "revision": "8678fa008f191978d41309f3ec1119d6"
  },
  {
    "url": "03.OS/Windows/03.GlobalShortcut.html",
    "revision": "d75b05b6ea31b13980079724d7d3520d"
  },
  {
    "url": "03.OS/Windows/04.WindowsLinuxDirectory.html",
    "revision": "9cdce2fc782d89b34bbc6c48a9b18f2c"
  },
  {
    "url": "03.OS/Windows/05.DistinguishVB_A_S.html",
    "revision": "4a547c38b054673089a746a2b8df2842"
  },
  {
    "url": "03.OS/Windows/06.OtherShortcut.html",
    "revision": "4f3814de171eeb60f65bdaef2df13d9a"
  },
  {
    "url": "03.OS/Windows/07.WindowsRegistry.html",
    "revision": "d31875b8fedb6bc3863860a83f64669c"
  },
  {
    "url": "03.OS/Windows/08.Windows10电脑经验.html",
    "revision": "081bed1150bafc01e3d2640e76e19443"
  },
  {
    "url": "04.Net/Analyse/01.LinuxAndWindows.html",
    "revision": "19e6bd6cc8f380a2656611ad9a2d2e11"
  },
  {
    "url": "04.Net/Analyse/02.wireshark基础.html",
    "revision": "306631cb96546a82007f91fd7a876878"
  },
  {
    "url": "04.Net/Analyse/03.网络模拟实验环境软件.html",
    "revision": "b7fb612a8d50b7006ab9b7b9d7d123db"
  },
  {
    "url": "04.Net/Basis/01.TCPIP.html",
    "revision": "3e20f2c2171d7b98a9769dfdd5ae85bf"
  },
  {
    "url": "04.Net/Basis/02.NetBasis.html",
    "revision": "03d80bbbaeb9f2adc6e8ef5558d2b2b3"
  },
  {
    "url": "04.Net/Basis/03.TCP.html",
    "revision": "0b6ff0e7d7bad8cd27023b8d602e1e6d"
  },
  {
    "url": "04.Net/Basis/05.FAQ.html",
    "revision": "0351fffc60268fc71747b0b112537bb1"
  },
  {
    "url": "04.Net/index.html",
    "revision": "bddc7d54ca4d64b7d973ae522bbcb009"
  },
  {
    "url": "04.Net/Server/Part01.多进程和多线程服务器.html",
    "revision": "b126e4e5002db422554748868f1963b6"
  },
  {
    "url": "04.Net/Server/Part02.Unix和Linux下IO多路复用服务器.html",
    "revision": "ef2cc75a77caea4ac5a2379840c328c7"
  },
  {
    "url": "05.SE/DesignPatterns/01.DesignPatterns.html",
    "revision": "9369d73d0ab874105368ec38ae3e5b80"
  },
  {
    "url": "05.SE/DesignPatterns/02.Singelton.html",
    "revision": "118d245bb8945417183c0837da32d972"
  },
  {
    "url": "05.SE/index.html",
    "revision": "1aa74c58c0e7f6eb762cce9afd5acb9b"
  },
  {
    "url": "05.SE/UML/01.UML.html",
    "revision": "477c59ccc4a6f7076d751238b6800623"
  },
  {
    "url": "05.SE/UML/02.UML.html",
    "revision": "f27e00b3078cb37967f410ce099f6390"
  },
  {
    "url": "06.SQL/01.SQL/01.SQL语法.html",
    "revision": "e0b6d3893757c8d2e50da3ab32e731b1"
  },
  {
    "url": "06.SQL/01.SQL/02.SQL解决方案资料.html",
    "revision": "6e3e917772cbcbf54a0f66b7cc41bd87"
  },
  {
    "url": "06.SQL/02.DataBase/03.红黑树.html",
    "revision": "c384cf7a04018604dbdfa82e4c74b9db"
  },
  {
    "url": "06.SQL/04.Redis/01.Redis.html",
    "revision": "dc666012605a5559f35f6ee0304f7ffe"
  },
  {
    "url": "06.SQL/index.html",
    "revision": "36e13db366678782e514bcbf949bb711"
  },
  {
    "url": "07.InternalSkill/Assembly/00.AssemblyTools.html",
    "revision": "a50b0dbe8339ad7a73c40145487fc9ae"
  },
  {
    "url": "07.InternalSkill/Assembly/01.AssemblyReadingSkills.html",
    "revision": "56191197569994492e60daf9fd65c372"
  },
  {
    "url": "07.InternalSkill/Assembly/02.ASCII.html",
    "revision": "1bbedde2636ff1d5a0f5eb1e93cd8e50"
  },
  {
    "url": "07.InternalSkill/Assembly/03.AT_T汇编与INTEL汇编.html",
    "revision": "c4be2bc603bad9d6efa6989b2fdace3d"
  },
  {
    "url": "07.InternalSkill/Assembly/04.X86_Register.html",
    "revision": "86335be20e88ddec423df89f0b3632fa"
  },
  {
    "url": "07.InternalSkill/Assembly/05.NASM的AT_T汇编.html",
    "revision": "d2f8e1cee7b59ae52d8452042068d4c7"
  },
  {
    "url": "07.InternalSkill/Assembly/06.汇编手动加栈.html",
    "revision": "298e7acc59dc90ac16955e27f16e8b3f"
  },
  {
    "url": "07.InternalSkill/Hardware/01.各大电脑厂商进入BIOS.html",
    "revision": "6a43ad4013ca3f71da9f26f4e6e57f07"
  },
  {
    "url": "07.InternalSkill/Hardware/2020-06-25-Underlying-coding.html",
    "revision": "dce1f1fc650718f52de1456c05eef6c6"
  },
  {
    "url": "07.InternalSkill/Hardware/2020-06-26-Displacement.html",
    "revision": "e073015a05e49df627e0abc7c2d9f653"
  },
  {
    "url": "07.InternalSkill/index.html",
    "revision": "f55b5218f492c2f044d570c6e5f88a36"
  },
  {
    "url": "07.InternalSkill/PrinciplesOfCompilation/01.内存对齐.html",
    "revision": "6aa1bfd5701c7663986799d29283cd52"
  },
  {
    "url": "07.InternalSkill/PrinciplesOfCompilation/02.BigEndianLittleEndian.html",
    "revision": "5c0d88bb9a3f46ff0cecf50fd26a238f"
  },
  {
    "url": "07.InternalSkill/PrinciplesOfCompilation/Part01.RPC.html",
    "revision": "d40861ecbf48a38c0ecc51aa1f3fde38"
  },
  {
    "url": "07.InternalSkill/PrinciplesOfCompilation/Part02.GCC.html",
    "revision": "08fd66d0f7a2ef697b88f032f03480f6"
  },
  {
    "url": "08.Tools/book/00.书单和思考.html",
    "revision": "3e30e78564863e7df5c274e288b9e4ed"
  },
  {
    "url": "08.Tools/employment/01.IT类公司传送门.html",
    "revision": "fff25561a1b7e35317d1c14ba9e27eff"
  },
  {
    "url": "08.Tools/employment/02.公司福利.html",
    "revision": "c147071f8c00ebca901d58921b72d081"
  },
  {
    "url": "08.Tools/employment/03.IT技术岗位求职流程和术语.html",
    "revision": "0440f5925cf6f1d5a8b487bf1291cac0"
  },
  {
    "url": "08.Tools/employment/04.FAQ.html",
    "revision": "b76f6641c6c9863b6c2b28a9f8ba6db8"
  },
  {
    "url": "08.Tools/index.html",
    "revision": "b4be025ffda7f62fef3e6f1c61f19ef9"
  },
  {
    "url": "08.Tools/ToolSoftware/01.Markdown.html",
    "revision": "a9f71965919a5d470bf487fe7b15d648"
  },
  {
    "url": "08.Tools/ToolSoftware/02.Git.html",
    "revision": "2cdd673e139d4a0fb01f8274af8ee250"
  },
  {
    "url": "08.Tools/ToolSoftware/03.gdb和makefile.html",
    "revision": "443737d94e3b0655de501460c8f42d69"
  },
  {
    "url": "08.Tools/ToolSoftware/04.Xmind.html",
    "revision": "2431da2d1e52829a3143613b4f65a10b"
  },
  {
    "url": "09.Language/00.GeneralEducation/00.编程的其他通识知识.html",
    "revision": "b36f8b36cdb7fb2aa700102335e08333"
  },
  {
    "url": "09.Language/00.GeneralEducation/01.TheRulesOfVariableName.html",
    "revision": "dfc2d0ae818772d4e44ca7bbaac5e6a4"
  },
  {
    "url": "09.Language/00.GeneralEducation/09.ICPC模板收集和思考.html",
    "revision": "826c43fe11fcfdafb96740d23e7c96ad"
  },
  {
    "url": "09.Language/01.core/01.C语言指针详解.html",
    "revision": "2a47909e43457ae66b0d14d24ae15d84"
  },
  {
    "url": "09.Language/01.core/01.内存管理.html",
    "revision": "187a57793152565faf731ae50ac80e93"
  },
  {
    "url": "09.Language/01.core/02.C_priority_and_associative_memory.html",
    "revision": "640339d5aad3b6c18108f093177bcb40"
  },
  {
    "url": "09.Language/01.core/03.C语言内嵌汇编.html",
    "revision": "980a9909bf4815625a0a4b26e320e72e"
  },
  {
    "url": "09.Language/01.core/04.深浅拷贝.html",
    "revision": "7156e1cf537dac49a1c902b40dfdf795"
  },
  {
    "url": "09.Language/01.core/05.ValueAddressReference.html",
    "revision": "804c0f3a470510e1d326ea4076853cd9"
  },
  {
    "url": "09.Language/01.core/06.C++变量的各种属性.html",
    "revision": "507153700e91f3325df3bd511f4f4334"
  },
  {
    "url": "09.Language/01.core/07.声明和定义和接口和实现.html",
    "revision": "378a91ac8622f2e4dcfa9ab0ebfe6e1d"
  },
  {
    "url": "09.Language/01.core/2020-12-15-CandPointer.html",
    "revision": "8df53083b37e87c7a889ee5cd907dbb4"
  },
  {
    "url": "09.Language/01.core/2020-12-25-constant.html",
    "revision": "fa266331bd6b66c69c3ed1163b5535aa"
  },
  {
    "url": "09.Language/01.core/C++核心/01.C和C++优先级详解.html",
    "revision": "2820d54fbd7d30bb652a426d567b6944"
  },
  {
    "url": "09.Language/01.core/contrast/01.C和C++中变量对比.html",
    "revision": "125166ba0cbeef8adfc55b06b30e4e73"
  },
  {
    "url": "09.Language/02.function/01.sscanfANDsprintf.html",
    "revision": "bd330a79c632ceb6931390b697015769"
  },
  {
    "url": "09.Language/02.function/02.memset_fill.html",
    "revision": "583ae7f110798b6d187b1e0d7c4f7506"
  },
  {
    "url": "09.Language/04.history/___多态强化练习题01.html",
    "revision": "7cb69cbb6e9aa870ed7c724f1036d326"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/01.命名空间.html",
    "revision": "be11b7eb1a832681ed88ca10b59b287d"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/02.static成员.html",
    "revision": "06aa7e1e992680f16b7877a1a45d3a26"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/03.到底什么是成员函数.html",
    "revision": "373f909c7f0aa7dd390d8059a3896810"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/04.C语言中的流和缓冲器的概念.html",
    "revision": "d70447c7d6b76eee5b0138d5b0357d25"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/C++中变量和函数.html",
    "revision": "1bb1ca559edd60868b65c24f96c8e90f"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/C++对C的加强namespace.html",
    "revision": "17c70f214637c63e086807c1e701839d"
  },
  {
    "url": "09.Language/04.history/01.C++对C的拓展/C++概念辨析详解.html",
    "revision": "d81294ee0a96fe5f5e1a8ea02bd20274"
  },
  {
    "url": "09.Language/04.history/01.面向对象难点.html",
    "revision": "94d43272208a80eb52da2ff56464f06f"
  },
  {
    "url": "09.Language/04.history/02.C++多态详解.html",
    "revision": "0c37a148d13ba58845db23f7f91fd716"
  },
  {
    "url": "09.Language/04.history/03.C++重载详解.html",
    "revision": "80994a091901f9b6518e9237c69eee21"
  },
  {
    "url": "09.Language/04.history/C++.html",
    "revision": "69483628534e345ed39670bab40ebfe8"
  },
  {
    "url": "09.Language/04.history/C++extension/01.C++中的const.html",
    "revision": "f4862aab23d38b47ab74480458d29d60"
  },
  {
    "url": "09.Language/04.history/LanguangeC/002.柔性数组.html",
    "revision": "4a2e7a6eb1b0db4c02ff308b561d7ddf"
  },
  {
    "url": "09.Language/04.history/LanguangeC/01.C语言数组不完全初始化.html",
    "revision": "e9795c0502a8c1587e899de4629c0d82"
  },
  {
    "url": "09.Language/04.history/LanguangeC/03.C语言没有数组下届检查.html",
    "revision": "15807b54d610b027ebf6690bf467b71c"
  },
  {
    "url": "09.Language/04.history/LanguangeC/03.联合体.html",
    "revision": "618e7f9efa5e2b346182a752c0e52108"
  },
  {
    "url": "09.Language/04.history/LanguangeC/04.位段.html",
    "revision": "65838aa8c11132458938fb77a686e33e"
  },
  {
    "url": "09.Language/04.history/LanguangeC/05.const在C语言中.html",
    "revision": "f72a0ea61ce4f30841ed14c4560b844c"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-06-06-The-development-of-C-language-standard.html",
    "revision": "060a121ec49e6e4e3e8699469c7beb82"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-07-29-Const-Define.html",
    "revision": "ad7011061e13f33493c5a060ffd71a3c"
  },
  {
    "url": "09.Language/04.history/LanguangeC/2020-12-25-constant.html",
    "revision": "95dd423e2290df226308106a5062289f"
  },
  {
    "url": "09.Language/index.html",
    "revision": "2a4ee0b09080562615abb230acca342d"
  },
  {
    "url": "404.html",
    "revision": "821e285ed1e2e73a9c98727b9a0931ab"
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
    "url": "assets/js/100.ee7a4c46.js",
    "revision": "ab803eb4beb5014ce0e5b6273cb8bba7"
  },
  {
    "url": "assets/js/101.42a286e0.js",
    "revision": "e01cdbb954042caf059c49309585871c"
  },
  {
    "url": "assets/js/102.7f9859de.js",
    "revision": "a5de62baa9accbe1f0e43c5b7a4fb496"
  },
  {
    "url": "assets/js/103.298b9272.js",
    "revision": "69e0e11fef1049079b849c2fd34269d1"
  },
  {
    "url": "assets/js/104.78fa45f8.js",
    "revision": "27f4c32762347c715feca6de3f3070c7"
  },
  {
    "url": "assets/js/105.251d6fbc.js",
    "revision": "9a2fb1ecffb3eb0094e0988d28f3bea5"
  },
  {
    "url": "assets/js/106.3bc5425b.js",
    "revision": "ea038f3b413f16ba109e0252801a72f1"
  },
  {
    "url": "assets/js/107.22d066f5.js",
    "revision": "9f501b3abc90e533aee19c3fa3c658a8"
  },
  {
    "url": "assets/js/108.b6a81045.js",
    "revision": "cd4ed7abe45e15fe51fefbdba3a87f88"
  },
  {
    "url": "assets/js/109.2cd373a7.js",
    "revision": "ba78906e497936e99d239d3e29c5fa76"
  },
  {
    "url": "assets/js/11.390e9c09.js",
    "revision": "b4307833dc20b6817ca3b3596dd79ea3"
  },
  {
    "url": "assets/js/110.6b58e579.js",
    "revision": "e891410a14872388ba52fdec8196c4ad"
  },
  {
    "url": "assets/js/111.1122d15d.js",
    "revision": "80c3a2ca6caa88b09d34e1144f306c2a"
  },
  {
    "url": "assets/js/112.72b4df6d.js",
    "revision": "d3d28038b4105f64cee8a2663a0ec377"
  },
  {
    "url": "assets/js/113.bdcdb1ed.js",
    "revision": "b80fb52fe38eb8841be3f386dfc41bac"
  },
  {
    "url": "assets/js/114.d687fa49.js",
    "revision": "f93263da771df3c7f4b22c3cc6526385"
  },
  {
    "url": "assets/js/115.6cf5d742.js",
    "revision": "b7e02b84693075e0df74594dc28bc0bd"
  },
  {
    "url": "assets/js/116.b1535253.js",
    "revision": "53d200c4bdc8605b186842cc1d9b557c"
  },
  {
    "url": "assets/js/117.3fcd2638.js",
    "revision": "cf0ecc9b631cff38a539668364bbc0dd"
  },
  {
    "url": "assets/js/118.db1ca4b5.js",
    "revision": "d2f609db747507d9174112ce58e35d5a"
  },
  {
    "url": "assets/js/119.c454f58a.js",
    "revision": "06933acd7d13d810894c7f5d648511c0"
  },
  {
    "url": "assets/js/12.47752e11.js",
    "revision": "8908cb11413ff07f46af3493a3bda492"
  },
  {
    "url": "assets/js/120.30eb7327.js",
    "revision": "ff44542a01308db6c5b582db72b2ced7"
  },
  {
    "url": "assets/js/121.d51eea05.js",
    "revision": "a106d1dab1ca6271e174b0fbfff37ba1"
  },
  {
    "url": "assets/js/122.ca886807.js",
    "revision": "ccc00447d2c1a2244de9f6184ebc35ea"
  },
  {
    "url": "assets/js/123.697a4ac0.js",
    "revision": "1d9f996a5db871a24adeb8d1854e3d28"
  },
  {
    "url": "assets/js/124.52bc65ad.js",
    "revision": "a7cfd3773c0bd203c9012a01334fb94c"
  },
  {
    "url": "assets/js/125.4a6317fa.js",
    "revision": "7d542a1bc4a4081ba1070deb4618c900"
  },
  {
    "url": "assets/js/126.63241c6a.js",
    "revision": "21ab6888a9af196606868dbb87071602"
  },
  {
    "url": "assets/js/127.3a30ef80.js",
    "revision": "8fbfb8e79553950d6c2f18cf25107ae6"
  },
  {
    "url": "assets/js/128.a43fa6f0.js",
    "revision": "83b9c10b149bfefc32b3f5b87852b092"
  },
  {
    "url": "assets/js/129.168fa034.js",
    "revision": "903c5de4f3aa4f437c20b1f062a702cc"
  },
  {
    "url": "assets/js/13.9ab56618.js",
    "revision": "25686229c1380ba1c7baf794093ec481"
  },
  {
    "url": "assets/js/130.4589bf48.js",
    "revision": "e0a71ca07a416196a2222f59dd65aac4"
  },
  {
    "url": "assets/js/131.c1884fad.js",
    "revision": "46e7ee2eb428fd47d8444a038e76f1e2"
  },
  {
    "url": "assets/js/132.0d2b7cb4.js",
    "revision": "dffcca6d1bfc95d3a1cb2ab941674eab"
  },
  {
    "url": "assets/js/133.618ee210.js",
    "revision": "7062d426b51cd4b4c61d006940d49767"
  },
  {
    "url": "assets/js/134.63f25538.js",
    "revision": "e67c8cd0f39aa4c80e378d038613d520"
  },
  {
    "url": "assets/js/135.0d97304f.js",
    "revision": "b78fa8dcd7ae7f6da1f176c3ea9c7d5b"
  },
  {
    "url": "assets/js/136.3b0b8612.js",
    "revision": "d57ce7ed5d2043e91f4749a56d0891ff"
  },
  {
    "url": "assets/js/137.b7766757.js",
    "revision": "27893b24832edef35fd174d8be2cb3f7"
  },
  {
    "url": "assets/js/138.1904a273.js",
    "revision": "abfea6f1a3cf0ab654235cb63ed09e81"
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
    "url": "assets/js/140.ccc635b6.js",
    "revision": "ebb4a8abc21ce3f64aa1a6365f6ec940"
  },
  {
    "url": "assets/js/141.a78d121e.js",
    "revision": "628138c9fc4c96a300864b9393bdd8bd"
  },
  {
    "url": "assets/js/142.6a2673a5.js",
    "revision": "781729ee6a033db198a36ba677022a4c"
  },
  {
    "url": "assets/js/143.22db839b.js",
    "revision": "28c19a6baf33641269d473b3c580dee2"
  },
  {
    "url": "assets/js/144.f675638d.js",
    "revision": "5a086f6bfd42d366d8fa80f5acaeb406"
  },
  {
    "url": "assets/js/145.a1880528.js",
    "revision": "a9d4f1da5892a0536785c29252b90bed"
  },
  {
    "url": "assets/js/146.354b06cd.js",
    "revision": "621d3b6d5e17c07d2708d5a6825e20e7"
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
    "url": "assets/js/149.3585c1da.js",
    "revision": "28e3211a67f097153292a730eda93587"
  },
  {
    "url": "assets/js/15.7d2d48ae.js",
    "revision": "dc03d0433d6a28669ddb97ac7175a793"
  },
  {
    "url": "assets/js/150.2613cc4c.js",
    "revision": "ae3c164b3f5763c993aa648445a09e91"
  },
  {
    "url": "assets/js/151.c958e8d6.js",
    "revision": "c591d8d4e318cb90c755d45c405050c5"
  },
  {
    "url": "assets/js/152.315024ad.js",
    "revision": "7b7fe8df0b847cd6b118088672dcff62"
  },
  {
    "url": "assets/js/153.e24034f9.js",
    "revision": "1f7c43344ba6b8adeee39515e641b28e"
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
    "url": "assets/js/33.80d80fee.js",
    "revision": "264ba636ec0dfcd04c31101a0147d5b0"
  },
  {
    "url": "assets/js/34.e1287e62.js",
    "revision": "86f3d707679527b6515f03dffb719c03"
  },
  {
    "url": "assets/js/35.047e41da.js",
    "revision": "fd17eb11391cb848433950cf31d7910a"
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
    "url": "assets/js/4.ba718c7b.js",
    "revision": "b656b6c63ff650e579a99b0abe9d12d7"
  },
  {
    "url": "assets/js/40.a70e21bb.js",
    "revision": "ed275e9966fe91a7698dcd0a98d0d0b0"
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
    "url": "assets/js/47.d0e55fa3.js",
    "revision": "334da58ba6a65a48265c213f6fba4586"
  },
  {
    "url": "assets/js/48.170cc5e4.js",
    "revision": "70fb289fa470825203d2396b2af8ffe5"
  },
  {
    "url": "assets/js/49.dd11397f.js",
    "revision": "bacd59179028bab1338deca8065a15e8"
  },
  {
    "url": "assets/js/5.4ebbb385.js",
    "revision": "279e303013aaf31c2d66c34447d0a556"
  },
  {
    "url": "assets/js/50.47bf653e.js",
    "revision": "34856d6a9d318298608a64d788375c94"
  },
  {
    "url": "assets/js/51.34a93758.js",
    "revision": "4e7c8994fba6f3e72690b33d8f90798d"
  },
  {
    "url": "assets/js/52.431fc761.js",
    "revision": "a302f0561f23535c2c3f5513ca1f0459"
  },
  {
    "url": "assets/js/53.ef149a01.js",
    "revision": "899c7c4eebc47cf37303d448d89a384e"
  },
  {
    "url": "assets/js/54.6f595df2.js",
    "revision": "f19686360508d2f514e5fc26fc953881"
  },
  {
    "url": "assets/js/55.87cc1312.js",
    "revision": "ba980ff54832e268c6c418fb1f3c7f4b"
  },
  {
    "url": "assets/js/56.3d05bdcc.js",
    "revision": "8203a66517b274892d67db4c3473626b"
  },
  {
    "url": "assets/js/57.caa5f93a.js",
    "revision": "0cc37604a1a405e5717e8ad82ec364c9"
  },
  {
    "url": "assets/js/58.81155e36.js",
    "revision": "c530679a578f7a73122eb8be2df48bde"
  },
  {
    "url": "assets/js/59.e08a57ff.js",
    "revision": "3e5fac0b8aaaf0f1aa6b9f919967f569"
  },
  {
    "url": "assets/js/6.0bff5906.js",
    "revision": "91dc44d56e1d4d81b033cfcacbfc599c"
  },
  {
    "url": "assets/js/60.fb48eb65.js",
    "revision": "ad8e5100be8e326fbee4e1efdaa999c4"
  },
  {
    "url": "assets/js/61.b96b4857.js",
    "revision": "49e5af7eb528e2f12263eaabb6a9f5f8"
  },
  {
    "url": "assets/js/62.95df7c0f.js",
    "revision": "11cbf95ce26a0a2eb42565ca482c1fee"
  },
  {
    "url": "assets/js/63.c0e8f45a.js",
    "revision": "74637b07722eb8877ec0abf69c0b4cfb"
  },
  {
    "url": "assets/js/64.123f6205.js",
    "revision": "fd4e839aae9ca529ca116a170a117b5d"
  },
  {
    "url": "assets/js/65.4f0b9c3f.js",
    "revision": "32df3100b5e31f9fb9e107c401d9f1cb"
  },
  {
    "url": "assets/js/66.5b421a1d.js",
    "revision": "782791cc5478aae6126e8047861167f5"
  },
  {
    "url": "assets/js/67.75c9f4f8.js",
    "revision": "c0c254de143809b4f6c6dda76e7d5523"
  },
  {
    "url": "assets/js/68.7ec0c505.js",
    "revision": "397bfba033e85bf3040b5c325833e29d"
  },
  {
    "url": "assets/js/69.56cdd1c7.js",
    "revision": "b3077383db0dc416bd2338a79e798e8a"
  },
  {
    "url": "assets/js/7.38fc841b.js",
    "revision": "538520a264f24b4eea5519edd57ce445"
  },
  {
    "url": "assets/js/70.51c8d23a.js",
    "revision": "fcfeca6c19accfa30a6f0761343492ca"
  },
  {
    "url": "assets/js/71.19f5c32c.js",
    "revision": "092eea702e917df67a6c5441a3c64c79"
  },
  {
    "url": "assets/js/72.03a9f5e4.js",
    "revision": "d3cad2026dca892731942d061a640767"
  },
  {
    "url": "assets/js/73.9b88f44b.js",
    "revision": "8b81dd474831d760348e4cfbfd0c105d"
  },
  {
    "url": "assets/js/74.daa81746.js",
    "revision": "c054df081b5b5d276234926fe95a8b19"
  },
  {
    "url": "assets/js/75.8cc9672d.js",
    "revision": "095f5164869117297f27a237769dd8e5"
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
    "url": "assets/js/78.8d5cfeca.js",
    "revision": "9e8d44640b5ef2127afdd1dfee596e9c"
  },
  {
    "url": "assets/js/79.24cdce5c.js",
    "revision": "0289ce346632964a2e09c84a0d6d9b9b"
  },
  {
    "url": "assets/js/8.f1e98a93.js",
    "revision": "213862671bca594c2fdf54b5415d8dd6"
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
    "url": "assets/js/82.dff2af03.js",
    "revision": "fc304d09db2005b7c8c30de05cd4c070"
  },
  {
    "url": "assets/js/83.99b7a775.js",
    "revision": "dd8adc7825bce4b749458b3c4eebc75f"
  },
  {
    "url": "assets/js/84.dbec8ce7.js",
    "revision": "aeb6ea4a8ce77b593141fa2ab6f64d6d"
  },
  {
    "url": "assets/js/85.6509c1de.js",
    "revision": "0f92b67bc90c37e2e94601101f91e9ea"
  },
  {
    "url": "assets/js/86.f07b0ca0.js",
    "revision": "7d329d2ca55113ba9ec752532e31f6fe"
  },
  {
    "url": "assets/js/87.44796890.js",
    "revision": "2b34b967f4369f0c622150600411b73e"
  },
  {
    "url": "assets/js/88.4a11e112.js",
    "revision": "d2a745d96b18fb8c1d05a15977717285"
  },
  {
    "url": "assets/js/89.adbf18c5.js",
    "revision": "52354f7fd4203edc15067efc6daf153a"
  },
  {
    "url": "assets/js/9.76534e6a.js",
    "revision": "f7f3f146678e907c3fdc1e627d2ed21b"
  },
  {
    "url": "assets/js/90.c7ea7ca7.js",
    "revision": "2c647d57679a59a19b37317eb5f4ac50"
  },
  {
    "url": "assets/js/91.0dc967ad.js",
    "revision": "e8fab56ed17c783fd82b1041f1da4ad4"
  },
  {
    "url": "assets/js/92.e48daf13.js",
    "revision": "dcbac6e931d3f1ef9d8675e202dacf9f"
  },
  {
    "url": "assets/js/93.da65bd6d.js",
    "revision": "a25600b774bb3ff0b08aa3fe01febe41"
  },
  {
    "url": "assets/js/94.92d9f38e.js",
    "revision": "e11e7ab8cec50606fc4e63f4405038ed"
  },
  {
    "url": "assets/js/95.3756691a.js",
    "revision": "e0fd02a07b403d77ca1ab77d19a2a432"
  },
  {
    "url": "assets/js/96.31621153.js",
    "revision": "51f5202cd49c274242c64932d49769a3"
  },
  {
    "url": "assets/js/97.d8b77542.js",
    "revision": "9d28e3c4a97cfbc2f1da70f8c4db2f56"
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
    "url": "assets/js/app.6697a4bb.js",
    "revision": "298b6206e9aa4d24fcc83455a8ab8e73"
  },
  {
    "url": "guide.html",
    "revision": "532510a400d21674e818e0d82d5514f8"
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
    "revision": "c572c08e5a631fbdd62da9e2160b24fd"
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
