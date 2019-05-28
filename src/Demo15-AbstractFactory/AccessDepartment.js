/**
 * Created by Thor on 2018-11-27 下午 07:54.
 */
const IDepartment = require('./IDepartment')
class AccessDepartment extends IDepartment {
  insert (department) {
    console.log('在Access中给Department表增加一条记录')
  }
  getDepartment (id) {
    console.log('在Access中根据ID得到Department表的一条记录')
    return null
  }
}
module.exports = AccessDepartment
