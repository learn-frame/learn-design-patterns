# 组合模式

组合模式将对象组合成树形结构，以表示“部分 - 整体”的层次结构。

组合模式的本质是抽出一个公共的执行方法, 然后遍历所有的子方法来执行, 这也意味着我们无需关心这些子方法是什么, 就好比我们要复制文件, 我们无需知道文件是 .avi 还是 .jpg, 只需要知道 ctrl+c 和 ctrl+v 这个组合即可.

下面是一个扫描文件夹的例子

```ts
/******************************* Folder ******************************/

var Folder = function(name) {
  this.name = name
  this.files = []
}
Folder.prototype.add = function(file) {
  this.files.push(file)
}
Folder.prototype.scan = function() {
  console.log('开始扫描文件夹: ' + this.name)
  for (var i = 0, file, files = this.files; (file = files[i++]); ) {
    file.scan()
  }
}
```

```ts
/******************************* File ******************************/

var File = function(name) {
  this.name = name
}
File.prototype.add = function() {
  throw new Error('文件下面不能再添加文件')
}

File.prototype.scan = function() {
  console.log('开始扫描文件: ' + this.name)
}
```
