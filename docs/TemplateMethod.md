# 模版方法模式

模版方法模式基于继承, 需要提供一个抽象类, 然后让子类继承.

## 示例: 茶和咖啡的问题

泡茶的步骤:

- 把水煮沸
- 用沸水浸泡茶叶
- 把茶水倒进杯子
- 加柠檬

煮咖啡的步骤:

- 把水煮沸
- 用沸水冲泡咖啡
- 把咖啡倒进杯子
- 加糖和牛奶

所以这俩可以抽象一下:

- 把水煮沸
- 用沸水冲泡饮料
- 把饮料倒进杯子
- 加调料

OK, 用 TypeScript 来表演一下:

```ts
// 抽象类不能被实例化，只能被继承
abstract class Beverage {
  public boilWater() {
    console.log('烧开水')
  }

  public brew() {} // 需被子类重写

  public pourInCup() {} // 需被子类重写

  public addCondiments() {} // 需被子类重写

  public init() {
    this.boilWater()
    this.brew()
    this.pourInCup()
    this.addCondiments()
  }
}

class Coffee extends Beverage {
  public brew() {
    console.log('用沸水冲泡咖啡')
  }

  public addCondiments() {
    console.log('把咖啡倒进杯子')
  }

  public pourInCup() {
    console.log('加糖和牛奶')
  }
}

const coffee = new Coffee()
coffee.init()
```

有时候, 我们在买咖啡时可能不需要糖和咖啡, 因此应该做个 hooks

```ts
// 抽象类不能被实例化，只能被继承
abstract class Beverage {
  public boilWater() {
    console.log('烧开水')
  }

  public brew() {
    throw new Error('子类必须重写 brew 方法')
  } // 需被子类重写

  public pourInCup() {
    throw new Error('子类必须重写 pourInCup 方法')
  } // 需被子类重写

  public addCondiments() {
    throw new Error('子类必须重写 addCondiments 方法')
  } // 需被子类重写

  public customerWantsCondiments() {
    return true
  }

  public init() {
    this.boilWater()
    this.brew()
    this.pourInCup()
    if (this.customerWantsCondiments()) {
      this.addCondiments()
    }
  }
}

class CoffeeWithHook extends Beverage {
  public brew() {
    console.log('用沸水冲泡咖啡')
  }

  public pourInCup() {
    console.log('把咖啡倒进杯子')
  }

  public addCondiments() {
    console.log('加糖和牛奶')
  }

  public customerWantsCondiments() {
    return window.confirm('请问需要加奶和糖吗?')
  }
}

const coffeeWithHook = new CoffeeWithHook()
coffeeWithHook.init()
```
