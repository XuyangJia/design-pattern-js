/**
 * Created by Thor on 2018-11-26.
 * 行为型模式
 * 在策略模式（Strategy Pattern）中，一个类的行为或其算法可以在运行时更改。
 */
const Context = require('./Context')

const StragegyA = require('./StragegyA')

const StragegyB = require('./StragegyB')

let context = new Context(new StragegyA())
context.contextInterface()
context = new Context(new StragegyB())
context.contextInterface()
