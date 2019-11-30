---
title: 前言
---
::: warning 本教程未正式开放
该教程刚刚开始编写, 内容未完善且未经校验, 请谅解.  
如果你愿意帮助我改进本教程,请在Github上与我联系
:::
本教程面向的是没有编程基础的用户，采用**以范例为引导**的思想，学习Javascript(下简称JS)语法知识。  
本教程会侧重于JS语法本身，包含新版ES6相关语法，不会侧重于WEB前端开发。

## Javascript介绍
> JavaScript（通常缩写为JS）是一种高级的、解释型的编程语言。JavaScript是一门基于原型、函数先行的语言，是一门多范式的语言，它支持面向对象编程，命令式编程，以及函数式编程。它提供语法来操控文本、数组、日期以及正则表达式等，不支持I/O，比如网络、存储和图形等，但这些都可以由它的宿主环境提供支持。它已经由ECMA（欧洲电脑制造商协会）通过ECMAScript实现语言的标准化。它被世界上的绝大多数网站所使用，也被世界主流浏览器（Chrome、IE、Firefox、Safari、Opera）支持。  
(摘自[WIKI百科](https://zh.wikipedia.org/wiki/JavaScript))

JS是一门高级脚本语言，不需要预先编译，可以即时运行(常听说的Python也是解释型，C系列和Java都是编译型语言)。简单来说，JS功能很丰富，在外部库的支持下，几乎无所不能。新版JS又称作ECMAScript(简称es，最具代表是es2016或es6)。

**注意Javascript和Java除名字以外没有任何相关性**
> 就像雷峰塔和雷锋的关系

### 为什么选择JS？
JS最初应用于浏览器，现在也还是主要应用于WEB前端，但是随着NodeJS和很多前端框架的流行，JS被用于越来越多的方面，例如:
- H5APP(Angular,React,Vue等,还有传统的Jquery)
- 桌面端(Electron,熟悉的有VSCode,Atom,Github,Postman等客户端),
- 手机端(React Native,NativeScript,包括各种应用内的小程序都是用JS作为编程语言),
- 服务器端(依靠Nodejs运行,框架有Express,Koa等)
- 数据库端(MongoDB等NOSQL数据库都开始支持使用JS作为查询语言)
可以看到，JS基本上可以用于开发应用的各个方面，而JS本身作为解释型的编程语言（脚本语言），可以即时运行，方便初学者进行研究和调试。

### 本教程需要的工具：
本着面对初学者的目的，本教程前期不需要安装额外的开发工具，你所需要的只是一个现代的浏览器(Chrome,Edge,firefox等均可，IE就不提了)  
可以使用浏览器的开发者工具(按F12可打开)中的控制台(Console)研究JS(别着急,1.0节我会带你一步一步使用的). 

## 关于作者
**WayZer**(网名)， 有4年开发经验，目前还在上大一，懂得Java,Kotlin,JS,Typescript,Golang,C++,Python,CSharp等多种编程语言(主要应用Kotlin,Typescript,Golang)，研究过多个开源程序(或框架)，在[Github](https://github.com/way-zer)上有多个开源项目。