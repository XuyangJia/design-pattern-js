const DrawAPI = require('./DrawAPI')
class RedCircle extends DrawAPI {
  drawCircle (radius, x, y) {
    console.log(`Drawing Circle[ color: red, radius: ${radius}, x: ${x}, y: ${y}]`)
  }
}
module.exports = RedCircle
