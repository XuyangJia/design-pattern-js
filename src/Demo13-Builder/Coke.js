/**
 * Created by Thor on 2018-11-27 下午 12:16.
 */
const ColdDrink = require('./ColdDrink')
class Coke extends ColdDrink {
  getName () {
    return '可口可乐'
  }
  getPrice () {
    return 0.5
  }
}
module.exports = Coke
