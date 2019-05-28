const Element = require('./Element')
class ElementA extends Element {
  accept (visitor) {
    visitor.visiteElement(this)
  }
  operation () {}
}
module.exports = ElementA
