const ObjectStructure = require('./ObjectStructure')

const ElementA = require('./ElementA')

const ElementB = require('./ElementB')

const Visitor1 = require('./Visitor1')

const Visitor2 = require('./Visitor2')

const Visitor3 = require('./Visitor3')

const obj = new ObjectStructure()

const eA = new ElementA()

const eB = new ElementB()

obj.attach(eA)
obj.accept(new Visitor1())

obj.attach(eB)
obj.accept(new Visitor2())

obj.detach(eA)
obj.accept(new Visitor3())
