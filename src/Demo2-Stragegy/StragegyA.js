/**
 * Created by Thor on 2018-11-26.
 * 具体策略类，封装了具体的算法或行为
 */
const Stragegy = require('./Stragegy')
class StragegyA extends Stragegy {
  operation () {
    super.operation()
    console.log('具体算法A的实现')
  }
}
module.exports = StragegyA
