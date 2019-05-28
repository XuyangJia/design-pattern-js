const Receiver = require('./Receiver')

const Invoker = require('./Invoker')

const ConcreteCommand = require('./ConcreteCommand')

const invoker = new Invoker()
invoker.setOrder(new ConcreteCommand(new Receiver()))

invoker.excuteOrder()
