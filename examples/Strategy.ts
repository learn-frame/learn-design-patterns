const map = new Map()

map.set('S', (salary:number) => salary * 4)
map.set('A', (salary:number) => salary * 3)
map.set('B', (salary:number) => salary * 2)
map.set('C', (salary:number) => salary * 1)

const calulate = (level:string, salary:number) => {
  const curLevel = map.get(level)
  return curLevel(salary)
}

console.log(calulate('S', 100000))

class Strategy {
  private map: { [index: string]: number }

  constructor() {
    this.map = {
      S: 4,
      A: 3,
      B: 2,
      C: 1,
    }
  }

  public calculate(level: string, salary: number) {
    return this.map[level] * salary
  }
}

const strategy = new Strategy()
console.log(strategy.calculate('S', 10000))
