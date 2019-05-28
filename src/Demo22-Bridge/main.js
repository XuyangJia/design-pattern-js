const Circle = require('./Circle')

const RedCircle = require('./RedCircle')

const GreenCircle = require('./GreenCircle')

const redCircle = new Circle(new RedCircle(), 5, 2, 2)
const greenCircle = new Circle(new GreenCircle())
redCircle.draw()
greenCircle.draw()
