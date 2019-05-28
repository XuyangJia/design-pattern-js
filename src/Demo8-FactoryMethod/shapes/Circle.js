/**
 * Created by Thor on 2018-11-16.
 */
const Shape = require('./Shape')
class Circle extends Shape {
  draw () {
    console.log('绘制圆形')
  }
}
module.exports = Circle
