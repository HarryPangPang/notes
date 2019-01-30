---
title: React虚拟dom
date: 2019-01-30 15:02:10
tags:
---
什么是react虚拟dom？
这就要从react如何渲染出页面开始
通常情况下的步骤是这样
1. 获取state数据
2. JSX模板
3. state+JSX模板结合，生成真实dom并显示

这个是在state不发生变化的情况下，（state或者prop发生变化都会调用render函数，重新渲染页面）

state数据变化时，通常理解下应该是下面的步骤
1. 获取state数据
2. JSX模板
3. state数据+JSX模板结合，生成真实dom并显示
4. state数据发生变化
5. 新的state数据+JSX模板结合，生成真实dom并显示

这样可以实现，但是非常消耗性能，因为会渲染两次dom树，所以react就采用一种虚拟dom的方法来进行dom更新。

步骤如下

1. 获取state数据
2. JSX模板
3. state数据+JSX模板结合，生成真实dom并显示
```
<div id='a'><span>hello</span></div>
```
4. 生成虚拟dom（虚拟dom就是一个JS对象，里面包含了对真实dom的描述

```
['div',{id:'a'},['span',{},'hello']]
```
5. state数据发生变化（比如hello变成了hi）
6. 生成新的虚拟dom
```
['div',{id:'a'},['span',{},'hi']]
```
7. 比较原始虚拟dom和新的虚拟dom的区别，找出区别是span里的内容
8. 直接操作dom，只改变span里的内容