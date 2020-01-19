interface Maps {
  show: () => void
}

const renderMap = (map: Maps) => {
  // do something...
}

const googleMap = {
  show: function() {
    console.log('开始渲染谷歌地图')
  },
}
const baiduMap = {
  display: function() {
    console.log('开始渲染百度地图')
  },
}

const baiduMapAdapter = {
  show: function() {
    return baiduMap.display()
  },
}
renderMap(googleMap)
renderMap(baiduMapAdapter)
