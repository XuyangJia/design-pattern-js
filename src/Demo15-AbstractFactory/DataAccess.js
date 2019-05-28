/**
 * Created by Thor on 2018-11-27 下午 07:36.
 */
const fs = require('fs')
class DataAccess {
  constructor () {
    let config = JSON.parse(fs.readFileSync('./app.json', 'utf8'))
    this._db = config['DB']
  }
  createUser () {
    const DBUser = require(`./${this._db}User`)
    return new DBUser()
  }
  createDepartment () {
    const DBDepartment = require(`./${this._db}Department`)
    return new DBDepartment()
  }
}
module.exports = DataAccess
