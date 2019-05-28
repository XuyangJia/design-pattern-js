class ObjectStructure {
  constructor () {
    this.elements = []
  }
  attach (element) {
    this.elements.push(element)
  }
  detach (element) {
    this.elements.splice(this.elements.indexOf(element), 1)
  }
  accept (visitor) {
    this.elements.forEach(element => { element.accept(visitor) })
  }
}
module.exports = ObjectStructure
