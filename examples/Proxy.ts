// 不使用代理的预加载
const imgDOM = document.querySelector('#img') as HTMLImageElement
imgDOM.src = '/assets/小菊花.jpg'

const img = new Image()
img.src = 'https://img.com/一张大尺寸图.jpg'

img.onload = function() {
  if (imgDOM) {
    imgDOM.src = img.src
  }
}

var myImage = (function() {
  var imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return {
    setSrc: function(src: string) {
      imgNode.src = src
    },
  }
})()

var proxyImage = (function() {
  var img = new Image()
  img.onload = function() {
    // @ts-ignore
    myImage.setSrc(this.src)
  }
  return {
    setSrc: function(src: string) {
      myImage.setSrc('file:// /C:/Users/svenzeng/Desktop/loading.gif')
      img.src = src
    },
  }
})()
