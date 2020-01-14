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