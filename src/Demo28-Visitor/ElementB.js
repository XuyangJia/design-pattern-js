const Element = require('./Element')
class ElementB extends Element {
  accept (visitor) {
    visitor.visiteElement(this)
  }
  operation () {}
}
module.exports = ElementB
