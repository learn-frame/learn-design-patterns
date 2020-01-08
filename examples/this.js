// function Plus() {
//   this.value = 1
// }

// Plus.prototype.add = function() {
//   this.value++
//   console.log(this.value)
// }

// const plus = new Plus()

// plus.add()
// plus.add()
// plus.add()
// plus.add()
// plus.add()

// const p = plus1()
// p()
// p()
// p()
// p()
// p()

const o = {
  value: 1,
  add() {
    this.value++
    console.log(this.value)
  },
}

o.add()
o.add()
o.add()
o.add()