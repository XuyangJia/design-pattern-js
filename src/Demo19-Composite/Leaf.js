/**
 * Created by Thor on 2018-11-28 下午 06:18.
 */
const Component = require('./Component')
class Leaf extends Component {
  add (component) {
    console.log('增加叶子节点')
  }
  remove (component) {
    console.log('增加叶子节点')
  }
}
module.exports = Leaf
