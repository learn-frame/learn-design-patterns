# 代理模式

代理模式是为一个对象提供一个代用品或占位符, 以便控制对它的访问.现实中的例子：如果想请明星来办一场商业演出, 只能联系他的经纪人, 经纪人会把细节和报酬谈好后, 再把合同交给明星签.

![proxy](../images/proxy.jpg)

## 常见的代理模式

**保护代理**：用于对象应该有不同访问权限的情况.

**缓存代理**：缓存代理可以为一些开销大的运算结果提供暂时的存储, 在下次运算时, 如果传递进来的参数跟之前一致, 则可以直接返回前面存储的运算结果.

**虚拟代理**：请求类中的一些操作可以放到代理类中去操作, 常见的防抖、节流、图片预加载都算是虚拟代理.

**防火墙代理**：你懂的

**远程代理**：为一个对象在不同的地址空间提供局部代表, 在 Java 中, 远程代理可以是另一个虚拟机中的对象.

**智能引用代理**：取代了简单的指针, 它在访问对象时执行一些附加操作, 比如计算一个对象被引用的次数.

**写时复制代理**：通常用于复制一个庞大对象的情况.写时复制代理延迟了复制的过程, 当对象被真正修改时, 才对它进行复制操作.写时复制代理是虚拟代理的一种变体, DLL（操作系统中的动态链接库）是其典型运用场景.

## 示例

### 图片预加载（虚拟代理）

下面的例子中, 先用一张本地小菊花去展示给用户, 然后悄悄地下载一张网络大图, 待这张大图下载完毕, 就替换小菊花.
可以看到两个函数都有 `setSrc` 方法, 这就方便了即便以后不使用代理类了, 本体方法(myImage) 也可以正常使用.

```ts
var myImage = (function() {
  var imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return {
    setSrc: function(src: string) {
      imgNode.src = src
    },
  }
})()

var proxyImage = (function() {
  var img = new Image()
  img.onload = function() {
    myImage.setSrc(this.src)
  }
  return {
    setSrc: function(src: string) {
      myImage.setSrc('file:// /C:/Users/svenzeng/Desktop/loading.gif')
      img.src = src
    },
  }
})()
```

### 缓存代理

```ts
let memoize = function(func) {
  let cache = {}
  return function(key) {
    if (!cache[key]) cache[key] = func.apply(this, arguments)
    return cache[key]
  }
}

let fibonacci = memoize(function(n) {
  return n < 2 ? n : fibonacci(n - 2) + fibonacci(n - 1)
})
```
