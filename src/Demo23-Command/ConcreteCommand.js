const Command = require('./Command')

class ConcreteCommand extends Command {
  excute () {
    this.receiver.action()
  }
}
module.exports = ConcreteCommand
