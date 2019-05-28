/**
 * Created by Thor on 2018-11-27 下午 12:02.
 */
const Packing = require('./Packing')
class Bottle extends Packing {
  pack () {
    return '使用瓶子包装！'
  }
}
module.exports = Bottle
