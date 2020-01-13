# 迭代器模式

迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。

比如，手写个 map 吧：

```ts
function myMap<T, U>(arr: T[], cb: (value: T, index: number, arr: T[]) => U): U[] {
  const _arr = []

  for (let i = 0, l = arr.length; i < l; i += 1) {
    _arr.push(cb(arr[i], i, arr))
  }

  return _arr
}
```
