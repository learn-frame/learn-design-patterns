interface Params {
  id: string
  name: string
  age: number
}

function eventTrcking() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('写个埋点吧')
  }
}

class Submit {
  constructor(private params: Params) {
    this.params = params
  }

  @eventTrcking()
  public onSubmit() {
    console.log('正在提交...')
  }
}

const params = {
  id: '1190000011352518',
  name: 'yancey',
  age: 18,
}
const submit = new Submit(params)
submit.onSubmit()
// 写个埋点吧
// 正在提交...
