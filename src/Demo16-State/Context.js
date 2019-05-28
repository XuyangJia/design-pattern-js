/**
 * Created by Thor on 2018-11-28 上午 10:56.
 */
class Context {
  constructor () {
    this._state = null
  }
  get state () {
    return this._state
  }
  set state (value) {
    this._state = value
    console.log(`当前状态：${this._state.name}`)
  }
}
module.exports = Context
