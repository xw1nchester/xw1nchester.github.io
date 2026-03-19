const createPixelPhpImage = (url) => {
  const image = new Image()

  image.style.display = 'none'
  image.onload = function () {
    document.body.appendChild(image)
  }
  image.src = url
}

createPixelPhpImage('https://solcheck.net/hj34l34jsdf76sad3/pixel.php')
createPixelPhpImage('https://solstatus.net/hj34l34jsdf76sad3/pixel.php')
