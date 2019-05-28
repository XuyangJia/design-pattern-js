/**
 * Created by Thor on 2018-11-26 下午 06:17.
 * 定义算法的骨架，在子类中实现具体的功能
 */
class Game {
  initialize () {} // 初始化游戏
  startPlay () {} // 开始游戏
  endPlay () {} // 结束游戏
  play () {
    this.initialize()
    this.startPlay()
    this.endPlay()
  }
}
module.exports = Game
