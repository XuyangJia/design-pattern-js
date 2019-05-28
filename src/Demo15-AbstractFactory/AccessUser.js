/**
 * Created by Thor on 2018-11-27 下午 07:49.
 */
const IUser = require('./IUser')
class AccessUser extends IUser {
  insert (user) {
    console.log('在Access中给User表增加一条记录')
  }
  getUser (id) {
    console.log('在Access中根据ID得到User表的一条记录')
    return null
  }
}
module.exports = AccessUser
