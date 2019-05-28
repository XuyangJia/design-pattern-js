/**
 * Created by Thor on 2018-11-27 上午 10:43.
 * 创建型模式
 * 建造者模式（Builder Pattern）使用多个简单的对象一步一步构建成一个复杂的对象。
 */
const MealBuilder = require('./MealBuilder')
const mealBuilder = new MealBuilder()
const vegMeal = mealBuilder.prepareVegMeal()
const chickeMeal = mealBuilder.prepareChickeMeal()
vegMeal.showItems()
console.log(`蔬菜汉堡套餐的价格：${vegMeal.getCost()}`)
console.log(`----------------------------------------------\n`)
chickeMeal.showItems()
console.log(`鸡肉汉堡套餐的价格：${chickeMeal.getCost()}`)
