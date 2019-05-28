/**
 * Created by Thor on 2018-11-27 下午 12:11.
 */
const Burger = require('./Burger')
class VegBurger extends Burger {
  getName () {
    return '蔬菜汉堡'
  }
  getPrice () {
    return 2
  }
}
module.exports = VegBurger
