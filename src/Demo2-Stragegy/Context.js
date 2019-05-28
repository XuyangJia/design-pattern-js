/**
 * Created by Thor on 2018-11-26.
 * 上下文类，用一个真实策略来配置，维护对一个策略对象的引用
 */
class Context {
  constructor (stragegy) {
    this._stragegy = stragegy
  }
  contextInterface () { // 上下文接口
    this._stragegy.operation()
  }
}
module.exports = Context
