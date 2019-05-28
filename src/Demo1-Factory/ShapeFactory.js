/**
 * Created by Thor on 2018-11-19.
 */
const Circle = require('./shapes/Circle')

const Rectangle = require('./shapes/Rectangle')

class ShapeFactory {
  constructor () {
    console.log('创建工厂')
  }
  getShape (shapeType) {
    switch (shapeType) {
      case ShapeFactory.CIRCLE:
        return new Circle()
      case ShapeFactory.RECTANGLE:
        return new Rectangle()
    }
  }
}
ShapeFactory.CIRCLE = 'circle'
ShapeFactory.RECTANGLE = 'rectangle'
module.exports = ShapeFactory
