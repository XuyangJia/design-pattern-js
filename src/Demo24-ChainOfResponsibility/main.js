const Request = require('./Request')

const ConcreteHandlerA = require('./ConcreteHandlerA')

const ConcreteHandlerB = require('./ConcreteHandlerB')

const ConcreteHandlerC = require('./ConcreteHandlerC')

const handlerA = new ConcreteHandlerA('经理')

const handlerB = new ConcreteHandlerB('总监')

const handlerC = new ConcreteHandlerC('CEO')

handlerA.setSuccessor(handlerB)
handlerB.setSuccessor(handlerC)

for (let i = 1; i <= 6; i++) {
  const request = new Request('报销', '报销金额', 40 * i)
  handlerA.handleRequest(request)
}
