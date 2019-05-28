/**
 * Created by Thor on 2018-11-26.
 * 定义了一个具体的对象
 */
const Component = require('./Component')
class ConcreteComponent extends Component {
  operation () {
    console.log('具体操作')
  }
}
module.exports = ConcreteComponent
