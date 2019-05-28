/**
 * Created by Thor on 2018-11-26 下午 06:21.
 */
const Game = require('./Game')
class Football extends Game {
  initialize () {
    console.log('Football Game Initialized! Start playing.')
  }
  startPlay () {
    console.log('Football Game Started. Enjoy the game!')
  }
  endPlay () {
    console.log('Football Game Finished!')
  }
}
module.exports = Football
