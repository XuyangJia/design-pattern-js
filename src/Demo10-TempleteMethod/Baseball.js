/**
 * Created by Thor on 2018-11-26 下午 06:21.
 */
const Game = require('./Game')
class Baseball extends Game {
  initialize () {
    console.log('Baseball Game Initialized! Start playing.')
  }
  startPlay () {
    console.log('Baseball Game Started. Enjoy the game!')
  }
  endPlay () {
    console.log('Baseball Game Finished!')
  }
}
module.exports = Baseball
