# 原型模式

> Specify the kinds of objects to create using a prototypical instance,and create new objects by copying this prototype. 
>
> 用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象.

## 说明

该方式通过借助原型，基于已有对象创建新的对象。JavaScript 本身就是基于原型的面向对象的语言，因此可以使用 Object.create() 来创建原型模式。

关于 JavaScript 的继承可以看我的一篇文章 [JavaScipt 七大继承全解析](https://github.com/YanceyOfficial/interview/blob/master/JavaScript/JavaScript%20%E4%B8%83%E5%A4%A7%E7%BB%A7%E6%89%BF%E5%85%A8%E8%A7%A3%E6%9E%90.md)

关于 Object.create() 可以看我的 [JavaScript API 全解析系列](https://js.yanceyleo.com/ECMAScript/Object/Object.create.html)

## 示例

下面的例子根据 cat 这个对象创建一个新的 cat1 和 cat2，注意下面代码中的 create 函数是 Object.create() 的 polyfill.

```js
function create(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}

const cat = {
  name: 'Lolita',
  friends: ['Yancey', 'Sayaka', 'Mitsuha'],
  say() {
    console.log(this.name);
  },
};

const cat1 = create(cat);
const cat2 = Object.create(cat);
```

![原型式继承](https://yancey-assets.oss-cn-beijing.aliyuncs.com/nani.jpg)

注意，因为原型式继承相当于 `浅拷贝`，所以会导致 `引用类型` 被多个实例篡改。下面的代码中，给 cat1 的 friends 属性 push 一个元素，所有实例的 friends 属性都被篡改。

```js
cat1.friends.push('Sae');

cat.friends; // ['Yancey', 'Sayaka', 'Mitsuha', 'Sae']
cat2.friends; // ['Yancey', 'Sayaka', 'Mitsuha', 'Sae']
```
