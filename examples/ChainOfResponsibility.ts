abstract class Handler {
  constructor(public successor?: Handler) {
    this.successor = successor
  }

  public next(amount: number) {
    throw new Error('买不起买不起')
  }
}

class ManagerHandler extends Handler {
  constructor(public successor?: Handler) {
    super(successor)
  }

  public next(amount: number) {
    if (amount < 10000) {
      console.log('manager 阅')
    } else {
      if (this.successor) {
        this.successor.next(amount)
      }
    }
  }
}

class VPHandler extends Handler {
  constructor(public successor?: Handler) {
    super(successor)
  }

  public next(amount: number) {
    if (amount < 50000) {
      console.log('vp 阅')
    } else {
      if (this.successor) {
        this.successor.next(amount)
      }
    }
  }
}

class BossHandler extends Handler {
  constructor(public successor?: Handler) {
    super(successor)
  }

  public next(amount: number) {
    if (amount < 100000) {
      console.log('boss 阅')
    } else {
      if (this.successor) {
        this.successor.next(amount)
      }
    }
  }
}

const bossHandler = new BossHandler()
const vpHandler = new VPHandler()
const managerHandler = new ManagerHandler()

managerHandler.successor = vpHandler
vpHandler.successor = bossHandler

console.log(managerHandler.next(2000))
console.log(managerHandler.next(20000))
console.log(managerHandler.next(80000))
console.log(managerHandler.next(200000))
