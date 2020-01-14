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
