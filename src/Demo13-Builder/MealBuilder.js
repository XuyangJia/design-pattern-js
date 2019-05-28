/**
 * Created by Thor on 2018-11-27 下午 12:32.
 */
const Meal = require('./Meal')

const Pepsi = require('./Pepsi')

const Coke = require('./Coke')

const VegBurger = require('./VegBurger')

const ChickenBurger = require('./ChickenBurger')
class MealBuilder {
  prepareVegMeal () { // 蔬菜汉堡套餐
    let meal = new Meal()
    meal.addItem(new VegBurger())
    meal.addItem(new Coke())
    return meal
  }
  prepareChickeMeal () { // 鸡肉汉堡套餐
    let meal = new Meal()
    meal.addItem(new ChickenBurger())
    meal.addItem(new Pepsi())
    return meal
  }
}
module.exports = MealBuilder
