/**
 * Created by Thor on 2018-11-26.
 * 具体的装饰类，用于给Component添加功能
 */
const Decorator = require('./Decorator')
class ConcreteDecoratorB extends Decorator {
  addBehavior () {
    console.log('添加行为')
  }
  operation () {
    super.operation()
    this.addBehavior()
    console.log('装饰对象B的操作')
  }
}
module.exports = ConcreteDecoratorB
