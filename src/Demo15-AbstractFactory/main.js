/**
 * Created by Thor on 2018-11-27 下午 07:33.
 * 创建型模式。
 * 抽象工厂模式（Abstract Factory Pattern）是围绕一个超级工厂创建其他工厂。该超级工厂又称为其他工厂的工厂。
 */
const DataAccess = require('./DataAccess')
const dataAccess = new DataAccess()
const user = dataAccess.createUser()
const department = dataAccess.createDepartment()
user.insert({})
user.getUser(1)
department.insert({})
department.getDepartment(1)
