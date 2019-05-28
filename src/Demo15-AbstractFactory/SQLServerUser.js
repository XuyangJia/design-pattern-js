/**
 * Created by Thor on 2018-11-27 下午 07:40.
 */
const IUser = require('./IUser')
class SQLServerUser extends IUser {
  insert (user) {
    console.log('在SQL Server中给User表增加一条记录')
  }
  getUser (id) {
    console.log('在SQL Server中根据ID得到User表的一条记录')
    return null
  }
}
module.exports = SQLServerUser
