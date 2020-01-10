# 策略模式

定义一组算法, 将每个算法都封装起来, 并且使他们之间可以互换.

## 说明

1. 创建策略对象, 即将传统的条件语句封装到一个对象里 (当然你也可以使用 map).

2. 创建一个 Context 类, 用于接收用户的请求, 并委托给策略对象.

## 示例

### 计算年终奖

下面的例子模拟一个年终奖计算器, 不同的 KPI 对应不同的年终奖. 将 KPI 映射关系封装到一个 map 中, 然后创建一个 calulate 函数, 根据输入的 KPI 等级和月薪计算年终奖.

```js
const map = new Map()

map.set('S', (salary: number) => salary * 4)
map.set('A', (salary: number) => salary * 3)
map.set('B', (salary: number) => salary * 2)
map.set('C', (salary: number) => salary * 1)

const calulate = (level: string, salary: number) => {
  const curLevel = map.get(level)
  return curLevel(salary)
}

console.log(calulate('S', 100000))
```

### 表单校验
