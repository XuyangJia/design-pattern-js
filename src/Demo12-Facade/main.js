/**
 * Created by Thor on 2018-11-26 下午 06:45.
 * 结构型模式
 * 外观模式（Facade Pattern）隐藏系统的复杂性，并向客户端提供了一个客户端可以访问系统的接口。
 */
const ShapeMaker = require('./ShapeMaker')

let shapeMaker = new ShapeMaker()
shapeMaker.drawCircle()
shapeMaker.drawRectangle()
