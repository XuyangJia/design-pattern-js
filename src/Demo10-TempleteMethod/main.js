/**
 * Created by Thor on 2018-11-26.
 * 行为型模式
 * 模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。
 */
const Football = require('./Football')

const Baseball = require('./Baseball')

let game = new Football()
game.play()
game = new Baseball()
game.play()
