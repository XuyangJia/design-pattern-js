/**
 * Created by Thor on 2018-11-28 下午 06:14.
 */
class Component {
  constructor (name) {
    this.name = name
  }
  add (component) {}
  remove (component) {}
  display (depth) {
    console.log('-'.repeat(depth * 3) + this.name)
  }
}
module.exports = Component
