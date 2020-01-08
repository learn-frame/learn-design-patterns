// 用代理实现单例模式
class Dialog {
  constructor(private name: string) {
    this.name = name
  }

  public doSomething() {
    console.log(this.name)
  }
}

const ProxySingleton = (() => {
  let instance = null
  return (html: string) => {
    if (!instance) {
      instance = new Dialog(html)
    }
    return instance
  }
})()

// @ts-ignore
const a = new ProxySingleton('hello')
// @ts-ignore
const b = new ProxySingleton('hi')

console.log(a === b) // true

class Singleton {
  private instance: any
  constructor(private name: string) {
    this.instance = null
    this.name = name
  }

  getInstance() {
    if (!this.instance) {
      this.instance = new Singleton(name)
    } else {
      return this.instance
    }
  }

  public doSomething() {
    // do something...
  }
}
