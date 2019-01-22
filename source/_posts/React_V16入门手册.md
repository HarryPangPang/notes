---
layout: react
title: React_V16入门手册
date: 2019-01-18 17:09:19
tags:
---
原文[https://medium.freecodecamp.org/the-react-handbook-b71c27b0a795]()

开始着手学习React，就看到大佬推荐的这篇文章，因为是英文，就尽自己能力翻译一下有错的烦请指正。原文一共220页A4纸，内容有点多，所以会分期更新，见谅
## 介绍
这本React手册遵循二八原则：用20%的时间学习80%的内容

在本手册里使用了React Hooks，所以你需要使用高于等于 16.7.0-alpha.2 版本的React和ReactDom.

如果你使用create-react-app初始化项目时，在初始化项目之后运行``` npm install react@16.7.0-alpha.2 react-dom@16.7.0-
alpha.2 ```

我希望你能在你阅读完本手册后能达到一个目标：学会React的基础

## React介绍
先来介绍一下React库
####  什么是React
React是一个旨在简化开发可视化界面的Javascript库。它由Facebook开发，并于2013年向世界发布，并支持着很多被广泛使用的App，包括Facebook和Instagram等无数应用程序。
它的主要目标是通过将UI划分为一组组件，使得在任何时间点都可以轻松地构建界面及其状态。
#### 为什么React这么流行？
React席卷了整个前端开发领域，为什么？

#### 比其他框架更低的复杂性
在React出道之前，Ember.js和Angular1.X是主流框架。这两种方法在代码上强加了太多的约定，以至于移植现有的应用程序一点都不方便。React选择了非常容易集成到现有项目中的方式，因为Facebook必须实现这一点，这样才能将其引入现有代码库。另外，这两个框架本身包含的内容太多了，而React只选择实现视图层而不是完整的MVC技术栈。
#### 完美的时间
当谷歌宣布Angular2.X时，宣称Angular1.X并不能平滑升级到Angular2.X，这两个就像不同的框架一样，所以想要从Angular1.X升级到Angular2.X就得重构项目。因为这一点，再加上React承诺说能带来执行速度的提升，所以很多程序员就迫不及待的尝试。
#### Facebook的支持
如果一个项目最终成功，得到Facebook的支持显然也会让它受益。Facebook目前对React非常感兴趣，并看到了它开源的价值，这对所有在自己项目中使用React的开发者来说都是一个巨大的优势。

#### React学起来容易吗？
虽然我说React要比其他框架简单，但是深入学习React的话还是挺有难度的，难的主要原因是要与React搭配使用的技术，比如Redux,GraphQL等等。

React本身有一个非常小的API，你至少需要理解4个概念才能开始:
* Components
* JSX
* State
* Props

上面这些（甚至更多）都会在手册中一一解释

## 如何安装React
#### 如何在你的电脑上安装React?
React是一个库，所以说安装这个词会有点奇怪，倒不如说“设置”更贴切。在你的app或者网页中有很多方式可以设置React

#### 直接在网页里引入
最简单的方法是直接将React JavaScript文件添加到页面中。当React应用与单个页面上的元素进行交互，而不是实际控制整个导航时，这是最好的选择。

下面的例子中，你在body的最后添加了两个script标签

```
<html>
...
    <body>
    ...
        <script
        src="https://cdnjs.cloudflare.com/ajax/libs/react/16.7.0-alpha.2/umd/react.development.js" 
        crossorigin>
        </script>
        <script
        src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.7.0-alpha.2/umd/react-dom.production.min.js"
        crossorigin>
        </script>
    </body>
</html>
```
在这里我们引入两个库（React和React Dom），是为什么呢？因为React是百分之的独立于浏览器的，你也可以在浏览器之外使用React（比如用React Native开发移动应用时，也能用React），因此需要React Dom来操作dom。

在引入Javascript文件后，你需要为react，在html里添加script标签，才能使用JSX语法，下面两种方式都可以
```
//在app.js里写JSX
<script src="app.js"></script>
<!-- or -->

//直接在标签内写JSX
<script>
//my app
</script>

```
如果要使用JSX，你还需要引入Babel

```
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```
引入后要在之前写的script标签里添加type="text/babel"才会生效，如下：
```
<script src="app.js" type="text/babel"></script>

```
现在你可以在你的app.js里写JSX的代码了。

```
const Button = () => {
return <button>Click me!</button>
}
ReactDOM.render(<Button />, document.getElementById('root'))

```
演示代码地址：
[https://glitch.com/edit/#!/react-example-inline-jsx?path=index.html:21:19](演示代码)
#### 用官方脚手架create-react-app（推荐）
create-react-app旨在让你能快速构建一个React项目，任何React应用都可以使用create-react-app来生成一个单页页面。

首先你需要安装npm和node （地址：[https://nodejs.org/en/]()）就不多说了
然后执行

```
npx create-react-app todolist
```
npx是npm 5.2之后才有的工具，npx会下载create-react-app，然后解压安装，然后执行```create-react-app todolist```,然后再把create-react-app从系统中删除。这样你就永远能够使用最新的create-react-app，不会在电脑里存放着过时的create-react-app。

执行完之后你能看到下面的界面

![](https://user-gold-cdn.xitu.io/2019/1/18/168602568623fb3a?w=741&h=677&f=png&s=36167)

create-react-app会在文件夹内创建相应的文件结构，文件名就是todolist（自己取的）
package.json也同样生成了，只需要安装指示，进入相应的文件夹，执行npm start就可以启动项目了

如图

![](https://user-gold-cdn.xitu.io/2019/1/18/168602a792310119?w=454&h=260&f=png&s=12615)

打开浏览器进入http://localhost:3000/就能看到最开始的界面了。

除了 npm start , create-react-app这两个命令之外，还有下面一些命令
* npm run build ：要在构建文件夹中构建准备部署到服务器的React应用程序文件
* npm test：运行Jest测试包
* npm eject ：弹出配置文件 
何时用npm eject？create-react-app已经做了很多工作了，但你想要完成更多的工作时，就要弹出配置文件来自己配置。


因为create-react-app 是为了满足大部分人的需求和有限的配置，当你有一些独特的需求时，就需要自己来配置一些内容了。

当你使用npm eject时，你的页面就不会自动更新了，但你可以在Babel和Webpack配置中获得更大的灵活性。

eject时是不可逆的，当你执行后你会获得两个新的文件夹，配置和脚本。你就可以开始自由的编辑他们了。

> 下节预告：下节我们将学习在学习React之前需要了解的JS语法及一些知识