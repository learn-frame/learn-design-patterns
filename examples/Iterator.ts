// 手写个 map 吧

function myMap<T, U>(arr: T[], cb: (value: T, index: number, arr: T[]) => U): U[] {
  const _arr = []

  for (let i = 0, l = arr.length; i < l; i += 1) {
    _arr.push(cb(arr[i], i, arr))
  }

  return _arr
}

const arr = [1, 2, 3]
const fn = (value: number, index: number, arr: number[]) => value * 2

console.log(myMap(arr, fn))
