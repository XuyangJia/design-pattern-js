/**
 * Created by Thor on 2018-11-27 上午 11:58.
 */
const Packing = require('./Packing')
class Wrapper extends Packing {
  pack () {
    return '使用纸盒包装！'
  }
}
module.exports = Wrapper
