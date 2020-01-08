const cost = (() => {
  const values = []
  return (...args) =>
    args.length === 0
      ? values.reduce((acc, val) => acc + val, 0)
      : values.push(...args)
})()

console.log(cost(100))
console.log(cost(200))
console.log(cost(300))
console.log(cost())
