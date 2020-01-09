# 单例模式

保证一个类仅有一个实例，并提供一个访问它的全局访问点。

## 示例

### 简单版单例

```ts
const Singleton = function() {
  this.instance = null
}

Singleton.getInstance = function() {
  if (!this.instance) {
    this.instance = new Singleton()
  }
  return this.instance
}
const c = Singleton.getInstance()
const d = Singleton.getInstance()
console.log(c === d) // true
```

### 用代理实现单例模式

```ts
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
```

### 通用惰性单例

```ts
const getSingle = function(fn: Function) {
  let result = null
  return function() {
    return result || (result = fn.apply(this, arguments))
  }
}

const createLoginLayer = function() {
  const div = document.createElement('div')
  div.innerHTML = '我是登录浮窗'
  div.style.display = 'none'
  document.body.appendChild(div)
  return div
}
const createSingleLoginLayer = getSingle(createLoginLayer)

document.getElementById('loginBtn').onclick = function() {
  const loginLayer = createSingleLoginLayer()
  loginLayer.style.display = 'block'
}
```
