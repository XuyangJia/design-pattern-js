/**
 * Created by Thor on 2018-11-27 下午 12:19.
 */
const ColdDrink = require('./ColdDrink')
class Pepsi extends ColdDrink {
  getName () {
    return '百事可乐'
  }
  getPrice () {
    return 0.8
  }
}
module.exports = Pepsi
