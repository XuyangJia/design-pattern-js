/**
 * Created by Thor on 2018-11-28 上午 10:24.
 * 行为型模式。
 * 在状态模式（State Pattern）中，类的行为是基于它的状态改变的。
 * 在状态模式中，我们创建表示各种状态的对象和一个行为随着状态对象改变而改变的 context 对象。
 */
const Context = require('./Context')

const StateA = require('./StateA')

const StateB = require('./StateB')

const context = new Context()

const stateA = new StateA()

const stateB = new StateB()

stateA.doAction(context)
stateB.doAction(context)
