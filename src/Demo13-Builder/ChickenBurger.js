/**
 * Created by Thor on 2018-11-27 下午 12:15.
 */
const Burger = require('./Burger')
class ChickenBurger extends Burger {
  getName () {
    return '鸡肉汉堡'
  }
  getPrice () {
    return 5
  }
}
module.exports = ChickenBurger
