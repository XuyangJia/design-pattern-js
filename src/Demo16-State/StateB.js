/**
 * Created by Thor on 2018-11-28 上午 10:42.
 */
const State = require('./State')
class StateB extends State {
  doAction (context) {
    context.state = this
  }
}
module.exports = StateB
