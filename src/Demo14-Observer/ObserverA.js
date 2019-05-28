/**
 * Created by Thor on 2018-11-27 下午 03:22.
 */
const Observer = require('./Observer')
class ObserverA extends Observer {
  constructor (subject) {
    super()
    this.name = 'ObserverA'
    this.subject = subject
    this.subject.attach(this)
  }
  update () {
    console.log(`${this.name}---- ${this.subject.state}`)
  }
  dothings () {
    console.log('I am ObserverA')
  }
}
module.exports = ObserverA
