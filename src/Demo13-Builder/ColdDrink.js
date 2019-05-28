/**
 * Created by Thor on 2018-11-27 下午 12:09.
 */
const Item = require('./Item')

const Bottle = require('./Bottle')
class ColdDrink extends Item {
  getPacking () {
    return new Bottle()
  }
}
module.exports = ColdDrink
