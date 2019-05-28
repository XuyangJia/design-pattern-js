/**
 * Created by Thor on 2018-11-27 下午 02:53.
 */
class Subject {
  constructor () {
    this._state = 0
    this._observers = []
  }
  attach (observer) {
    this._observers.push(observer)
  }
  detach (observer) {
    let index = this._observers.indexOf(observer)
    index !== -1 && this._observers.splice(index, 1)
  }
  notifyAllObservers () {
    for (let i = 0, len = this._observers.length; i < len; i++) {
      let observer = this._observers[i]
      observer.update()
    }
  }
  get state () {
    return this._state
  }
  set state (value) {
    this._state = value
    this.notifyAllObservers()
  }
}
module.exports = Subject
