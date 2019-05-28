/**
 * Created by Thor on 2018-11-27 上午 11:57.
 */
const Item = require('./Item')

const Wrapper = require('./Wrapper')
class Burger extends Item {
  getPacking () {
    return new Wrapper()
  }
}
module.exports = Burger
