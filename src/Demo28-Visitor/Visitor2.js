const Visitor = require('./Visitor')

const ElementA = require('./ElementA')

const ElementB = require('./ElementB')
class Visitor2 extends Visitor {
  visiteElement (element) {
    if (element instanceof ElementA) {
      console.log(`${element.constructor.name} 被 ${this.constructor.name} 访问了！`)
    } else if (element instanceof ElementB) {
      console.log(`${element.constructor.name} 被 ${this.constructor.name} 访问了！`)
    }
  }
}
module.exports = Visitor2
