enum Gender {
  Male,
  Female,
}

// class Model {
//   constructor(private gender: Gender, private clothes: string) {
//     this.gender = gender
//     this.clothes = clothes
//   }

//   public takePhoto() {
//     console.log(`${this.gender} wears ${this.clothes}`)
//   }
// }

// for (let i = 0; i < 50; i += 1) {
//   const model = new Model(Gender.Male, `clothes-${i + 1}`)
//   model.takePhoto()
// }

// for (let i = 0; i < 50; i += 1) {
//   const model = new Model(Gender.Female, `clothes-${i + 1}`)
//   model.takePhoto()
// }

// class Model {
//   constructor(private gender: Gender) {
//     this.gender = gender
//   }

//   public takePhoto(clothes: string) {
//     console.log(`${this.gender} wears ${clothes}`)
//   }
// }

// const maleModel = new Model(Gender.Male)
// const femaleModel = new Model(Gender.Female)

// for (let i = 0; i < 50; i += 1) {
//   maleModel.takePhoto(`clothes-${i + 1}`)
// }

// for (let i = 0; i < 50; i += 1) {
//   femaleModel.takePhoto(`clothes-${i + 1}`)
// }

// const books = [
//   { name: '计算机网络', category: '技术类' },
//   { name: '算法导论', category: '技术类' },
//   { name: '计算机组成原理', category: '技术类' },
//   { name: '傲慢与偏见', category: '文学类' },
//   { name: '红与黑', category: '文学类' },
//   { name: '围城', category: '文学类' },
// ]

// // 先定义享元对象
// class FlyweightBook {
//   constructor(category) {
//     this.category = category
//   }
//   // 用于享元对象获取外部状态
//   getExternalState(state) {
//     for (const p in state) {
//       this[p] = state[p]
//     }
//   }

//   print() {
//     console.log(this.name, this.category)
//   }
// }
// // 然后定义一个工厂，来为我们生产享元对象
// // 注意，这段代码实际上用了单例模式,每个享元对象都为单例， 因为我们没必要创建多个相同的享元对象
// const flyweightBookFactory = (function() {
//   const flyweightBookStore = {}

//   return function(category) {
//     if (flyweightBookStore[category]) {
//       return flyweightBookStore[category]
//     }

//     const flyweightBook = new FlyweightBook(category)
//     flyweightBookStore[category] = flyweightBook
//     return flyweightBook
//   }
// })()

// // 然后我们要使用享元对象, 在享元对象被调用的时候，能够得到它的外部状态
// books.forEach(bookData => {
//   // 先生产出享元对象
//   const flyweightBook = flyweightBookFactory(bookData.category)
//   const div = document.createElement('div')
//   div.innerText = bookData.name
//   div.addEventListener('click', () => {
//     // 给享元对象设置外部状态
//     flyweightBook.getExternalState({ name: bookData.name }) // 外部状态为书名
//     flyweightBook.print()
//   })
//   document.body.appendChild(div)
// })

// 可以看到以上代码仅仅闭包了两个享元对象，因为书仅有两种类别。两个享元对象是在使用的时候才获取到了外部状态，从而在使用时表现出对象本来应有的样子。

const objectPoolFactory = function<T>(createObjFn: Function) {
  const objectPool: T[] = []
  return {
    create: function() {
      const obj = objectPool.length === 0 ? createObjFn.apply(this, arguments) : objectPool.shift()
      return obj
    },
    recover: function(obj: T) {
      objectPool.push(obj)
    },
  }
}

function bubble() {
  const oDiv = document.createElement('div')
  document.appendChild(oDiv)

  bubbleFactory.recover(oDiv)

  return oDiv
}

const bubbleFactory = objectPoolFactory(bubble)

const bubble1 = bubbleFactory.create()
const bubble2 = bubbleFactory.create()
const bubble3 = bubbleFactory.create()
