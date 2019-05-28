/**
 * Created by Thor on 2018-11-26.
 *
 */
const ShapeFactory = require('../factory/ShapeFactory')

const Circle = require('../shapes/Circle')
class CircleFactory extends ShapeFactory {
  getShape () {
    return new Circle()
  }
}
module.exports = CircleFactory
