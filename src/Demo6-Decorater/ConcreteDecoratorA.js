/**
 * Created by Thor on 2018-11-26.
 * 具体的装饰类，用于给Component添加功能
 */
const Decorator = require('./Decorator')
class ConcreteDecoratorA extends Decorator {
  constructor () {
    super()
    this.addState = null
  }
  operation () {
    super.operation()
    this.addState = 'New State'
    console.log('装饰对象A的操作')
  }
}
module.exports = ConcreteDecoratorA
