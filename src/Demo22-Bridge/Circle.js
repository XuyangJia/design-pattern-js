const Shape = require('./Shape')
class Circle extends Shape {
  constructor (drawAPI, radius = 1, x = 0, y = 0) {
    super(drawAPI)
    this.radius = radius
    this.x = x
    this.y = y
  }
  draw () {
    this.drawAPI.drawCircle(this.radius, this.x, this.y)
  }
}
module.exports = Circle
