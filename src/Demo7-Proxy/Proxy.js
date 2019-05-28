/**
 * Created by Thor on 2018-11-26.
 * 代理类，保存一个引用使得代理可以访问实体，
 * 并实现了Subject的接口，这样代理就可以用来代替实体
 */
const Subject = require('./Subject')

const RealSubject = require('./RealSubject')
class Proxy extends Subject {
  constructor () {
    super()
    this._subject = null
  }
  request () {
    super.request()
    if (this._subject === null) {
      this._subject = new RealSubject()
    }
    this._subject.request()
  }
}
module.exports = Proxy
