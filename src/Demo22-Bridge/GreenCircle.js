const DrawAPI = require('./DrawAPI')
class GreenCircle extends DrawAPI {
  drawCircle (radius, x, y) {
    console.log(`Drawing Circle[ color: green, radius: ${radius}, x: ${x}, y: ${y}]`)
  }
}
module.exports = GreenCircle
