class Handler {
  constructor (name) {
    this.name = name
    this.successor = null
  }
  setSuccessor (successor) {
    this.successor = successor
  }
  handleRequest (request) {}
}
module.exports = Handler
