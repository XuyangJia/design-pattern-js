/**
 * Created by Thor on 2018-11-28 上午 10:41.
 */
class State {
  doAction (context) {}
  get name () {
    return this.constructor.name
  }
}
module.exports = State
