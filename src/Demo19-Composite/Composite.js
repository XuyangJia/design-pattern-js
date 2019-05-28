const Component = require('./Component')
class Composite extends Component {
  constructor (name) {
    super(name)
    this._children = []
  }
  add (component) {
    this._children.push(component)
  }
  remove (component) {
    this._children.splice(this._children.indexOf(component), 1)
  }
  display (depth) {
    super.display(depth)
    this._children.forEach((item) => { item.display(depth + 1) })
  }
}
module.exports = Composite
