/**
 * Created by Thor on 2018-11-27 下午 03:22.
 */
const Observer = require('./Observer')
class ObserverB extends Observer {
  constructor (subject) {
    super()
    this.name = 'ObserverB'
    this.subject = subject
    this.subject.attach(this)
  }
  update () {
    console.log(`${this.name}---- ${this.subject.state}`)
  }
  dothings () {
    console.log('I am ObserverB')
  }
}
module.exports = ObserverB
