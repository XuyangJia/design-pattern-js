const Handler = require('./Handler')
class ConcreteHandlerB extends Handler {
  handleRequest (request) {
    if (request.quantity < 200) {
      console.log(`${this.name} 处理请求，（${request.content}：${request.quantity}）`)
    } else {
      this.successor.handleRequest(request)
    }
  }
}
module.exports = ConcreteHandlerB
