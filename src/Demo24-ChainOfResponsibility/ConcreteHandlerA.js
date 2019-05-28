const Handler = require('./Handler')
class ConcreteHandlerA extends Handler {
  handleRequest (request) {
    if (request.quantity < 100) {
      console.log(`${this.name} 处理请求，（${request.content}：${request.quantity}）`)
    } else {
      this.successor.handleRequest(request)
    }
  }
}
module.exports = ConcreteHandlerA
