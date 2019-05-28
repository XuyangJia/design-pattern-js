class Request {
  constructor (type, content = '', quantity = 0) {
    this.type = type
    this.content = content
    this.quantity = quantity
  }
}
module.exports = Request
