/**
 * Created by Thor on 2018-11-27 上午 10:22.
 * 外观类。
 */
const Circle = require('./shapes/Circle')

const Rectangle = require('./shapes/Rectangle')

class ShapeMaker {
  constructor () {
    this._circle = new Circle()
    this._rectangle = new Rectangle()
  }
  drawCircle () {
    this._circle.draw()
  }
  drawRectangle () {
    this._rectangle.draw()
  }
}
module.exports = ShapeMaker
