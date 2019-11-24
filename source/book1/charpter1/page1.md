---
title: 1.1 Hello 世界!
---
## 一句话Hello
```js
console.log("Hello 世界");
```
一来就是一行代码?别心急,我们来慢慢分析. 首先, 尝试复制到控制台看看会发生什么. (在输入时, 可以感觉到开发者工具的第二个优势, 可以按上下键切换，`TAB` 键补全)

首先我们从英文的角度看看看这行话: 控制台(`console`)记录(`log`)某东西(`"Hello 世界"`)  
怎么样，是不是差不多懂了是啥意思了?

{% note info Hello 世界 %}
大多数的教程开头都会教你如何输出`Hello World!` 这里我采用了golang的风格输出了中英结合的`Hello 世界!`,告诉你JS是兼容中文的 ,有关`Hello World!`的历史, 感兴趣可以自己去查.
{% endnote %}

## sayHello
```js
function sayHello(word){
    console.log("Hello "+word+"!");
}
sayHello("World");
sayHello("世界");
```
{% note info 进度太快了? %}
没关系,在本节中,不要求看懂所有代码,只是给大家展示一下JS常见的几种模式.在后面的章节,我会具体介绍每一个语法点,不过再次,希望大家能尽自己所能,分析分析代码的含义.
{% endnote %}
当我们需要多次重复一项功能时,我们通常会把它做成一个函数(例如: 对多个人`sayHello`)

## Hello Class
```js
function sayHello(person){
    console.log("Hello "+person.name+"!");
    console.log("How old are you?")
    person.answer();
}
class Person{
    //JS中成员属性声明可选, 建议写上
    name;
    age;
    //类构造器
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    //成员函数
    answer(){
        console.log("I'm "+this.age);
    }
    //JS暂时没有私有成员,所有成员均是公开的,且允许修改
}
const jack = new Person("Jack",18);
sayHello(jack);
const alice = new Person("Alice",16);
sayHello(alice);
```
此处的建立了一个类(`class`)名叫`Person`.并用这个类新建了两个对象(`jack`和`alice`),分别调用了`sayHello`.

{% note info Identifier 'Person' has already been declared%}
如果你在控制台多次执行上述代码,可能会遇到该错误.  
原因是,类不允许重复声明(函数可以)  
刷新网页再运行或者不要再声明类(即不要`class Person{...}`)
{% endnote %}

## 小练习
{% note info 关于练习%}
练习是对大家学习的巩固, 所有练习都是可以根据大家已学内容完成的.**强烈建议**大家认真完成.  
未来会上线练习分享功能,让大家可以互相学习.
{% endnote %}
1. 直接在控制台打印第三个例子中的`jack`或`alice`,并研究输出内容(不必深究).(做完第三个例子后,直接输入`jack`回车即可)
2. 编程: 修改第三个例子,增加关于`Where are you from?`的对话
