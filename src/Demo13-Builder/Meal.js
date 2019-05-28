/**
 * Created by Thor on 2018-11-27 下午 12:20.
 */
class Meal {
  constructor () {
    this._items = []
  }
  addItem (item) {
    this._items.push(item)
  }
  getCost () {
    let cost = 0
    for (let i = 0, len = this._items.length; i < len; ++i) {
      const item = this._items[i]
      cost += item.getPrice()
    }
    return cost
  }
  showItems () {
    for (let i = 0, len = this._items.length; i < len; ++i) {
      const item = this._items[i]
      console.log(`商品：${item.getName()}\n包装：${item.getPacking().pack()}\n价格：${item.getPrice()}\n`)
    }
  }
}
module.exports = Meal
