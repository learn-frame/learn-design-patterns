# 原型模式

该方式通过借助原型, 基于已有对象创建新的对象. JavaScript 本身就是基于原型的面向对象的语言, 因此可以使用 Object.create() 来创建原型模式.

> TIP
>
> 原型、原型链是 JavaScript 的核心思想, 我曾经写过几篇博文：[从感性角度学习原型/原型链](https://www.yanceyleo.com/p/5cac4d89d397224556c48941), [JavaScipt 七大继承全解析](https://www.yanceyleo.com/p/5caeef65d868ff4b49e2d61e), [Object.create()](https://js.yanceyleo.com/ES/Object/create/), 仅供参考.

## 示例

下面的例子根据 cat 这个对象创建一个新的 cat1 和 cat2, 注意下面代码中的 create 函数是 Object.create() 的 polyfill.

```js
function create(proto) {
  function F() {}
  F.prototype = proto
  return new F()
}

const cat = {
  name: 'Lolita',
  friends: ['Yancey', 'Sayaka', 'Mitsuha'],
  say() {
    console.log(this.name)
  },
}

const cat1 = create(cat)
const cat2 = Object.create(cat)
```

![原型式继承](https://yancey-assets.oss-cn-beijing.aliyuncs.com/nani.jpg)

注意, 因为原型式继承相当于 `浅拷贝`, 所以会导致 `引用类型` 被多个实例篡改. 下面的代码中, 给 cat1 的 friends 属性 push 一个元素, 所有实例的 friends 属性都被篡改.

```js
cat1.friends.push('Sae')

cat.friends // ['Yancey', 'Sayaka', 'Mitsuha', 'Sae']
cat2.friends // ['Yancey', 'Sayaka', 'Mitsuha', 'Sae']
```
