class Invoker {
  setOrder (command) {
    this.command = command
  }
  excuteOrder () {
    this.command.excute()
  }
}
module.exports = Invoker
