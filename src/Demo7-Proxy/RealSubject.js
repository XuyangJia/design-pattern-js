/**
 * Created by Thor on 2018-11-26.
 * 真实的对象类，定义了代理对象代表的真实实体
 */
const Subject = require('./Subject')
class RealSubject extends Subject {
  request () {
    super.request()
    console.log('真实的请求')
  }
}
module.exports = RealSubject
