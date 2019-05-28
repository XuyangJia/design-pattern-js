/**
 * Created by Thor on 2018-11-16.
 * 创建型模式
 * 在工厂模式中，我们在创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象。
 */

const ShapeFactory = require('./ShapeFactory')

// const readline = require('readline')
// let rl = readline.createInterface({'input': process.stdin, 'output': process.stdout});
// rl.on('close', () => {process.exit(0)});
// rl.question('请输入:', answer => {
//     console.log('输入内容是：' + answer);
//     rl.close();
// });
const factory = new ShapeFactory()
let shape1 = factory.getShape(ShapeFactory.CIRCLE)
shape1.draw()
let shape2 = factory.getShape(ShapeFactory.RECTANGLE)
shape2.draw()
