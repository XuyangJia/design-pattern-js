/**
 * Created by Thor on 2018-11-27 下午 02:28.
 * 行为型模式。
 * 当对象间存在一对多关系时，则使用观察者模式（Observer Pattern）。比如，当一个对象被修改时，则会自动通知它的依赖对象。
 */
const Subject = require('./Subject')
const ObserverA = require('./ObserverA')
const ObserverB = require('./ObserverB')
const subject = new Subject()
const observerA = new ObserverA(subject)
const observerB = new ObserverB(subject)
observerA.dothings()
observerB.dothings()
subject.state = 1
subject.state = 2
