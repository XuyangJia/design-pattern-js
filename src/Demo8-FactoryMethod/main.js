/**
 * Created by Thor on 2018-11-16.
 * 创建型模式
 */
const CircleFactory = require('./factory/CircleFactory')
const factory = new CircleFactory()
let shape1 = factory.getShape()
shape1.draw()
