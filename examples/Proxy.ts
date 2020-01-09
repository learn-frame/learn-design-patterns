var myImage = (function() {
  const imgDOM = document.querySelector('#img') as HTMLImageElement
  return {
    setSrc: function(src: string) {
      imgDOM.src = src
    },
  }
})()
