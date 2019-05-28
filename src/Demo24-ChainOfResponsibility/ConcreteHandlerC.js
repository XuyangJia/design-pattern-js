const Handler = require('./Handler')
class ConcreteHandlerC extends Handler {
  handleRequest (request) {
    console.log(`${this.name} 处理请求，（${request.content}：${request.quantity}）`)
  }
}
module.exports = ConcreteHandlerC
