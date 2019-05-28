/**
 * Created by Thor on 2018-11-16.
 */
let Shape = require('./Shape')
class Rectangle extends Shape {
  draw () {
    console.log('绘制矩形')
  }
}
module.exports = Rectangle
