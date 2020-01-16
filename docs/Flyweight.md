# 享元模式

享元模式, 英文写作 flyweight, 即拳击中的 "蝇量级", 它的核心是运用共享技术来有效的支持大量细粒度的对象.

## 现实场景

假设一家服装公司现有 50 款男性成衣和 50 款女性成衣, 该公司为了推销产品, 需要让模特穿上以拍成照片. 最傻缺的做法是一次性找 50 男模特和 50 女模特, 每人穿一件来拍照, 写成代码大抵如下:

```ts
enum Gender {
  Male,
  Female,
}

class Model {
  constructor(private gender: Gender, private clothes: string) {
    this.gender = gender
    this.clothes = clothes
  }

  public takePhoto() {
    console.log(`${this.gender} wears ${this.clothes}`)
  }
}

for (let i = 0; i < 50; i += 1) {
  const model = new Model(Gender.Male, `clothes-${i + 1}`)
  model.takePhoto()
}

for (let i = 0; i < 50; i += 1) {
  const model = new Model(Gender.Female, `clothes-${i + 1}`)
  model.takePhoto()
}
```

上面的代码中, 相当于你创建了 100 个 model 实例对象, 如果未来有 10000 款衣服, 就得创建 10000 个, 到那时候内存说不定就爆炸了.

当然现实中没有哪个老板会脑残到这种地步. 但你的旧代码, 不见得没有, 嗯. 我们改造上面这个例子: 只需要一男一女两个模特, 让他们依次穿上不同的衣服来拍照.

```ts
class Model {
  constructor(private gender: Gender) {
    this.gender = gender
  }

  public takePhoto(clothes: string) {
    console.log(`${this.gender} wears ${clothes}`)
  }
}

const maleModel = new Model(Gender.Male)
const femaleModel = new Model(Gender.Female)

for (let i = 0; i < 50; i += 1) {
  maleModel.takePhoto(`clothes-${i + 1}`)
}

for (let i = 0; i < 50; i += 1) {
  femaleModel.takePhoto(`clothes-${i + 1}`)
}
```

## 内部状态和外部状态

享元模式的目标是为了减少共享对象的数量, 要求将对象的属性划分为 **内部状态** 和 **外部状态**, 内部状态大致有以下特征:

- 内部状态存储与对象内部

- 内部状态可以被一些对象共享

- 内部状态独立于具体的场景, 通常不会改变

- 外部状态取决于具体的场景, 并根据场景而变化, 外部状态不能被共享

通常来讲, 内部状态有多种组合, 系统中便有多少个对象, 上面的例子中, 性别是内部状态, 衣服是外部状态, 因此做这件事只需要男女两个对象即可.

剥离了外部状态的对象成为共享对象, 外部状态在必要时被传入共享对象来组装成一个完整的对象. 虽然组装外部状态成为一个完整对象的过程需要花费一定的时间, 但却可以大大减少系统中的对象数量. 因此, 享元模式是一种用时间换空间的优化模式.

## 享元模式的通用结构

## 何时使用享元模式

- 一个程序中使用了大量的相似对象

- 由于使用了大量对象, 造成很大的内存开销

- 对象的大多数状态都可以变为外部状态

- 剥离出对象的外部状态之后, 可以用相对较少的共享对象取代大量对象

## 对象池

对象池维护一个装载空闲对象的池子, 如果需要对象的时候, 不是直接 new 一个新的, 而是从对象池中获取. 如果池中没有空闲对象, 则创建一个新的对象, 当获取出的对象完成它的职责后, 再进入池子中等待下次获取.

```ts
const objectPoolFactory = function<T>(createObjFn: Function) {
  const objectPool: T[] = []
  return {
    create: function() {
      const obj = objectPool.length === 0 ? createObjFn.apply(this, arguments) : objectPool.shift()
      return obj
    },
    recover: function(obj: T) {
      objectPool.push(obj)
    },
  }
}
```

## 参考

[JavaScript 享元模式与性能优化](https://www.jianshu.com/p/536e1f6d0607)

《JavaScript 设计模式与开发实践》 - 曾探
