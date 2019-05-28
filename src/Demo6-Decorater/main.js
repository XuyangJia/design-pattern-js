/**
 * Created by Thor on 2018-11-26.
 * 结构型模式
 * 装饰器模式（Decorator Pattern）允许向一个现有的对象添加新的功能，同时又不改变其结构。
 */
const ConcreteComponent = require('./ConcreteComponent')

const ConcreteDecoratorA = require('./ConcreteDecoratorA')

const ConcreteDecoratorB = require('./ConcreteDecoratorB')

let c = new ConcreteComponent()

let d1 = new ConcreteDecoratorA()

let d2 = new ConcreteDecoratorB()

d1.setComponent(c)
d2.setComponent(d1)
d2.operation()
