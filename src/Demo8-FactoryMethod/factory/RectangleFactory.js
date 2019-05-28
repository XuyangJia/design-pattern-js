/**
 * Created by Thor on 2018-11-26.
 *
 */
const ShapeFactory = require('../factory/ShapeFactory')

const Rectangle = require('../shapes/Rectangle')
class RectangleFactory extends ShapeFactory {
  getShape () {
    return new Rectangle()
  }
}
module.exports = RectangleFactory
