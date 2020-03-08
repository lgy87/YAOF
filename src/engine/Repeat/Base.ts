import DateTime from "~/engine/DateTime"

export default class Repeat {
  constructor(protected readonly base: DateTime = DateTime.now()) {}

  value() {
    return this.base.value()
  }
  toString() {
    return this.base.toString()
  }
}
