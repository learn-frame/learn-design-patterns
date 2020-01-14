# 命令模式

有时候需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请求的操作是什么，此时希望用一种松耦合的方式来设计软件，使得请求发送者和请求接收者能够消除彼此之间的耦合关系。

命令模式就是将一个请求封装为一个对象，从而使我们可用不同的请求对客户进行参数化；对请求排队或者记录请求日志，以及支持可撤销的操作。

```ts
var RefreshMenuBarCommand = function(receiver) {
  return {
    execute: function() {
      receiver.refresh()
    },
  }
}
var setCommand = function(button, command) {
  button.onclick = function() {
    command.execute()
  }
}
var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar)
setCommand(button1, refreshMenuBarCommand)
```
