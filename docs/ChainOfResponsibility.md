# 职责链模式

使多个对象都有机会处理请求, 从而避免请求的发送者和接收者之间的耦合关系, 将这些对象连成一条链, 并沿着这条链传递该请求, 直到有一个对象处理它为止.

## 采购审批的例子

这个例子很简单, 甚至都没必要大动干戈使用职责链模式, 仅作为演示.

- 当费用 < 10000 时, 走 Manager 审批
- 当费用 >= 10000 且 < 50000 时, 走 VP 审批
- 当费用 >= 50000 且 < 100000 时, 走 Boss 审批
- 当费用 >= 100000, 买不起买不起

```ts
// 定义一个抽象 Hander 类
// 它有一个实例属性 successor
// 如果有继承者, next 方法会被重写
abstract class Handler {
  constructor(public successor?: Handler) {
    this.successor = successor
  }

  public next(amount: number) {
    throw new Error('买不起买不起')
  }
}

// 具体的 handle
class ManagerHandler extends Handler {
  constructor(public successor?: Handler) {
    super(successor)
  }

  // 重写抽象类的 next 方法
  public next(amount: number) {
    if (amount < 10000) {
      console.log('manager 阅')
    } else {
      // 如果当前 hander 解决不了
      // 就抛给 successor
      if (this.successor) {
        this.successor.next(amount)
      }
    }
  }
}

class VPHandler extends Handler {
  constructor(public successor?: Handler) {
    super(successor)
  }

  public next(amount: number) {
    if (amount < 50000) {
      console.log('vp 阅')
    } else {
      if (this.successor) {
        this.successor.next(amount)
      }
    }
  }
}

class BossHandler extends Handler {
  constructor(public successor?: Handler) {
    super(successor)
  }

  public next(amount: number) {
    if (amount < 100000) {
      console.log('boss 阅')
    } else {
      if (this.successor) {
        this.successor.next(amount)
      }
    }
  }
}

const bossHandler = new BossHandler()
const vpHandler = new VPHandler()
const managerHandler = new ManagerHandler()

// manager 的 successor 是 vp
managerHandler.successor = vpHandler
// vp 的 successor 是 boss
vpHandler.successor = bossHandler

console.log(managerHandler.next(2000)) // manager 阅
console.log(managerHandler.next(20000)) // vp 阅
console.log(managerHandler.next(80000)) // boss 阅
console.log(managerHandler.next(200000)) // 没人阅 TAT
```

## 总结

从上面的例子中可以看出, 职责链模式适合层级审批的场景. 如果你的代码中存在大量的 if-else, 可以考虑用职责链模式重构. 它把多个条件判定分散到各个处理类中, **降低了请求的发送者和接收者之间的耦合**, 使得代码更加清晰, 责任更加明确.

当然它的缺点也很明显, 在找到正确的处理对象之前, 所有的条件判定都要执行一遍, 当责任链过长时, 可能会引起性能的问题.
