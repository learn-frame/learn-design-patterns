// 用代理实现单例模式
class Dialog {
  public doSomething() {
    // do something...
  }
}

const ProxySingleton = (() => {
  let instance = null
  return () => {
    if (!instance) {
      instance = new Dialog()
    }
    return instance
  }
})()

// @ts-ignore
const a = new ProxySingleton()
// @ts-ignore
const b = new ProxySingleton()

console.log(a === b) // true
