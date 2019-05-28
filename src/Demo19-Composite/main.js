const Composite = require('./Composite')

const Leaf = require('./Leaf')

const root = new Composite('root')
root.add(new Leaf('Leaf A'))
root.add(new Leaf('Leaf B'))

const comp = new Composite('Composite X')
comp.add(new Leaf('Leaf XA'))
comp.add(new Leaf('Leaf XB'))
root.add(comp)

const comp2 = new Composite('Composite XY')
comp2.add(new Leaf('Leaf XYA'))
comp2.add(new Leaf('Leaf XYB'))
comp.add(comp2)

root.add(new Leaf('Leaf C'))
root.add(new Leaf('Leaf D'))
root.display(1)
