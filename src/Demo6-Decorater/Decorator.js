/**
 * Created by Thor on 2018-11-26.
 * 抽象装饰类，继承自Component,
 * 用于从外类扩展Component类的功能
 * 对于Component来说，无需知道Decorator类的存在
 */
const Component = require('./Component')
class Decorator extends Component {
  constructor () {
    super()
    this._component = null
  }
  setComponent (component) {
    this._component = component
  }
  operation () {
    if (this._component) {
      this._component.operation()
    }
  }
}
module.exports = Decorator
